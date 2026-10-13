export const meta = {
  name: "jarvis",
  description: "Pipeline full-auto: spec (discover → constitution → specify → clarify-auto → plan → tasks → audit) rồi dev-team (analyze → code → review → verify → ship). Không dừng hỏi con người.",
  phases: [
    { name: "discover", title: "Khám phá", detail: "Đề xuất tính năng từ repo, tự chọn ứng viên #1 (tùy chọn)" },
    { name: "constitution", title: "Hiến pháp", detail: "Dùng lại hoặc khởi tạo nguyên tắc dự án" },
    { name: "specify", title: "Đặc tả", detail: "Viết spec.md: what/why, FR, acceptance criteria" },
    { name: "clarify", title: "Tự làm rõ", detail: "Agent tự quyết điểm mơ hồ, ghi giả định vào spec — không hỏi người" },
    { name: "plan", title: "Kế hoạch", detail: "plan.md + research/data-model/contracts khi cần" },
    { name: "tasks", title: "Chia task", detail: "tasks.md dạng T001... kèm [P]" },
    { name: "audit", title: "Kiểm toán spec", detail: "Đối chiếu spec↔plan↔tasks, tự sửa đến khi đạt" },
    { name: "implement", title: "Triển khai", detail: "Mỗi task: planner → coder từng step → review → QA verify" },
    { name: "ship", title: "Ship", detail: "Commit, push nhánh, mở issue/PR GitHub (tùy chọn)" }
  ]
};

const inputs = args ?? {};

// ---- Inputs gộp từ spec-team + dev-team ----
let feature = inputs.feature || "";
const specDirInput = inputs.spec_dir || "";
const discover = inputs.discover === true;
const discoverCount = inputs.discover_count ?? 5;
const repo = inputs.repo || "";
const branch = inputs.branch || "";
const githubRepo = inputs.github_repo || "";
const baseBranch = inputs.base_branch || "";
const skipConstitution = inputs.skip_constitution === true;
const maxRepair = inputs.max_repair_attempts ?? 2;
const clarifyAnswers = Array.isArray(inputs.clarify_answers) ? inputs.clarify_answers : [];
const directTask = inputs.task || "";
const directTasks = (Array.isArray(inputs.tasks) && inputs.tasks.length > 0) ? inputs.tasks : null;
const createIssue = inputs.create_issue === true;
const createPr = inputs.create_pr === true;
const issueNumber = inputs.issue_number || 0;

const JSON_TAIL = "\n\nQUAN TRỌNG: phản hồi cuối cùng của bạn phải là đúng một JSON object khớp schema đã cho, không thêm bất kỳ chữ giải thích nào ngoài JSON.";

const specMode = Boolean(feature || specDirInput || discover);
const devOnlyMode = !specMode && Boolean(directTask || directTasks);
if (!specMode && !devOnlyMode) {
  throw new Error("Thiếu arg: cần `feature`/`spec_dir`/`discover` (chạy full pipeline) hoặc `task`/`tasks` (chỉ chạy dev-team).");
}

function specContext() {
  const repoLine = repo
    ? "Repo/thư mục làm việc: " + repo + ". Mọi artifact ghi vào <repo>/specs/<NNN>-<slug>/."
    : "Chưa chỉ định repo: làm việc trong thư mục được giao, tạo thư mục specs/ tại đó.";
  return (
    "Bối cảnh chung:\n" +
    "- " + repoLine + "\n" +
    "- Feature: " + (feature || specDirInput || "(chế độ discover: tự đề xuất tính năng)") + "\n" +
    "- Mọi đường dẫn file trong workspace phải ghi dạng workspace/... (ví dụ workspace/projects/my-repo/specs/001-x/spec.md), vì tool file của agent resolve từ thư mục home.\n" +
    "- Quy ước Spec Kit: số spec NNN là 3 chữ số, nối tiếp số lớn nhất đã có trong specs/ (001, 002...). Slug ngắn gọn dạng kebab-case.\n" +
    "- spec.md chỉ nói WHAT/WHY (user stories, yêu cầu chức năng, tiêu chí nghiệm thu, ngoài phạm vi). CẤM bàn tech stack trong spec.md.\n" +
    "- plan.md mới được chọn tech stack, kiến trúc, quyết định kỹ thuật.\n" +
    "- Trả lời và báo cáo bằng tiếng Việt, ngắn gọn, cụ thể."
  );
}

// ================= Schemas (spec-team) =================
const constitutionSchema = {
  type: "object",
  required: ["path", "summary"],
  properties: {
    path: { type: "string" },
    version: { type: "string" },
    summary: { type: "string" },
    created_new: { type: "boolean" }
  }
};

const specSchema = {
  type: "object",
  required: ["spec_dir", "spec_number", "slug", "path", "summary"],
  properties: {
    spec_dir: { type: "string" },
    spec_number: { type: "string" },
    slug: { type: "string" },
    path: { type: "string" },
    summary: { type: "string" },
    acceptance_criteria: { type: "array", items: { type: "string" } }
  }
};

// Clarify ở chế độ full-auto: agent tự quyết, không hỏi người.
const autoClarifySchema = {
  type: "object",
  required: ["assumptions", "spec_updated"],
  properties: {
    assumptions: { type: "array", items: { type: "string" } },
    spec_updated: { type: "boolean" }
  }
};

const specPlanSchema = {
  type: "object",
  required: ["files", "summary"],
  properties: {
    files: { type: "array", items: { type: "string" } },
    summary: { type: "string" },
    tech_stack: { type: "string" }
  }
};

const tasksSchema = {
  type: "object",
  required: ["path", "count", "tasks"],
  properties: {
    path: { type: "string" },
    count: { type: "number" },
    tasks: {
      type: "array",
      items: {
        type: "object",
        required: ["id", "title", "detail"],
        properties: {
          id: { type: "string" },
          title: { type: "string" },
          detail: { type: "string" },
          files: { type: "array", items: { type: "string" } },
          parallelizable: { type: "boolean" }
        }
      }
    }
  }
};

const analyzeSchema = {
  type: "object",
  required: ["passed", "issues", "summary"],
  properties: {
    passed: { type: "boolean" },
    issues: { type: "array", items: { type: "string" } },
    suggestions: { type: "array", items: { type: "string" } },
    summary: { type: "string" }
  }
};

const discoverSchema = {
  type: "object",
  required: ["candidates", "summary"],
  properties: {
    candidates: {
      type: "array",
      items: {
        type: "object",
        required: ["id", "title", "problem", "proposal", "priority", "effort"],
        properties: {
          id: { type: "string" },
          title: { type: "string" },
          problem: { type: "string" },
          proposal: { type: "string" },
          priority: { type: "string" },
          effort: { type: "string" },
          risks: { type: "array", items: { type: "string" } }
        }
      }
    },
    sources_examined: { type: "array", items: { type: "string" } },
    summary: { type: "string" }
  }
};

// ================= Phase SPEC (full-auto, không cổng người) =================
let spec = null;
let specTasks = null;
let analyzeResult = null;
let autoAssumptions = [];
let constitutionPath = null;
let chosenCandidate = null;

if (specMode) {
  if (discover && !feature && !specDirInput) {
    phase("discover");
    log("Khám phá repo để đề xuất tính năng (full-auto: tự chọn ứng viên #1).");
    const discovery = agent(
      "Bạn là product strategist.\n" + specContext() + "\n\n" +
      "Nhiệm vụ: phân tích repo để đề xuất tối đa " + discoverCount + " tính năng MỚI đáng làm nhất. Đọc theo thứ tự:\n" +
      "1. README, docs tầm nhìn/roadmap, CHANGELOG (hiểu sản phẩm đang đi đâu).\n" +
      "2. Thư mục specs/ hiện có (tránh đề xuất trùng).\n" +
      "3. GitHub issues đang mở" + (githubRepo ? " (dùng GitHub__list_issues với repo " + githubRepo + ")" : " (bỏ qua nếu không có github_repo)") + ".\n" +
      "4. TODO/FIXME/HACK trong code và commit gần đây.\n\n" +
      "Mỗi đề xuất gồm: tiêu đề, vấn đề/cơ hội (vì sao đáng làm, ai hưởng lợi), phạm vi đề xuất (2-3 câu, chỉ what/why), " +
      "priority P0/P1/P2, effort S/M/L, rủi ro/điểm chưa rõ. Xếp hạng theo giá trị/effort (tốt nhất đứng đầu). " +
      "Không đề xuất thứ đã có trong specs/ hoặc issues. Trả về đúng schema." + JSON_TAIL,
      { key: "s-discover", label: "Đề xuất tính năng từ repo", phase: "discover", timeoutMs: 1200000, schema: discoverSchema }
    );
    let discoveryData = discovery;
    if (typeof discoveryData === "string") {
      const cleaned = discoveryData.replace(/^\s*```(?:json)?\s*/, "").replace(/\s*```\s*$/, "");
      try {
        discoveryData = JSON.parse(cleaned);
      } catch (e) {
        discoveryData = null;
      }
    }
    if (!discoveryData || typeof discoveryData !== "object") discoveryData = {};
    const foundCandidates = discoveryData.candidates || [];
    if (foundCandidates.length === 0) {
      throw new Error("Discover không tìm được tính năng nào để làm.");
    }
    chosenCandidate = foundCandidates[0];
    feature = chosenCandidate.title + " — " + chosenCandidate.proposal + " (Vấn đề: " + chosenCandidate.problem + ")";
    log("Full-auto: tự chọn ứng viên #1: " + chosenCandidate.title + " [" + chosenCandidate.priority + "/" + chosenCandidate.effort + "]");
  }

  phase("constitution");
  if (skipConstitution) {
    log("Bỏ qua constitution theo yêu cầu.");
  } else {
    const constitution = agent(
      "Bạn là thủ thư kỹ thuật.\n" + specContext() + "\n\n" +
      "Nhiệm vụ: tìm constitution (nguyên tắc dự án) hiện có — kiểm tra .specify/memory/constitution.md, constitution.md, docs/constitution.md và các file tương tự trong repo. " +
      "Nếu đã có: DÙNG LUÔN, không viết lại; trả về path, version (nếu có) và tóm tắt các nguyên tắc chính. " +
      "Nếu chưa có: soạn constitution mới từ convention thực tế của repo (ngôn ngữ, style, testing, nguyên tắc kiến trúc), " +
      "lưu vào .specify/memory/constitution.md rồi trả về. created_new=true chỉ khi bạn vừa tạo mới." + JSON_TAIL,
      { key: "s-constitution", label: "Kiểm tra/khởi tạo constitution", phase: "constitution", timeoutMs: 600000, schema: constitutionSchema }
    );
    constitutionPath = constitution.path;
    log("Constitution: " + constitutionPath);
  }

  phase("specify");
  if (specDirInput) {
    log("Tiếp tục spec có sẵn: " + specDirInput);
    if (clarifyAnswers.length > 0) {
      const answersText = clarifyAnswers.map(function (a, i) {
        return (i + 1) + ". Q: " + (a.question || a.id || "") + "\n   A: " + (a.answer || "");
      }).join("\n");
      spec = agent(
        "Bạn là spec writer.\n" + specContext() + "\n\n" +
        "Nhiệm vụ: đọc spec hiện có tại " + specDirInput + " (spec.md), rồi ÁP DỤNG các câu trả lời sau vào đúng mục của spec:\n" +
        answersText + "\n\n" +
        "Xóa marker [NEEDS CLARIFICATION] đã được trả lời, bổ sung quyết định vào mục phù hợp (ghi rõ là quyết định đã chốt). " +
        "Không bịa thêm yêu cầu mới ngoài câu trả lời. Trả về đúng schema với spec_dir=" + specDirInput + "." + JSON_TAIL,
        { key: "s-apply-answers", label: "Áp dụng câu trả lời vào spec", phase: "specify", timeoutMs: 900000, schema: specSchema }
      );
    } else {
      spec = agent(
        "Bạn là spec writer.\n" + specContext() + "\n\n" +
        "Nhiệm vụ: đọc spec hiện có tại " + specDirInput + " (spec.md) và tóm tắt lại theo đúng schema " +
        "(spec_dir, spec_number, slug, path, summary, acceptance_criteria). Không sửa file ở bước này." + JSON_TAIL,
        { key: "s-read-spec", label: "Đọc spec có sẵn", phase: "specify", timeoutMs: 600000, schema: specSchema }
      );
    }
  } else {
    spec = agent(
      "Bạn là spec writer.\n" + specContext() + "\n\n" +
      "Nhiệm vụ: tạo spec MỚI cho feature. Các bước:\n" +
      "1. Liệt kê thư mục specs/ để xác định số NNN tiếp theo (3 chữ số, nối tiếp số lớn nhất).\n" +
      "2. Tạo thư mục specs/<NNN>-<slug>/ (slug kebab-case ngắn gọn từ feature).\n" +
      "3. Viết spec.md gồm: tổng quan (what/why), user stories (dạng 'Là <ai>, tôi muốn <gì> để <vì sao>'), " +
      "yêu cầu chức năng đánh số (FR-001...), tiêu chí nghiệm thu đo được, ngoài phạm vi (out of scope).\n" +
      "4. TUYỆT ĐỐI không bàn tech stack, tên framework, tên bảng DB trong spec.md — đó là việc của plan.\n" +
      "Trả về đúng schema." + JSON_TAIL,
      { key: "s-specify", label: "Viết spec.md", phase: "specify", timeoutMs: 1200000, schema: specSchema }
    );
  }
  log("Spec: " + spec.spec_dir);

  phase("clarify");
  log("Full-auto clarify: agent tự quyết mọi điểm mơ hồ, không hỏi người.");
  const clarifyResult = agent(
    "Bạn là chuyên gia phân tích yêu cầu quyết đoán.\n" + specContext() + "\n\n" +
    "Nhiệm vụ: đọc spec tại " + spec.path + " và tìm mọi điểm MƠ HỒ mà nếu hiểu sai sẽ làm sai cả plan. " +
    "Với MỖI điểm mơ hồ: TỰ QUYẾT bằng phán đoán tốt nhất dựa trên context repo, convention codebase và thông lệ phổ biến — " +
    "KHÔNG hỏi con người, KHÔNG để lại marker [NEEDS CLARIFICATION]. " +
    "Ghi mọi quyết định vào spec.md dưới mục '## Giả định đã chốt (auto)', mỗi mục gồm: giả định + lý do một dòng. " +
    "Những gì suy ra chắc chắn từ repo/context thì quyết luôn không cần ghi dài dòng. " +
    "Chế độ full-auto: không bao giờ dừng lại chờ người, kể cả khi có nhiều phương án — hãy chọn phương án an toàn/phổ biến nhất và ghi rõ. " +
    "Trả về đúng schema (assumptions = danh sách các giả định bạn đã chốt)." + JSON_TAIL,
    { key: "s-clarify-auto", label: "Tự quyết điểm mơ hồ", phase: "clarify", timeoutMs: 900000, schema: autoClarifySchema }
  );
  autoAssumptions = clarifyResult.assumptions || [];
  log("Clarify-auto: đã chốt " + autoAssumptions.length + " giả định.");

  phase("plan");
  const specPlan = agent(
    "Bạn là kiến trúc sư phần mềm.\n" + specContext() + "\n\n" +
    "Đầu vào:\n" +
    "- Spec: " + spec.path + " (tóm tắt: " + spec.summary + ")\n" +
    "- Constitution: " + (constitutionPath ? constitutionPath : "(bỏ qua)") + "\n" +
    "- Giả định đã chốt (auto): " + (autoAssumptions.join(" | ") || "(không có)") + "\n\n" +
    "Nhiệm vụ: viết các tài liệu kế hoạch trong " + spec.spec_dir + ":\n" +
    "1. plan.md — kiến trúc, tech stack được chọn (và vì sao), quyết định kỹ thuật quan trọng, rủi ro.\n" +
    "2. research.md — chỉ khi cần: những điều chưa rõ về kỹ thuật và kết luận sau khi tìm hiểu.\n" +
    "3. data-model.md — chỉ khi feature đụng tới dữ liệu: thực thể, quan hệ, ràng buộc.\n" +
    "4. contracts/ — chỉ khi có API/interface mới: đặc tả contract.\n" +
    "Mọi tài liệu phải bám sát spec, tuân thủ constitution. Trả về đúng schema (files = danh sách file đã viết)." + JSON_TAIL,
    { key: "s-plan", label: "Viết plan.md và tài liệu kỹ thuật", phase: "plan", timeoutMs: 1200000, schema: specPlanSchema }
  );
  log("Plan: " + (specPlan.files || []).join(", "));

  phase("tasks");
  specTasks = agent(
    "Bạn là người chia task.\n" + specContext() + "\n\n" +
    "Đầu vào:\n" +
    "- Spec: " + spec.path + "\n" +
    "- Plan: " + spec.spec_dir + "/plan.md (tóm tắt: " + specPlan.summary + ")\n\n" +
    "Nhiệm vụ: chẻ plan thành tasks.md tại " + spec.spec_dir + "/tasks.md. Mỗi task có ID dạng T001, T002... nối tiếp, " +
    "gồm: tiêu đề, chi tiết đủ để một coder làm độc lập (file chạm tới, hành vi mong đợi, cách kiểm tra xong), " +
    "đánh dấu [P] cho task làm song song được (không phụ thuộc nhau). " +
    "Task phải đủ nhỏ (một coder xong trong một lượt), sắp xếp theo thứ tự phụ thuộc. Trả về đúng schema." + JSON_TAIL,
    { key: "s-tasks", label: "Tạo tasks.md", phase: "tasks", timeoutMs: 900000, schema: tasksSchema }
  );
  log("Tasks: " + specTasks.count + " task trong " + specTasks.path);

  phase("audit");
  let aAttempt = 0;
  while (aAttempt <= maxRepair) {
    aAttempt = aAttempt + 1;
    analyzeResult = agent(
      "Bạn là kiểm toán viên tài liệu khó tính.\n" + specContext() + "\n\n" +
      "Nhiệm vụ: đối chiếu chéo 3 artifact:\n" +
      "- Spec: " + spec.path + "\n" +
      "- Plan: " + spec.spec_dir + "/plan.md\n" +
      "- Tasks: " + specTasks.path + "\n\n" +
      "Kiểm tra: (1) mọi FR trong spec có được plan bao phủ? (2) mọi task có truy vết được về FR nào? " +
      "(3) plan có mâu thuẫn spec không? (4) task nào thiếu tiêu chí xong/không làm được độc lập? " +
      "Chỉ trả về passed=true khi không còn vấn đề nghiêm trọng. issues: danh sách cụ thể (file + dòng/mục + cách sửa). " +
      "suggestions: góp ý không bắt buộc." + JSON_TAIL,
      { key: "s-audit-" + aAttempt, label: "Kiểm toán spec↔plan↔tasks vòng " + aAttempt, phase: "audit", timeoutMs: 900000, schema: analyzeSchema }
    );
    if (analyzeResult.passed || aAttempt > maxRepair) break;
    log("Audit vòng " + aAttempt + " chưa đạt — tự sửa artifacts.");
    agent(
      "Bạn là spec writer.\n" + specContext() + "\n\n" +
      "Kiểm toán viên phát hiện các vấn đề sau trong bộ artifact tại " + spec.spec_dir + ":\n- " +
      (analyzeResult.issues || []).join("\n- ") + "\n\n" +
      "Hãy sửa đúng các file liên quan (spec.md / plan.md / tasks.md / research.md / data-model.md / contracts/), " +
      "giữ nguyên ý định của spec, không tự thêm scope mới." + JSON_TAIL,
      { key: "s-audit-repair-" + aAttempt, label: "Sửa artifacts vòng " + aAttempt, phase: "audit", timeoutMs: 1200000, schema: specSchema }
    );
  }
  log("Audit: " + (analyzeResult.passed ? "đạt" : "chưa đạt sau " + aAttempt + " vòng — vẫn tiếp tục implement"));
}

// ================= Schemas + runOne (dev-team, giữ nguyên logic) =================
const planSchema = {
  type: "object",
  required: ["summary", "steps", "test_strategy"],
  properties: {
    summary: { type: "string" },
    steps: {
      type: "array",
      items: {
        type: "object",
        required: ["id", "title", "detail"],
        properties: {
          id: { type: "string" },
          title: { type: "string" },
          detail: { type: "string" },
          files: { type: "array", items: { type: "string" } }
        }
      }
    },
    test_strategy: { type: "string" },
    risks: { type: "array", items: { type: "string" } }
  }
};

const codeSchema = {
  type: "object",
  required: ["step_id", "summary", "files_changed"],
  properties: {
    step_id: { type: "string" },
    summary: { type: "string" },
    files_changed: { type: "array", items: { type: "string" } },
    notes: { type: "string" }
  }
};

const checkSchema = {
  type: "object",
  required: ["passed", "feedback"],
  properties: {
    passed: { type: "boolean" },
    feedback: { type: "string" },
    commands_run: { type: "array", items: { type: "string" } }
  }
};

const reviewSchema = {
  type: "object",
  required: ["passed", "must_fix", "suggestions", "summary"],
  properties: {
    passed: { type: "boolean" },
    must_fix: { type: "array", items: { type: "string" } },
    suggestions: { type: "array", items: { type: "string" } },
    summary: { type: "string" }
  }
};

const repairSchema = {
  type: "object",
  required: ["summary", "files_changed"],
  properties: {
    summary: { type: "string" },
    files_changed: { type: "array", items: { type: "string" } },
    notes: { type: "string" }
  }
};

const verifySchema = {
  type: "object",
  required: ["passed", "report"],
  properties: {
    passed: { type: "boolean" },
    retryable: { type: "boolean" },
    report: { type: "string" },
    feedback: { type: "string" },
    commands_run: { type: "array", items: { type: "string" } }
  }
};

const shipSchema = {
  type: "object",
  required: ["branch", "summary"],
  properties: {
    branch: { type: "string" },
    issue_number: { type: "number" },
    issue_url: { type: "string" },
    pr_number: { type: "number" },
    pr_url: { type: "string" },
    summary: { type: "string" }
  }
};

function runOne(t, idx) {
  const task = t.task;
  const repo = t.repo;
  const branch = t.branch;
  const maxRepair = t.maxRepair;
  const githubRepo = t.githubRepo;
  const createIssue = t.createIssue;
  const createPr = t.createPr;
  const issueNumber = t.issueNumber;
  const baseBranch = t.baseBranch;
  const doShip = (createIssue || createPr) && githubRepo !== "";
  const P = "t" + idx + "-";

  if (!task || String(task).trim() === "") {
    throw new Error("Task #" + (idx + 1) + " thiếu mô tả (task).");
  }

  const repoLine = repo
    ? "Repo/thư mục làm việc: " + repo + ". Nếu là owner/repo trên GitHub mà chưa clone, hãy clone vào workspace/projects/ trước."
    : "Chưa chỉ định repo: hãy làm việc trong thư mục được giao, hoặc hỏi lại nếu mơ hồ.";
  const branchLine = branch
    ? "Nhánh git yêu cầu: " + branch + " (tạo mới từ main/master nếu chưa tồn tại)."
    : "Dùng nhánh hiện tại; nếu cần nhánh mới, đặt tên rõ ràng theo task.";

  const contextBlock =
    "Bối cảnh chung:\n" +
    "- " + repoLine + "\n" +
    "- " + branchLine + "\n" +
    "- Task: " + task + "\n" +
    "- Mọi đường dẫn file trong workspace phải ghi dạng workspace/... (ví dụ workspace/projects/my-repo/src/index.ts), vì tool file của agent resolve từ thư mục home.\n" +
    "- Tuyệt đối KHÔNG sửa file trong .github/workflows/ qua MCP GitHub tools (gateway chặn ghi). Nếu bắt buộc đổi workflow, dùng git trực tiếp rồi push.\n" +
    "- Trả lời và báo cáo bằng tiếng Việt, ngắn gọn, cụ thể.";

  phase("analyze");
  log("Task " + (idx + 1) + ": phân tích và lập kế hoạch.");

  const plan = agent(
    "Bạn là kiến trúc sư phần mềm trong đội dev.\n" + contextBlock + "\n\n" +
    "Nhiệm vụ: đọc codebase liên quan, phân tích task, rồi trả về kế hoạch triển khai chi tiết (KHÔNG viết code ở bước này). " +
    "Chia nhỏ thành các step mà mỗi step một coder có thể làm độc lập trong một lượt. " +
    "Mỗi step ghi rõ file dự kiến chạm tới. Nêu chiến lược kiểm thử và rủi ro chính."
    + "\n\nQUAN TRỌNG: phản hồi cuối cùng của bạn phải là đúng một JSON object khớp schema đã cho, không thêm bất kỳ chữ giải thích nào ngoài JSON.",
    { key: P + "analyze-plan", label: "T" + (idx + 1) + " phân tích & lập kế hoạch", phase: "analyze", timeoutMs: 1200000, schema: planSchema }
  );

  let steps = plan.steps || [];
  if (steps.length === 0) {
    steps = [{ id: "all", title: String(task), detail: plan.summary, files: [] }];
  }
  log("Task " + (idx + 1) + ": kế hoạch có " + steps.length + " bước.");

  phase("implement");

  // LƯU Ý: không dùng pipeline() ở đây — daemon hiện tại ném "not a callable function"
  // khi pipeline có từ 2 stage trở lên (đã kiểm chứng bằng probe ngày 2026-10-13,
  // kể cả khi các stage là hàm JS thuần không gọi agent).
  // Chạy từng step nối tiếp bằng vòng lặp thường: coder -> kiểm tra nhanh.
  // (Chạy nối tiếp cũng an toàn hơn cho git vì các step cùng sửa một repo.)
  const implemented = [];
  for (let si = 0; si < steps.length; si++) {
    const step = steps[si];
    let stepResult = null;
    try {
      const codeResult = agent(
        "Bạn là coder trong đội dev.\n" + contextBlock + "\n\n" +
        "Kế hoạch tổng thể: " + plan.summary + "\n\n" +
        "Nhiệm vụ của bạn — chỉ làm đúng step này, không lan man:\n" +
        "- ID: " + step.id + "\n" +
        "- Tiêu đề: " + step.title + "\n" +
        "- Chi tiết: " + step.detail + "\n" +
        "- File dự kiến: " + ((step.files || []).join(", ") || "(tự xác định)") + "\n\n" +
        "Đọc code hiện tại rồi triển khai. Giữ thay đổi gọn, đúng scope, tuân thủ convention của repo."
        + "\n\nQUAN TRỌNG: phản hồi cuối cùng của bạn phải là đúng một JSON object khớp schema đã cho, không thêm bất kỳ chữ giải thích nào ngoài JSON.",
        { key: P + "code-" + step.id, label: "T" + (idx + 1) + " code: " + step.title, phase: "implement", timeoutMs: 1800000, schema: codeSchema }
      );
      if (codeResult) {
        const check = agent(
          "Bạn là kỹ sư build trong đội dev.\n" + contextBlock + "\n\n" +
          "Coder vừa xong step \"" + step.title + "\" (ID " + step.id + "): " + codeResult.summary + "\n" +
          "File đã đổi: " + ((codeResult.files_changed || []).join(", ") || "(không rõ)") + "\n\n" +
          "Nhiệm vụ: kiểm tra nhanh bước này — chạy lint/build/test ở mức hợp lý cho phạm vi step. " +
          "Trả về passed=true nếu ổn; nếu lỗi, ghi feedback cụ thể để coder sửa."
          + "\n\nQUAN TRỌNG: phản hồi cuối cùng của bạn phải là đúng một JSON object khớp schema đã cho, không thêm bất kỳ chữ giải thích nào ngoài JSON.",
          { key: P + "check-" + step.id, label: "T" + (idx + 1) + " kiểm tra: " + step.title, phase: "implement", timeoutMs: 1200000, schema: checkSchema }
        );
        if (check) {
          stepResult = {
            step_id: step.id,
            title: step.title,
            summary: codeResult.summary,
            files_changed: codeResult.files_changed || [],
            check_passed: check.passed,
            check_feedback: check.feedback,
            commands_run: check.commands_run || []
          };
        }
      }
    } catch (err) {
      log("Task " + (idx + 1) + ": step " + step.id + " lỗi (bỏ qua): " + String((err && err.message) || err));
    }
    implemented.push(stepResult);
  }

  const doneSteps = implemented.filter(function (r) { return r !== null; });
  const failedSteps = steps.filter(function (s, i) { return implemented[i] === null; });
  log("Task " + (idx + 1) + ": hoàn tất " + doneSteps.length + "/" + steps.length + " bước.");

  const allFiles = [];
  doneSteps.forEach(function (r) {
    (r.files_changed || []).forEach(function (f) {
      if (allFiles.indexOf(f) === -1) allFiles.push(f);
    });
  });

  if (failedSteps.length > 0) {
    log("Task " + (idx + 1) + ": các bước thất bại (bỏ qua): " + failedSteps.map(function (s) { return s.id; }).join(", "));
  }

  phase("review");

  let review = null;
  let attempt = 0;
  let reviewNotes = "";
  while (attempt <= maxRepair) {
    attempt = attempt + 1;
    review = agent(
      "Bạn là reviewer khó tính trong đội dev.\n" + contextBlock + "\n\n" +
      "Task: " + task + "\n" +
      "Kế hoạch: " + plan.summary + "\n" +
      "Các file đã đổi: " + (allFiles.join(", ") || "(không xác định)") + "\n" +
      reviewNotes + "\n\n" +
      "Nhiệm vụ: review toàn bộ thay đổi (đọc diff/code các file liên quan). " +
      "Chỉ trả về passed=true khi code đúng yêu cầu, không bug rõ ràng, tuân thủ convention repo. " +
      "must_fix: danh sách vấn đề BẮT BUỘC sửa, mỗi mục ghi rõ file + vị trí + cách sửa. " +
      "suggestions: góp ý không bắt buộc."
      + "\n\nQUAN TRỌNG: phản hồi cuối cùng của bạn phải là đúng một JSON object khớp schema đã cho, không thêm bất kỳ chữ giải thích nào ngoài JSON.",
      { key: P + "review-" + attempt, label: "T" + (idx + 1) + " review vòng " + attempt, phase: "review", timeoutMs: 1200000, schema: reviewSchema }
    );
    if (review.passed || attempt > maxRepair) break;
    log("Task " + (idx + 1) + ": review vòng " + attempt + " chưa đạt — sửa theo feedback.");
    const repair = agent(
      "Bạn là coder trong đội dev.\n" + contextBlock + "\n\n" +
      "Reviewer yêu cầu sửa các điểm BẮT BUỘC sau:\n- " + (review.must_fix || []).join("\n- ") + "\n\n" +
      "Hãy sửa đúng các điểm trên, giữ nguyên scope task, không refactor lan man."
      + "\n\nQUAN TRỌNG: phản hồi cuối cùng của bạn phải là đúng một JSON object khớp schema đã cho, không thêm bất kỳ chữ giải thích nào ngoài JSON.",
      { key: P + "repair-" + attempt, label: "T" + (idx + 1) + " sửa theo review vòng " + attempt, phase: "review", timeoutMs: 1800000, schema: repairSchema }
    );
    if (repair && repair.files_changed) {
      repair.files_changed.forEach(function (f) {
        if (allFiles.indexOf(f) === -1) allFiles.push(f);
      });
    }
    reviewNotes = "Đây là vòng review " + (attempt + 1) + " sau khi đã sửa theo feedback vòng trước: " + (review.must_fix || []).join("; ");
  }

  phase("verify");
  log("Task " + (idx + 1) + ": kiểm thử tổng thể.");

  let verify = agent(
    "Bạn là QA cuối cùng trong đội dev.\n" + contextBlock + "\n\n" +
    "Task: " + task + "\n" +
    "Các file đã đổi: " + (allFiles.join(", ") || "(không xác định)") + "\n" +
    "Kết quả review: " + review.summary + "\n\n" +
    "Nhiệm vụ: chạy build + test suite liên quan (full suite nếu hợp lý) để xác nhận task hoàn tất. " +
    "Trả về passed, report chi tiết (đã chạy lệnh gì, kết quả ra sao). " +
    "Nếu fail: ghi feedback cụ thể để coder sửa và retryable=true/false."
    + "\n\nQUAN TRỌNG: phản hồi cuối cùng của bạn phải là đúng một JSON object khớp schema đã cho, không thêm bất kỳ chữ giải thích nào ngoài JSON.",
    { key: P + "verify-final", label: "T" + (idx + 1) + " kiểm thử tổng thể", phase: "verify", timeoutMs: 1800000, schema: verifySchema }
  );

  let vAttempt = 1;
  while (!verify.passed && verify.retryable && vAttempt <= maxRepair) {
    log("Task " + (idx + 1) + ": verify chưa đạt (lần " + vAttempt + ") — sửa theo feedback QA.");
    agent(
      "Bạn là coder trong đội dev.\n" + contextBlock + "\n\n" +
      "QA báo lỗi cần sửa:\n" + (verify.feedback || "(không có chi tiết)") + "\n\n" +
      "Hãy sửa đúng lỗi trên, giữ nguyên scope task."
      + "\n\nQUAN TRỌNG: phản hồi cuối cùng của bạn phải là đúng một JSON object khớp schema đã cho, không thêm bất kỳ chữ giải thích nào ngoài JSON.",
      { key: P + "verify-repair-" + vAttempt, label: "T" + (idx + 1) + " sửa theo QA lần " + vAttempt, phase: "verify", timeoutMs: 1800000, schema: repairSchema }
    );
    vAttempt = vAttempt + 1;
    verify = agent(
      "Bạn là QA cuối cùng trong đội dev.\n" + contextBlock + "\n\n" +
      "Task: " + task + "\n" +
      "Đây là lần kiểm thử lại thứ " + vAttempt + " sau khi đã sửa theo feedback: " + (verify.feedback || "") + "\n\n" +
      "Nhiệm vụ: chạy lại build + test liên quan để xác nhận. Trả về đúng schema."
      + "\n\nQUAN TRỌNG: phản hồi cuối cùng của bạn phải là đúng một JSON object khớp schema đã cho, không thêm bất kỳ chữ giải thích nào ngoài JSON.",
      { key: P + "verify-" + vAttempt, label: "T" + (idx + 1) + " kiểm thử lại lần " + vAttempt, phase: "verify", timeoutMs: 1800000, schema: verifySchema }
    );
  }

  phase("ship");

  let ship = null;
  if (doShip) {
    log("Task " + (idx + 1) + ": ship lên GitHub " + githubRepo);
    const branchHint = branch || ("dev-team/t" + (idx + 1) + "-<slug-ngắn-từ-task>");
    const issueStep = issueNumber
      ? "comment tiến độ vào issue #" + issueNumber + " bằng GitHub__add_issue_comment."
      : (createIssue
        ? "tạo issue mới bằng GitHub__create_issue: title = task, body = tóm tắt + kế hoạch + kết quả review/verify."
        : "bỏ qua.");
    const prStep = createPr
      ? "chỉ làm sau khi nhánh đã push thành công. Tạo PR bằng GitHub__create_pull_request: head=<nhánh>, base=<nhánh cơ sở>, " +
        "title ngắn gọn, body gồm danh sách file đổi, kết quả review và verify" +
        ((issueNumber || createIssue) ? ", và dòng \"Closes #<số-issue>\"" : "") + "."
      : "bỏ qua.";
    ship = agent(
      "Bạn là release engineer trong đội dev.\n" + contextBlock + "\n\n" +
      "Task: " + task + "\n" +
      "Repo GitHub: " + githubRepo + "\n" +
      "Nhánh cơ sở: " + (baseBranch || "(tự xác định main/master của remote)") + "\n" +
      "Nhánh làm việc: " + branchHint + "\n" +
      "Issue: " + (issueNumber ? ("dùng issue có sẵn #" + issueNumber) : (createIssue ? "tạo issue mới" : "không cần")) + "\n" +
      "PR: " + (createPr ? "mở PR mới" : "không cần") + "\n\n" +
      "Tình trạng code sau phase verify:\n" +
      "- File đã đổi: " + (allFiles.join(", ") || "(không xác định)") + "\n" +
      "- Kế hoạch: " + plan.summary + "\n" +
      "- Review: passed=" + review.passed + " — " + review.summary + "\n" +
      "- Verify: passed=" + verify.passed + " — " + verify.report + "\n\n" +
      "Xác định thư mục repo local: nếu arg repo là đường dẫn workspace thì dùng nó; " +
      "nếu repo là dạng owner/repo mà chưa clone thì clone vào workspace/projects/<tên-repo>.\n\n" +
      "Nhiệm vụ theo đúng thứ tự:\n" +
      "1. Git: checkout/tạo nhánh làm việc từ nhánh cơ sở (dùng git trực tiếp; đặt user.name/user.email local nếu thiếu). " +
      "Commit gọn các file đã đổi, message rõ ràng" + (issueNumber ? ", kèm \"Closes #" + issueNumber + "\"" : "") + ". " +
      "Nếu không có gì để commit thì ghi rõ trong summary.\n" +
      "2. Push nhánh: thử `git push -u origin <nhánh>` trước. Nếu lỗi xác thực, fallback sang MCP: " +
      "GitHub__create_branch rồi GitHub__push_files với các file đã đổi (gom 1 commit).\n" +
      "3. Issue: " + issueStep + "\n" +
      "4. PR: " + prStep + "\n" +
      "5. Nếu bước nào thất bại và không còn cách khác, dừng lại, ghi rõ trong summary, KHÔNG bịa URL.\n\n" +
      "Trả về đúng schema."
      + "\n\nQUAN TRỌNG: phản hồi cuối cùng của bạn phải là đúng một JSON object khớp schema đã cho, không thêm bất kỳ chữ giải thích nào ngoài JSON.",
      { key: P + "ship-github", label: "T" + (idx + 1) + " ship lên GitHub", phase: "ship", timeoutMs: 1800000, schema: shipSchema }
    );
  } else if (createIssue || createPr) {
    log("Task " + (idx + 1) + ": bỏ qua phase ship (thiếu github_repo).");
  }

  const ok = verify.passed && review.passed;

  return {
    task: task,
    status: ok ? "HOÀN TẤT" : "CẦN XEM LẠI",
    files_changed: allFiles,
    plan_summary: plan.summary,
    steps_done: doneSteps.length + "/" + steps.length,
    steps_failed: failedSteps.map(function (s) { return s.id; }),
    review_passed: review.passed,
    review_summary: review.summary,
    review_suggestions: review.suggestions || [],
    verify_passed: verify.passed,
    verify_report: verify.report,
    ship: ship ? {
      branch: ship.branch,
      issue_number: ship.issue_number || 0,
      issue_url: ship.issue_url || "",
      pr_number: ship.pr_number || 0,
      pr_url: ship.pr_url || "",
      summary: ship.summary
    } : null
  };
}

// ================= Điều phối chính =================
const devDefaults = {
  repo: repo,
  branch: branch,
  maxRepair: maxRepair,
  githubRepo: githubRepo,
  createIssue: createIssue,
  createPr: createPr,
  issueNumber: issueNumber,
  baseBranch: baseBranch
};

function normTask(item, d) {
  if (typeof item === "string") {
    return {
      task: item, repo: d.repo, branch: d.branch, maxRepair: d.maxRepair,
      githubRepo: d.githubRepo, createIssue: d.createIssue, createPr: d.createPr,
      issueNumber: d.issueNumber, baseBranch: d.baseBranch
    };
  }
  const o = item || {};
  return {
    task: o.task || "",
    repo: o.repo || d.repo,
    branch: o.branch || d.branch,
    maxRepair: o.max_repair_attempts ?? d.maxRepair,
    githubRepo: o.github_repo || d.githubRepo,
    createIssue: (o.create_issue ?? d.createIssue) === true,
    createPr: (o.create_pr ?? d.createPr) === true,
    issueNumber: o.issue_number || d.issueNumber,
    baseBranch: o.base_branch || d.baseBranch
  };
}

let taskList;
if (specMode) {
  // Task từ spec: mỗi task dev-team đọc spec + plan trước khi code.
  taskList = (specTasks.tasks || []).map(function (t) {
    return normTask({
      task: t.id + " " + t.title + ": " + t.detail +
        " (Đọc spec tại " + spec.path + " và plan tại " + spec.spec_dir + "/plan.md trước khi code; " +
        "giả định đã chốt: " + (autoAssumptions.join(" | ") || "không có") + "; " +
        "task gốc: " + specTasks.path + ")",
      repo: repo,
      branch: branch,
      github_repo: githubRepo,
      base_branch: baseBranch
    }, devDefaults);
  });
  log("Chuyển sang implement: " + taskList.length + " task từ spec " + spec.spec_dir);
} else {
  const rawTasks = directTasks ? directTasks : [inputs];
  taskList = rawTasks.map(function (it) { return normTask(it, devDefaults); });
  log("Chế độ dev-only: bỏ qua spec, chạy thẳng " + taskList.length + " task.");
}

const results = [];
for (let i = 0; i < taskList.length; i++) {
  const t = taskList[i];
  log("=== Task " + (i + 1) + "/" + taskList.length + ": " + (t.task || "(thiếu mô tả)").slice(0, 120) + " ===");
  try {
    results.push(runOne(t, i));
  } catch (err) {
    results.push({
      task: t.task || "",
      status: "LỖI",
      error: String((err && err.message) || err)
    });
  }
}

if (specMode) {
  return {
    message: "JARVIS full-auto hoàn tất: " + (feature || specDirInput),
    mode: "full",
    spec_dir: spec.spec_dir,
    spec_number: spec.spec_number,
    spec_path: spec.path,
    constitution: constitutionPath,
    chosen_candidate: chosenCandidate ? chosenCandidate.title : null,
    auto_assumptions: autoAssumptions,
    tasks_file: specTasks.path,
    tasks_count: specTasks.count,
    audit_passed: analyzeResult.passed,
    audit_summary: analyzeResult.summary,
    results: results
  };
}

return {
  message: "JARVIS (dev-only) đã xử lý " + results.length + " task",
  mode: "dev-only",
  results: results
};
