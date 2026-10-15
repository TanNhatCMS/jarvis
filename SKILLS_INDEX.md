# SKILLS INDEX

Danh mục 1741 skills trong `skills/`. License từng nguồn: xem [ATTRIBUTION.md](ATTRIBUTION.md).

> Ghi chú: main ghi 87 là thiếu (đã merge PR #5: +158 connectors, PR #6: +1 skill → thực tế 245 trước PR này).

> Lưu ý: `skills/ecc-dev-team/` là skill của ECC (cho Claude Code), **khác** với
> `workflows/dev-team.js` (workflow điều phối của JARVIS). Hai thứ trùng tên nhưng độc lập.

## ECC (55 skills — affaan-m/ECC, MIT)

| Skill | Mô tả |
|---|---|
| `ecc-agent-introspection-debugging` | Structured self-debugging workflow for AI agent failures using capture, diagnosis, contained recovery, and introspection reports. Use when a |
| `ecc-agent-self-evaluation` | Use after completing any non-trivial task. The agent self-rates its output on 5 axes — accuracy, completeness, clarity, actionability, conci |
| `ecc-agent-sort` | Build an evidence-backed ECC install plan for a specific repo by sorting skills, commands, rules, hooks, and extras into DAILY vs LIBRARY bu |
| `ecc-ai-regression-testing` | Regression testing strategies for AI-assisted development. Sandbox-mode API testing without database dependencies, automated bug-check workf |
| `ecc-architecture-decision-records` | Capture architectural decisions as numbered ADR markdown files in docs/adr/ with context, alternatives considered, consequences, and an inde |
| `ecc-browser-qa` | Run automated post-deploy UI verification with a browser automation MCP (claude-in-chrome, Playwright, or Puppeteer): console-error and Core |
| `ecc-ck` | Persistent per-project memory for Claude Code (Context Keeper) driven by deterministic Node.js /ck commands: init, save, resume, info, list, |
| `ecc-click-path-audit` | Trace every user-facing button/touchpoint through its full state change sequence to find bugs where functions individually work but cancel e |
| `ecc-clickhouse-io` | ClickHouse database patterns, query optimization, analytics, and data engineering best practices for high-performance analytical workloads.  |
| `ecc-code-tour` | Create CodeTour `.tour` files — persona-targeted, step-by-step walkthroughs with real file and line anchors. Use for onboarding tours, archi |
| `ecc-codebase-onboarding` | Analyze an unfamiliar codebase and generate a structured onboarding guide with architecture map, key entry points, conventions, and a starte |
| `ecc-codehealth-mcp` | Real-time structural Code Health via CodeScene MCP — review before edits, verify score deltas after changes, gate commits and PRs. Use when  |
| `ecc-config-gc` | Garbage collection for your Claude Code configuration. Periodically scans ~/.claude (skills, memory, hooks, permissions, MCP servers, caches |
| `ecc-configure-ecc` | Run the conversational ECC setup wizard inside the current harness: inventory the install, collect scope (user/project/local) and hook mode  |
| `ecc-context-budget` | Audits Claude Code context window consumption across agents, skills, MCP servers, and rules. Identifies bloat, redundant components, and pro |
| `ecc-continuous-learning` | [DEPRECATED - use continuous-learning-v2] Legacy v1 stop-hook skill extractor. v2 is a strict superset with instinct-based, project-scoped,  |
| `ecc-continuous-learning-v2` | Instinct-based learning system that observes sessions via hooks, creates atomic instincts with confidence scoring, and evolves them into ski |
| `ecc-council` | Convene a four-voice council for ambiguous decisions, tradeoffs, and go/no-go calls. Use when multiple valid paths exist and you need struct |
| `ecc-council-multi-model` | Add one optional external Codex critique after the existing council has produced a decision draft. Use when an ambiguous, high-consequence d |
| `ecc-database-migrations` | Safe, reversible database migration patterns: forward-only production changes, expand-contract zero-downtime renames, concurrent indexes, ba |
| `ecc-delivery-gate` | Stop hook that blocks Claude from finishing until quality checks pass. Detects rationalization patterns (surface text heuristics), stale lea |
| `ecc-dev-team` | Simulate a collaborative dev team session where multiple role-based personas (PM, Architect, Developer, QA) respond to the same problem toge |
| `ecc-e2e-testing` | Playwright E2E testing patterns, Page Object Model, configuration, CI/CD integration, artifact management, and flaky test strategies. Use wh |
| `ecc-ecc-guide` | Answer questions about ECC by reading the live repo surface — agents, skills, commands, hooks, rules, install profiles, and docs — instead o |
| `ecc-ecc-recipes` | Map a described workflow to the right ECC command group with run-order and stop condition, or browse all command-group recipe families read  |
| `ecc-error-handling` | Patterns for robust error handling across TypeScript, Python, and Go. Covers typed errors, error boundaries, retries, circuit breakers, and  |
| `ecc-eval-harness` | Eval-driven development (EDD) framework for AI coding sessions — define capability and regression evals before coding, grade with code-based |
| `ecc-git-workflow` | Git workflow patterns including branching strategies, commit conventions, keeping history clean and readable, tidying local commits before m |
| `ecc-growth-log` | Write growth log entries that extract reusable patterns from completed work — root cause, transferable rule, and a recognizable signal — ins |
| `ecc-hookify-rules` | Create and configure hookify rules — markdown files with YAML frontmatter that match bash, file, prompt, or stop events by regex or conditio |
| `ecc-inherit-legacy-style` | Prevent AI style drift on legacy projects by scanning the codebase for implicit conventions, resolving conflicts with the operator one at a  |
| `ecc-intent-driven-development` | Turn ambiguous or high-impact product and engineering changes into scoped, verifiable acceptance criteria before or alongside implementation |
| `ecc-iterative-retrieval` | Pattern for progressively refining context retrieval to solve the subagent context problem. Use when a subagent lacks the context it needs a |
| `ecc-jpa-patterns` | JPA/Hibernate patterns for entity design, relationships, query optimization, transactions, auditing, indexing, pagination, and pooling in Sp |
| `ecc-living-docs-governance` | Keep a long-lived project's documentation from rotting by assigning existing project docs clear constitution, map, status, and history roles |
| `ecc-loop-design-check` | Design a goal-oriented agent loop or review one for failure modes: spinning, Goodhart-gaming the verifier, or running a wrong answer to comp |
| `ecc-mysql-patterns` | MySQL and MariaDB schema, query, indexing, transaction, replication, and connection-pool patterns for production backends. Use when designin |
| `ecc-plan-canvas` | Open plans and HTML artifacts in a local browser canvas where the human annotates elements, chats, and approves or requests changes without  |
| `ecc-plankton-code-quality` | Write-time code quality enforcement using Plankton — auto-formatting, linting, and Claude-powered fixes on every file edit via hooks. Use wh |
| `ecc-postgres-patterns` | PostgreSQL database patterns for query optimization, schema design, indexing, and security. Based on Supabase best practices. Use when desig |
| `ecc-prisma-patterns` | Prisma ORM patterns for TypeScript backends — schema design, query optimization, transactions, pagination, and critical traps like updateMan |
| `ecc-product-lens` | Validate the why before building through four product diagnostics — a YC-style product diagnostic that produces PRODUCT-BRIEF.md with a go/n |
| `ecc-production-audit` | Local-evidence production readiness audit for shipped apps, pre-launch reviews, post-merge checks, and "what breaks in prod?" questions with |
| `ecc-redis-patterns` | Redis data structure patterns, caching strategies, distributed locks, rate limiting, pub/sub, and connection management for production appli |
| `ecc-repo-scan` | Bootstrap pointer that installs the external repo-scan skill from a pinned, reviewable commit. Use when repo-scan must be installed before r |
| `ecc-rules-distill` | Scan skills to extract cross-cutting principles and distill them into rules — append, revise, or create new rule files. Use when the same pr |
| `ecc-santa-method` | Multi-agent adversarial verification: two independent reviewers with the same rubric must both pass before output ships, with a fix-and-re-r |
| `ecc-skill-comply` | Visualize whether skills, rules, and agent definitions are actually followed — auto-generates scenarios at 3 prompt strictness levels, runs  |
| `ecc-skill-scout` | Search existing local, marketplace, GitHub, and web skill sources before creating a new skill. Use when the user wants to create, build, for |
| `ecc-skill-stocktake` | Use when auditing Claude skills and commands for quality. Supports Quick Scan (changed skills only) and Full Stocktake modes with sequential |
| `ecc-strategic-compact` | Suggests manual context compaction at logical intervals to preserve context through task phases rather than arbitrary auto-compaction. Use w |
| `ecc-tdd-workflow` | Test-driven development workflow: write a failing test first, watch it fail, implement the smallest change to green, then refactor with 80%+ |
| `ecc-unified-memory` | Share durable, inspectable context and handoffs between Claude, Codex, Hermes, Cursor, OpenCode, and other agents through the local ECC Memo |
| `ecc-verification-loop` | Run a six-phase verification of a Claude Code session's work — build, type check, lint, tests with coverage, security grep, and diff review  |
| `ecc-windows-desktop-e2e` | E2E testing for Windows native desktop apps (WPF, WinForms, Win32/MFC, Qt) using pywinauto and Windows UI Automation. Use when writing E2E t |

## ZCode (5 skills — zai-org/ZCode, Apache-2.0)

| Skill | Mô tả |
|---|---|
| `agent-browser` | Browser automation CLI for AI agents. Use when the user needs to interact with websites, including navigating pages, filling forms, clicking |
| `ai-elements` | Build AI chat interfaces using ai-elements components — conversations, messages, tool displays, prompt inputs, and more. Use when the user w |
| `dogfood` | Systematically explore and test a web application to find bugs, UX issues, and other problems. Use when asked to "dogfood", "QA", "explorato |
| `feature-boundary-planner` | Map a ZCode behavior change to current UI surfaces, state owners, protocol commands, persistence, and validation. Use for impact analysis, p |
| `react-best-practices` | React and Next.js performance optimization guidelines from Vercel Engineering. This skill should be used when writing, reviewing, or refacto |

## 40-things & khác (25 skills)

| Skill | Mô tả |
|---|---|
| `addyosmani-api-design` | Guides stable API and interface design. Use when designing APIs, module boundaries, or any public interface. Use when creating REST or Graph |
| `addyosmani-constraints` | Establishes a project's quality bar as a written contract and stops agents quietly lowering it. Interviews the user on which dimensions matt |
| `addyosmani-observability` | Instruments code so production behavior is visible and diagnosable. Use when adding logging, metrics, tracing, or alerting. Use when shippin |
| `addyosmani-performance` | Optimizes application performance across frontend, backend, queries, and databases. Use when performance requirements exist, when you suspec |
| `addyosmani-security` | Hardens code against vulnerabilities. Use when auditing an input handler for vulnerabilities, when handling user input, authentication, data |
| `anthropics-mcp-builder` | Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-design |
| `anthropics-skill-creator` | Create new skills, modify and improve existing skills, and measure skill performance. Use when users want to create a skill from scratch, ed |
| `caveman` | Terse caveman voice: answer first, fluff gone, every technical fact kept. |
| `codex-review` |  |
| `dev-best-practices` | Universal best-practice rules for Claude Code. Locks framework choices, layering boundaries, file locations, workflow patterns, and communic |
| `headroom` | Token-reduction skill for coding agents. Compresses JSON tool output, build |
| `karpathy` | Behavioral rules for LLM coding. Use when writing, reviewing, debugging, or refactoring code to read existing patterns first, avoid over-eng |
| `mattpocock-domain-model` | Build and sharpen a project's domain model. Use when discussing codebase terminology, writing or editing a GLOSSARY.md, or recording or edit |
| `mattpocock-grill-docs` | A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go. |
| `mattpocock-triage` | Move issues and external PRs through a state machine of triage roles, categorise, verify, grill if needed, and write agent-ready briefs. |
| `mattpocock-wayfinder` | Plan a huge chunk of work (more than one agent session can hold) as a shared map of decision tickets on your issue tracker, and resolve them |
| `ponytail` | Lazy senior dev mode: the smallest change that fully solves the task, and a |
| `rtk` |  |
| `serena` |  |
| `superpowers-brainstorming` | You MUST use this before any creative work - creating features, building components, adding functionality, modifying behavior, or planning a |
| `superpowers-code-review` | Use when completing tasks, implementing major features, or before merging to verify work meets requirements |
| `superpowers-debugging` | Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes |
| `superpowers-tdd` | Use when implementing any feature or bugfix, before writing implementation code |
| `taste-design` | tasteskill v2, the anti-slop frontend skill. Art direction for websites, distilled from a study of 247 curated gallery sites (One Page Love, |
| `web-scrape` |  |

## Microsoft JARVIS (1 skill — microsoft/JARVIS, MIT)

| Skill | Mô tả |
|---|---|
| `easytool-skill-author` | Rewrite verbose tool/API docs into concise, standardized tool-use instructions with examples. Use when onboarding a new MCP server/CLI/API as a skill or fixing wrong tool/parameter choices. |

## Awesome Muse Skills (1496 skills — aicodedecode/awesome-muse-skills)

> Danh sách đầy đủ 1496 skill: [skills/awesome-muse-skills/README.md](skills/awesome-muse-skills/README.md).

| Nhóm | Số lượng | Nguồn | License |
|---|---|---|---|
| `ams-*` | 901 | skill gốc của repo nguồn | MIT |
| `ams-kw-*` | 264 | port từ anthropics/knowledge-work-plugins | Apache-2.0 |
| `ams-imp-*` | 331 | curated imports có license rõ | MIT / Apache-2.0 |

Không lấy: 1065 imports không rõ license, 10 proprietary, 79 license mập mờ,
30 file ảnh nhị phân, `scripts/`+`assets/` (tooling của repo nguồn).

## Community (1 skill — sonlovinbot/Muse-animated-short-film, MIT)

| Skill | Mô tả |
|---|---|
| `animated-short-film` | Dựng phim hoạt hình ngắn từ đầu đến cuối: thu thập yêu cầu (thời lượng, ngôn ngữ, tỷ lệ khung hình), vẽ character sheets, chốt story bible, keyframes, mega prompt từng cảnh, generate video, làm VO, dựng phim bằng ffmpeg. Kèm ghi chú adapt cho JARVIS (`JARVIS-NOTE.md`). |
