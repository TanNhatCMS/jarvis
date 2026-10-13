export const meta = {
  name: "card-intel",
  description: "Đội agent tìm kiếm và xử lý thông tin từ card visit: trích xuất ảnh → tìm kiếm bổ sung → chuẩn hóa VN → kiểm chứng → báo cáo hồ sơ lead",
  phases: [
    { name: "extract", title: "Trích xuất", detail: "Đọc ảnh card visit, trích xuất 7 trường liên hệ kèm độ tin cậy (skill card-ocr)" },
    { name: "research", title: "Tìm kiếm", detail: "Tìm thông tin công khai bổ sung về người và công ty (skill lead-research)" },
    { name: "normalize", title: "Chuẩn hóa", detail: "Chuẩn hóa SĐT, tên, địa chỉ theo quy ước Việt Nam (skill vn-contact-normalize)" },
    { name: "verify", title: "Kiểm chứng", detail: "Đối chiếu chéo trích xuất vs tìm kiếm, đánh dấu mâu thuẫn, chấm điểm tin cậy" },
    { name: "report", title: "Báo cáo", detail: "Xuất hồ sơ lead JSON + báo cáo markdown vào thư mục output" }
  ]
};

const inputs = args ?? {};

const card = String(inputs.card || "").trim();
const depth = ["quick", "standard", "deep"].indexOf(inputs.depth) >= 0 ? inputs.depth : "standard";
const lang = inputs.lang || "vi";
const maxRepair = inputs.max_repair_attempts ?? 2;
const outputDir = inputs.output_dir || "workspace/card-intel/output";

if (!card) {
  throw new Error("Thiếu input bắt buộc: card (đường dẫn ảnh card visit, ví dụ workspace/cards/abc.jpg, hoặc chuỗi JSON đã OCR).");
}

const JSON_TAIL = "\n\nQUAN TRỌNG: phản hồi cuối cùng của bạn phải là đúng một JSON object khớp schema đã cho, không thêm bất kỳ chữ giải thích nào ngoài JSON.";
const VI = "Trả lời và báo cáo bằng tiếng Việt.";

const fieldSchema = {
  type: "object",
  required: ["value", "confidence"],
  properties: {
    value: { type: ["string", "null"] },
    confidence: { type: "number" }
  }
};

const extractSchema = {
  type: "object",
  required: ["fullName", "jobTitle", "companyName", "email", "phone", "address", "website", "detectedLanguage"],
  properties: {
    fullName: fieldSchema,
    jobTitle: fieldSchema,
    companyName: fieldSchema,
    email: fieldSchema,
    phone: fieldSchema,
    address: fieldSchema,
    website: fieldSchema,
    detectedLanguage: { type: "string" },
    notes: { type: "string" }
  }
};

const researchSchema = {
  type: "object",
  required: ["company", "person", "queries_used"],
  properties: {
    company: { type: "object" },
    person: { type: "object" },
    queries_used: { type: "array", items: { type: "string" } },
    notes: { type: "string" }
  }
};

const normalizeSchema = {
  type: "object",
  required: ["fullName", "jobTitle", "companyName", "email", "phone", "address", "website", "flags", "needs_review"],
  properties: {
    fullName: { type: ["string", "null"] },
    jobTitle: { type: ["string", "null"] },
    companyName: { type: ["string", "null"] },
    email: { type: ["string", "null"] },
    phone: { type: ["string", "null"] },
    address: { type: ["string", "null"] },
    website: { type: ["string", "null"] },
    flags: { type: "array", items: { type: "string" } },
    needs_review: { type: "array", items: { type: "string" } }
  }
};

const verifySchema = {
  type: "object",
  required: ["passed", "overall_confidence", "conflicts", "must_fix", "summary"],
  properties: {
    passed: { type: "boolean" },
    overall_confidence: { type: "number" },
    conflicts: {
      type: "array",
      items: {
        type: "object",
        required: ["field", "extracted", "researched", "resolution"],
        properties: {
          field: { type: "string" },
          extracted: { type: "string" },
          researched: { type: "string" },
          resolution: { type: "string" }
        }
      }
    },
    must_fix: { type: "array", items: { type: "string" } },
    summary: { type: "string" }
  }
};

const reportSchema = {
  type: "object",
  required: ["profile_path", "report_path", "summary"],
  properties: {
    profile_path: { type: "string" },
    report_path: { type: "string" },
    summary: { type: "string" }
  }
};

// ---------- Phase 1: extract ----------
phase("extract");
log("Trích xuất thông tin từ card: " + card);

const extract = agent(
  "Bạn là chuyên gia trích xuất thông tin từ danh thiếp.\n" +
  "Đọc kỹ skill tại workspace/skills/card-ocr/SKILL.md và làm đúng theo Workflow + Output Contract trong đó.\n\n" +
  "Input card: " + card + "\n" +
  "- Nếu là đường dẫn ảnh: mở ảnh bằng tool đọc file và trích xuất trực tiếp.\n" +
  "- Nếu là chuỗi JSON đã OCR: parse và validate từng trường theo schema của skill; gán confidence 1.0 nếu dữ liệu sạch, thấp hơn nếu thiếu hoặc khó đọc.\n" +
  "- Ngôn ngữ ưu tiên: " + lang + ". " + VI
  + JSON_TAIL,
  { key: "extract-card", label: "Trích xuất card visit", phase: "extract", timeoutMs: 900000, schema: extractSchema }
);
log("Trích xuất xong: " + (extract.companyName && extract.companyName.value ? extract.companyName.value : "(không rõ công ty)"));

const extractJson = JSON.stringify(extract);

// ---------- Phase 2: research ----------
let research = null;
if (depth === "quick") {
  log("Depth=quick: bỏ qua phase research.");
} else {
  phase("research");
  const researchBase =
    "Bạn là chuyên gia tìm kiếm thông tin lead.\n" +
    "Đọc kỹ skill tại workspace/skills/lead-research/SKILL.md và làm đúng theo Workflow + Output Contract trong đó.\n\n" +
    "Dữ liệu card đã trích xuất:\n" + extractJson + "\n\n";

  if (depth === "deep") {
    log("Depth=deep: tìm kiếm công ty và cá nhân riêng biệt.");
    const companyResearch = agent(
      researchBase +
      "Nhiệm vụ của bạn: CHỈ tìm hiểu về CÔNG TY (website chính thức, lĩnh vực, quy mô, tin tức). " +
      "Tối đa ~8 lượt tìm kiếm. " + VI
      + JSON_TAIL,
      { key: "research-company", label: "Tìm kiếm thông tin công ty", phase: "research", timeoutMs: 1200000, schema: researchSchema }
    );
    const personResearch = agent(
      researchBase +
      "Thông tin công ty đã tìm được:\n" + JSON.stringify(companyResearch.company || {}) + "\n\n" +
      "Nhiệm vụ của bạn: CHỈ tìm hiểu về CON NGƯỜI (xác thực chức danh, hồ sơ công khai). " +
      "Nếu trùng tên không phân biệt được thì ghi ambiguous, tuyệt đối không đoán. " +
      "Tối đa ~6 lượt tìm kiếm. " + VI
      + JSON_TAIL,
      { key: "research-person", label: "Tìm kiếm thông tin cá nhân", phase: "research", timeoutMs: 1200000, schema: researchSchema }
    );
    research = {
      company: companyResearch.company || {},
      person: personResearch.person || {},
      queries_used: (companyResearch.queries_used || []).concat(personResearch.queries_used || []),
      notes: [companyResearch.notes, personResearch.notes].filter(Boolean).join(" | ")
    };
  } else {
    log("Depth=standard: tìm kiếm tổng hợp một lượt.");
    research = agent(
      researchBase +
      "Nhiệm vụ: tìm thông tin bổ sung về CẢ công ty lẫn con người trong một lượt. " +
      "Tối đa ~8 lượt tìm kiếm. " + VI
      + JSON_TAIL,
      { key: "research-standard", label: "Tìm kiếm thông tin bổ sung", phase: "research", timeoutMs: 1200000, schema: researchSchema }
    );
  }
  log("Tìm kiếm xong: " + (research.queries_used || []).length + " query đã dùng.");
}

// ---------- Phase 3: normalize ----------
phase("normalize");
log("Chuẩn hóa thông tin liên hệ theo quy ước Việt Nam.");

function normalizePrompt(extraFeedback) {
  return (
    "Bạn là chuyên gia chuẩn hóa dữ liệu liên hệ Việt Nam.\n" +
    "Đọc kỹ skill tại workspace/skills/vn-contact-normalize/SKILL.md và làm đúng theo Workflow + Output Contract trong đó.\n\n" +
    "Dữ liệu trích xuất từ card:\n" + extractJson + "\n\n" +
    (research ? "Thông tin bổ sung từ tìm kiếm (chỉ dùng để đối chiếu, không ghi đè bừa):\n" + JSON.stringify(research) + "\n\n" : "") +
    (extraFeedback ? "Feedback từ vòng kiểm chứng trước (bắt buộc xử lý):\n" + extraFeedback + "\n\n" : "") +
    "Trả về đúng schema đã cho. " + VI
    + JSON_TAIL
  );
}

let normalized = agent(
  normalizePrompt(""),
  { key: "normalize", label: "Chuẩn hóa liên hệ", phase: "normalize", timeoutMs: 600000, schema: normalizeSchema }
);
log("Chuẩn hóa xong, cần xem lại: " + (normalized.needs_review || []).length + " trường.");

// ---------- Phase 4: verify (vòng sửa giới hạn) ----------
phase("verify");
log("Kiểm chứng chéo trích xuất vs tìm kiếm.");

function verifyPrompt() {
  return (
    "Bạn là QA khó tính chuyên kiểm chứng hồ sơ lead.\n\n" +
    "Dữ liệu gốc trích xuất:\n" + extractJson + "\n\n" +
    (research ? "Kết quả tìm kiếm:\n" + JSON.stringify(research) + "\n\n" : "") +
    "Dữ liệu sau chuẩn hóa:\n" + JSON.stringify(normalized) + "\n\n" +
    "Nhiệm vụ:\n" +
    "1. Đối chiếu từng trường: bản chuẩn hóa có giữ đúng ý nghĩa bản gốc không?\n" +
    "2. Đối chiếu với kết quả tìm kiếm: có mâu thuẫn nào (tên công ty, chức danh, website) không? Ghi vào conflicts kèm cách giải quyết.\n" +
    "3. Chấm overall_confidence (0–1) cho toàn bộ hồ sơ.\n" +
    "4. Nếu có lỗi bắt buộc sửa, liệt kê vào must_fix và đặt passed=false; nếu ổn, passed=true và must_fix rỗng.\n" +
    "Trả về đúng schema đã cho. " + VI
    + JSON_TAIL
  );
}

let verify = null;
let vAttempt = 0;
while (true) {
  verify = agent(
    verifyPrompt(),
    { key: "verify-" + vAttempt, label: "Kiểm chứng hồ sơ (vòng " + (vAttempt + 1) + ")", phase: "verify", timeoutMs: 600000, schema: verifySchema }
  );
  const fixes = verify.must_fix || [];
  if (verify.passed || fixes.length === 0 || vAttempt >= maxRepair) break;
  vAttempt++;
  log("Kiểm chứng vòng " + vAttempt + " chưa đạt — chuẩn hóa lại theo feedback (" + fixes.length + " điểm).");
  normalized = agent(
    normalizePrompt("Các điểm bắt buộc sửa:\n- " + fixes.join("\n- ")),
    { key: "normalize-fix-" + vAttempt, label: "Chuẩn hóa lại theo feedback QA", phase: "verify", timeoutMs: 600000, schema: normalizeSchema }
  );
}
log("Kiểm chứng: " + (verify.passed ? "ĐẠT" : "CẦN XEM LẠI") + " (confidence " + verify.overall_confidence + ").");

// ---------- Phase 5: report ----------
phase("report");
log("Xuất báo cáo vào " + outputDir);

const report = agent(
  "Bạn là người tổng hợp báo cáo hồ sơ lead.\n\n" +
  "Dữ liệu cuối cùng:\n" +
  "- Trích xuất: " + extractJson + "\n" +
  (research ? "- Tìm kiếm: " + JSON.stringify(research) + "\n" : "") +
  "- Chuẩn hóa: " + JSON.stringify(normalized) + "\n" +
  "- Kiểm chứng: " + JSON.stringify(verify) + "\n\n" +
  "Nhiệm vụ: dùng tool ghi file để tạo 2 file trong một thư mục con mới đặt theo thời gian hiện tại " +
  "(dùng lệnh date để lấy timestamp, ví dụ " + outputDir + "/2026-10-13-143000/) — đường dẫn ghi dạng workspace/...):\n" +
  "1. `lead-profile.json` — hồ sơ lead đầy đủ: contact (7 trường đã chuẩn hóa), enrichment (kết quả tìm kiếm kèm nguồn), confidence tổng thể, needs_review, conflicts đã giải quyết.\n" +
  "2. `bao-cao.md` — báo cáo tiếng Việt cho người đọc: tóm tắt 3–5 dòng, bảng thông tin liên hệ, thông tin bổ sung tìm được (kèm nguồn), các điểm cần xem lại.\n" +
  "Trả về đúng schema đã cho với đường dẫn 2 file đã ghi. " + VI
  + JSON_TAIL,
  { key: "report", label: "Xuất báo cáo hồ sơ lead", phase: "report", timeoutMs: 600000, schema: reportSchema }
);

return {
  message: "card-intel hoàn tất cho card: " + card,
  status: verify.passed ? "HOÀN TẤT" : "CẦN XEM LẠI",
  card: card,
  depth: depth,
  profile_path: report.profile_path,
  report_path: report.report_path,
  overall_confidence: verify.overall_confidence,
  needs_review: normalized.needs_review || [],
  verify_summary: verify.summary
};
