export const meta = {
  name: "dev-team",
  description: "Đội dev tái dùng được: làm 1 hoặc nhiều task nối tiếp, mỗi task đi qua phân tích → code → review → kiểm thử → ship GitHub",
  phases: [
    { name: "analyze", title: "Phân tích", detail: "Đọc codebase, lập kế hoạch triển khai chi tiết" },
    { name: "implement", title: "Triển khai", detail: "Coder thực hiện từng bước, kiểm tra nhanh sau mỗi bước" },
    { name: "review", title: "Review", detail: "Reviewer soi code, yêu cầu sửa tối đa N vòng" },
    { name: "verify", title: "Kiểm thử", detail: "QA chạy build/test tổng thể, xác nhận hoàn tất" },
    { name: "ship", title: "Ship", detail: "Tạo issue, push nhánh, mở PR trên GitHub (tùy chọn)" }
  ]
};

const inputs = args ?? {};

const defaults = {
  repo: inputs.repo || "",
  branch: inputs.branch || "",
  maxRepair: inputs.max_repair_attempts ?? 2,
  githubRepo: inputs.github_repo || "",
  createIssue: inputs.create_issue === true,
  createPr: inputs.create_pr === true,
  issueNumber: inputs.issue_number || 0,
  baseBranch: inputs.base_branch || ""
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

const rawTasks = Array.isArray(inputs.tasks) ? inputs.tasks : null;
const taskList = (rawTasks && rawTasks.length > 0 ? rawTasks : [inputs]).map(function (it) {
  return normTask(it, defaults);
});

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

const results = [];
for (let i = 0; i < taskList.length; i++) {
  const t = taskList[i];
  log("=== Task " + (i + 1) + "/" + taskList.length + ": " + (t.task || "(thiếu mô tả)") + " ===");
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

return {
  message: "Đội dev đã xử lý " + results.length + " task",
  results: results
};