# Awesome Muse Skills (bóc tách)

1.496 skill bóc tách từ [aicodedecode/awesome-muse-skills](https://github.com/aicodedecode/awesome-muse-skills)
(commit `faf37c0`, 2026-10-16), theo 3 nhóm:

| Nhóm | Số lượng | Nguồn | License |
|---|---|---|---|
| `ams-*` (originals) | 901 | `skills/` — skill gốc của repo nguồn | MIT |
| `ams-kw-*` (kw-port) | 264 | port từ [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Apache-2.0 |
| `ams-imp-*` (imports) | 331 | curated imports có license rõ trong manifest | MIT / Apache-2.0 |

## Không lấy (lý do)

- 1.065 imports **không rõ license** (manifest ghi `null`) — không đủ cơ sở pháp lý.
- 10 imports **proprietary** — cấm theo quy tắc repo.
- 79 imports license mập mờ ("See LICENSE file", "LICENSE.txt") — cần check tay từng cái.
- 30 file ảnh nhị phân (.png/.svg) trong các skill — GitHub API push chỉ nhận text.
- `scripts/`, `assets/` — tooling build/website của repo nguồn, không phải skill.

## Lưu ý

- Prefix `ams-` / `ams-kw-` / `ams-imp-` để tránh đè skill đã có và phân biệt nguồn gốc.
  Frontmatter `name` trong SKILL.md giữ nguyên tên gốc.
- 14 tên trùng giữa originals và imports được giữ cả hai (nội dung khác nhau).
- License: xem [ATTRIBUTION.md](../../ATTRIBUTION.md).

## Danh sách đầy đủ

| Skill | Mô tả | Nhóm |
|---|---|---|
| `ams-1password-pro` | Master 1Password: vaults, Watchtower, passkeys, SSH agent, CLI, and family/team administration. Use when getting full value from 1Password personally or adminis | original |
| `ams-3d-designer` | Create 3D visuals with modeling, texturing, lighting, rendering, and optimization for web and product. | original |
| `ams-3d-web-experiences` | Create 3D web experiences: scene setup, models, materials, lighting, animation, scroll-driven scenes, and performance budgets. Use when adding 3D to websites be | original |
| `ams-abstract-writing` | Writing abstracts that get papers read — structured content, the 5-sentence core, and journal-specific constraints. | original |
| `ams-academy-guide` | Learn effectively from courses and academies: choosing programs, studying actively, and converting courses into skills. Use when investing time/money in structu | original |
| `ams-accessibility-design-checker` | Audit designs for accessibility with WCAG checklists covering color, type, focus, motion, and content. | original |
| `ams-account-based-marketing` | Run ABM programs — target account selection, personalized campaigns, sales orchestration, and account-level measurement. | original |
| `ams-active-learning` | Label smarter, not more — pick the most informative examples for annotation to maximize model gains per label. | original |
| `ams-aeo-geo` | Optimize content for AI answer engines (AEO/GEO): citation-friendly structure, factual precision, and measuring AI visibility. Use when AI search drives discove | original |
| `ams-affective-computing-basics` | Measuring emotion from behavior and physiology — facial expression, voice, EDA, and self-report integration. | original |
| `ams-affiliate-manager` | Build and run affiliate programs — recruitment, commission structures, partner enablement, and fraud prevention. | original |
| `ams-agent-evaluation` | Evaluate AI agents rigorously — task benchmarks, success criteria, failure taxonomy, cost/latency tracking, and regression testing. Use when you need to know wh | original |
| `ams-agent-management` | Manage fleets of local AI agents: lifecycle, monitoring, task assignment, and resource control. Use when running multiple CLI agents via an orchestrator like AI | original |
| `ams-agent-manager-skill` | Manage fleets of local AI agents — spawn, supervise, route tasks, monitor progress, and shut down workers cleanly. Use when coordinating multiple agents on para | original |
| `ams-agent-memory-architectures` | Architect persistent, searchable memory for agents — episodic, semantic, and procedural stores with retrieval, consolidation, and forgetting policies. Use when  | original |
| `ams-agent-memory-systems` | Design memory for AI agents — short-term context, long-term stores, retrieval strategies, and memory-augmented reasoning. Use when an agent must remember facts, | original |
| `ams-agent-messaging` | Coordinate agents via messaging: send, receive, and manage inter-agent communication. Use when agents need to collaborate, hand off work, or notify each other. | original |
| `ams-agent-orchestration` | Orchestrate agents at runtime — task routing, scheduling, parallel execution, result aggregation, and supervision dashboards. Use when running agents as a manag | original |
| `ams-agent-tool-builder` | Design tools for AI agents — clean function interfaces, typed schemas, informative errors, idempotency, and tool documentation. Use when giving an agent new cap | original |
| `ams-agent-workflows` | Build reusable agent workflow patterns — subagents with scoped briefs, event hooks, slash commands, and session management. Use when turning one-off agent tasks | original |
| `ams-agents-autogpt` | Run goal-driven autonomous agent loops — decomposing objectives, executing tool chains, self-critiquing, and iterating until done. Use when exploring what fully | original |
| `ams-agents-crewai` | Coordinate teams of role-based agents — role definitions, task delegation, sequential and hierarchical workflows, and shared memory. Use when a job naturally sp | original |
| `ams-agents-langchain` | Build LLM applications with chain-style orchestration frameworks — prompts, chains, tool-calling agents, memory, and retrieval pipelines. Use when structuring m | original |
| `ams-agents-llamaindex` | Build data-centric LLM applications with indexing and retrieval frameworks — document ingestion, indices, query engines, and RAG pipelines. Use when the core pr | original |
| `ams-agents-openai` | Build agents on OpenAI's platform patterns — assistants-style threads, function calling, structured outputs, and multi-step tool workflows. Use when working wit | original |
| `ams-agents-pro` | AI agent guidance — agent architecture, tool design, planning loops, guardrails, evaluation, and production agents. | original |
| `ams-ai-agents-architect` | Architect autonomous agent systems — perception/action loops, tool design, planning strategies, memory, and multi-agent orchestration patterns. Use when designi | original |
| `ams-ai-agents-pro` | Design and build LLM agents: ReAct loops, tool schemas, planning, memory, guardrails, evals, and human-in-the-loop. Use when building autonomous multi-step AI s | original |
| `ams-ai-chatbot-builder` | Build AI chatbots end to end — conversation design, persona, retrieval grounding, escalation, and deployment. Use when creating a chatbot for support, sales, or | original |
| `ams-ai-engineer` | Ship AI features to production — model selection, evals, latency/cost optimization, guardrails, monitoring, and iteration loops. Use when turning an LLM prototy | original |
| `ams-ai-image-prompting` | Craft effective AI image prompts with structured syntax, style control, and iterative refinement techniques. | original |
| `ams-ai-safety` | Practice AI safety across the lifecycle — risk assessment, alignment concepts, evaluation, deployment safeguards, and governance. Use when building or deploying | original |
| `ams-ai-sdk-ui` | Build streaming AI user interfaces with AI SDK patterns — message rendering, tool-call displays, loading states, and optimistic updates. Use when creating chat  | original |
| `ams-ai-ui-generation` | Generate UI with AI tools effectively: prompt structure, design-system grounding, iteration technique, and evaluating output quality. Use when using AI to creat | original |
| `ams-ai-video-prompts` | Proven prompts behind viral AI-made videos across 4 models — Claude, Muse AI, ChatGPT, Gemini. Browse by model, category, or tech tag, copy a creator's prompt,  | original |
| `ams-ai21-guide` | Build with AI21 Labs' models — Jurassic for generation and strong task-specific models for enterprise use. | original |
| `ams-aims-vs-objectives` | Distinguishing aims, objectives, hypotheses, and milestones — the hierarchy that keeps proposals logically tight. | original |
| `ams-aleph-alpha-guide` | Build with Aleph Alpha's Luminous models — European AI with emphasis on explainability and sovereignty. | original |
| `ams-alert-rules` | Designing alert rules that fire when it matters — thresholds, burn rates, and routing — for any monitoring stack. | original |
| `ams-alfred-pro` | Master Alfred on macOS: search, workflows, clipboard history, snippets, and the Powerpack. Use when building a keyboard-driven command layer on the Mac with Alf | original |
| `ams-angular-pro` | Idiomatic Angular: standalone components, signals, RxJS patterns, DI, and enterprise structure. Use when writing, reviewing, or structuring Angular applications | original |
| `ams-announcement-banners` | Use announcement banners effectively — in-app and site banners for launches, alerts, and critical messages. | original |
| `ams-ansible-pro` | Ansible guidance — inventory, playbooks, roles, idempotency, vault secrets, and reliable automation at scale. | original |
| `ams-anthropic-api-pro` | Anthropic Claude API guidance — messages API, tool use, prompt caching, extended thinking, and production patterns. | original |
| `ams-anyscale-guide` | Scale Ray workloads and serve models on Anyscale — managed Ray clusters for training and inference. | original |
| `ams-api-integration-specialist` | Integrate third-party APIs reliably: auth, pagination, retries, webhooks, rate limits, and contract testing. Use when connecting to external REST/GraphQL APIs o | original |
| `ams-app-performance-monitoring` | Application performance monitoring — transactions, profiling, and finding slow code — works with any APM platform. | original |
| `ams-aquila-guide` | Build with BAAI's Aquila models — open bilingual models from Beijing's academy with research transparency. | original |
| `ams-argo-cd-pro` | Argo CD guidance — GitOps workflows, Application manifests, sync strategies, AppProjects, and multi-cluster ops. | original |
| `ams-astro-pro` | Idiomatic Astro: islands architecture, content collections, SSR/SSG choices, and performance-first builds. Use when writing, reviewing, or structuring Astro sit | original |
| `ams-astrometry-basics` | Precision position measurement — proper motions, parallaxes, reference frames, and working with Gaia data. | original |
| `ams-atmospheric-chemistry-basics` | Tropospheric and stratospheric chemistry — ozone, aerosols, lifetimes, and reading chemical transport model output. | original |
| `ams-audio-pro` | Handle professional audio tasks with recording, editing, mixing basics, formats, and loudness standards. | original |
| `ams-auth-pro` | Implement web authentication: sessions, OAuth/OIDC, MFA, passwordless, and session security. Use when adding login and access control to apps. | original |
| `ams-autogen-guide` | Build conversational multi-agent systems with AutoGen — agent types, group chats, and orchestration patterns. | original |
| `ams-automation-builder` | Build workflow automations — triggers, actions, conditional logic, error handling, and maintainable automation design. | original |
| `ams-autonomous-agent-patterns` | A pattern catalog for autonomous agents — ReAct, plan-and-execute, reflection, multi-agent debate, toolformer-style tool use, and when each fits. Use when choos | original |
| `ams-autonomous-agents` | Build agents that work toward goals with minimal supervision — goal decomposition, self-correction loops, safe autonomy levels, and long-horizon task management | original |
| `ams-aws-pro` | AWS guidance — core services, IAM least privilege, networking, cost control, and production architecture patterns. | original |
| `ams-azure-openai-guide` | Use OpenAI models on Azure — enterprise deployment with private networking, compliance, and managed scaling. | original |
| `ams-azure-pro` | Azure guidance — subscriptions and RBAC, networking, AKS/App Service choices, Entra ID, and cost management. | original |
| `ams-b2b-demand-gen` | Generate B2B pipeline — campaign strategy, multi-channel programs, SDR alignment, and pipeline measurement. | original |
| `ams-babel-pro` | Configure Babel: presets, plugins, env-specific builds, polyfills, and performance. Use when maintaining Babel-based toolchains or writing custom transforms. | original |
| `ams-babyagi-pattern` | Build autonomous task-driven agents with the BabyAGI loop — task creation, prioritization, and execution from a single objective. | original |
| `ams-backup-strategist` | Design backup strategies that survive real disasters: 3-2-1 rule, versioning, testing restores, and covering all devices. Use when setting up backups or auditin | original |
| `ams-backup-strategy` | Designing backup strategies for PaaS-hosted apps — what to back up, how often, and proving restores work. | original |
| `ams-baichuan-guide` | Build with Baichuan's open models — bilingual Chinese-English models for general and specialized tasks. | original |
| `ams-base64-pro` | Encode and decode Base64 correctly with URL-safe variants, padding rules, and binary handling. | original |
| `ams-baseten-guide` | Deploy ML models to production with Baseten — high-performance inference with autoscaling and custom runtimes. | original |
| `ams-bash-pro` | Bash scripting guidance — safe scripting patterns, quoting, error handling, pipes, and maintainable shell code. | original |
| `ams-battery-materials` | Battery science fundamentals — cell components, electrochemistry metrics, testing protocols, and degradation analysis. | original |
| `ams-bayesian-statistics` | Bayesian data analysis — priors, likelihoods, posterior computation, model comparison, and honest reporting. | original |
| `ams-bedrock-guide` | Build on AWS with Amazon Bedrock — managed foundation models, agents, knowledge bases, and guardrails. | original |
| `ams-behavioral-data-analysis` | Analyzing behavioral experiment data — RT/accuracy preprocessing, mixed-effects models, and robust inference. | original |
| `ams-bioinformatics-pro` | End-to-end bioinformatics analysis — sequence QC, alignment, and omics pipelines for research data. | original |
| `ams-biosketch-craft` | Writing biosketches that build reviewer confidence — personal statement, contributions, and honest positioning. | original |
| `ams-biostatistics` | Statistical methods for biology and medicine — study design, hypothesis testing, regression, and survival analysis. | original |
| `ams-bitbucket-pro` | Master Bitbucket: Pipelines CI/CD, pull request workflow, branch permissions, and Jira integration. Use when building Bitbucket Pipelines or managing Bitbucket  | original |
| `ams-bitwarden-pro` | Master Bitwarden: vaults, collections, self-hosting options, CLI, and organization administration. Use when using Bitwarden personally or running it for a team, | original |
| `ams-blue-teamer` | Strengthen defensive security operations — detection engineering, hardening, monitoring, and continuous defense improvement. | original |
| `ams-bookmark-manager` | Build a bookmark system you'll actually use: capture, tagging, retrieval, and regular pruning. Use when bookmarks pile up unfindable or you keep losing useful l | original |
| `ams-brain-computer-interfaces` | BCI design and evaluation — signal decoding, calibration, closed-loop paradigms, and performance metrics. | original |
| `ams-brain-connectivity-analysis` | Structural and functional brain connectivity — tractography, functional networks, and graph-theoretic analysis. | original |
| `ams-brainstorming` | Structured ideation for technical problems: divergent generation, constraint framing, and convergent selection. Use when stuck on a design, naming, architecture | original |
| `ams-brand-guidelines` | Build and apply brand guidelines — voice, visual identity, and usage rules that keep every touchpoint consistent. | original |
| `ams-brand-identity` | Build complete brand identity systems with strategy, visual language, voice, and usage guidelines. | original |
| `ams-budget-checkin` | Run a monthly money check-in with an AI assistant: categorize spending, spot leaks, set one savings target, and view it through the 50/30/20 lens — judgment-fre | original |
| `ams-budget-justification` | Building defensible grant budgets — personnel, equipment, indirect costs, and justifications reviewers believe. | original |
| `ams-bug-bounty-hunter` | Run an effective bug bounty program — scope design, triage, researcher relations, and remediation workflows. | original |
| `ams-bulk-rna-seq` | Bulk RNA-seq differential expression — experimental design, count modeling with DESeq2/edgeR, and enrichment. | original |
| `ams-bun-pro` | Bun runtime guidance — fast installs, built-in bundler and test runner, Bun.serve APIs, and migration from Node. | original |
| `ams-business-analyst` | Perform business analysis — requirements gathering, process mapping, gap analysis, and stakeholder-ready documentation. | original |
| `ams-business-plan-writer` | Write complete business plans — executive summary, market analysis, financials, and investor-ready narratives. | original |
| `ams-c-pro` | Professional C: memory ownership, defensive programming, build hygiene, and systems-level correctness. Use when writing, reviewing, or maintaining C code. | original |
| `ams-caddy-pro` | Caddy guidance — automatic HTTPS, Caddyfile patterns, reverse proxying, and simple production deployments. | original |
| `ams-calendar-guardian` | Protect your time with Muse as calendar guardian: time-blocking, buffer time, declining gracefully, weekly calendar audits, and defending focus and personal tim | original |
| `ams-calendar-pro` | Run your calendar like a pro: timeboxing, calendar layering, meeting hygiene, buffer design, and weekly planning rituals. Use when your schedule feels chaotic o | original |
| `ams-calendar-pro-guide` | Master calendar management — time blocking, scheduling hygiene, calendar audits, and executive calendaring. | original |
| `ams-capacitor-pro` | Ship iOS/Android apps with Capacitor: web codebase, native plugins, live updates, and store builds. Use when wrapping a web app as native mobile apps. | original |
| `ams-capacity-planner` | Capacity planning — forecasting demand, sizing infrastructure, and avoiding both outages and waste — use when scaling systems. | original |
| `ams-carbon-accounting` | Greenhouse gas inventories and carbon footprints — scopes, emission factors, boundaries, and credible net-zero claims. | original |
| `ams-career-coach` | Clarify career direction, set goals, and build actionable development plans through structured coaching. | original |
| `ams-career-pivot-planner` | Plan a structured career change with skill-gap analysis, bridge roles, and a de-risked transition timeline. | original |
| `ams-casb-pro` | Deploy cloud access security brokers — shadow IT discovery, SaaS governance, and cloud data protection. | original |
| `ams-catalysis-basics` | Heterogeneous and homogeneous catalysis — mechanisms, kinetics, catalyst characterization, and deactivation analysis. | original |
| `ams-causal-inference` | Estimate causal effects from observational and experimental data — DAGs, confounding control, quasi-experimental designs, and sensitivity analysis. Use when you | original |
| `ams-cell-culture-basics` | Mammalian cell culture fundamentals — aseptic technique, passaging, cryopreservation, and contamination control. | original |
| `ams-cerebras-guide` | Blazing inference on Cerebras wafer-scale hardware — ultra-fast open-model APIs for speed-critical workloads. | original |
| `ams-chain-of-thought` | Elicit step-by-step reasoning from language models to boost accuracy on math, logic, and multi-step problems. | original |
| `ams-changelog-comms` | Write and publish changelogs — release notes that users read, versioning, and launch communication cadence. | original |
| `ams-changelog-pro` | Maintain changelogs users actually read: Keep-a-Changelog format, automation, and release-note craft. Use when writing changelogs or automating release notes. | original |
| `ams-channel-sales` | Build indirect sales channels — partner recruitment, enablement, deal registration, and channel conflict management. | original |
| `ams-chaos-engineer` | Chaos engineering — designing safe failure-injection experiments to build resilience — use when proactively testing system robustness. | original |
| `ams-character-designer` | Design memorable characters with silhouette, personality, expression sheets, and turnarounds. | original |
| `ams-chartjs-dashboards` | Build dashboards with Chart.js: layout, KPI cards, cross-chart filtering, theming, and real-time panels. Use for operational and analytics dashboards. | original |
| `ams-chartjs-pro` | Build charts with Chart.js: configuration, plugins, custom tooltips, real-time updates, and dashboard patterns. Use for standard charts in web apps. | original |
| `ams-chatbot-marketer` | Use conversational marketing — chatbot strategy, conversation design, lead qualification bots, and messaging ROI. | original |
| `ams-chatbot-ui-patterns` | Design chatbot user interfaces — message layouts, suggestion chips, rich cards, feedback controls, and accessibility. Use when designing the visual and interact | original |
| `ams-chatglm-guide` | Build with Zhipu AI's ChatGLM models — bilingual conversational models with strong Chinese dialogue. | original |
| `ams-chemistry-pro` | Practical computational and experimental chemistry workflows — cheminformatics, quantum chemistry, kinetics, and analytical methods. | original |
| `ams-chip-seq-analysis` | ChIP-seq analysis — peak calling, differential binding, motif discovery, and QC with phantom-peak metrics. | original |
| `ams-chunking-strategies` | Split documents for retrieval effectively — fixed, semantic, structural, and hierarchical chunking with overlap tuning. Use when RAG retrieval quality depends o | original |
| `ams-ci-cd-specialist` | Design and operate CI/CD pipelines: fast feedback, deployment strategies, environments, and pipeline reliability. Use when building, fixing, or scaling build an | original |
| `ams-circleci-pro` | CircleCI guidance — config design, orbs, caching, workflows, contexts, and pipeline optimization. | original |
| `ams-citation-manager` | Manage citations and references — collecting sources, organizing libraries, formatting bibliographies, and keeping reference integrity. Use when writing anythin | original |
| `ams-clarifai-guide` | Build multimodal AI apps on Clarifai — model marketplace, pipelines, and computer vision plus language workflows. | original |
| `ams-claude-code-guide` | Get productive with agentic coding assistants — task framing, iterative prompting, file-scoped workflows, review loops, and multi-file refactors. Use when pairi | original |
| `ams-clean-architecture` | Clean/hexagonal architecture: dependency rules, ports and adapters, layering, and testable boundaries. Use when structuring applications for maintainability and | original |
| `ams-clean-code` | Write readable, maintainable code: naming, small functions, clear control flow, and honest abstractions. Use when writing new code, refactoring, or reviewing fo | original |
| `ams-clickhouse-pro` | ClickHouse columnar analytics — schema design, MergeTree tuning, and fast queries — use for OLAP and high-volume event data. | original |
| `ams-climate-data-analysis` | Working with observational climate data — reanalyses, station records, anomalies, trends, and honest uncertainty. | original |
| `ams-climate-model-downscaling` | Translating coarse global climate projections to local scales — dynamical vs statistical downscaling, bias correction, and added value. | original |
| `ams-clinical-notes-nlp` | NLP on clinical text — de-identification, concept extraction, phenotyping from notes, and LLM safety guardrails. | original |
| `ams-clinical-risk-scores` | Clinical prediction models and risk scores — development, validation, calibration, and bedside use. | original |
| `ams-clinical-trial-design` | Designing clinical trials — phases, randomization, endpoints, sample size, and CONSORT-compliant reporting. | original |
| `ams-clipboard-manager` | Master clipboard history management: multi-item history, pinning, transformations, and search. Use when you copy-paste constantly and the single-slot clipboard  | original |
| `ams-cloud-pricing` | Understanding and optimizing cloud/PaaS pricing — cost models, common traps, and FinOps habits — vendor-neutral. | original |
| `ams-cloud-security` | Secure cloud environments — IAM, posture management, logging, and multi-account architecture across providers. | original |
| `ams-cloud-storage-pro` | Master cloud storage: provider choice, sync vs. backup, sharing, storage tiers, and cost control. Use when organizing cloud files, cutting storage costs, or des | original |
| `ams-cloudflare-pro` | Cloudflare guidance — DNS, CDN caching, WAF, Workers, Pages, Zero Trust, and edge performance tuning. | original |
| `ams-cmip6-workflows` | Using CMIP6 climate model output — finding data, multi-model means, scenario logic, and bias-aware analysis. | original |
| `ams-cms-pro` | Integrate headless CMSs: content modeling, APIs, previews, webhooks, and editorial workflows. Use when content teams need to publish without developers. | original |
| `ams-code-llama-guide` | Build with Meta's Code Llama — open code models for generation, infilling, and long-context code tasks. | original |
| `ams-code-review-pro` | Professional code review craft: review strategy, feedback that lands, reviewer efficiency, and team review culture. Use when reviewing code or improving a team' | original |
| `ams-code-reviewer` | Structured code review discipline: correctness, design, readability, and security checks with actionable feedback. Use when reviewing diffs, PRs, or code snippe | original |
| `ams-codestral-guide` | Build with Mistral's Codestral code models — efficient open code generation with fill-in-the-middle. | original |
| `ams-cognitive-task-analysis` | Designing and analyzing cognitive tasks — Stroop, n-back, task-switching, and process-pure measurement. | original |
| `ams-cohere-guide` | Build with Cohere's enterprise AI — Command models, Embed embeddings, and Rerank for retrieval pipelines. | original |
| `ams-color-picker-pro` | Pick, convert, and manage colors with format conversions, palette extraction, and harmony tools. | original |
| `ams-color-theory` | Apply color theory with palette building, harmony, psychology, contrast, and accessibility standards. | original |
| `ams-colormap-theory` | Choosing colormaps scientifically — perceptual uniformity, color-vision deficiency, and matching map to data type. | original |
| `ams-comic-artist` | Create comics and graphic narratives with panel flow, lettering, pacing, and visual storytelling. | original |
| `ams-comms-audit` | Audit organizational communications — channel effectiveness, message clarity, overload, and actionable improvement plans. | original |
| `ams-community-manager` | Build and manage brand communities — engagement strategy, moderation, advocacy programs, and community-led growth. | original |
| `ams-compartmental-models` | Infectious disease modeling with SIR/SEIR models — R0, fitting, forecasting, and intervention scenarios. | original |
| `ams-compliance-mapper` | Map security controls across frameworks — one control set satisfying ISO 27001, SOC 2, NIST, PCI DSS, and more. | original |
| `ams-constitutional-ai` | Train safer, more steerable AI by having the model critique and revise itself against an explicit written constitution. | original |
| `ams-consumer-ordering-flow` | Design consumer ordering experiences — discovery, cart, checkout, tracking, and reorder flows that convert. | original |
| `ams-contact-tracing-analytics` | Analyzing contact tracing data — network reconstruction, transmission chains, and evaluating tracing performance. | original |
| `ams-container-security` | Secure containerized workloads — image hardening, registry scanning, runtime protection, and supply-chain integrity. | original |
| `ams-content-strategist` | Design content strategies — audience research, pillar topics, editorial calendars, and measurement frameworks that tie content to revenue. | original |
| `ams-context-engineering` | Engineer the full context a model sees — system prompts, retrieved knowledge, tool definitions, state, and history as one designed artifact. Use when moving bey | original |
| `ams-context-window-management` | Manage LLM context windows deliberately — budgeting, prioritization, summarization, and retrieval instead of dumping everything in. Use when prompts grow long,  | original |
| `ams-context7-auto-research` | Research libraries and APIs automatically by pulling live documentation into the agent's context before answering. Use when writing code against unfamiliar or f | original |
| `ams-contract-reviewer` | Systematic contract review assistance — clause extraction, risk flagging, and comparison — use when analyzing agreements. | original |
| `ams-conversation-memory` | Keep long conversations coherent — summarization checkpoints, entity tracking, topic stacks, and graceful context handoffs. Use when dialogues run long or span  | original |
| `ams-conversion-optimizer` | Increase conversion rates — CRO audits, A/B testing, landing page optimization, and experimentation programs. | original |
| `ams-copy-number-variation` | Copy-number variant analysis — detection from sequencing/arrays, segmentation, and clinical interpretation. | original |
| `ams-copywriter` | Write persuasive copy for ads, landing pages, emails, and more — headlines, hooks, and calls-to-action that convert. | original |
| `ams-corrosion-science` | Corrosion mechanisms, electrochemical testing, and mitigation — from Pourbaix diagrams to coatings and cathodic protection. | original |
| `ams-cover-letter-writer` | Write concise, role-specific cover letters that connect the candidate's story to the employer's needs. | original |
| `ams-cpp-pro` | Idiomatic modern C++: RAII, smart pointers, move semantics, value semantics, STL algorithms, and safe concurrency. Use when writing, reviewing, or structuring C | original |
| `ams-cra-vulnerability-obligations` | Meet EU Cyber Resilience Act vulnerability duties — coordinated disclosure, SBOMs, and lifecycle security for digital products. | original |
| `ams-crewai-deep-dive` | Design role-based agent teams with CrewAI — agents, tasks, crews, and collaboration patterns for complex workflows. | original |
| `ams-crispr-screen-design` | Designing CRISPR screens — library choice, pooled screen workflow, MOI, and hit validation. | original |
| `ams-crm-specialist` | Manage CRM systems — data architecture, pipeline design, automation, user adoption, and reporting. | original |
| `ams-cron-jobs` | Scheduled jobs on PaaS and in the cloud — cron syntax, reliability, and observability — vendor-neutral patterns. | original |
| `ams-cron-monitoring` | Monitoring scheduled jobs — heartbeat checks, missed runs, and duration anomalies — platform-agnostic patterns. | original |
| `ams-cron-parser` | Read, write, and debug cron expressions with field reference, scheduling logic, and common patterns. | original |
| `ams-crystallography-basics` | Crystal structure fundamentals — lattices, space groups, Miller indices, and reading crystallographic data correctly. | original |
| `ams-csharp-pro` | Idiomatic modern C#: nullable reference types, records, async/await, LINQ, and .NET project structure. Use when writing, reviewing, or structuring C# applicatio | original |
| `ams-css-pro` | Professional CSS: cascade mastery, modern layout, custom properties, and maintainable architecture. Use when writing, reviewing, or debugging CSS. | original |
| `ams-csv-pro` | CSV processing done right — parsing edge cases, dialects, and large files — use when ingesting or exporting CSV data. | original |
| `ams-customer-success` | Run customer success — onboarding, health scoring, retention plays, expansion, and churn prevention. | original |
| `ams-customer-support-playbook` | Build SaaS customer support — tiered support models, SLAs, macros, escalation, and support-driven product feedback. | original |
| `ams-d3-pro` | Build custom data visualizations with D3: selections, scales, axes, transitions, and reusable chart patterns. Use when off-the-shelf charts aren't enough. | original |
| `ams-d3-visualizations` | Design data visualizations with D3 for the web: dashboards, interactive explorers, maps, and storytelling pieces. Use for data-viz products and features. | original |
| `ams-daily-briefing` | Build a morning briefing ritual with Muse: overnight priorities, today's calendar, weather-aware planning, and top 3 focus items as a concise chat summary. | original |
| `ams-dart-pro` | Idiomatic Dart: null safety, async, Flutter-ready patterns, packages, and tooling. Use when writing, reviewing, or structuring Dart code (Flutter or server/CLI) | original |
| `ams-dashboard-designer` | Design clear, actionable dashboards with KPI hierarchy, data visualization best practices, and layout patterns. | original |
| `ams-data-analysis-nlp` | Analyze text data with NLP — preprocessing, embeddings, topic modeling, sentiment, classification, and evaluation. Use when turning unstructured text into struc | original |
| `ams-data-labeling` | Design annotation pipelines that produce reliable training labels — guidelines, agreement measurement, and quality control. | original |
| `ams-data-scientist` | Run the data science workflow end to end — framing, exploration, feature engineering, modeling, validation, and communicating results. Use when turning raw data | original |
| `ams-database-designer` | Relational schema design — normalization, keys, constraints, and evolution — use when modeling data or reviewing a schema. | original |
| `ams-datadog-pro` | Datadog guidance — APM, logs, metrics, monitors, SLOs, dashboards, and cost control on the Datadog platform. | original |
| `ams-datasets-library` | Manage ML datasets with the datasets ecosystem — loading, streaming, preprocessing, versioning, and sharing. Use when data handling (not modeling) is the bottle | original |
| `ams-dbt-fusion-engine` | Analytics engineering with dbt — models, tests, and modular SQL pipelines — use when building or maintaining dbt projects. | original |
| `ams-ddd-architecture` | Domain-Driven Design: bounded contexts, ubiquitous language, aggregates, and tactical patterns. Use when modeling complex domains or structuring domain logic. | original |
| `ams-debugging-pro` | Systematic debugging: reproduce, isolate, hypothesize, verify — with tooling for hard bugs. Use when stuck on a bug, flaky failure, or production incident. | original |
| `ams-deep-work-planner` | Plan and protect deep work: scheduling focus blocks, task selection, shutdown rituals, and measuring depth. Use when important work never gets sustained attenti | original |
| `ams-deepinfra-guide` | Affordable serverless GPU inference on DeepInfra — broad open-model catalog with straightforward pricing. | original |
| `ams-deepseek-coder` | Build with DeepSeek Coder — open code models with strong reasoning and long-context code understanding. | original |
| `ams-deepseek-guide` | Build with DeepSeek's models — efficient open-weight reasoning models and low-cost API inference. | original |
| `ams-deno-pro` | Deno runtime guidance — TypeScript-first development, permissions, standard library, and deploying Deno apps. | original |
| `ams-dependabot-review` | Review Dependabot PRs efficiently: triage, risk assessment, batching, and auto-merge policies. Use when dependency update PRs pile up or you want a sane update  | original |
| `ams-dependency-scanner` | Manage software composition analysis — SBOMs, vulnerability triage, and remediation of third-party dependencies. | original |
| `ams-deploy-templates` | Reusable deployment templates — one-click deploys, blueprints, and environment-as-code — vendor-neutral patterns. | original |
| `ams-design-critique-partner` | Run structured design critiques with frameworks for feedback that is honest, specific, and actionable. | original |
| `ams-design-handoff-specialist` | Prepare flawless design-to-development handoffs with specs, assets, behaviors, and QA processes. | original |
| `ams-design-patterns-pro` | Apply classic design patterns judiciously: when each pattern fits, modern alternatives, and anti-patterns. Use when designing object interactions or reviewing p | original |
| `ams-design-systems` | Build and govern scalable design systems with tokens, components, documentation, and adoption strategy. | original |
| `ams-devils-advocate` | Apply the devil's advocate technique: structured critical thinking that stress-tests ideas, plans, and decisions. Use when you need honest critique before commi | original |
| `ams-devsecops-pro` | Embed security into DevOps — pipeline security gates, guardrails, and culture that ships fast and safe. | original |
| `ams-dft-workflows` | Density functional theory calculations end to end — structure relaxation, convergence, band structures, and defect energetics. | original |
| `ams-diagnostic-test-accuracy` | Evaluating diagnostic tests — sensitivity, specificity, ROC analysis, likelihood ratios, and study design. | original |
| `ams-diff-checker` | Compare files, text, and data effectively with diff strategies, semantic comparison, and review workflows. | original |
| `ams-differential-diagnosis-framework` | Structured differential diagnosis — generating, prioritizing, and ruling out diagnostic hypotheses. | original |
| `ams-diffusion-pro` | Generate and edit images with diffusion models: prompting, seeds, CFG, img2img, inpainting, conditioning, and API integration. Use when adding AI image generati | original |
| `ams-digest-emails` | Create digest emails — curated summaries, personalization, frequency strategy, and engagement optimization. | original |
| `ams-discernment-nudge` | Build discernment habits: nudges and checklists for evaluating claims, spotting manipulation, and thinking clearly under pressure. Use when you want better judg | original |
| `ams-discord-pro` | Run professional Discord servers — community structure, moderation, events, bots, and engagement for teams and audiences. | original |
| `ams-distillation` | Distill large models into smaller ones — teacher-student training, data generation, loss design, and quality validation. Use when you need big-model behavior at | original |
| `ams-django-pro` | Django guidance — project structure, ORM mastery, admin, auth, async views, and production deployment. | original |
| `ams-dlp-pro` | Design data loss prevention — data discovery, classification, policy enforcement across endpoint, network, and cloud. | original |
| `ams-dna-methylation-analysis` | DNA methylation analysis — array and bisulfite-seq processing, DMP/DMR calling, and epigenetic clocks. | original |
| `ams-docker-pro` | Docker guidance — Dockerfile best practices, multi-stage builds, Compose, networking, volumes, and image security. | original |
| `ams-docs-search` | Search documentation effectively for agents: index docs, query precisely, and cite sources. Use when agents need accurate answers from documentation rather than | original |
| `ams-document-parser` | Building robust document ingestion — chunking, metadata, and multi-format pipelines for search and RAG. | original |
| `ams-document-translator` | Translating documents while preserving layout, tables, and formatting — use for multilingual document workflows. | original |
| `ams-documentation-pro` | Write documentation developers actually use: READMEs, API docs, ADRs, runbooks, and docs-as-code workflows. Use when writing or improving technical documentatio | original |
| `ams-docx-pro` | Word document automation — generating, templating, and parsing .docx files — use when working with Word documents programmatically. | original |
| `ams-dose-response-analysis` | Dose-response modeling — EC50 estimation, curve fitting, synergy analysis, and benchmark-dose methods. | original |
| `ams-dotnet-pro` | .NET guidance — ASP.NET Core APIs, Entity Framework Core, DI, configuration, testing, and container deployment. | original |
| `ams-dpo-guide` | Align language models with human preferences using Direct Preference Optimization — no reward model, no RL loop. | original |
| `ams-drizzle-pro` | Drizzle ORM guidance — schema-as-code, relational queries, migrations, and SQL-first TypeScript data access. | original |
| `ams-drug-interaction-screening` | Screening for drug-drug interactions — mechanistic prediction, database checks, and clinical risk assessment. | original |
| `ams-drug-repurposing` | Systematic drug repurposing — computational screening, evidence triangulation, and validation strategy. | original |
| `ams-dspy-programming` | Program language models instead of prompting them — DSPy signatures, modules, and optimizers that tune prompts automatically. | original |
| `ams-e2e-testing-pro` | End-to-end testing mastery: critical journeys, Playwright/Cypress patterns, flakiness control, and CI integration. Use when building or fixing browser E2E suite | original |
| `ams-echarts-pro` | Build rich visualizations with Apache ECharts: option config, dataset transforms, large-data performance, and custom rendering. Use for complex dashboards and b | original |
| `ams-ecommerce-pro` | Build e-commerce storefronts: product catalog, cart, checkout, payments, and post-purchase flows. Use for online stores and marketplaces. | original |
| `ams-edr-pro` | Deploy and operate endpoint detection and response — policy tuning, behavioral detections, threat hunting, and response actions. | original |
| `ams-eeg-signal-processing` | EEG preprocessing and analysis — filtering, artifact removal, time-frequency decomposition, and ERP workflows. | original |
| `ams-ehr-data-analysis` | Electronic health record analysis — phenotyping, missingness, bias, and observational study design with EHR data. | original |
| `ams-elasticsearch-pro` | Elasticsearch search and analytics — mappings, queries, and cluster health — use when building search or log analytics. | original |
| `ams-elasticsearch-pro-dev` | Elasticsearch guidance — index design, mappings, query DSL, aggregations, cluster operations, and performance tuning. | original |
| `ams-electron-pro` | Professional Electron: main/renderer architecture, IPC, security hardening, packaging, and auto-updates. Use when writing, reviewing, or structuring Electron ap | original |
| `ams-elisa-assay-design` | ELISA development and validation — sandwich vs competitive formats, standard curves, and assay qualification. | original |
| `ams-elixir-pro` | Idiomatic Elixir: functional design, OTP supervision, GenServers, Ecto, and Phoenix patterns. Use when writing, reviewing, or structuring Elixir applications. | original |
| `ams-eln-workflows` | Electronic lab notebook workflows — structuring entries, templates, linking data, and audit-ready records. | original |
| `ams-email-designer` | Design effective emails with inbox-friendly layouts, accessible HTML, dark mode, and testing checklists. | original |
| `ams-email-marketer` | Run email marketing end-to-end — list building, campaigns, automation flows, deliverability, and performance optimization. | original |
| `ams-email-pro` | Master professional email — inbox zero systems, high-impact writing, etiquette, and managing email at scale. | original |
| `ams-email-templates` | Build HTML emails that render everywhere: table layouts, MJML, dark mode, testing, and deliverability basics. Use for transactional and marketing email. | original |
| `ams-email-triage` | Reach and sustain inbox zero: triage workflows, filters, templates, batching, and unsubscribing systems. Use when email eats your day or your inbox has become a | original |
| `ams-embeddings-guide` | Work with text embeddings — choosing models, pooling, similarity measures, evaluation, and multilingual considerations. Use when building semantic search, clust | original |
| `ams-emotion-pro` | Style React with Emotion: css prop, styled API, theming, SSR, and zero-config patterns. Use when choosing or using Emotion for CSS-in-JS. | original |
| `ams-energy-manager` | Manage energy, not just time: map your ultradian rhythms, align tasks to energy states, and design recovery. Use when time management alone isn't fixing fatigue | original |
| `ams-epub-pro` | EPUB ebook creation and processing — structure, metadata, validation — use when generating or parsing ebooks. | original |
| `ams-error-tracking-setup` | Setting up application error tracking — SDK integration, grouping, and context — works with any error-monitoring platform. | original |
| `ams-esbuild-pro` | Use esbuild for extreme-speed builds: bundling, transforming, plugins, and integration into larger pipelines. Use when build speed is the bottleneck. | original |
| `ams-escalation-policies` | Design escalation policies — tiers, timeouts, stakeholder matrices, and escalation paths that actually work. | original |
| `ams-eval-frameworks` | Build evaluation frameworks for LLM systems — harness design, graders, datasets, regression tracking, and human-in-the-loop eval. Use when you need systematic m | original |
| `ams-event-marketing` | Plan and promote events — conferences, trade shows, webinars-as-events, and field marketing that drives pipeline. | original |
| `ams-excel-pro` | Spreadsheet automation — reading, writing, and analyzing Excel workbooks — use for xlsx generation, parsing, and data workflows. | original |
| `ams-executive-coach` | Coach senior leaders on strategic thinking, stakeholder management, presence, and organizational impact. | original |
| `ams-exoplanet-detection` | Finding exoplanets — transit and radial-velocity methods, light-curve vetting, and false-positive rejection. | original |
| `ams-experiment-designer` | Design rigorous experiments — hypotheses, controls, randomization, power analysis, and preregistration. Use when planning any study where you need trustworthy c | original |
| `ams-experimental-design-psych` | Designing psychology experiments — variables, controls, randomization, counterbalancing, and preregistration. | original |
| `ams-expo-pro` | Build React Native apps with Expo: managed workflow, EAS Build/Update, config plugins, push notifications, and store submission. Use when shipping cross-platfor | original |
| `ams-express-pro` | Express.js API guidance — routing, middleware architecture, error handling, security hardening, and production setup. | original |
| `ams-extreme-weather-stats` | Statistical analysis of extreme weather — EVT, return periods, thresholds, and detection/attribution of rare events. | original |
| `ams-falcon-guide` | Build with the Falcon open models — UAE's TII models with strong multilingual and efficient architectures. | original |
| `ams-fastapi-pro` | FastAPI guidance — typed endpoints, Pydantic validation, dependency injection, async patterns, and production deployment. | original |
| `ams-featherless-guide` | Uncensored open-model inference on Featherless AI — raw model behavior for research and evaluation. | original |
| `ams-few-shot-learning` | Teach models new tasks from a handful of examples — prompting strategies, example selection, and in-context learning mechanics. | original |
| `ams-ffmpeg-pro` | Master FFmpeg for video/audio conversion, compression, trimming, subtitles, streaming, and batch processing. | original |
| `ams-figma-expert` | Master Figma workflows with auto layout, components, variables, prototyping, and team collaboration. | original |
| `ams-figma-pro-dev` | Developer-Figma collaboration: dev mode, design tokens, component inspection, handoff, and design-system alignment. Use when implementing designs from Figma or  | original |
| `ams-figure-captions` | Writing figure captions that make figures self-contained — what to include, ordering, and statistical reporting. | original |
| `ams-file-organizer` | Organize files so you can find anything: naming conventions, folder structures, archiving, and deduplication. Use when digital clutter slows you down or you're  | original |
| `ams-financial-modeler` | Build financial models — revenue forecasts, unit economics, scenario analysis, and investor-grade spreadsheets. | original |
| `ams-fine-tuning-llms` | Fine-tune large language models — data curation, SFT, parameter-efficient methods (LoRA), evaluation, and avoiding common training failures. Use when a base mod | original |
| `ams-firewall-pro` | Design, implement, and audit firewall policy — rule hygiene, segmentation, change control, and continuous compliance. | original |
| `ams-fireworks-ai` | Fast serverless inference on Fireworks AI — open models, fine-tuning, and function-calling optimized endpoints. | original |
| `ams-fits-workflows` | Working with FITS astronomical data — headers, WCS, image calibration, and stacking with astropy. | original |
| `ams-flow-cytometry` | Flow cytometry experimental design and analysis — panel design, compensation, gating, and QC. | original |
| `ams-flutter-pro` | Professional Flutter: widget composition, state management, platform channels, and performance. Use when writing, reviewing, or structuring Flutter apps. | original |
| `ams-fmri-analysis` | fMRI data analysis — preprocessing, GLM modeling, and group-level inference for task and resting-state studies. | original |
| `ams-focus-modes` | Design focus modes that actually protect attention: Do Not Disturb schedules, app filtering, notification tiers, and context-specific setups. Use when interrupt | original |
| `ams-forensics-pro` | Conduct digital forensics investigations — evidence acquisition, timeline analysis, and court-ready documentation. | original |
| `ams-form-filler` | Programmatic form completion — web forms, PDF AcroForms, and data mapping — use when automating repetitive form filling. | original |
| `ams-forms-pro` | Build excellent web forms: UX patterns, validation, accessibility, multi-step flows, and file uploads. Use for any form beyond trivial inputs. | original |
| `ams-framer-motion-pro` | Animate React with Framer Motion (Motion): gestures, layout animations, variants, scroll-linked motion, and exit transitions. Use when adding production-grade U | original |
| `ams-framer-motion-ui` | Craft UI animations with Framer Motion: page transitions, micro-interactions, scroll reveals, and shared layouts for polished interfaces. Use for interface anim | original |
| `ams-franchise-marketer` | Market franchise systems — franchisee recruitment, local-national marketing balance, and brand consistency at scale. | original |
| `ams-freelance-guide` | Launch and run a freelance practice covering positioning, pricing, contracts, and client management. | original |
| `ams-friendli-ai` | High-throughput inference on FriendliAI — optimized serving engine for low-latency, cost-efficient LLMs. | original |
| `ams-frontend-testing` | Test frontend code: unit, component, E2E, visual regression, and accessibility tests with a sane pyramid. Use for reliable UI quality. | original |
| `ams-gcp-pro` | Google Cloud guidance — core services, IAM, VPC networking, GKE/Cloud Run choices, BigQuery, and cost control. | original |
| `ams-gemma-guide` | Build with Google's Gemma models — lightweight open models from 1B to 27B with permissive terms. | original |
| `ams-genome-assembly` | Genome assembly fundamentals — long-read assembly, polishing, QC metrics, and annotation. | original |
| `ams-genomic-epidemiology` | Pathogen genomics for epidemiology — phylogenetics of outbreaks, transmission inference, and variant surveillance. | original |
| `ams-genomics-pro` | Genome-scale analysis — variant calling, annotation, GWAS, and structural variation for research and clinical genomics. | original |
| `ams-geochemical-analysis` | Geochemical data done right — major/trace elements, isotopes, QA/QC, and avoiding closure and normalization traps. | original |
| `ams-geomorphology-fieldwork` | Reading landscapes in the field — landform identification, process inference, and field data that actually constrains models. | original |
| `ams-geospatial-mapmaking` | Making honest, publication-ready maps — projections, symbology, hillshading, and cartographic integrity. | original |
| `ams-getting-started-with-muse-skills` | Honest onboarding to Muse skills: what they are, SKILL.md anatomy, how to actually use one in chat today, how to write your own, and safety norms. | original |
| `ams-gift-idea-finder` | Find genuinely good gifts: profile the recipient (interests, constraints, budget), match ideas to the occasion, weigh experience vs object gifts, avoid generic  | original |
| `ams-gis-workflows` | Geographic information systems in practice — projections, spatial joins, raster analysis, and publication-quality maps. | original |
| `ams-git-commit-helper` | Write clear, conventional commits: atomic changesets, imperative subjects, useful bodies, and history hygiene. Use when committing code, writing PR descriptions | original |
| `ams-git-commit-helper-guide` | A practical guide to crafting atomic commits and clear Conventional-Commit messages — use when committing or standardizing team history. | original |
| `ams-git-pro` | Advanced Git — rebasing, history surgery, bisecting, and recovery — use when Git gets complicated or things go wrong. | original |
| `ams-git-pro-dev` | Master Git: branching strategies, rebasing, history surgery, bisecting, and recovering from disasters. Use when working with Git beyond basic commit/push. | original |
| `ams-git-worktree-manager` | Managing multiple Git worktrees for parallel work — setup, workflows, and cleanup. | original |
| `ams-github-actions-pro` | GitHub Actions guidance — workflow design, caching, matrices, OIDC, reusable workflows, and secure CI/CD. | original |
| `ams-github-actions-templates` | Use production-ready GitHub Actions templates: CI, releases, deployments, and scheduled jobs. Use when setting up Actions quickly without reinventing pipeline p | original |
| `ams-github-api-automation` | Automate GitHub via its native REST API and Actions: scripts, bulk operations, and integrations without middleware. Use when you need programmatic control over  | original |
| `ams-github-pro` | Master GitHub: Actions workflows, PR automation, branch protection, Codespaces, and API/CLI usage. Use when building GitHub workflows or managing GitHub repos. | original |
| `ams-github-workflow-automation` | Automate GitHub with Actions and the native API: CI/CD, issue/PR automation, and repository management. Use when streamlining GitHub-centered development workfl | original |
| `ams-gitlab-ci-pro` | GitLab CI/CD guidance — pipeline design, stages, caching, environments, review apps, and secure delivery. | original |
| `ams-gitlab-pro` | Master GitLab: CI/CD pipelines, merge request flow, Auto DevOps, and instance administration. Use when building GitLab pipelines or managing GitLab projects. | original |
| `ams-gitops-workflow` | Run GitOps: declarative infrastructure and deployments driven by Git as the source of truth. Use when managing Kubernetes or infrastructure with auditable, repr | original |
| `ams-go-pro` | Idiomatic Go: project layout, error handling, concurrency with goroutines/channels, interfaces, and tooling. Use when writing, reviewing, or structuring Go prog | original |
| `ams-goal-setter` | Set goals you'll actually pursue: SMART goals, OKRs, outcome vs. process goals, quarterly planning, and review cadences. Use when defining personal or team goal | original |
| `ams-google-analytics` | Use Google Analytics 4 effectively: setup, events, conversions, reports, and privacy-compliant tracking. Use when measuring website or app performance with GA4. | original |
| `ams-google-workspace-pro` | Master Google Workspace: Gmail, Drive, Docs, Sheets, Calendar, and Meet at power-user level. Use when living in Google's ecosystem and wanting speed, organizati | original |
| `ams-gpg-expert` | GPG guidance — key management, signing commits, encrypting files, subkeys, revocation, and YubiKey workflows. | original |
| `ams-grafana-pro` | Grafana guidance — dashboard design, variables, alerting, data source provisioning, and Loki/Tempo integration. | original |
| `ams-grammar-checker` | Use grammar checkers effectively: tool setup, understanding suggestions, style settings, and knowing their limits. Use when polishing writing or helping others  | original |
| `ams-granite-guide` | Build with IBM's Granite models — enterprise open models for code, language, and business applications. | original |
| `ams-grant-story-arc` | Designing a grant's narrative arc — significance, innovation, and approach woven into a compelling whole. | original |
| `ams-graph-query` | Query knowledge graphs for agents: model entities and relations, write traversals, and answer multi-hop questions. Use when answers need connected facts, not ju | original |
| `ams-graphic-designer` | Create effective visual designs with strong composition, hierarchy, and typography across print and digital. | original |
| `ams-graphql-pro` | GraphQL API guidance — schema design, resolvers, DataLoader, pagination, auth, and production operations. | original |
| `ams-graphrag` | Combine knowledge graphs with retrieval-augmented generation — graph construction, community summaries, and graph-guided retrieval. Use when RAG needs to answer | original |
| `ams-grc-analyst` | Run governance, risk, and compliance operations — risk registers, control testing, policy lifecycle, and board reporting. | original |
| `ams-groq-guide` | Ultra-low-latency inference on Groq's LPU hardware — when tokens-per-second is the product requirement. | original |
| `ams-groundwater-modeling` | Groundwater flow and transport modeling — aquifer characterization, MODFLOW workflows, calibration, and capture-zone analysis. | original |
| `ams-growth-hacker` | Run growth experiments — acquisition loops, activation, retention, and referral systems driven by rapid testing. | original |
| `ams-grpc-pro` | gRPC guidance — protobuf design, service patterns, streaming, deadlines, load balancing, and debugging. | original |
| `ams-habit-tracker` | Design habit systems that stick: habit selection, tracking methods, streaks, environment design, and recovery from slips. Use when building new routines or fixi | original |
| `ams-habit-tracker-coach` | Build habits with your AI assistant as coach: start tiny, stack habits onto existing routines, do quick daily check-ins, repair streaks with the never-miss-twic | original |
| `ams-hash-generator` | Generate and verify cryptographic hashes with algorithm selection, salting, and integrity workflows. | original |
| `ams-haskell-pro` | Idiomatic Haskell: pure functional design, type-driven modeling, monad stacks, and principled effects. Use when writing, reviewing, or structuring Haskell progr | original |
| `ams-haystack-agents` | Build retrieval-grounded agents with Haystack — pipelines, components, and agent patterns for search-heavy workflows. | original |
| `ams-helm-pro` | Helm guidance — chart structure, templating, values management, releases, hooks, and chart best practices. | original |
| `ams-home-task-manager` | Run your household like a calm system: capture every home task into a master list, pick a weekly room/zone focus, track maintenance schedules (filters, servicin | original |
| `ams-hosted-scraping-api` | Using managed crawl/scrape/extract APIs — when to outsource scraping and how to evaluate providers — vendor-neutral patterns. | original |
| `ams-html-pro` | Professional HTML: semantic markup, accessibility, forms, SEO fundamentals, and document structure. Use when writing or reviewing HTML. | original |
| `ams-html-to-pdf` | Converting HTML/CSS to PDF — print stylesheets, pagination, and renderer choice — use when generating PDFs from web content. | original |
| `ams-huggingface-inference` | Run models via Hugging Face Inference — serverless endpoints, dedicated deployments, and the Hub ecosystem. | original |
| `ams-huggingface-pro` | Hugging Face guidance — Hub, Transformers, datasets, fine-tuning, inference endpoints, and Spaces. | original |
| `ams-humanizer` | Make AI-generated text sound human: de-genericizing drafts, restoring voice, and editing for natural flow. Use when AI-assisted writing sounds robotic, verbose, | original |
| `ams-hybrid-search` | Combine dense and sparse retrieval — BM25 + vectors, fusion algorithms, weighting, and tuning. Use when neither keyword nor semantic search alone is good enough | original |
| `ams-hydrological-modeling` | Catchment hydrology modeling — water balance, rainfall-runoff models, calibration, and flood estimation. | original |
| `ams-hyperbolic-guide` | Affordable GPU cloud and inference on Hyperbolic — decentralized compute with competitive pricing. | original |
| `ams-iam-pro` | Build identity and access management — lifecycle, privileged access, governance, and continuous access review. | original |
| `ams-icon-designer` | Design clear, consistent icon sets with grid systems, stroke rules, and production-ready exports. | original |
| `ams-ids-ips-pro` | Deploy and tune intrusion detection/prevention — sensor placement, signature and behavioral detection, and alert quality. | original |
| `ams-illustrator` | Create custom illustrations with consistent style, composition, and narrative for brands and products. | original |
| `ams-image-pro` | Handle professional image tasks with format conversion, resizing, compression, and metadata workflows. | original |
| `ams-image-retoucher` | Retouch images to professional standards with frequency separation, dodge and burn, and natural results. | original |
| `ams-imp-a-philosophy-of-software-design` | Apply John Ousterhout-inspired software design rules when reducing complexity, designing module boundaries, or reviewing APIs and abstractions. | import |
| `ams-imp-accessibility` | Audit and improve web accessibility following WCAG 2.1 guidelines. Use when asked to "improve accessibility", "a11y audit", "WCAG compliance", "screen reader su | import |
| `ams-imp-adversarial-reviewer` | Adversarial code review that breaks the self-review monoculture. Use | import |
| `ams-imp-aeo-magicstone` | Use when designing, implementing, or measuring Answer Engine Optimization (AEO) for AI answers, citations, generative search, or agent-readable web content. Do  | import |
| `ams-imp-agent-md-refactor` | Refactor bloated AGENTS.md, CLAUDE.md, or similar agent instruction files to follow progressive disclosure principles. Splits monolithic files into organized, l | import |
| `ams-imp-agents-autogpt` | Autonomous AI agent platform for building and deploying continuous agents. Use when creating visual workflow agents, deploying persistent autonomous agents, or  | import |
| `ams-imp-agents-crewai` | Multi-agent orchestration framework for autonomous AI collaboration. Use when building teams of specialized agents working together on complex tasks, when you n | import |
| `ams-imp-agents-langchain` | Framework for building LLM-powered applications with agents, chains, and RAG. Supports multiple providers (OpenAI, Anthropic, Google), 500+ integrations, ReAct  | import |
| `ams-imp-agents-llamaindex` | Data framework for building LLM applications with RAG. Specializes in document ingestion (300+ connectors), indexing, and querying. Features vector indices, que | import |
| `ams-imp-agirails-agent-payments` | AI agent payment infrastructure — ACTP escrow, x402 instant payments, USDC settlement on Base L2. Interactive onboarding: asks your preferences, generates custo | import |
| `ams-imp-ai-release-hunter` | Daily digest of AI releases from Anthropic, Meta, Vercel Labs, OpenAI and Google GitHub repos, the Claude Cowork changelog, the claude.dev blog and Hacker News, | import |
| `ams-imp-ai-search-optimization` | >- | import |
| `ams-imp-andreessen` | 'Marc Andreessen-mode decision and productivity skill. A blunt, market-first | import |
| `ams-imp-android-cicd` | Automated Android CI/CD pipeline to Google Play — supports TWA, React Native, Flutter, and native Android. Run npx android-cicd to set up keystore generation, G | import |
| `ams-imp-animate` | Build an animation from scratch, making the decisions in the order that determines whether it feels right — should it animate at all, what purpose, which tool,  | import |
| `ams-imp-animate-expo` | Build animations in React Native and Expo, making the decisions in the order that determines whether they feel right — should it animate, which thread it runs o | import |
| `ams-imp-animation-vocabulary` | Reverse-lookup glossary that turns a vague description of a web animation or motion effect into its exact term ("the bouncy thing when a popover opens" → Pop in | import |
| `ams-imp-api-design` | REST API design patterns including resource naming, status codes, pagination, filtering, error responses, versioning, and rate limiting for production APIs. Use | import |
| `ams-imp-apple-design` | Apple's approach to interface design and fluid, physical motion, translated for the web. Use when building or reviewing gesture-driven UI, spring animations, dr | import |
| `ams-imp-archify` | Create polished, validated architecture, workflow, sequence, data-flow, and lifecycle/state diagrams as explorable standalone HTML with inline SVG, dark/light t | import |
| `ams-imp-article-writing` | Write articles, guides, blog posts, tutorials, newsletter issues, and other long-form content in a distinctive voice derived from supplied examples or brand gui | import |
| `ams-imp-ask-sonner` | Guide to Sonner, the React toast library — install and wire up the Toaster, pick the right toast() call, promise and loading toasts, updating, dismissing and pe | import |
| `ams-imp-avoid-ai-writing` | Audit and rewrite content to remove AI writing patterns ("AI-isms"). Use this skill when asked to "remove AI-isms," "clean up AI writing," "edit writing for AI  | import |
| `ams-imp-banner-design` | Design banners for social media, ads, website heroes, creative assets, and print. Multiple art direction options with optional generated or supplied visuals. Ac | import |
| `ams-imp-best-practices` | Apply modern web development best practices for security, compatibility, and code quality. Use when asked to "apply best practices", "security audit", "moderniz | import |
| `ams-imp-bleu` | Use this skill whenever a developer wants to turn an idea into a complete, production-ready, end-to-end system plan BEFORE writing any code. Trigger on 'plan th | import |
| `ams-imp-blog` | > | import |
| `ams-imp-blog-analyze` | > | import |
| `ams-imp-blog-audio` | > | import |
| `ams-imp-blog-audit` | > | import |
| `ams-imp-blog-brand` | > | import |
| `ams-imp-blog-brief` | > | import |
| `ams-imp-blog-calendar` | > | import |
| `ams-imp-blog-cannibalization` | > | import |
| `ams-imp-blog-chart` | > | import |
| `ams-imp-blog-cluster` | > | import |
| `ams-imp-blog-decay` | Detect content decay from Google Search Console exports by comparing current and previous page performance, flagging quarter-over-quarter traffic drops, dropped | import |
| `ams-imp-blog-discourse` | > | import |
| `ams-imp-blog-factcheck` | > | import |
| `ams-imp-blog-flow` | > | import |
| `ams-imp-blog-geo` | > | import |
| `ams-imp-blog-google` | > | import |
| `ams-imp-blog-image` | > | import |
| `ams-imp-blog-locale-audit` | > | import |
| `ams-imp-blog-localize` | > | import |
| `ams-imp-blog-multilingual` | > | import |
| `ams-imp-blog-notebooklm` | > | import |
| `ams-imp-blog-outline` | > | import |
| `ams-imp-blog-persona` | > | import |
| `ams-imp-blog-repurpose` | > | import |
| `ams-imp-blog-rewrite` | > | import |
| `ams-imp-blog-schema` | > | import |
| `ams-imp-blog-seo-check` | > | import |
| `ams-imp-blog-strategy` | > | import |
| `ams-imp-blog-style` | Learn author writing style from 5 to 10 existing blog posts and generate a voice profile for /blog style learn, VOICE.md, blog-persona, and blog-write when user | import |
| `ams-imp-blog-taxonomy` | > | import |
| `ams-imp-blog-translate` | > | import |
| `ams-imp-blog-write` | > | import |
| `ams-imp-book-to-skill` | Converts books, documentation folders, and source collections (PDF, EPUB, | import |
| `ams-imp-brand-discovery` | >- | import |
| `ams-imp-brand-voice` | Build a source-derived writing style profile from real posts, essays, launch notes, docs, or site copy, then reuse that profile across content, outreach, and so | import |
| `ams-imp-browser-qa` | Use this skill to automate visual testing and UI interaction verification using browser automation after deploying features. | import |
| `ams-imp-busybox-on-windows` | How to use a Win32 build of BusyBox to run many of the standard UNIX command line tools on Windows. | import |
| `ams-imp-capture` | 'Captures and organizes chaotic brain dumps into a structured, actionable | import |
| `ams-imp-ceo-advisor` | Executive leadership guidance for strategic decision-making, organizational development, and stakeholder management. Includes strategy analyzer, financial scena | import |
| `ams-imp-chief-ai-officer-advisor` | 'Chief AI Officer advisory for startups: model build-vs-buy decisions | import |
| `ams-imp-clean-architecture` | Apply Robert C. Martin-inspired architecture rules when separating business policy from frameworks, databases, UI, or infrastructure details. | import |
| `ams-imp-clean-code` | Apply Robert C. Martin-inspired clean code rules when improving readability, naming, function design, responsibilities, or testable everyday code. | import |
| `ams-imp-click-path-audit` | Trace every user-facing button/touchpoint through its full state change sequence to find bugs where functions individually work but cancel each other out, produ | import |
| `ams-imp-cloudflare-deploy` | Deploy applications and infrastructure to Cloudflare using Workers, Pages, and related platform services. Use when the user asks to deploy, host, publish, or se | import |
| `ams-imp-code-complete` | Apply Steve McConnell-inspired construction rules when implementing routines, variables, classes, control flow, defensive code, or tests. | import |
| `ams-imp-competitive-intel` | Systematic competitor tracking that feeds CMO positioning, CRO battlecards, | import |
| `ams-imp-competitive-platform-analysis` | >- | import |
| `ams-imp-content-creator` | Create SEO-optimized marketing content with consistent brand voice. Includes brand voice analyzer, SEO optimizer, content frameworks, and social media templates | import |
| `ams-imp-content-engine` | Create platform-native content systems for X, LinkedIn, TikTok, YouTube, newsletters, and repurposed multi-platform campaigns. Use when the user wants social po | import |
| `ams-imp-content-humanizer` | 'Makes AI-generated content sound genuinely human — not just cleaned | import |
| `ams-imp-context-budget` | Audits Claude Code context window consumption across agents, skills, MCP servers, and rules. Identifies bloat, redundant components, and produces prioritized to | import |
| `ams-imp-copy-editing` | When the user wants to edit, review, or improve existing marketing copy. | import |
| `ams-imp-core-web-vitals` | Optimize Core Web Vitals (LCP, INP, CLS) for better page experience and search ranking. Use when asked to "improve Core Web Vitals", "fix LCP", "reduce CLS", "o | import |
| `ams-imp-cto-advisor` | Technical leadership guidance for engineering teams, architecture decisions, and technology strategy. Includes tech debt analyzer, team scaling calculator, engi | import |
| `ams-imp-curviate` | Entry point for driving LinkedIn work through the Curviate CLI: which skill answers which task, how to resolve the `curviate` binary, the retrieval-mode concept | import |
| `ams-imp-curviate-engage` | Create and engage with LinkedIn content using the Curviate CLI. Covers `post` (get, create, react, unreact, reactions, delete, save, saved, unsave, user-posts,  | import |
| `ams-imp-curviate-inbox` | Read and send LinkedIn messages with the Curviate CLI. Covers `inbox` (list, get, messages, search, mark-read), `inboxes` (personal and company-page discovery), | import |
| `ams-imp-curviate-jobs` | Create, publish and manage classic LinkedIn job postings with the Curviate CLI, and read their applicants. Covers `job` (get, list, create, update, budget, publ | import |
| `ams-imp-curviate-network` | Grow and manage a LinkedIn network with the Curviate CLI. Covers `connect` (send with a note, sent, received, accept, decline, cancel), `profile follow`/`unfoll | import |
| `ams-imp-curviate-premium` | Drive LinkedIn Sales Navigator and Recruiter through the Curviate CLI. Covers `sales-nav` (search, profile, message, lead and account lists, save-lead, save-acc | import |
| `ams-imp-curviate-profile` | Read and write LinkedIn profiles and company pages with the Curviate CLI, and resolve human search terms into the opaque filter ids the search commands need. Co | import |
| `ams-imp-curviate-quickstart` | The first run: install the Curviate CLI, authenticate this machine with `curviate setup`, confirm with `curviate doctor`, connect a LinkedIn account, and prove  | import |
| `ams-imp-curviate-search` | Find people, companies, posts, jobs, service providers and groups on LinkedIn with the Curviate CLI. Covers `search people\|companies\|posts\|jobs\|services\|gr | import |
| `ams-imp-data-processing-nemo-curator` | GPU-accelerated data curation for LLM training. Supports text/image/video/audio. Features fuzzy deduplication (16× faster), quality filtering (30+ heuristics),  | import |
| `ams-imp-data-processing-ray-data` | Scalable data processing for ML workloads. Streaming execution across CPU/GPU, supports Parquet/CSV/JSON/images. Integrates with Ray Train, PyTorch, TensorFlow. | import |
| `ams-imp-database` | Add official Railway database services (Postgres, Redis, MySQL, MongoDB). Use when user wants to add a database, says "add postgres", "add redis", "add database | import |
| `ams-imp-database-schema-designer` | Design robust, scalable database schemas for SQL and NoSQL databases. Provides normalization guidelines, indexing strategies, migration patterns, constraint des | import |
| `ams-imp-deep-research` | 'Run a disciplined, multi-source research investigation for a high-stakes | import |
| `ams-imp-deep-work` | Use when someone wants to plan a deep work day, time-block their calendar | import |
| `ams-imp-delivery-gate` | Stop hook that blocks Claude from finishing until quality checks pass. Detects rationalization patterns (surface text heuristics), stale learning logs (filesyst | import |
| `ams-imp-dependabot-review` | Review and manage Dependabot PRs. Categorizes by risk, checks CI status, auto-merges safe updates, and reports issues. Use when the user says "review dependabot | import |
| `ams-imp-dependency-updater` | Smart dependency management for any language. Auto-detects project type, applies safe updates automatically, prompts for major versions, diagnoses and fixes dep | import |
| `ams-imp-deploy` | Deploy code to Railway using "railway up". Use when user wants to push code, says "railway up", "deploy", "ship", or "push". For initial setup or creating servi | import |
| `ams-imp-deployment` | Manage Railway deployments - view logs, redeploy, restart, or remove deployments. Use for deployment lifecycle (remove, stop, redeploy, restart), deployment vis | import |
| `ams-imp-deployment-patterns` | Deployment workflows, CI/CD pipeline patterns, Docker containerization, health checks, rollback strategies, and production readiness checklists for web applicat | import |
| `ams-imp-design` | Comprehensive design skill: brand identity, design tokens, UI styling, logo generation (55 styles, Gemini, Atlas Cloud, or MuAPI AI), corporate identity program | import |
| `ams-imp-design-system` | Token architecture, component specifications, and slide generation. Three-layer tokens (primitive→semantic→component), CSS variables, spacing/typography scales, | import |
| `ams-imp-design-system-starter` | Create and evolve design systems with design tokens, component architecture, accessibility guidelines, and documentation templates. Ensures consistent, scalable | import |
| `ams-imp-designing-data-intensive-applications` | Apply Martin Kleppmann-inspired data-system rules when designing reliability, scalability, consistency, replication, transactions, streams, or schema evolution. | import |
| `ams-imp-develop-web-game` | Use when Codex is building or iterating on a web game (HTML/JS) and needs a reliable development + testing loop: implement small changes, run a Playwright-based | import |
| `ams-imp-devil` | > | import |
| `ams-imp-diagram-design` | Create branded architecture, IT current-state, flowchart, sequence, state machine, ER/data model, timeline, swimlane, quadrant, radar/spider, polar chart (polar | import |
| `ams-imp-distributed-training-accelerate` | Simplest distributed training API. 4 lines to add distributed support to any PyTorch script. Unified API for DeepSpeed/FSDP/Megatron/DDP. Automatic device place | import |
| `ams-imp-distributed-training-deepspeed` | Expert guidance for distributed training with DeepSpeed - ZeRO optimization stages, pipeline parallelism, FP16/BF16/FP8, 1-bit Adam, sparse attention | import |
| `ams-imp-distributed-training-megatron-core` | Trains large language models (2B-462B parameters) using NVIDIA Megatron-Core with advanced parallelism strategies. Use when training models >1B parameters, need | import |
| `ams-imp-distributed-training-pytorch-fsdp` | Expert guidance for Fully Sharded Data Parallel training with PyTorch FSDP - parameter sharding, mixed precision, CPU offloading, FSDP2 | import |
| `ams-imp-distributed-training-pytorch-lightning` | High-level PyTorch framework with Trainer class, automatic distributed training (DDP/FSDP/DeepSpeed), callbacks system, and minimal boilerplate. Scales from lap | import |
| `ams-imp-distributed-training-ray-train` | Distributed training orchestration across clusters. Scales PyTorch/TensorFlow/HuggingFace from laptop to 1000s of nodes. Built-in hyperparameter tuning with Ray | import |
| `ams-imp-doc` | Use when the task involves reading, creating, or editing `.docx` documents, especially when formatting or layout fidelity matters; prefer `python-docx` plus the | import |
| `ams-imp-doc-chaser-lite` | Free lite skill — drafts one friendly (level-1) client document-request email for a single tax client from a short brief plus the practice profile. A strict sub | import |
| `ams-imp-domain` | Add, view, or remove domains for Railway services. Use when user wants to add a domain, generate a railway domain, check current domains, get the URL for a serv | import |
| `ams-imp-domain-driven-design` | Apply Eric Evans-inspired DDD rules when modeling a complex domain, defining bounded contexts, protecting ubiquitous language, or designing aggregates. | import |
| `ams-imp-domain-driven-design-distilled` | Apply Vaughn Vernon-inspired lightweight DDD rules when using bounded contexts, subdomains, context maps, and tactical modeling without excess ceremony. | import |
| `ams-imp-emerging-techniques-knowledge-distillation` | Compress large language models using knowledge distillation from teacher to student models. Use when deploying smaller models with retained performance, transfe | import |
| `ams-imp-emerging-techniques-long-context` | Extend context windows of transformer models using RoPE, YaRN, ALiBi, and position interpolation techniques. Use when processing long documents (32k-128k+ token | import |
| `ams-imp-emerging-techniques-model-merging` | Merge multiple fine-tuned models using mergekit to combine capabilities without retraining. Use when creating specialized models by blending domain-specific exp | import |
| `ams-imp-emerging-techniques-model-pruning` | Reduce LLM size and accelerate inference using pruning techniques like Wanda and SparseGPT. Use when compressing models without retraining, achieving 50% sparsi | import |
| `ams-imp-emerging-techniques-moe-training` | Train Mixture of Experts (MoE) models using DeepSpeed or HuggingFace. Use when training large-scale models with limited compute (5× cost reduction vs dense mode | import |
| `ams-imp-emerging-techniques-speculative-decoding` | Accelerate LLM inference using speculative decoding, Medusa multiple heads, and lookahead decoding techniques. Use when optimizing inference speed (1.5-3.6× spe | import |
| `ams-imp-emil-design-eng` | This skill encodes Emil Kowalski's philosophy on UI polish, component design, animation decisions, and the invisible details that make software feel great. | import |
| `ams-imp-environment` | Query, stage, and apply configuration changes for Railway environments. Use for ANY variable or env var operations, service configuration (source, build setting | import |
| `ams-imp-epic-design` | 'Build immersive, cinematic 2.5D interactive websites using scroll storytelling, | import |
| `ams-imp-evaluation-bigcode-evaluation-harness` | Evaluates code generation models across HumanEval, MBPP, MultiPL-E, and 15+ benchmarks with pass@k metrics. Use when benchmarking code models, comparing coding  | import |
| `ams-imp-evaluation-lm-evaluation-harness` | Evaluates LLMs across 60+ academic benchmarks (MMLU, HumanEval, GSM8K, TruthfulQA, HellaSwag). Use when benchmarking model quality, comparing models, reporting  | import |
| `ams-imp-evaluation-nemo-evaluator` | Evaluates LLMs across 100+ benchmarks from 18+ harnesses (MMLU, HumanEval, GSM8K, safety, VLM) with multi-backend execution. Use when needing scalable evaluatio | import |
| `ams-imp-exa-search` | Semantic search, similar content discovery, and structured research using Exa API | import |
| `ams-imp-fal-ai-media` | Unified media generation via fal.ai MCP — image, video, and audio. Covers text-to-image (Nano Banana), text/image-to-video (Seedance, Kling, Veo 3), text-to-spe | import |
| `ams-imp-fastmcp-server` | Complete guide for building MCP servers with FastMCP 3.0 - tools, resources, authentication, providers, middleware, and deployment. Use when creating Python MCP | import |
| `ams-imp-find-animation-opportunities` | Search a codebase or UI for places that don't animate but should, and reject everything that shouldn't. Read-only; it proposes motion with exact values, it does | import |
| `ams-imp-fine-tuning-axolotl` | Expert guidance for fine-tuning LLMs with Axolotl - YAML configs, 100+ models, LoRA/QLoRA, DPO/KTO/ORPO/GRPO, multimodal support | import |
| `ams-imp-fine-tuning-llama-factory` | Expert guidance for fine-tuning LLMs with LLaMA-Factory - WebUI no-code, 100+ models, 2/3/4/5/6/8-bit QLoRA, multimodal support | import |
| `ams-imp-fine-tuning-peft` | Parameter-efficient fine-tuning for LLMs using LoRA, QLoRA, and 25+ methods. Use when fine-tuning large models (7B-70B) with limited GPU memory, when you need t | import |
| `ams-imp-fine-tuning-unsloth` | Expert guidance for fast fine-tuning with Unsloth - 2-5x faster training, 50-80% less memory, LoRA/QLoRA optimization | import |
| `ams-imp-founder-coach` | Personal leadership development for founders and first-time CEOs. Covers | import |
| `ams-imp-frontend-design-direction` | Set an ECC-specific frontend design direction for production UI work. Use when building or improving websites, dashboards, applications, components, landing pag | import |
| `ams-imp-frontend-patterns` | Frontend development patterns for React, Next.js, state management, performance optimization, and UI best practices. Use when building or reviewing React or Nex | import |
| `ams-imp-general-counsel-advisor` | 'General Counsel advisory for startups: contract review (MSA, SaaS, NDA, | import |
| `ams-imp-git-workflow` | Git workflow patterns including branching strategies, commit conventions, merge vs rebase, conflict resolution, and collaborative development best practices for | import |
| `ams-imp-github-ops` | GitHub repository operations, automation, and management. Issue triage, PR management, CI/CD operations, release management, and security monitoring using the g | import |
| `ams-imp-higgsfield-brandkit` | \| | import |
| `ams-imp-higgsfield-generate` | \| | import |
| `ams-imp-higgsfield-marketplace-cards` | \| | import |
| `ams-imp-higgsfield-product-photoshoot` | \| | import |
| `ams-imp-higgsfield-soul-id` | \| | import |
| `ams-imp-higgsfield-video-explainer` | \| | import |
| `ams-imp-higgsfield-websites` | \| | import |
| `ams-imp-higgsfield-youtube-thumbnail` | \| | import |
| `ams-imp-human-gate` | Runs the human-verification lane of an agent loop, and proves review | import |
| `ams-imp-imagegen` | Use when the user asks to generate or edit images via the OpenAI Image API (for example: generate image, edit/inpaint/mask, background removal or replacement, t | import |
| `ams-imp-impeccable` | Use when the user wants to design, redesign, shape, critique, audit, polish, clarify, distill, harden, optimize, adapt, animate, colorize, extract, or otherwise | import |
| `ams-imp-implementing-domain-driven-design` | Apply Vaughn Vernon-inspired implementation DDD rules when building aggregates, domain events, repositories, application services, or context integrations. | import |
| `ams-imp-improve-animations` | Survey a codebase's animation and motion code as a senior motion advisor, then produce a prioritized audit and self-contained implementation plans for other age | import |
| `ams-imp-inference-serving-llama-cpp` | Runs LLM inference on CPU, Apple Silicon, and consumer GPUs without NVIDIA hardware. Use for edge deployment, M1/M2/M3 Macs, AMD/Intel GPUs, or when CUDA is una | import |
| `ams-imp-inference-serving-sglang` | Fast structured generation and serving for LLMs with RadixAttention prefix caching. Use for JSON/regex outputs, constrained decoding, agentic workflows with too | import |
| `ams-imp-inference-serving-tensorrt-llm` | Optimizes LLM inference with NVIDIA TensorRT for maximum throughput and lowest latency. Use for production deployment on NVIDIA GPUs (A100/H100), when you need  | import |
| `ams-imp-inference-serving-vllm` | Serves LLMs with high throughput using vLLM's PagedAttention and continuous batching. Use when deploying production LLM APIs, optimizing inference latency/throu | import |
| `ams-imp-infrastructure-lambda-labs` | Reserved and on-demand GPU cloud instances for ML training and inference. Use when you need dedicated GPU instances with simple SSH access, persistent filesyste | import |
| `ams-imp-infrastructure-modal` | Serverless GPU cloud platform for running ML workloads. Use when you need on-demand GPU access without infrastructure management, deploying ML models as APIs, o | import |
| `ams-imp-infrastructure-skypilot` | Multi-cloud orchestration for ML workloads with automatic cost optimization. Use when you need to run training or batch jobs across multiple clouds, leverage sp | import |
| `ams-imp-internal-narrative` | Build and maintain one coherent company story across all audiences — | import |
| `ams-imp-internet-court` | The trust layer for agent-to-agent commerce — natural-language mandates, delegated permissions (ERC-7710), x402 payments, escrow, and dispute resolution as one  | import |
| `ams-imp-jev-seo` | > | import |
| `ams-imp-jupyter-notebook` | Use when the user asks to create, scaffold, or edit Jupyter notebooks (`.ipynb`) for experiments, explorations, or tutorials; prefer the bundled templates and r | import |
| `ams-imp-knowledge-ops` | Use when a Head of Ops, Knowledge Manager, or TPM-Internal needs to author, | import |
| `ams-imp-launch-strategy` | When the user wants to plan a product launch, feature announcement, or | import |
| `ams-imp-linkedin-analytics` | Use when someone wants to understand their own LinkedIn numbers — which | import |
| `ams-imp-linkedin-content` | Use when someone wants to write, edit, or lint a LinkedIn post — a story, | import |
| `ams-imp-linkedin-engagement` | Use when someone wants to grow reach through comments, replies, groups, | import |
| `ams-imp-linkedin-profile` | Use when someone wants their LinkedIn profile audited or rewritten — | import |
| `ams-imp-linkedin-strategy` | Use when someone needs a LinkedIn plan rather than a post — content pillars, | import |
| `ams-imp-liquid-glass-design` | iOS 26 Liquid Glass design system — dynamic glass material with blur, reflection, and interactive morphing for SwiftUI, UIKit, and WidgetKit. Use when building  | import |
| `ams-imp-litreview` | Academic literature orientation skill that searches papers via free keyless | import |
| `ams-imp-llm-wiki` | Use when building or maintaining a persistent personal knowledge base | import |
| `ams-imp-loki-mode` | Multi-agent autonomous startup system for Claude Code. Triggers on "Loki Mode". Orchestrates 100+ specialized agents across engineering, QA, DevOps, security, d | import |
| `ams-imp-make-interfaces-feel-better` | Apply concrete design-engineering details that make interfaces feel polished. Use when reviewing or improving UI spacing, typography, borders, shadows, motion,  | import |
| `ams-imp-manim` | Comprehensive guide for Manim Community - Python framework for creating mathematical animations and educational videos with programmatic control | import |
| `ams-imp-manim-video` | Build reusable Manim explainers for technical concepts, graphs, system diagrams, and product walkthroughs, then hand off to the wider ECC video stack if needed. | import |
| `ams-imp-market-research` | Conduct market research, competitive analysis, investor due diligence, and industry intelligence with source attribution and decision-oriented summaries. Use wh | import |
| `ams-imp-marketing-demand-acquisition` | Multi-channel demand generation, paid media optimization, SEO strategy, and partnership programs for Series A+ startups. Includes CAC calculator, channel playbo | import |
| `ams-imp-marketing-psychology` | When the user wants to apply psychological principles, mental models, | import |
| `ams-imp-marketing-strategy-pmm` | Product marketing, positioning, GTM strategy, and competitive intelligence. Includes ICP definition, April Dunford positioning methodology, launch playbooks, co | import |
| `ams-imp-markitdown` | Convert files and office documents to Markdown. Supports PDF, DOCX, PPTX, XLSX, images (with OCR), audio (with transcription), HTML, CSV, JSON, XML, ZIP, YouTub | import |
| `ams-imp-mechanistic-interpretability-nnsight` | Provides guidance for interpreting and manipulating neural network internals using nnsight with optional NDIF remote execution. Use when needing to run interpre | import |
| `ams-imp-mechanistic-interpretability-pyvene` | Provides guidance for performing causal interventions on PyTorch models using pyvene's declarative intervention framework. Use when conducting causal tracing, a | import |
| `ams-imp-mechanistic-interpretability-saelens` | Provides guidance for training and analyzing Sparse Autoencoders (SAEs) using SAELens to decompose neural network activations into interpretable features. Use w | import |
| `ams-imp-mechanistic-interpretability-transformer-lens` | Provides guidance for mechanistic interpretability research using TransformerLens to inspect and manipulate transformer internals via HookPoints and activation  | import |
| `ams-imp-meetings` | Use when someone wants to decide whether a meeting is worth calling, | import |
| `ams-imp-memory-engineering` | Use when designing, reviewing, or paying for an agent memory system — | import |
| `ams-imp-metrics` | Query resource usage metrics for Railway services. Use when user asks about resource usage, CPU, memory, network, disk, or service performance like "how much me | import |
| `ams-imp-ml-paper-writing` | Write publication-ready ML/AI papers for NeurIPS, ICML, ICLR, ACL, AAAI, COLM. Use when drafting papers from research repos, structuring arguments, verifying ci | import |
| `ams-imp-mlops-mlflow` | Track ML experiments, manage model registry with versioning, deploy models to production, and reproduce experiments with MLflow - framework-agnostic ML lifecycl | import |
| `ams-imp-mlops-tensorboard` | Visualize training metrics, debug models with histograms, compare experiments, visualize model graphs, and profile performance with TensorBoard - Google's ML vi | import |
| `ams-imp-mlops-weights-and-biases` | Track ML experiments with automatic logging, visualize training in real-time, optimize hyperparameters with sweeps, and manage model registry with W&B - collabo | import |
| `ams-imp-mobile-native` | Make a web app feel native on a phone — the small CSS and meta-tag fixes that separate "a website in a browser" from something that feels installed. Covers stic | import |
| `ams-imp-model-architecture-litgpt` | Implements and trains LLMs using Lightning AI's LitGPT with 20+ pretrained architectures (Llama, Gemma, Phi, Qwen, Mistral). Use when need clean model implement | import |
| `ams-imp-model-architecture-mamba` | State-space model with O(n) complexity vs Transformers' O(n²). 5× faster inference, million-token sequences, no KV cache. Selective SSM with hardware-aware desi | import |
| `ams-imp-model-architecture-nanogpt` | Educational GPT implementation in ~300 lines. Reproduces GPT-2 (124M) on OpenWebText. Clean, hackable code for learning transformers. By Andrej Karpathy. Perfec | import |
| `ams-imp-model-architecture-rwkv` | RNN+Transformer hybrid with O(n) inference. Linear time, infinite context, no KV cache. Train like GPT (parallel), infer like RNN (sequential). Linux Foundation | import |
| `ams-imp-model-architecture-torchtitan` | Provides PyTorch-native distributed LLM pretraining using torchtitan with 4D parallelism (FSDP2, TP, PP, CP). Use when pretraining Llama 3.1, DeepSeek V3, or cu | import |
| `ams-imp-motion-advanced` | Advanced motion patterns for React / Next.js — drag & drop, gestures, text animations, SVG path drawing, custom hooks, imperative sequences (useAnimate), loader | import |
| `ams-imp-motion-canvas` | Complete production-ready guide for Motion Canvas with ESM/CommonJS workarounds, full setup templates, and troubleshooting for programmatic video creation using | import |
| `ams-imp-motion-design` | > | import |
| `ams-imp-motion-foundations` | Motion tokens, spring presets, performance rules, device adaptation, accessibility enforcement, and SSR safety for React / Next.js using motion/react. Foundatio | import |
| `ams-imp-motion-patterns` | Production-ready animation patterns for React / Next.js — button, modal, toast, stagger, page transitions, exit animations, scroll, and layout — built on motion | import |
| `ams-imp-multimodal-audiocraft` | PyTorch library for audio generation including text-to-music (MusicGen) and text-to-sound (AudioGen). Use when you need to generate music from text descriptions | import |
| `ams-imp-multimodal-blip-2` | Vision-language pre-training framework bridging frozen image encoders and LLMs. Use when you need image captioning, visual question answering, image-text retrie | import |
| `ams-imp-multimodal-clip` | OpenAI's model connecting vision and language. Enables zero-shot image classification, image-text matching, and cross-modal retrieval. Trained on 400M image-tex | import |
| `ams-imp-multimodal-llava` | Large Language and Vision Assistant. Enables visual instruction tuning and image-based conversations. Combines CLIP vision encoder with Vicuna/LLaMA language mo | import |
| `ams-imp-multimodal-segment-anything` | Foundation model for image segmentation with zero-shot transfer. Use when you need to segment any object in images using points, boxes, or masks as prompts, or  | import |
| `ams-imp-multimodal-stable-diffusion` | State-of-the-art text-to-image generation with Stable Diffusion models via HuggingFace Diffusers. Use when generating images from text prompts, performing image | import |
| `ams-imp-multimodal-whisper` | OpenAI's general-purpose speech recognition model. Supports 99 languages, transcription, translation to English, and language identification. Six model sizes fr | import |
| `ams-imp-netlify-deploy` | Deploy web projects to Netlify using the Netlify CLI (`npx netlify`). Use when the user asks to deploy, host, publish, or link a site/repo on Netlify, including | import |
| `ams-imp-neuropixels-analysis` | Neuropixels neural recording analysis. Load SpikeGLX/OpenEphys data, preprocess, motion correction, Kilosort4 spike sorting, quality metrics, Allen/IBL curation | import |
| `ams-imp-new` | Create Railway projects, services, and databases with proper configuration. Use when user says "setup", "deploy to railway", "initialize", "create project", "cr | import |
| `ams-imp-nextjs-turbopack` | Next.js 16+ and Turbopack — incremental bundling, FS caching, dev speed, and when to use Turbopack vs webpack. | import |
| `ams-imp-notebooklm` | Use this skill to query your Google NotebookLM notebooks directly from Claude Code for source-grounded, citation-backed answers from Gemini. Browser automation, | import |
| `ams-imp-observability-langsmith` | LLM observability platform for tracing, evaluation, and monitoring. Use when debugging LLM applications, evaluating model outputs against datasets, monitoring p | import |
| `ams-imp-observability-phoenix` | Open-source AI observability platform for LLM tracing, evaluation, and monitoring. Use when debugging LLM applications with detailed traces, running evaluations | import |
| `ams-imp-optimization-awq` | Activation-aware weight quantization for 4-bit LLM compression with 3x speedup and minimal accuracy loss. Use when deploying large models (7B-70B) on limited GP | import |
| `ams-imp-optimization-bitsandbytes` | Quantizes LLMs to 8-bit or 4-bit for 50-75% memory reduction with minimal accuracy loss. Use when GPU memory is limited, need to fit larger models, or want fast | import |
| `ams-imp-optimization-flash-attention` | Optimizes transformer attention with Flash Attention for 2-4x speedup and 10-20x memory reduction. Use when training/running transformers with long sequences (> | import |
| `ams-imp-optimization-gguf` | GGUF format and llama.cpp quantization for efficient CPU/GPU inference. Use when deploying models on consumer hardware, Apple Silicon, or when needing flexible  | import |
| `ams-imp-optimization-gptq` | Post-training 4-bit quantization for LLMs with minimal accuracy loss. Use for deploying large models (70B, 405B) on consumer GPUs, when you need 4× memory reduc | import |
| `ams-imp-optimization-hqq` | Half-Quadratic Quantization for LLMs without calibration data. Use when quantizing models to 4/3/2-bit precision without needing calibration datasets, for fast  | import |
| `ams-imp-patentfig` | Generate patent-office-compliant figures via the PatentFig AI API — patent line art from text (PNG or SVG), vectorize drawings to SVG/DXF/vector PDF, AI-upscale | import |
| `ams-imp-patterns-of-enterprise-application-architecture` | Apply Martin Fowler-inspired enterprise architecture rules when choosing layers, service layers, transaction scripts, domain models, repositories, mappers, or D | import |
| `ams-imp-pick-ui-library` | Pick the right library for a given frontend task from a curated, opinionated list — numbers, OTP inputs, charts, command menus, virtualization, drag and drop, t | import |
| `ams-imp-plan-canvas` | Open plans and HTML artifacts in a local browser canvas where the human annotates elements, chats, and approves or requests changes without leaving the page. Us | import |
| `ams-imp-plan-orchestrate` | Read a plan document, decompose it into steps, design a per-step agent chain from the ECC catalogue, and emit ready-to-paste /orchestrate custom prompts. Genera | import |
| `ams-imp-playwright` | Use when the task requires automating a real browser from the terminal (navigation, form filling, snapshots, screenshots, data extraction, UI-flow debugging) vi | import |
| `ams-imp-ponytail` | > | import |
| `ams-imp-post-training-grpo-rl-training` | Expert guidance for GRPO/RL fine-tuning with TRL for reasoning and task-specific model training | import |
| `ams-imp-post-training-miles` | Provides guidance for enterprise-grade RL training using miles, a production-ready fork of slime. Use when training large MoE models with FP8/INT4, needing trai | import |
| `ams-imp-post-training-openrlhf` | High-performance RLHF framework with Ray+vLLM acceleration. Use for PPO, GRPO, RLOO, DPO training of large models (7B-70B+). Built on Ray, vLLM, ZeRO-3. 2× fast | import |
| `ams-imp-post-training-simpo` | Simple Preference Optimization for LLM alignment. Reference-free alternative to DPO with better performance (+6.4 points on AlpacaEval 2.0). No reference model  | import |
| `ams-imp-post-training-slime` | Provides guidance for LLM post-training with RL using slime, a Megatron+SGLang framework. Use when training GLM models, implementing custom data generation work | import |
| `ams-imp-post-training-torchforge` | Provides guidance for PyTorch-native agentic RL using torchforge, Meta's library separating infra from algorithms. Use when you want clean RL abstractions, easy | import |
| `ams-imp-post-training-trl-fine-tuning` | Fine-tune LLMs using reinforcement learning with TRL - SFT for instruction tuning, DPO for preference alignment, PPO/GRPO for reward optimization, and reward mo | import |
| `ams-imp-post-training-verl` | Provides guidance for training LLMs with reinforcement learning using verl (Volcano Engine RL). Use when implementing RLHF, GRPO, PPO, or other RL algorithms fo | import |
| `ams-imp-postgres-best-practices` | Postgres performance optimization and best practices from Supabase. Use this skill when writing, reviewing, or optimizing Postgres queries, schema designs, or d | import |
| `ams-imp-postgres-schema-design` | Comprehensive PostgreSQL-specific table design reference covering data types, indexing, constraints, performance patterns, and advanced features | import |
| `ams-imp-product-capability` | Translate PRD intent, roadmap asks, or product discussions into an implementation-ready capability plan that exposes constraints, invariants, interfaces, and un | import |
| `ams-imp-product-decision-agent` | 中文产品决策 Agent。用于中国大陆互联网产品、运营、增长、商业化、数据、项目推进和组织协作场景：产品规划、需求分析、PRD、需求优先级、排期、版本规划、Roadmap、MVP、灰度、上线、迭代、增长停滞、拉新、投放、渠道、裂变、CAC、LTV、ROI、留存、转化、DAU/MAU、GMV、漏斗、社区运营、内容供给、创 | import |
| `ams-imp-product-lens` | Use this skill to validate the "why" before building, run product diagnostics, and pressure-test product direction before the request becomes an implementation  | import |
| `ams-imp-production-audit` | Local-evidence production readiness audit for shipped apps, pre-launch reviews, post-merge checks, and "what breaks in prod?" questions without sending repo dat | import |
| `ams-imp-projects` | List, switch, and configure Railway projects. Use when user wants to list all projects, switch projects, rename a project, enable/disable PR deploys, make a pro | import |
| `ams-imp-prompt-engineering-dspy` | Build complex AI systems with declarative programming, optimize prompts automatically, create modular RAG systems and agents with DSPy - Stanford NLP's framewor | import |
| `ams-imp-prompt-engineering-guidance` | Control LLM output with regex and grammars, guarantee valid JSON/XML/code generation, enforce structured formats, and build multi-step workflows with Guidance - | import |
| `ams-imp-prompt-engineering-instructor` | Extract structured data from LLM responses with Pydantic validation, retry failed extractions automatically, parse complex JSON with type safety, and stream par | import |
| `ams-imp-prompt-engineering-outlines` | Guarantee valid JSON/XML/code structure during generation, use Pydantic models for type-safe outputs, support local models (Transformers, vLLM), and maximize in | import |
| `ams-imp-prompt-optimizer` | >- | import |
| `ams-imp-prototype` | Build multiple genuinely different versions of a UI piece you describe, rendered behind a visual picker so you can flip through them live and promote the one th | import |
| `ams-imp-pudu-task-telemetry` | Measure local AI task latency, token usage, errors and verified outcomes using Pudu AI hardware evidence and installed Ollama models. Use when comparing local t | import |
| `ams-imp-pulse` | 'Multi-source recency research skill that takes the pulse of any topic | import |
| `ams-imp-rag-chroma` | Open-source embedding database for AI applications. Store embeddings and metadata, perform vector and full-text search, filter by metadata. Simple 4-function AP | import |
| `ams-imp-rag-faiss` | Facebook's library for efficient similarity search and clustering of dense vectors. Supports billions of vectors, GPU acceleration, and various index types (Fla | import |
| `ams-imp-rag-pinecone` | Managed vector database for production AI applications. Fully managed, auto-scaling, with hybrid search (dense + sparse), metadata filtering, and namespaces. Lo | import |
| `ams-imp-rag-qdrant` | High-performance vector similarity search engine for RAG and semantic search. Use when building production RAG systems requiring fast nearest neighbor search, h | import |
| `ams-imp-rag-sentence-transformers` | Framework for state-of-the-art sentence, text, and image embeddings. Provides 5000+ pre-trained models for semantic similarity, clustering, and retrieval. Suppo | import |
| `ams-imp-railway-docs` | Fetch up-to-date Railway documentation to answer questions accurately. Use when user asks about Railway features, how Railway works, or shares a docs.railway.co | import |
| `ams-imp-react-best-practices` | Comprehensive React and Next.js performance optimization guide with 40+ rules for eliminating waterfalls, optimizing bundles, and improving rendering. Use when  | import |
| `ams-imp-react-performance` | React and Next.js performance optimization patterns adapted from Vercel Engineering's React Best Practices (https://github.com/vercel-labs/agent-skills). Organi | import |
| `ams-imp-refactoring` | Apply Martin Fowler-inspired refactoring rules when improving existing code structure while preserving observable behavior. | import |
| `ams-imp-refactoring-guru` | Apply Refactoring.Guru-inspired rules when diagnosing code smells, choosing refactoring techniques, and stopping cleanup before uncontrolled redesign. | import |
| `ams-imp-reflect` | 'Mid-conversation reflection skill that pauses execution and zooms out | import |
| `ams-imp-release-it` | Apply Michael T. Nygard-inspired production reliability rules when designing failure handling, timeouts, retries, circuit breakers, observability, or deployment | import |
| `ams-imp-remotion` | Best practices and comprehensive guide for Remotion - programmatic video creation in React with animations, compositions, and media handling | import |
| `ams-imp-remotion-video-creation` | Best practices for Remotion - Video creation in React. 29 domain-specific rules covering 3D, animations, audio, captions, charts, transitions, and more. Use whe | import |
| `ams-imp-review-animations` | Reviews animation and motion code against a high craft bar derived from Emil Kowalski's design engineering philosophy. Default to flagging; approval is earned. | import |
| `ams-imp-roast` | Use when someone asks to roast an idea, pressure-test or stress-test | import |
| `ams-imp-roier-seo` | Technical SEO auditor and fixer. Runs Lighthouse/PageSpeed audits on websites or local dev servers, analyzes SEO/performance/accessibility scores, and automatic | import |
| `ams-imp-rote` | Compile a proven agent skill (a SKILL.md plus references) into a deterministic pipeline that runs without an LLM in the loop, then serve it back to Claude as an | import |
| `ams-imp-safety-alignment-constitutional-ai` | Anthropic's method for training harmless AI through self-improvement. Two-phase approach - supervised learning with self-critique/revision, then RLAIF (RL from  | import |
| `ams-imp-safety-alignment-llamaguard` | Meta's 7-8B specialized moderation model for LLM input/output filtering. 6 safety categories - violence/hate, sexual content, weapons, substances, self-harm, cr | import |
| `ams-imp-safety-alignment-nemo-guardrails` | NVIDIA's runtime safety framework for LLM applications. Features jailbreak detection, input/output validation, fact-checking, hallucination detection, PII filte | import |
| `ams-imp-screenshot` | Use when the user explicitly asks for a desktop or system screenshot (full screen, specific app or window, or a pixel region), or when tool-specific capture cap | import |
| `ams-imp-security-best-practices` | Perform language and framework specific security best-practice reviews and suggest improvements. Trigger only when the user explicitly requests security best pr | import |
| `ams-imp-security-ownership-map` | Analyze git repositories to build a security ownership topology (people-to-file), compute bus factor and sensitive-code ownership, and export CSV/JSON for graph | import |
| `ams-imp-security-review` | Use this skill when adding authentication, handling user input, working with secrets, creating API endpoints, or implementing payment/sensitive features. Provid | import |
| `ams-imp-security-scan` | Scan your Claude Code configuration (.claude/ directory) for security vulnerabilities, misconfigurations, and injection risks using AgentShield. Checks CLAUDE.m | import |
| `ams-imp-security-threat-model` | Repository-grounded threat modeling that enumerates trust boundaries, assets, attacker capabilities, abuse paths, and mitigations, and writes a concise Markdown | import |
| `ams-imp-self-eval` | Honestly evaluate AI work quality using a two-axis scoring system. Use | import |
| `ams-imp-seo` | Optimize for search engine visibility and ranking. Use when asked to "improve SEO", "optimize for search", "fix meta tags", "add structured data", "sitemap opti | import |
| `ams-imp-service` | Check service status, rename services, change service icons, link services, or create services with Docker images. For creating services with local code, prefer | import |
| `ams-imp-skill-comply` | Visualize whether skills, rules, and agent definitions are actually followed — auto-generates scenarios at 3 prompt strictness levels, runs agents, classifies b | import |
| `ams-imp-skill-creator` | Create new skills, modify and improve existing skills, and measure skill performance. Use when users want to create a skill from scratch, edit, or optimize an e | import |
| `ams-imp-skill-scout` | Search existing local, marketplace, GitHub, and web skill sources before creating a new skill. Use when the user wants to create, build, fork, or find a skill f | import |
| `ams-imp-skill-stocktake` | Use when auditing Claude skills and commands for quality. Supports Quick Scan (changed skills only) and Full Stocktake modes with sequential subagent batch eval | import |
| `ams-imp-social-publisher` | Agent-driven scheduling and publishing of social media posts across 13 platforms via SocialClaw. Use when the user wants to publish to X, LinkedIn, Instagram, F | import |
| `ams-imp-sora` | Use when the user asks to generate, remix, poll, list, download, or delete Sora videos via OpenAI\u2019s video API using the bundled CLI (`scripts/sora.py`), in | import |
| `ams-imp-speech` | Use when the user asks for text-to-speech narration or voiceover, accessibility reads, audio prompts, or batch speech generation. OpenAI remains the default; At | import |
| `ams-imp-spreadsheet` | Use when tasks involve creating, editing, analyzing, or formatting spreadsheets (`.xlsx`, `.csv`, `.tsv`) using Python (`openpyxl`, `pandas`), especially when f | import |
| `ams-imp-status` | Check current Railway project status for this directory. Use when user asks "railway status", "is it running", "what's deployed", "deployment status", or about  | import |
| `ams-imp-supabase-postgres-best-practices` | Postgres performance optimization and best practices from Supabase. Use this skill when writing, reviewing, or optimizing Postgres queries, schema designs, or d | import |
| `ams-imp-swarmvault` | Use SwarmVault when the user needs a local-first knowledge vault that writes durable markdown, graph, search, dashboard, review, and MCP artifacts to disk from  | import |
| `ams-imp-swiftui-pro` | Comprehensively reviews SwiftUI code for best practices on modern APIs, maintainability, and performance. Use when reading, writing, or reviewing SwiftUI projec | import |
| `ams-imp-taste` | A creative-direction (taste) layer for music videos and short-form edits in the angelcore / cloud-trance / hyperpop visual family. Distills a named-genre aesthe | import |
| `ams-imp-taste-application` | Generate new video against a distilled style pack and cut it into a finished piece - plan takes from the reference's cut rhythm, generate on fal, grade with the | import |
| `ams-imp-taste-distillation` | Measure a set of reference videos into a reusable style pack - colour grade as a 3D LUT, cut rhythm as a shot-length distribution, hero stills, screen-blend ove | import |
| `ams-imp-tasteforge-video` | Use for file-driven multimodal image, video, and 3D-asset discovery; taste interviews; distill or apply workflows; style-pack validation; editable EDL/FCPXML ex | import |
| `ams-imp-templates` | Search and deploy services from Railway's template marketplace. Use when user wants to add a service from a template, find templates for a specific use case, or | import |
| `ams-imp-the-pragmatic-programmer` | Apply Hunt and Thomas-inspired pragmatic programming rules when improving engineering judgment, feedback loops, DRY knowledge, orthogonality, automation, or ada | import |
| `ams-imp-think-tank` | Run a Virtual Think Tank — a structured multi-persona debate — before planning or making architectural/design/strategic decisions. Use this skill whenever the u | import |
| `ams-imp-token-budget-advisor` | >- | import |
| `ams-imp-tokenization-huggingface-tokenizers` | Fast tokenizers optimized for research and production. Rust-based implementation tokenizes 1GB in <20 seconds. Supports BPE, WordPiece, and Unigram algorithms.  | import |
| `ams-imp-tokenization-sentencepiece` | Language-independent tokenizer treating text as raw Unicode. Supports BPE and Unigram algorithms. Fast (50k sentences/sec), lightweight (6MB memory), determinis | import |
| `ams-imp-transcribe` | Transcribe audio files to text with optional diarization and known-speaker hints. Use when a user asks to transcribe speech from audio/video, extract text from  | import |
| `ams-imp-typesafe-ai` | > | import |
| `ams-imp-ux-writing` | Create user-centered, accessible interface copy (microcopy) for digital products including buttons, labels, error messages, notifications, forms, onboarding, em | import |
| `ams-imp-vercel-composition-patterns` | React composition patterns that scale. Use when refactoring components with | import |
| `ams-imp-vercel-react-best-practices` | React and Next.js performance optimization guidelines from Vercel Engineering. This skill should be used when writing, reviewing, or refactoring React/Next.js c | import |
| `ams-imp-vercel-react-native-skills` | React Native and Expo best practices for building performant mobile apps. Use | import |
| `ams-imp-vercel-react-view-transitions` | Guide for implementing smooth, native-feeling animations using React's View Transition API (`<ViewTransition>` component, `addTransitionType`, and CSS view tran | import |
| `ams-imp-verification-loop` | A comprehensive verification system for Claude Code sessions. Use when verifying a Claude Code session's work before claiming it is complete. | import |
| `ams-imp-video-editing` | Editorial decisions for talking-head video: what to cut, pacing, filler removal, structure of the final edit. | import |
| `ams-imp-videodb` | See, Understand, Act on video and audio. See- ingest from local files, URLs, RTSP/live feeds, or live record desktop; return realtime context and playable strea | import |
| `ams-imp-web-quality-audit` | Comprehensive web quality audit covering performance, accessibility, SEO, and best practices. Use when asked to "audit my site", "review web quality", "run ligh | import |
| `ams-imp-web-typography` | 'Select, pair, and implement typefaces for web projects. Use when the user mentions "font pairing", "which typeface", "line height", "responsive typography", "w | import |
| `ams-imp-weekly-review` | Use when someone wants to run a weekly review, close open loops, audit | import |
| `ams-imp-working-effectively-with-legacy-code` | Apply Michael Feathers-inspired legacy-code rules when changing hard-to-test code safely with characterization tests, seams, sprout methods, or wrap methods. | import |
| `ams-imp-workspace-orchestration` | Use when working in a persistent-slot workspace that uses docko. Covers slot claims, delegated teammate inheritance, and the rule that code edits inside slots/  | import |
| `ams-imp-worktree-guide` | Interactive guide for parallel development with Ghostty, git worktrees, and Lazygit. Use when setting up multi-task workflows or learning the worktree system. | import |
| `ams-imp-write-a-skill` | Create new agent skills with proper structure, progressive disclosure, | import |
| `ams-imp-write-swift` | How to write modern Swift well — modeling with value types, Swift 6 data-race safety and approachable concurrency (@concurrent, main-actor-by-default, actors, t | import |
| `ams-imp-yeet` | Use only when the user explicitly asks to stage, commit, push, and open a GitHub pull request in one flow using the GitHub CLI (`gh`). | import |
| `ams-in-app-messaging` | Design in-app messages — tooltips, modals, banners, and onboarding flows that guide without annoying. | original |
| `ams-inbox-zero-coach` | Tame email overload with Muse as your coach: the 4D triage method (delete/delegate/respond/defer/file), batching, reply templates, unsubscribing, and a daily 15 | original |
| `ams-incident-commander` | Leading incident response — roles, communication, and decision-making under pressure — use when running or improving on-call response. | original |
| `ams-incident-comms` | Communicate during incidents — stakeholder updates, severity frameworks, war-room comms, and post-incident reviews. | original |
| `ams-incident-reporting-navigator` | Navigate breach and incident notification duties — GDPR, NIS2, sector rules, and building the report-ready capability. | original |
| `ams-incident-responder` | Lead security incident response end to end — preparation, detection, containment, eradication, recovery, and lessons learned. | original |
| `ams-influencer-outreach` | Plan influencer partnerships — finding creators, outreach, negotiation, campaign management, and ROI measurement. | original |
| `ams-infographic-designer` | Turn complex data and processes into clear, honest infographics with strong visual storytelling. | original |
| `ams-inngest` | Build durable serverless workflows with Inngest: step functions, event-driven flows, retries, and scheduling. Use when background work must survive failures and | original |
| `ams-instructor-library` | Get structured, validated outputs from LLMs with Instructor — Pydantic schemas, retries, and reliable JSON extraction. | original |
| `ams-integration-patterns` | Design SaaS integrations — data sync strategies, embedded experiences, marketplace apps, and partner ecosystems. | original |
| `ams-interactive-science-plots` | Building interactive scientific visualizations — Plotly/Bokeh dashboards, linked views, and exploratory data apps. | original |
| `ams-internlm-guide` | Build with Shanghai AI Lab's InternLM models — open models strong in reasoning, code, and Chinese. | original |
| `ams-interview-coach` | Run realistic mock interviews with structured feedback on answers, body language, and storytelling technique. | original |
| `ams-interview-guide` | Plan and conduct research interviews — guides, probing techniques, rapport, recording, and ethical practice. Use when gathering deep qualitative insight from co | original |
| `ams-ionic-pro` | Build cross-platform mobile apps with Ionic: UI components, navigation, Capacitor integration, theming, and performance. Use when building hybrid mobile apps wi | original |
| `ams-issue-triage` | Triaging error reports — prioritization, ownership, and keeping the backlog actionable — works with any error tracker. | original |
| `ams-jailbreak-analysis` | Analyze LLM jailbreak techniques defensively — how bypasses work, detection signals, and hardening strategies. Use for safety research and building more robust  | original |
| `ams-java-pro` | Idiomatic modern Java: project structure, streams, records, concurrency, build tooling, and testing. Use when writing, reviewing, or structuring Java applicatio | original |
| `ams-javascript-pro` | Idiomatic modern JavaScript: ES2022+ features, async patterns, modules, and runtime behavior mastery. Use when writing, reviewing, or debugging JavaScript. | original |
| `ams-jenkins-pro` | Jenkins guidance — pipeline-as-code, agents, shared libraries, credentials, scaling, and hardening. | original |
| `ams-jetpack-compose-pro` | Professional Jetpack Compose: declarative UI, state hoisting, side effects, navigation, and performance. Use when writing, reviewing, or structuring Compose app | original |
| `ams-jira-api-automation` | Automate Jira via its native REST API: bulk issue operations, custom reports, and integrations without middleware. Use when Jira's UI and built-in automation ca | original |
| `ams-jira-pro` | Run Jira effectively: project setup, workflows, JQL, automation, and reporting for software teams. Use when configuring Jira or improving team process around it | original |
| `ams-job-search-strategist` | Build a targeted job search system with pipeline tracking, outreach scripts, and weekly operating cadence. | original |
| `ams-jotai-pro` | Manage atomic React state with Jotai: atoms, derived atoms, async atoms, and scoped providers. Use for granular, bottom-up state in React. | original |
| `ams-json-formatter` | Format, validate, query, and transform JSON with pretty-printing, schema checks, and jq-style workflows. | original |
| `ams-json-pro` | JSON processing mastery — parsing, validation, transformation, and large-file strategies — use when working with JSON data. | original |
| `ams-julia-pro` | Idiomatic Julia: multiple dispatch, type stability, performance patterns, and scientific computing workflows. Use when writing, reviewing, or structuring Julia  | original |
| `ams-jupyter-pro` | Jupyter guidance — notebook best practices, kernels, nbconvert, widgets, reproducibility, and JupyterLab workflows. | original |
| `ams-kafka-pro` | Apache Kafka guidance — topics, partitions, consumer groups, exactly-once semantics, schema registry, and operations. | original |
| `ams-keyboard-shortcuts-pro` | Build a keyboard-first workflow: essential shortcuts per app and OS, custom bindings, and a learning system. Use when you want to cut mouse-dependence and speed | original |
| `ams-kms-pro` | Design key management with KMS/HSM — envelope encryption, key hierarchy, rotation, and access governance. | original |
| `ams-knex-pro` | Knex.js query-builder guidance — migrations, seeds, transactions, query patterns, and production config. | original |
| `ams-knowledge-graphs` | Build and query knowledge graphs — entity extraction, relation modeling, graph databases, and graph-based reasoning. Use when relationships between entities mat | original |
| `ams-kotlin-pro` | Idiomatic Kotlin: null safety, coroutines, data classes, sealed hierarchies, and Android/JVM patterns. Use when writing, reviewing, or structuring Kotlin code. | original |
| `ams-kubernetes-pro` | Kubernetes guidance — workloads, services, config, RBAC, Helm/Kustomize, troubleshooting, and cluster operations. | original |
| `ams-kubernetes-security` | Harden Kubernetes clusters — RBAC, pod security, network policies, secrets, and control-plane protection. | original |
| `ams-kw-accessibility-review` | Run a WCAG 2.1 AA accessibility audit on a design or page. Trigger with "audit accessibility", "check a11y", "is this accessible?", or when reviewing a design f | kw-port |
| `ams-kw-account-context` | 360-degree view of an account - CRM data, recent email threads, docs, transcripts, and internal chat chatter, synthesized into one brief. Use when the user asks | kw-port |
| `ams-kw-account-plan` | Build or refresh a strategic account plan - current state, goals, stakeholder coverage, opportunity map, risks, and the action plan - written to a doc and key f | kw-port |
| `ams-kw-account-tiering` | Score and tier a list of accounts (or your full book) against ICP fit and engagement signals to prioritize where to spend time. Use when the user asks to "tier  | kw-port |
| `ams-kw-ad-manager` | > | kw-port |
| `ams-kw-analyze` | Answer data questions -- from quick lookups to full analyses. Use when looking up a single metric, investigating what's driving a trend or drop, comparing segme | kw-port |
| `ams-kw-ap-processor` | > | kw-port |
| `ams-kw-apollo-prospect` | Full ICP-to-leads pipeline. Describe your ideal customer in plain English and get a ranked table of enriched decision-maker leads with emails and phone numbers. | kw-port |
| `ams-kw-audit-support` | Support SOX 404 compliance with control testing methodology, sample selection, and documentation standards. Use when generating testing workpapers, selecting au | kw-port |
| `ams-kw-bio-research-scvi-tools` | Deep learning for single-cell analysis using scvi-tools. This skill should be used when users need (1) data integration and batch correction with scVI/scANVI, ( | kw-port |
| `ams-kw-bio-research-start` | Set up your bio-research environment and explore available tools. Use when first getting oriented with the plugin, checking which literature, drug-discovery, or | kw-port |
| `ams-kw-brand-review` | Review content against your brand voice, style guide, and messaging pillars, flagging deviations by severity with specific before/after fixes. Use when checking | kw-port |
| `ams-kw-brand-style` | > | kw-port |
| `ams-kw-brand-voice-enforcement` | > | kw-port |
| `ams-kw-brief` | Generate contextual briefings for legal work — daily summary, topic research, or incident response. Use when starting your day and need a scan of legal-relevant | kw-port |
| `ams-kw-build-agent` | > | kw-port |
| `ams-kw-build-connector` | > | kw-port |
| `ams-kw-build-dashboard` | Build an interactive HTML dashboard with charts, filters, and tables. Use when creating an executive overview with KPI cards, turning query results into a share | kw-port |
| `ams-kw-build-zoom-bot` | Build a Zoom meeting bot, recorder, or real-time media workflow. Use when joining meetings programmatically, processing live media or transcripts, or combining  | kw-port |
| `ams-kw-build-zoom-meeting-app` | Build or embed a Zoom meeting flow. Use when implementing Meeting SDK joins, web or mobile meeting embeds, meeting lifecycle flows, or when deciding between Mee | kw-port |
| `ams-kw-business-pulse` | > | kw-port |
| `ams-kw-call-list` | Builds today's call list. Runs lead-triage to rank the top-5 leads most worth calling, supplies talking points from email history, blocks time on the calendar,  | kw-port |
| `ams-kw-call-summary` | Turn a call transcript or call notes into a customer follow-up email draft, an internal chat summary, and proposed CRM updates. Use when the user says "call sum | kw-port |
| `ams-kw-campaign-plan` | Generate a full campaign brief with objectives, audience, messaging, channel strategy, content calendar, and success metrics. Use when planning a product launch | kw-port |
| `ams-kw-canva-creator` | > | kw-port |
| `ams-kw-capacity-plan` | Plan resource capacity — workload analysis and utilization forecasting. Use when heading into quarterly planning, the team feels overallocated and you need the  | kw-port |
| `ams-kw-cash-flow-snapshot` | > | kw-port |
| `ams-kw-change-request` | Create a change management request with impact analysis and rollback plan. Use when proposing a system or process change that needs approval, preparing a change | kw-port |
| `ams-kw-choose-zoom-approach` | Choose the right Zoom architecture for a use case. Use when deciding between REST API, Webhooks, WebSockets, Meeting SDK, Video SDK, Zoom Apps SDK, Zoom connect | kw-port |
| `ams-kw-close-management` | Manage the month-end close process with task sequencing, dependencies, and status tracking. Use when planning the close calendar, tracking close progress, ident | kw-port |
| `ams-kw-close-month` | Closes the books and turns them into a decision as a three-link chain — month-end-prep reconciles the ledger against every connected payment processor and write | kw-port |
| `ams-kw-close-plan` | Build the business case and mutual action plan for a deal - the why-buy/why-now story, the ROI framing, and the dated step-by-step path to signature shared with | kw-port |
| `ams-kw-cobrowse-sdk` | Reference skill for Zoom Cobrowse SDK. Use after routing to a collaborative-support workflow when implementing browser co-browsing, annotation tools, privacy ma | kw-port |
| `ams-kw-common-room-account-research` | Research a company using Common Room data. Triggers on 'research [company]', 'tell me about [domain]', 'pull up signals for [account]', 'what's going on with [c | kw-port |
| `ams-kw-common-room-call-prep` | Prepare for a customer or prospect call using Common Room signals. Triggers on 'prep me for my call with [company]', 'prepare for a meeting with [company]', 'wh | kw-port |
| `ams-kw-common-room-generate-account-plan` | Generate a comprehensive strategic account plan | kw-port |
| `ams-kw-common-room-prospect` | Build targeted account or contact lists using Common Room's Prospector. Triggers on 'find companies that match [criteria]', 'build a prospect list', 'find conta | kw-port |
| `ams-kw-common-room-weekly-brief` | Generate a weekly prep briefing from your calendar and Common Room | kw-port |
| `ams-kw-comp-analysis` | Analyze compensation — benchmarking, band placement, and equity modeling. Trigger with "what should we pay a [role]", "is this offer competitive", "model this e | kw-port |
| `ams-kw-competitive-intelligence` | Competitive analysis two ways - the in-deal play against a named competitor, and win/loss patterns, competitor mentions, and battlecards across the book. Use wh | kw-port |
| `ams-kw-compliance-check` | Run a compliance check on a proposed action, product feature, or business initiative, surfacing applicable regulations, required approvals, and risk areas. Use  | kw-port |
| `ams-kw-compliance-tracking` | Track compliance requirements and audit readiness. Trigger with "compliance", "audit prep", "SOC 2", "ISO 27001", "GDPR", "regulatory requirement", or when the  | kw-port |
| `ams-kw-compose-outreach` | Generate personalized outreach messages using Common Room signals. Triggers on 'draft outreach to [person]', 'write an email to [name]', 'compose a message for  | kw-port |
| `ams-kw-contact-center` | Reference skill for Zoom Contact Center. Use after routing to a contact-center workflow when implementing app, web, or native integrations; engagement context a | kw-port |
| `ams-kw-contact-center-android` | Zoom Contact Center SDK for Android. Use for native Android chat/video/ZVA/scheduled callback integrations, campaign mode, service lifecycle, and rejoin handlin | kw-port |
| `ams-kw-contact-center-ios` | Zoom Contact Center SDK for iOS. Use for native iOS chat/video/ZVA/scheduled callback integrations, app lifecycle bridging, rejoin flow, and callback handling. | kw-port |
| `ams-kw-contact-center-web` | Zoom Contact Center SDK for Web. Use for web chat/video/campaign embeds, engagement event handling, app-context integrations, and Smart Embed postMessage workfl | kw-port |
| `ams-kw-contact-research` | Research a specific person using Common Room data. Triggers on 'who is [name]', 'look up [email]', 'research [contact]', 'is [name] a warm lead', or any contact | kw-port |
| `ams-kw-content-creation` | Draft marketing content across channels — blog posts, social media, email newsletters, landing pages, press releases, and case studies. Use when writing any mar | kw-port |
| `ams-kw-contract-review` | > | kw-port |
| `ams-kw-cowork-plugin-customizer` | > | kw-port |
| `ams-kw-create-an-asset` | Build a customer deck, one-pager or leave-behind from your account data, call notes and approved materials, with no made-up numbers. Use when the user asks for  | kw-port |
| `ams-kw-create-cowork-plugin` | > | kw-port |
| `ams-kw-create-viz` | Create publication-quality visualizations with Python. Use when turning query results or a DataFrame into a chart, selecting the right chart type for a trend or | kw-port |
| `ams-kw-crm-autopilot` | > | kw-port |
| `ams-kw-crm-hygiene-check` | Read-only audit of your CRM opportunities for missing fields, stale dates, and stage mismatches - outputs a fix checklist to apply by hand or through update-opp | kw-port |
| `ams-kw-customer-escalation` | Package an escalation for engineering, product, or leadership with full context. Use when a bug needs engineering attention beyond normal support, multiple cust | kw-port |
| `ams-kw-customer-health` | Health check on a customer account and QBR-ready prep - relationship strength, engagement trend, risk signals, value delivered, and the agenda that makes the re | kw-port |
| `ams-kw-customer-research` | Multi-source research on a customer question or topic with source attribution. Use when a customer asks something you need to look up, investigating whether a b | kw-port |
| `ams-kw-customer-voice` | Surface what customers are actually saying - direct attributed quotes on a topic across call transcripts and email, across your accounts. Use when the user asks | kw-port |
| `ams-kw-data-context-extractor` | > | kw-port |
| `ams-kw-data-data-visualization` | Create effective data visualizations with Python (matplotlib, seaborn, plotly). Use when building charts, choosing the right chart type for a dataset, creating  | kw-port |
| `ams-kw-data-statistical-analysis` | Apply statistical methods including descriptive stats, trend analysis, outlier detection, and hypothesis testing. Use when analyzing distributions, testing for  | kw-port |
| `ams-kw-deal-advance-gap` | Forward-looking gap check on one opportunity - exactly what is missing to advance it to the next stage and to close, with who does what by when. Use when the us | kw-port |
| `ams-kw-deal-review` | Deep-dive on a single opportunity - signal-adjusted health score, risks, gaps in qualification, and recommended next actions. Use when the user asks "review the | kw-port |
| `ams-kw-deal-signals` | Proactive watch over your book - deals gone quiet, close dates slipping into view, champion changes, renewal windows opening, competitor mentions - surfaced as  | kw-port |
| `ams-kw-deal-slip-scenario` | Model what happens to your number if a deal slips, shrinks, or dies - quota impact, coverage ratio change, and the substitute pipeline needed to stay on plan. U | kw-port |
| `ams-kw-debug` | Structured debugging session — reproduce, isolate, diagnose, and fix. Trigger with an error message or stack trace, "this works in staging but not prod", "somet | kw-port |
| `ams-kw-debug-zoom` | Debug a broken Zoom integration by isolating the failure point and routing into the right Zoom references. Use when auth, API, webhook, SDK, or connector behavi | kw-port |
| `ams-kw-debug-zoom-integration` | Debug broken Zoom implementations quickly. Use when auth, webhooks, SDK joins, connector transport, or real-time media workflows are failing and you need to iso | kw-port |
| `ams-kw-deploy-checklist` | Pre-deployment verification checklist. Use when about to ship a release, deploying a change with database migrations or feature flags, verifying CI status and a | kw-port |
| `ams-kw-design-design-critique` | Get structured design feedback on usability, hierarchy, and consistency. Trigger with "review this design", "critique this mockup", "what do you think of this s | kw-port |
| `ams-kw-design-design-system` | Audit, document, or extend your design system. Use when checking for naming inconsistencies or hardcoded values across components, writing documentation for a c | kw-port |
| `ams-kw-design-handoff` | Generate developer handoff specs from a design. Use when a design is ready for engineering and needs a spec sheet covering layout, design tokens, component prop | kw-port |
| `ams-kw-design-mcp-workflow` | Design a Zoom connector workflow for Muse AI. Use when deciding whether Zoom connector fits a task, when planning tool-based AI workflows, or when separating co | kw-port |
| `ams-kw-digest` | Generate a daily or weekly digest of activity across all connected sources. Use when catching up after time away, starting the day and wanting a summary of ment | kw-port |
| `ams-kw-discover-brand` | > | kw-port |
| `ams-kw-documentation` | Write and maintain technical documentation. Trigger with "write docs for", "document this", "create a README", "write a runbook", "onboarding guide", or when th | kw-port |
| `ams-kw-draft-content` | Draft blog posts, social media, email newsletters, landing pages, press releases, and case studies with channel-specific formatting and SEO recommendations. Use | kw-port |
| `ams-kw-draft-offer` | Draft an offer letter with comp details and terms. Use when a candidate is ready for an offer, assembling a total comp package (base, equity, signing bonus), wr | kw-port |
| `ams-kw-draft-outreach` | Draft a personalized outreach email or multi-touch sequence to a prospect, create it as an email draft for review, and add the contact to a sequence in your sal | kw-port |
| `ams-kw-draft-response` | Draft a professional customer-facing response tailored to the situation and relationship. Use when answering a product question, responding to an escalation or  | kw-port |
| `ams-kw-end-of-day` | The closing beat of the day - every call processed or explicitly skipped, the CRM brought current, commitments captured, and tomorrow's top three teed up. Use w | kw-port |
| `ams-kw-engineering-architecture` | Create or evaluate an architecture decision record (ADR). Use when choosing between technologies (e.g., Kafka vs SQS), documenting a design decision with trade- | kw-port |
| `ams-kw-engineering-code-review` | Review code changes for security, performance, and correctness. Trigger with a PR URL or diff, "review this before I merge", "is this code safe?", or when check | kw-port |
| `ams-kw-engineering-incident-response` | Run an incident response workflow — triage, communicate, and write postmortem. Trigger with "we have an incident", "production is down", an alert that needs sev | kw-port |
| `ams-kw-enrich-lead` | Instant lead enrichment. Drop a name, company, LinkedIn URL, or email and get the full contact card with email, phone, title, company intel, and next actions. | kw-port |
| `ams-kw-enterprise-search-search` | Search across all connected sources in one query. Trigger with "find that doc about...", "what did we decide on...", "where was the conversation about...", or w | kw-port |
| `ams-kw-expansion-whitespace` | Find the expansion whitespace in an account or a book - what they own vs. what they could own, the evidence for each play, and the open opps to create. Use when | kw-port |
| `ams-kw-explore-data` | Profile and explore a dataset to understand its shape, quality, and patterns. Use when encountering a new table or file, checking null rates and column distribu | kw-port |
| `ams-kw-financial-statements` | Generate financial statements (income statement, balance sheet, cash flow) with period-over-period comparison and variance analysis. Use when preparing a monthl | kw-port |
| `ams-kw-forecast` | Generate the commit / best-case / pipeline narrative for a forecast call or a 1:1 with your manager - what's closing, what's at risk, what changed since last ti | kw-port |
| `ams-kw-general` | Cross-product Zoom reference skill. Use after the workflow is clear when you need shared platform guidance, app-model comparisons, authentication context, scope | kw-port |
| `ams-kw-grant-rfp-writer` | > | kw-port |
| `ams-kw-grow-pipeline` | Fills the funnel end to end without the owner babysitting it — reads the market and the competition for context, builds a ranked list of named prospects with a  | kw-port |
| `ams-kw-growth-pulse` | > | kw-port |
| `ams-kw-guideline-generation` | > | kw-port |
| `ams-kw-handle-objection` | Work through a live objection or competitive threat - what's really being said, the response that has worked before, and the proof points to use, grounded in yo | kw-port |
| `ams-kw-hiring-screener` | > | kw-port |
| `ams-kw-inbox-manager` | > | kw-port |
| `ams-kw-inbox-sweep` | Batch-process unread customer emails - classify, prioritize, and draft replies. Use when the user asks "sweep my inbox", "what customer emails need a reply", "d | kw-port |
| `ams-kw-instrument-data-to-allotrope` | Convert laboratory instrument output files (PDF, CSV, Excel, TXT) to Allotrope Simple Model (ASM) JSON format or flattened 2D CSV. Use this skill when scientist | kw-port |
| `ams-kw-interview-prep` | Create structured interview plans with competency-based questions and scorecards. Trigger with "interview plan for", "interview questions for", "how should we i | kw-port |
| `ams-kw-inventory-planner` | > | kw-port |
| `ams-kw-invoice-chase` | > | kw-port |
| `ams-kw-job-post-builder` | > | kw-port |
| `ams-kw-journal-entry` | Prepare journal entries with proper debits, credits, and supporting detail. Use when booking month-end accruals (AP, payroll, prepaid), recording depreciation o | kw-port |
| `ams-kw-journal-entry-prep` | Prepare journal entries with proper debits, credits, and supporting documentation for month-end close. Use when booking accruals, prepaid amortization, fixed as | kw-port |
| `ams-kw-kb-article` | Draft a knowledge base article from a resolved issue or common question. Use when a ticket resolution is worth documenting for self-service, the same question k | kw-port |
| `ams-kw-knowledge-synthesis` | Combines search results from multiple sources into coherent, deduplicated answers with source attribution. Handles confidence scoring based on freshness and aut | kw-port |
| `ams-kw-lead-finder` | > | kw-port |
| `ams-kw-legal-response` | Generate a response to a common legal inquiry using configured templates, with built-in escalation checks for situations that shouldn't use a templated reply. U | kw-port |
| `ams-kw-legal-risk-assessment` | Assess and classify legal risks using a severity-by-likelihood framework with escalation criteria. Use when evaluating contract risk, assessing deal exposure, c | kw-port |
| `ams-kw-log-activity` | Log a call, meeting, or email exchange to the CRM after the fact as a completed activity on the right account, opportunity, and contact - drafted from your desc | kw-port |
| `ams-kw-marketing-competitive-brief` | Research competitors and generate a positioning and messaging comparison with content gaps, opportunities, and threats. Use when building sales battlecards, whe | kw-port |
| `ams-kw-marketing-email-sequence` | Design and draft multi-email sequences with full copy, timing, branching logic, exit conditions, and performance benchmarks. Use when building onboarding, lead  | kw-port |
| `ams-kw-marketing-monday` | Delivers the weekly growth briefing as one merged read — whether the growth engine is working, what customers are saying in public and private, what competitors | kw-port |
| `ams-kw-marketing-seo-audit` | Run a comprehensive SEO audit — keyword research, on-page analysis, content gaps, technical checks, and competitor comparison. Use when assessing a site's SEO h | kw-port |
| `ams-kw-meeting-briefing` | Prepare structured briefings for meetings with legal relevance and track resulting action items. Use when preparing for contract negotiations, board meetings, c | kw-port |
| `ams-kw-meeting-sdk` | Reference skill for Zoom Meeting SDK. Use after routing to a meeting-embed workflow when implementing real Zoom meeting joins, platform-specific SDK behavior, a | kw-port |
| `ams-kw-meeting-sdk-android` | \| | kw-port |
| `ams-kw-meeting-sdk-electron` | \| | kw-port |
| `ams-kw-meeting-sdk-ios` | \| | kw-port |
| `ams-kw-meeting-sdk-linux` | Zoom Meeting SDK for Linux - C++ headless meeting bots with raw audio/video access, transcription, recording, and AI integration for server-side automation | kw-port |
| `ams-kw-meeting-sdk-macos` | \| | kw-port |
| `ams-kw-meeting-sdk-react-native` | Zoom Meeting SDK for React Native. Use when embedding Zoom meetings in React Native iOS/Android apps with @zoom/meetingsdk-react-native, JWT auth, join/start fl | kw-port |
| `ams-kw-meeting-sdk-unreal` | \| | kw-port |
| `ams-kw-meeting-sdk-web` | \| | kw-port |
| `ams-kw-meeting-sdk-web-client-view` | \| | kw-port |
| `ams-kw-meeting-sdk-web-component-view` | \| | kw-port |
| `ams-kw-meeting-sdk-windows` | \| | kw-port |
| `ams-kw-memory-management` | Two-tier memory system that makes Muse AI a true workplace collaborator. Decodes shorthand, acronyms, nicknames, and internal language so Muse AI understands re | kw-port |
| `ams-kw-metrics-review` | Review and analyze product metrics with trend analysis and actionable insights. Use when running a weekly, monthly, or quarterly metrics review, investigating a | kw-port |
| `ams-kw-monday-brief` | Runs the owner's Monday morning briefing as a two-link chain — business-pulse for the cross-connector snapshot of cash, sales, and pipeline, and report-builder  | kw-port |
| `ams-kw-month-end-prep` | > | kw-port |
| `ams-kw-nextflow-development` | Run nf-core bioinformatics pipelines (rnaseq, sarek, atacseq) on sequencing data. Use when analyzing RNA-seq, WGS/WES, or ATAC-seq data—either local FASTQs or p | kw-port |
| `ams-kw-oauth` | Reference skill for Zoom authentication. Use after routing to an auth workflow when choosing app credentials, grant types, scopes, token refresh behavior, or de | kw-port |
| `ams-kw-onboarding` | Generate an onboarding checklist and first-week plan for a new hire. Use when someone has a start date coming up, building the pre-start task list (accounts, eq | kw-port |
| `ams-kw-org-planning` | Headcount planning, org design, and team structure optimization. Trigger with "org planning", "headcount plan", "team structure", "reorg", "who should we hire n | kw-port |
| `ams-kw-outreach-composer` | > | kw-port |
| `ams-kw-pay-the-bills` | Works the bill pile from the AP inbox all the way to a staged payment run — reads and codes every bill, then checks the cash position before a dollar is committ | kw-port |
| `ams-kw-payroll-prep` | > | kw-port |
| `ams-kw-pdf-annotate` | Collaboratively annotate a PDF — propose markup, review together, iterate | kw-port |
| `ams-kw-pdf-fill-form` | Fill PDF form fields interactively with live visual feedback | kw-port |
| `ams-kw-pdf-open` | Open a PDF in the interactive viewer | kw-port |
| `ams-kw-pdf-sign` | Place a signature or initials image on a PDF | kw-port |
| `ams-kw-people-report` | Generate headcount, attrition, diversity, or org health reports. Use when pulling a headcount snapshot for leadership, analyzing turnover trends by team, prepar | kw-port |
| `ams-kw-performance-report` | Build a marketing performance report with key metrics, trend analysis, wins and misses, and prioritized optimization recommendations. Use when wrapping a campai | kw-port |
| `ams-kw-performance-review` | Structure a performance review with self-assessment, manager template, and calibration prep. Use when review season kicks off and you need a self-assessment tem | kw-port |
| `ams-kw-phone` | Reference skill for Zoom Phone. Use after routing to a phone workflow when implementing OAuth, Phone APIs, webhooks, Smart Embed events, URI schemes, CRM or CTI | kw-port |
| `ams-kw-pipeline-review` | Stage-by-stage pipeline health check - coverage, aging, conversion, and at-risk deals - from CRM opportunity data. Use when the user asks "review my pipeline",  | kw-port |
| `ams-kw-plan-payroll` | Runs the payroll-confidence chain end to end — forecasts cash across the payroll window with cash-flow-snapshot, ranks and drafts overdue-invoice reminders with | kw-port |
| `ams-kw-plan-zoom-integration` | Turn a Zoom integration idea into an implementation plan with architecture, auth, and delivery milestones. Use when you need a practical build plan, phased deli | kw-port |
| `ams-kw-plan-zoom-product` | Choose the right Zoom building surface for a use case and explain the tradeoffs clearly. Use when deciding between REST API, Webhooks, WebSockets, Meeting SDK,  | kw-port |
| `ams-kw-policy-lookup` | Find and explain company policies in plain language. Trigger with "what's our PTO policy", "can I work remotely from another country", "how do expenses work", o | kw-port |
| `ams-kw-probe-sdk` | Reference skill for Zoom Probe SDK. Use after routing to a preflight workflow when testing browser compatibility, media permissions, audio or video diagnostics, | kw-port |
| `ams-kw-process-doc` | Document a business process — flowcharts, RACI, and SOPs. Use when formalizing a process that lives in someone's head, building a RACI to clarify who owns what, | kw-port |
| `ams-kw-process-optimization` | Analyze and improve business processes. Trigger with "this process is slow", "how can we improve", "streamline this workflow", "too many steps", "bottleneck", o | kw-port |
| `ams-kw-product-brainstorm` | Brainstorm a product idea, problem space, or strategic question with a sharp thinking partner | kw-port |
| `ams-kw-product-brainstorming` | Brainstorm product ideas, explore problem spaces, and challenge assumptions as a thinking partner. Use when exploring a new opportunity, generating solutions to | kw-port |
| `ams-kw-product-management-competitive-brief` | Create a competitive analysis brief for one or more competitors or a feature area. Use when informing product strategy or feature prioritization, building sales | kw-port |
| `ams-kw-productivity-start` | Initialize the productivity system and open the dashboard. Use when setting up the plugin for the first time, bootstrapping working memory from your existing ta | kw-port |
| `ams-kw-proposal-builder` | > | kw-port |
| `ams-kw-reactivate` | Wins back customers who have quietly stopped buying — finds the ones whose gap has stretched past their own normal rhythm or who are showing churn signals, rank | kw-port |
| `ams-kw-reconciliation` | Reconcile accounts by comparing GL balances to subledgers, bank statements, or third-party data. Use when performing bank reconciliations, GL-to-subledger recs, | kw-port |
| `ams-kw-recruiting-pipeline` | Track and manage recruiting pipeline stages. Trigger with "recruiting update", "candidate pipeline", "how many candidates", "hiring status", or when the user di | kw-port |
| `ams-kw-renewal-radar` | Upcoming renewals with timing, risk, and uplift potential - and the renewal opportunity records to keep them honest. Use when the user asks "what renewals are c | kw-port |
| `ams-kw-rep-context` | Leader's prep on a single rep before a 1:1 - their pipeline, recent activity, what they've been working on per chat and calendar, and where they might need help | kw-port |
| `ams-kw-report-builder` | > | kw-port |
| `ams-kw-report-pack` | Delivers the owner's custom recurring report pack on a set cadence — runs the saved report definition from report-builder, wraps it in a business-pulse snapshot | kw-port |
| `ams-kw-research-synthesis` | Synthesize user research into themes, insights, and recommendations. Use when you have interview transcripts, survey results, usability test notes, support tick | kw-port |
| `ams-kw-rest-api` | Reference skill for Zoom REST API. Use after choosing an API-based workflow when you need endpoint selection, resource-management patterns, OAuth requirements,  | kw-port |
| `ams-kw-restock` | Turns what is actually selling into a reorder decision and gets it all the way into the books — computes sales velocity and conservative stockout dates per item | kw-port |
| `ams-kw-review-contract` | Review a contract against your organization's negotiation playbook — flag deviations, generate redlines, provide business impact analysis. Use when reviewing ve | kw-port |
| `ams-kw-review-reputation` | > | kw-port |
| `ams-kw-risk-assessment` | Identify, assess, and mitigate operational risks. Trigger with "what are the risks", "risk assessment", "risk register", "what could go wrong", or when the user | kw-port |
| `ams-kw-rivet-sdk` | Reference skill for Zoom Rivet SDK. Use after routing to a Rivet-based server workflow when implementing auth handling, webhook consumers, API wrappers, multi-m | kw-port |
| `ams-kw-roadmap-update` | Update, create, or reprioritize your product roadmap. Use when adding a new initiative and deciding what moves to make room, shifting priorities after new infor | kw-port |
| `ams-kw-route-lead` | Decide who owns an unrouted lead or opportunity and manage the handoff - deterministic routing by the org's own rules, a routing card the human router accepts o | kw-port |
| `ams-kw-rtms` | Reference skill for Zoom RTMS. Use after routing to a live-media workflow when processing real-time audio, video, chat, transcripts, screen share, or contact-ce | kw-port |
| `ams-kw-runbook` | Create or update an operational runbook for a recurring task or procedure. Use when documenting a task that on-call or ops needs to run repeatably, turning trib | kw-port |
| `ams-kw-sales-account-research` | Research a target company and optionally a specific contact - company overview, recent news, likely priorities, and fit against your ICP. Cross-references exist | kw-port |
| `ams-kw-sales-call-prep` | Pre-call brief for an upcoming meeting - attendees, account history, prior call context from transcripts, open opportunity status, and suggested discovery quest | kw-port |
| `ams-kw-sales-daily-briefing` | Morning rundown - today's meetings with account context, opps closing soon with stale flags, waiting customer emails, and the day's top actions. Use when the us | kw-port |
| `ams-kw-sales-lead-triage` | Score and route an inbound lead, or rank a backlog of leads, against your ICP and qualification framework, then recommend a priority and next action. Use when t | kw-port |
| `ams-kw-schedule-meeting` | Find a time, draft the invite, and book the meeting on Google Calendar or Outlook - then log it to the CRM as an event on the right account and opportunity. Use | kw-port |
| `ams-kw-scientific-problem-selection` | This skill should be used when scientists need help with research problem selection, project ideation, troubleshooting stuck projects, or strategic scientific d | kw-port |
| `ams-kw-scribe` | Reference skill for Zoom AI Services Scribe. Use after routing to a transcription workflow when handling uploaded or stored media, Build-platform JWT auth, fast | kw-port |
| `ams-kw-search-strategy` | Query decomposition and multi-source search orchestration. Breaks natural language questions into targeted searches per source, translates queries into source-s | kw-port |
| `ams-kw-seo-ai-visibility` | > | kw-port |
| `ams-kw-sequence-load` | Find leads matching criteria and bulk-add them to an Apollo outreach sequence. Handles enrichment, contact creation, deduplication, and enrollment in one flow. | kw-port |
| `ams-kw-setup` | First-run setup - checks which tools are connected, shows what's connected and what each one unlocks, learns how you write from your sent email, and renders a s | kw-port |
| `ams-kw-setup-zoom-mcp` | Decide when Zoom connector is the right fit and produce a safe setup plan for Muse AI. Use when planning AI workflows over Zoom data, deciding between connector | kw-port |
| `ams-kw-setup-zoom-oauth` | Implement Zoom authentication correctly. Use when setting up app credentials, choosing an OAuth grant, requesting scopes, handling token refresh, or debugging a | kw-port |
| `ams-kw-signature-request` | Prepare and route a document for e-signature — run a pre-signature checklist, configure signing order, and send for execution. Use when a contract is finalized  | kw-port |
| `ams-kw-single-cell-rna-qc` | Performs quality control on single-cell RNA-seq data (.h5ad or .h5 files) using scverse best practices with MAD-based filtering and comprehensive visualizations | kw-port |
| `ams-kw-slack-channel-digest` | Get a digest of recent activity across multiple Slack channels | kw-port |
| `ams-kw-slack-draft-announcement` | Draft a well-formatted Slack announcement and save it as a draft | kw-port |
| `ams-kw-slack-find-discussions` | Find discussions about a specific topic across Slack channels | kw-port |
| `ams-kw-slack-messaging` | Guidance for composing well-formatted, effective Slack messages using mrkdwn syntax | kw-port |
| `ams-kw-slack-search` | Guidance for effectively searching Slack to find messages, files, channels, and people | kw-port |
| `ams-kw-slack-standup` | Generate a standup update based on your recent Slack activity | kw-port |
| `ams-kw-slack-summarize-channel` | Summarize recent activity in a Slack channel | kw-port |
| `ams-kw-small-business-content-strategy` | > | kw-port |
| `ams-kw-small-business-lead-triage` | > | kw-port |
| `ams-kw-smb-onboard` | > | kw-port |
| `ams-kw-smb-router` | > | kw-port |
| `ams-kw-social-content-engine` | > | kw-port |
| `ams-kw-source-management` | Manages connected connector sources for enterprise search. Detects available sources, guides users to connect new ones, handles source priority ordering, and ma | kw-port |
| `ams-kw-sox-testing` | Generate SOX sample selections, testing workpapers, and control assessments. Use when planning quarterly or annual SOX 404 testing, pulling a sample for a contr | kw-port |
| `ams-kw-speed-to-lead` | > | kw-port |
| `ams-kw-sprint-planning` | Plan a sprint — scope work, estimate capacity, set goals, and draft a sprint plan. Use when kicking off a new sprint, sizing a backlog against team availability | kw-port |
| `ams-kw-sql-queries` | Write correct, performant SQL across all major data warehouse dialects (Snowflake, BigQuery, Databricks, PostgreSQL, etc.). Use when writing queries, optimizing | kw-port |
| `ams-kw-stakeholder-map` | Map the people in a deal or account - roles, influence, sentiment, who's missing, and your best access path to the people you haven't reached. Use when the user | kw-port |
| `ams-kw-stakeholder-update` | Generate a stakeholder update tailored to audience and cadence. Use when writing a weekly or monthly status for leadership, announcing a launch, escalating a ri | kw-port |
| `ams-kw-standup` | Generate a standup update from recent activity. Use when preparing for daily standup, summarizing yesterday's commits and PRs and ticket moves, formatting work  | kw-port |
| `ams-kw-status-report` | Generate a status report with KPIs, risks, and action items. Use when writing a weekly or monthly update for leadership, summarizing project health with green/y | kw-port |
| `ams-kw-synthesize-research` | Synthesize user research from interviews, surveys, and feedback into structured insights. Use when you have a pile of interview notes, survey responses, or supp | kw-port |
| `ams-kw-system-design` | Design systems, services, and architectures. Trigger with "design a system for", "how should we architect", "system design for", "what's the right architecture  | kw-port |
| `ams-kw-task-management` | Simple task management using a shared TASKS.md file. Reference this when the user asks about their tasks, wants to add/complete tasks, or needs help tracking co | kw-port |
| `ams-kw-tax-prep` | Prepares tax materials as a two-link chain — month-end-prep confirms the books are closed and reconciled first, then tax-season-organizer calculates the quarter | kw-port |
| `ams-kw-tax-season-organizer` | > | kw-port |
| `ams-kw-team-chat` | Reference skill for Zoom Team Chat. Use after routing to a chat workflow when building user-scoped messaging integrations, chatbot experiences, rich cards, butt | kw-port |
| `ams-kw-team-pipeline` | Leader view - roll up a team's pipeline by rep and stage, flag at-risk deals, and surface coaching moments. Use when the user asks "show my team's pipeline", "t | kw-port |
| `ams-kw-tech-debt` | Identify, categorize, and prioritize technical debt. Trigger with "tech debt", "technical debt audit", "what should we refactor", "code health", or when the use | kw-port |
| `ams-kw-testing-strategy` | Design test strategies and test plans. Trigger with "how should we test", "test strategy for", "write tests for", "test plan", "what tests do we need", or when  | kw-port |
| `ams-kw-ticket-deflector` | > | kw-port |
| `ams-kw-ticket-triage` | Triage and prioritize a support ticket or customer issue. Use when a new ticket comes in and needs categorization, assigning P1-P4 priority, deciding which team | kw-port |
| `ams-kw-triage-nda` | Rapidly triage an incoming NDA and classify it as GREEN (standard approval), YELLOW (counsel review), or RED (full legal review). Use when a new NDA arrives fro | kw-port |
| `ams-kw-ui-toolkit` | Reference skill for Zoom Video SDK UI Toolkit. Use after routing to a web video workflow when you want prebuilt React UI instead of building a fully custom Vide | kw-port |
| `ams-kw-update` | Sync tasks and refresh memory from your current activity. Use when pulling new assignments from your project tracker into TASKS.md, triaging stale or overdue ta | kw-port |
| `ams-kw-update-opportunity` | Guided updates to an opportunity - push the stage, move the close date, set next steps, fix amount or forecast category. Shows the before/after, writes what you | kw-port |
| `ams-kw-user-research` | Plan, conduct, and synthesize user research. Trigger with "user research plan", "interview guide", "usability test", "survey design", "research questions", or w | kw-port |
| `ams-kw-ux-copy` | Write or review UX copy — microcopy, error messages, empty states, CTAs. Trigger with "write copy for", "what should this button say?", "review this error messa | kw-port |
| `ams-kw-validate-data` | QA an analysis before sharing -- methodology, accuracy, and bias checks. Use when reviewing an analysis before a stakeholder presentation, spot-checking calcula | kw-port |
| `ams-kw-variance-analysis` | Decompose financial variances into drivers with narrative explanations and waterfall analysis. Use when analyzing budget vs. actual, period-over-period changes, | kw-port |
| `ams-kw-vendor-check` | Check the status of existing agreements with a vendor across all connected systems — CLM, CRM, email, and document storage — with gap analysis and upcoming dead | kw-port |
| `ams-kw-vendor-review` | Evaluate a vendor — cost analysis, risk assessment, and recommendation. Use when reviewing a new vendor proposal, deciding whether to renew or replace a contrac | kw-port |
| `ams-kw-video-sdk` | Reference skill for Zoom Video SDK. Use after routing to a custom-session workflow when the user needs full control over the video experience rather than an act | kw-port |
| `ams-kw-video-sdk-android` | \| | kw-port |
| `ams-kw-video-sdk-flutter` | \| | kw-port |
| `ams-kw-video-sdk-ios` | \| | kw-port |
| `ams-kw-video-sdk-linux` | Zoom Video SDK for Linux - C++ headless bots, raw audio/video capture/injection, Qt/GTK integration, Docker support | kw-port |
| `ams-kw-video-sdk-macos` | \| | kw-port |
| `ams-kw-video-sdk-react-native` | \| | kw-port |
| `ams-kw-video-sdk-unity` | \| | kw-port |
| `ams-kw-video-sdk-web` | Zoom Video SDK for Web - JavaScript/TypeScript integration for browser-based video sessions, real-time communication, screen sharing, recording, and live transc | kw-port |
| `ams-kw-video-sdk-windows` | Zoom Video SDK for Windows - C++ integration for video sessions, raw audio/video capture, screen sharing, recording, and real-time communication | kw-port |
| `ams-kw-view-pdf` | Interactive PDF viewer. Use when the user wants to open, show, or view a PDF and collaborate on it visually — annotate, highlight, stamp, fill form fields, plac | kw-port |
| `ams-kw-virtual-agent` | Reference skill for Zoom Virtual Agent. Use after routing to a virtual-agent workflow when implementing web embeds, Android or iOS wrapper integrations, knowled | kw-port |
| `ams-kw-virtual-agent-android` | Zoom Virtual Agent Android integration via WebView. Use for Java/Kotlin bridge callbacks, native URL handling, support_handoff relay, and lifecycle-safe embeddi | kw-port |
| `ams-kw-virtual-agent-ios` | Zoom Virtual Agent iOS integration via WKWebView. Use for Swift/Objective-C script injection, message handlers, support_handoff relay, and URL routing policies. | kw-port |
| `ams-kw-virtual-agent-web` | Zoom Virtual Agent SDK for web embeds. Use for campaign or entry ID chat launch, event-driven controls, user context updates, and CSP-safe deployment. | kw-port |
| `ams-kw-webhooks` | Reference skill for Zoom webhooks. Use after routing to an event-driven workflow when implementing subscriptions, signature verification, delivery handling, ret | kw-port |
| `ams-kw-websockets` | Reference skill for Zoom WebSockets. Use after routing to a low-latency event workflow when persistent connections, faster event delivery, or security constrain | kw-port |
| `ams-kw-weekly-prep-brief` | Generate a comprehensive weekly briefing for all external calls in the next 7 days. Triggers on 'weekly prep brief', 'prepare my week', 'what calls do I have th | kw-port |
| `ams-kw-weekly-wrap` | End-of-week summary for a rep or leader - what closed, what moved, what slipped, and what's on deck Monday. Optionally drafts a chat post to the team channel. U | kw-port |
| `ams-kw-win-loss-review` | Analyze recently closed opportunities to find patterns in what wins and what loses - stage of loss, common objections from transcripts, deal characteristics. Le | kw-port |
| `ams-kw-write-query` | Write optimized SQL for your dialect with best practices. Use when translating a natural-language data need into SQL, building a multi-CTE query with joins and  | kw-port |
| `ams-kw-write-spec` | Write a feature spec or PRD from a problem statement or feature idea. Use when turning a vague idea or user request into a structured document, scoping a featur | kw-port |
| `ams-kw-zoom-apps-sdk` | Reference skill for Zoom Apps SDK. Use after routing to an in-client app workflow when building web apps that run inside Zoom meetings, webinars, the main clien | kw-port |
| `ams-kw-zoom-mcp` | Guidance for the bundled Zoom connector connectors. Use after routing to an connector workflow when planning or troubleshooting tool-based access to meetings, r | kw-port |
| `ams-kw-zoom-mcp-whiteboard` | \| | kw-port |
| `ams-kw-zoom-plugin-start` | Start here for any Zoom integration or app idea. Use when you need to choose the right Zoom surface, shape the architecture, or route into the correct implement | kw-port |
| `ams-lab-data-management` | Research data management for labs — storage tiers, naming, metadata, backups, and FAIR practices. | original |
| `ams-landing-page-designer` | Design high-converting landing pages with message hierarchy, social proof, and CTA optimization. | original |
| `ams-langchain-pro` | LangChain guidance — chains, agents, tools, RAG pipelines, LangGraph, evaluation, and production hardening. | original |
| `ams-langgraph` | Build stateful agent workflows as graphs — nodes, edges, conditional routing, cycles, and persistent state. Use when agent logic needs branching, loops, retries | original |
| `ams-laravel-pro` | Laravel guidance — Eloquent ORM, routing, queues, Blade/Livewire, and deploying PHP apps well. | original |
| `ams-latex-pro` | LaTeX authoring and automation — documents, templates, and programmatic generation — use for academic papers, reports, and math-heavy docs. | original |
| `ams-layout-designer` | Compose strong layouts with grid systems, visual hierarchy, rhythm, and balance for any format. | original |
| `ams-ldap-pro` | Secure LDAP and Active Directory integrations — LDAPS, bind hardening, injection defense, and directory hygiene. | original |
| `ams-lead-scoring` | Build lead scoring models — fit and behavior criteria, thresholds, decay, and sales-ready handoff processes. | original |
| `ams-leadership-coach` | Develop leadership capability with frameworks for influence, decision-making, feedback, and team culture. | original |
| `ams-learning-sprint-planner` | Learn any topic in a focused 2–4 week sprint: define a concrete outcome, break it into daily 25-minute sessions mixing input, practice, and recall, with the ass | original |
| `ams-lepton-ai` | Run models and build AI apps on Lepton AI — cloud GPUs, model APIs, and photon-based deployment. | original |
| `ams-less-pro` | Write and maintain Less stylesheets: variables, mixins, guards, imports, and build integration. Use when working with Less-based projects (e.g., Ant Design them | original |
| `ams-license-auditor` | Audit open-source license compliance — inventory obligations, manage copyleft risk, and build approval workflows. | original |
| `ams-linear-algebra-practice` | Applied linear algebra — decompositions, least squares, conditioning, and numerical habits for real matrices. | original |
| `ams-linear-api-automation` | Automate Linear via its native GraphQL API: issues, projects, cycles, and integrations without middleware. Use when scripting Linear workflows or syncing it wit | original |
| `ams-linear-pro-dev` | Run Linear effectively: issue workflow, cycles, triage, integrations, and team habits. Use when configuring Linear or improving team process around it. | original |
| `ams-linkedin-optimizer` | Rewrite LinkedIn profiles for recruiter search visibility, headline impact, and inbound opportunity flow. | original |
| `ams-linux-desktop-pro` | Master the Linux desktop as a daily driver: distro choice, desktop environments, tiling WMs, package management, and dotfiles. Use when setting up or optimizing | original |
| `ams-linux-pro` | Linux systems guidance — filesystem, permissions, processes, networking, logs, and production server administration. | original |
| `ams-literature-review` | Conduct systematic literature reviews — search strategy, screening, quality appraisal, synthesis, and gap identification. Use when mapping what a field knows on | original |
| `ams-literature-review-writing` | Writing literature reviews that synthesize — search strategy, thematic organization, critical synthesis, and gap identification. | original |
| `ams-llama-guide` | Build with Meta's Llama models — the open-weight ecosystem standard for fine-tuning and deployment. | original |
| `ams-llamacpp-guide` | Run and optimize models with llama.cpp — GGUF quantization, CPU/GPU offloading, server mode, and performance tuning. Use when you need maximum local inference e | original |
| `ams-llamaindex-pro` | LlamaIndex guidance — data ingestion, indexing, query engines, agents, evaluation, and RAG optimization. | original |
| `ams-llm-benchmarks` | Use LLM benchmarks wisely — what major benchmarks measure, their limits, contamination risks, and how to interpret scores. Use when evaluating models or reading | original |
| `ams-llm-pro` | Integrate LLMs into apps: prompting, structured output, streaming, function calling, RAG, evals, cost and latency control. Use when adding language-model featur | original |
| `ams-lmql-guide` | Write LMQL queries that blend prompts with constraints — scripting language-model generation with logic. | original |
| `ams-local-seo-specialist` | Win local search — Google Business Profile optimization, local citations, reviews, and "near me" rankings. | original |
| `ams-logo-designer` | Design distinctive, versatile logos through research, concept exploration, and systematic refinement. | original |
| `ams-loom-pro` | Master Loom for async video: recording, editing, organizing, and replacing meetings with video messages. Use when adopting async communication or making video u | original |
| `ams-lorem-ipsum-pro` | Generate better placeholder content with alternatives, realistic mock copy, and layout testing strategy. | original |
| `ams-loyalty-programs` | Design loyalty programs — points, tiers, rewards, and retention mechanics that keep customers coming back. | original |
| `ams-lua-pro` | Idiomatic Lua: tables as the universal structure, metatables, modules, and embedding patterns. Use when writing, reviewing, or structuring Lua code (games, embe | original |
| `ams-mac-storage-cleaner` | Reclaim Mac storage systematically: finding space hogs, safe cleanup, and preventing re-clutter. Use when disk space runs low or the Mac feels sluggish from a f | original |
| `ams-macos-pro` | Master macOS as a power user: Spotlight, Finder, Shortcuts, automation, system settings, and maintenance. Use when setting up a Mac for serious work or speeding | original |
| `ams-malware-analyst` | Analyze suspicious files safely with static and dynamic techniques to determine capability, indicators, and defensive mitigations. | original |
| `ams-managed-postgres` | Using managed Postgres on PaaS platforms — provisioning, connecting, backups, and limits — vendor-neutral patterns. | original |
| `ams-managed-redis` | Using managed Redis on PaaS platforms — caching, eviction, persistence, and sizing — vendor-neutral patterns. | original |
| `ams-management-trainer` | Train new and practicing managers in 1:1s, hiring, delegation, performance management, and team rituals. | original |
| `ams-markdown-pro` | Markdown authoring and processing — flavors, linting, conversion, and docs pipelines — use when writing or transforming Markdown. | original |
| `ams-market-researcher` | Conduct market research — sizing, segmentation, competitor analysis, surveys, and actionable market intelligence. | original |
| `ams-marketing-analyst` | Analyze marketing performance — attribution, funnel analysis, cohort reports, dashboards, and data-driven recommendations. | original |
| `ams-marketing-automation` | Build marketing automation — nurture sequences, behavioral triggers, lead lifecycle workflows, and personalization at scale. | original |
| `ams-marketing-ops` | Run marketing operations — martech stack, data hygiene, campaign processes, budgeting, and scalable marketing infrastructure. | original |
| `ams-marketing-plan-generator` | Generate complete marketing plans — situation analysis, objectives, strategy, tactics, budgets, and measurement frameworks. | original |
| `ams-match-prediction` | Predict sports match outcomes with statistical models: Elo, Poisson, expected goals, features, and proper evaluation. Use when building data-driven sports forec | original |
| `ams-materials-characterization` | Choosing and combining characterization techniques — diffraction, microscopy, spectroscopy, and thermal methods — to fully describe a material. | original |
| `ams-mcp-builder` | Design and build Model Context Protocol servers: tools, resources, prompts, transports, and security. Use when exposing APIs, data, or capabilities to AI assist | original |
| `ams-mcp-integration` | Integrate with the Model Context Protocol — its primitives (tools, resources, prompts), transports, auth, and debugging. Use when connecting agents to external  | original |
| `ams-mcp-postgres` | Accessing Postgres via the open Model Context Protocol — setup, tools, and secure querying patterns. | original |
| `ams-meal-plan-generator` | Build a flexible weekly meal plan with an AI assistant: start from your preferences and constraints, get a 7-day plan with a grocery list, batch-cook smartly, a | original |
| `ams-mechanical-testing-basics` | Mechanical property measurement — tensile, hardness, fracture, and fatigue testing with proper specimen and data practice. | original |
| `ams-mechanistic-interpretability` | Reverse-engineer how language models think — features, circuits, and neurons — to explain and audit their behavior. | original |
| `ams-medical-imaging-basics` | Medical imaging fundamentals — modalities, DICOM handling, visualization, and quantitative image analysis. | original |
| `ams-meeting-notes-ai` | Use AI for meeting notes — automated summaries, action item extraction, and turning meetings into searchable knowledge. | original |
| `ams-meeting-optimizer` | Make meetings fewer, shorter, and better: agenda design, facilitation, async alternatives, and meeting audits. Use when calendars are full of low-value meetings | original |
| `ams-meeting-prep-brief` | Prepare for any meeting in minutes: build a 5-minute brief (purpose, people, your goal, questions, materials), research attendees, and capture decisions and act | original |
| `ams-memory-search` | Search agent memory effectively: recall prior decisions, facts, and context across conversations. Use when an agent needs to remember what was learned before. | original |
| `ams-merchant-platform-ops` | Operate the merchant side of a delivery platform — onboarding, menu management, order handling, payouts, and performance. | original |
| `ams-metagenomics` | Metagenomic analysis — taxonomic profiling, assembly, binning, and functional annotation of microbiomes. | original |
| `ams-methods-writing` | Writing reproducible Methods sections — detail calibration, reporting standards, and the reproducibility checklist. | original |
| `ams-mfa-rollout` | Plan and execute organization-wide MFA adoption — phishing-resistant methods, enrollment, exceptions, and measurement. | original |
| `ams-micro-frontends-pro` | Architect micro-frontends: module federation, single-spa, routing, shared dependencies, and team autonomy patterns. Use for large apps split across teams. | original |
| `ams-microbiome-analysis` | 16S and microbiome data analysis — denoising, diversity, differential abundance, and compositional methods. | original |
| `ams-microscopy-basics` | Light microscopy fundamentals — brightfield, fluorescence, confocal, image acquisition, and quantitative analysis. | original |
| `ams-microservices-pro` | Design and operate microservices: decomposition, inter-service communication, data ownership, and operational maturity. Use when decomposing systems or reviewin | original |
| `ams-microsoft-365-pro` | Master Microsoft 365: Outlook, OneDrive, Teams, Word/Excel/PowerPoint, and OneNote at power-user level. Use when working in Microsoft's ecosystem and wanting sp | original |
| `ams-mind-mapper` | Use mind mapping effectively: brainstorming, planning, studying, and visual thinking. Use when ideas need spatial organization or linear notes aren't capturing  | original |
| `ams-mistral-guide` | Build with Mistral AI's models — efficient open and commercial models with strong multilingual and code performance. | original |
| `ams-mlops-pro` | MLOps guidance — experiment tracking, model registry, feature stores, training pipelines, deployment, and monitoring. | original |
| `ams-mobile-app-designer` | Design native-feeling mobile apps with platform guidelines, gestures, navigation patterns, and thumb-zone UX. | original |
| `ams-mobile-app-operations` | Operate mobile apps — release management, crash monitoring, phased rollouts, push coordination, and app store ops. | original |
| `ams-modal-guide` | Run serverless GPUs with Modal — deploy models, batch jobs, and agents on demand without managing infrastructure. | original |
| `ams-model-context-protocol` | Understand the Model Context Protocol deeply — architecture, lifecycle, primitives, security model, and ecosystem patterns. Use when evaluating MCP for your sta | original |
| `ams-mongodb-pro` | MongoDB modeling, aggregation pipelines, and operations — use when designing schemas or tuning Mongo queries. | original |
| `ams-monorepo-deploy` | Deploying services from a monorepo to PaaS — selective builds, shared code, and per-service pipelines. | original |
| `ams-monorepo-pro` | Run effective monorepos: workspace layout, task orchestration, versioning, CI scaling, and code sharing. Use when setting up or managing monorepos. | original |
| `ams-monte-carlo-methods` | Monte Carlo simulation done well — sampling, variance reduction, MCMC diagnostics, and honest uncertainty quantification. | original |
| `ams-motion-designer` | Design purposeful motion and animation with timing, easing, choreography, and implementation specs. | original |
| `ams-move-pro` | Write Move modules for Aptos and Sui: resources, abilities, object model, entry functions, unit testing, and package publishing. Use when building on Move-based | original |
| `ams-mpt-guide` | Build with MosaicML's MPT models — open models with long-context training and commercial-friendly licensing. | original |
| `ams-mri-preprocessing` | Structural and functional MRI preprocessing — bias correction, skull-stripping, registration, and QC with fMRIPrep-style pipelines. | original |
| `ams-multi-agent-architect` | Design multi-agent systems — communication topologies, coordination protocols, shared state, consensus, and failure handling across agents. Use when one agent i | original |
| `ams-multiple-sequence-alignment` | Multiple sequence alignment — tool choice, alignment QC, trimming, and downstream-ready alignments. | original |
| `ams-mysql-pro` | MySQL and MariaDB expertise — InnoDB tuning, replication, and query patterns — use when building on or fixing MySQL. | original |
| `ams-n8n-workflow-patterns` | Build robust n8n workflows: trigger patterns, error handling, sub-workflows, credentials, and self-hosting. Use when automating with n8n or designing maintainab | original |
| `ams-nanomaterials-synthesis` | Nanoparticle and nanostructure synthesis — nucleation control, size/shape tuning, surface chemistry, and scale-up. | original |
| `ams-nativewind-pro` | Style React Native apps with Tailwind CSS via NativeWind: setup, responsive design, dark mode, custom themes, and platform quirks. Use when building React Nativ | original |
| `ams-nats-pro` | NATS guidance — subjects, JetStream persistence, consumer patterns, clustering, and lightweight messaging design. | original |
| `ams-neo4j-pro` | Neo4j graph modeling and Cypher — use when relationships are the data: fraud, recommendations, knowledge graphs. | original |
| `ams-neovim-pro` | Neovim guidance — Lua configuration, lazy.nvim plugin management, LSP setup, Telescope, and Treesitter. | original |
| `ams-netlify-pro` | Netlify guidance — deployments, branch previews, serverless functions, edge, forms, and site performance. | original |
| `ams-networking-coach` | Build an authentic professional network with outreach scripts, follow-up systems, and event strategy. | original |
| `ams-neural-decoding` | Decoding mental states and stimuli from neural signals — classifiers, cross-validation, and leakage-free evaluation. | original |
| `ams-neural-population-modeling` | Population-level neural data modeling — dimensionality reduction, latent dynamics, and encoding/decoding models. | original |
| `ams-neuroscience-lab-assistant` | Support neuroscience research workflows — experimental design, data analysis pipelines, literature tracking, and reproducible methods. Use when assisting with b | original |
| `ams-newsletter-pro` | Run professional newsletters — content strategy, writing, growth, deliverability, and monetization. | original |
| `ams-nextjs-patterns` | Build with Next.js App Router: routing, server/client components, data fetching, caching, metadata, and deployment. Use when developing Next.js applications. | original |
| `ams-nextjs-pro` | Idiomatic Next.js: App Router, Server Components, data fetching/caching, and production deployment. Use when writing, reviewing, or structuring Next.js applicat | original |
| `ams-nginx-pro` | Nginx guidance — reverse proxy, load balancing, TLS, caching, rate limiting, and performance tuning. | original |
| `ams-nlp-cloud-guide` | Deploy NLP models with NLP Cloud — managed endpoints for generation, classification, and specialized language tasks. | original |
| `ams-nodejs-pro` | Production-grade Node.js guidance — event loop, modules, tooling, debugging, and deployment best practices. | original |
| `ams-nonprofit-marketer` | Market for nonprofits — donor acquisition, fundraising campaigns, volunteer recruitment, and mission-driven storytelling. | original |
| `ams-note-taker` | Take notes that you'll actually use: methods for meetings, lectures, reading, and research, plus processing workflows. Use when improving how you capture and re | original |
| `ams-notification-center` | Build notification centers — aggregation, preferences, read states, and unifying multi-channel alerts in one place. | original |
| `ams-notion-pro` | Master advanced Notion: relational databases, formulas, rollups, templates, automations, and workspace architecture. Use when building or optimizing Notion syst | original |
| `ams-notion-pro-dev` | Use Notion as a developer knowledge system: docs, runbooks, specs, wikis, and API-driven automation. Use when organizing engineering knowledge in Notion. | original |
| `ams-novita-ai` | Cost-efficient inference on Novita AI — open models, serverless GPUs, and simple scaling for budget-conscious workloads. | original |
| `ams-npm-pro` | Master npm: workspaces, lockfiles, scripts, publishing, provenance, and security hygiene. Use when managing JS dependencies with npm. | original |
| `ams-numerical-optimization` | Practical optimization — choosing algorithms, handling constraints, tuning, and diagnosing convergence failures. | original |
| `ams-numpy-pro` | NumPy guidance — array operations, broadcasting, vectorization, indexing, linear algebra, and performance. | original |
| `ams-nx-pro` | Run JS monorepos with Nx: task graph, computation caching, affected commands, generators, and module boundaries. Use when managing large monorepos with enforced | original |
| `ams-oauth-oidc-pro` | Implement OAuth 2.0 and OpenID Connect securely — flow selection, token hardening, and common vulnerability defenses. | original |
| `ams-obsidian-pro` | Power-user Obsidian: plugin stack, Dataview queries, Canvas, daily-note workflows, sync, and vault architecture. Use when building a serious markdown-based know | original |
| `ams-ocr-pro` | Optical character recognition pipelines — engine choice, preprocessing, and accuracy — use when extracting text from images or scans. | original |
| `ams-octoai-guide` | Efficient inference on OctoAI — optimized serving for open models with a focus on price-performance. | original |
| `ams-ollama-local` | Run LLMs locally — model selection, setup, quantization choices, API usage, and practical local workflows. Use when you want private, offline, or cost-free mode | original |
| `ams-ollama-pro` | Ollama guidance — running local LLMs, model selection, Modelfiles, API usage, and RAG/agent integration. | original |
| `ams-on-call-guide` | Sustainable on-call — rotations, alert hygiene, handoffs, and burnout prevention — use when setting up or fixing on-call. | original |
| `ams-on-call-handoff` | Run clean on-call handoffs — shift transitions, knowledge transfer, runbook currency, and sustainable rotations. | original |
| `ams-on-demand-delivery` | Design on-demand delivery operations — dispatch, courier management, ETAs, batching, and last-mile economics. | original |
| `ams-onboarding-buddy` | Ramp up fast in a new role with a 30/60/90 plan, stakeholder mapping, and quick-win strategy. | original |
| `ams-onboarding-playbook` | Design SaaS user onboarding — activation flows, checklists, empty states, and time-to-value optimization. | original |
| `ams-open-banking` | Understand open banking — AIS/PIS flows, consent management, PSD2 concepts, and secure bank-data integration. | original |
| `ams-openai-agents-sdk` | Build production agents with a code-first agents SDK — agent definitions, handoffs between specialists, guardrails, sessions, and tracing. Use when structuring  | original |
| `ams-openai-api-pro` | OpenAI API guidance — chat/completions, function calling, structured outputs, embeddings, assistants, and cost control. | original |
| `ams-openrouter-guide` | Access hundreds of models through one API with OpenRouter — routing, fallbacks, and unified billing for LLM apps. | original |
| `ams-opsgenie-pro` | Run Opsgenie for alerting and on-call — integrations, routing rules, schedules, and incident collaboration. | original |
| `ams-orbital-mechanics` | Orbits from Kepler to perturbations — elements, transfers, propagation, and rendezvous math that actually works. | original |
| `ams-osint-investigator` | Conduct ethical open-source intelligence investigations using public data — for due diligence, incident enrichment, and brand protection. | original |
| `ams-outbreak-investigation` | Field epidemiology outbreak response — case definitions, epidemic curves, analytic studies, and control measures. | original |
| `ams-outlines-library` | Constrain LLM generation to exact structures with Outlines — regex, JSON schema, and grammar-guided decoding. | original |
| `ams-owasp-security` | Apply OWASP frameworks (Top 10, ASVS, SAMM, MASVS, Cheat Sheets) to design, test, and harden web and mobile applications. | original |
| `ams-paas-cli` | Command-line workflows for PaaS platforms — project management, deploys, logs, and automation — vendor-neutral patterns. | original |
| `ams-paas-deploy` | Deploying applications on Platform-as-a-Service — build, config, and release patterns that work on any PaaS. | original |
| `ams-paas-networking` | Networking on PaaS platforms — private networks, custom domains, TLS, and egress — vendor-neutral patterns. | original |
| `ams-paas-observability` | Observability on PaaS platforms — logs, metrics, traces, and alerts without managing the plumbing — vendor-neutral patterns. | original |
| `ams-packaging-designer` | Design product packaging with shelf impact, structural basics, regulatory requirements, and dielines. | original |
| `ams-pagerduty-pro` | Operate PagerDuty effectively — on-call schedules, escalation policies, incident workflows, and alert hygiene. | original |
| `ams-paid-ads-specialist` | Plan and optimize paid advertising — Google, Meta, and multi-channel campaigns, budgets, creative testing, and ROAS. | original |
| `ams-paleoclimate-proxies` | Reconstructing past climates from proxies — ice cores, tree rings, sediments, corals — with dating and calibration discipline. | original |
| `ams-pandas-pro` | pandas guidance — data wrangling, groupby, merging, time series, performance optimization, and memory management. | original |
| `ams-paper-structure` | Architecting a scientific paper — IMRaD logic, storyline design, and paragraph-level structure that reviewers follow. | original |
| `ams-para-method` | Organize everything with PARA: Projects, Areas, Resources, Archives across any tool. Use when information is scattered and you need one simple universal organiz | original |
| `ams-partnership-manager` | Build strategic partnerships — sourcing, structuring deals, co-marketing, and managing partner relationships. | original |
| `ams-password-auditor` | Audit password hygiene and authentication controls — policy design, credential exposure checks, and migration to modern auth. | original |
| `ams-password-manager` | Use a password manager correctly: setup, strong unique passwords, 2FA, passkeys, sharing, and emergency access. Use when securing accounts or helping others ado | original |
| `ams-pathway-enrichment` | Pathway and gene-set enrichment analysis — ORA, GSEA, background sets, and honest interpretation. | original |
| `ams-pcr-optimization` | PCR assay optimization and troubleshooting — primer design, cycling conditions, and fixing failed reactions. | original |
| `ams-pde-solvers` | Solving partial differential equations numerically — finite differences, stability, boundary conditions, and verification. | original |
| `ams-pdf-pro` | Programmatic PDF work — creating, reading, merging, and filling PDFs — use when automating PDF generation or extraction. | original |
| `ams-pdf-to-markdown` | Converting PDFs to clean Markdown — layout-aware extraction for docs and RAG pipelines. | original |
| `ams-peer-review-checklist` | Conducting rigorous peer review — structured evaluation, major vs minor issues, and writing reviews authors can act on. | original |
| `ams-penetration-tester` | Run authorized penetration tests with a defined scope and rules of engagement, and convert findings into prioritized, remediable reports. | original |
| `ams-performance-pro` | Systematic performance engineering: measure, profile, optimize hotspots, and set budgets. Use when diagnosing slowness or making systems faster. | original |
| `ams-performance-review-writer` | Write compelling self-assessments and peer reviews with evidence-backed impact narratives. | original |
| `ams-perl-pro` | Idiomatic modern Perl: strict/warnings, CPAN, references, regex mastery, and maintainable scripting. Use when writing, reviewing, or maintaining Perl code. | original |
| `ams-personal-branding` | Define and grow a professional personal brand with positioning, content pillars, and platform strategy. | original |
| `ams-personal-research-assistant` | Research anything well with an AI assistant: frame balanced questions, compare options in tables, demand sources with dates, and spot weak claims. Use when comp | original |
| `ams-pharmacogenomics-basics` | Pharmacogenomics in practice — key gene-drug pairs, phenotype translation, and clinical implementation. | original |
| `ams-pharmacovigilance-signals` | Drug safety signal detection — disproportionality analysis, case-series evaluation, and signal validation. | original |
| `ams-phase-diagram-analysis` | Reading and constructing phase diagrams — Gibbs phase rule, lever rule, invariant reactions, and CALPHAD basics. | original |
| `ams-phi-guide` | Build with Microsoft's Phi small language models — compact reasoning models for edge and cost-efficient apps. | original |
| `ams-phishing-tester` | Run authorized phishing simulations to measure susceptibility, train staff, and strengthen reporting culture — safely and ethically. | original |
| `ams-photo-editor` | Edit photos professionally with exposure, color grading, retouching workflow, and export best practices. | original |
| `ams-photometry-pipelines` | Measuring brightness from images — aperture and PSF photometry, calibration to standard systems, and light curves. | original |
| `ams-php-pro` | Idiomatic modern PHP: Composer autoloading, strict types, OOP/domain modeling, Laravel/Symfony patterns, and testing. Use when writing, reviewing, or structurin | original |
| `ams-phylogenetics` | Molecular phylogenetics — alignment, model selection, tree inference, and interpreting evolutionary trees. | original |
| `ams-physics-pro` | Applied physics problem-solving — mechanics, E&M, statistical mechanics, and data analysis with real unit and error discipline. | original |
| `ams-pillow-pro` | Automate image processing in Python with Pillow for resizing, watermarking, thumbnails, and batch pipelines. | original |
| `ams-pitch-deck-creator` | Build compelling pitch decks — narrative arc, slide-by-slide structure, and investor-focused storytelling. | original |
| `ams-pkpd-modeling` | Pharmacokinetic/pharmacodynamic modeling — compartmental models, nonlinear mixed effects, and dose selection. | original |
| `ams-plan-execute` | Split agents into a planner that strategizes and an executor that acts — with replanning when reality diverges. | original |
| `ams-planning` | Plan multi-step AI agent work: decompose goals, sequence agents, define handoffs, and handle failure. Use when orchestrating agents through complex tasks that n | original |
| `ams-planning-with-files` | Plan complex work with files: write plans as documents before executing, for agents and humans. Use when coordinating multi-step work that needs review, handoff | original |
| `ams-plate-tectonics-basics` | Plate tectonic framework — boundaries, kinematics, reconstructions, and linking tectonics to geology. | original |
| `ams-platform-api-integration` | Integrate with SaaS platform APIs — authentication, rate limits, webhooks, SDK patterns, and robust client design. | original |
| `ams-platform-migration` | Migrating applications between platforms — planning, data movement, and cutover — vendor-neutral methodology. | original |
| `ams-playwright-pro` | Browser automation with Playwright — reliable selectors, waits, and test patterns — use for E2E testing and scripted browsing. | original |
| `ams-pnpm-pro` | Master pnpm: workspaces, content-addressable store, strict node_modules, catalogs, and monorepo workflows. Use when managing JS dependencies with pnpm. | original |
| `ams-pocketbase-auth` | Authentication with PocketBase — email/password, OAuth2, and token management — use when implementing login and user sessions. | original |
| `ams-pocketbase-deploy` | Deploying PocketBase to production — hosting, TLS, backups, and updates — use when shipping a PocketBase app. | original |
| `ams-pocketbase-hooks` | Extending PocketBase with hooks — validation, side effects, and custom routes in Go/JavaScript. | original |
| `ams-pocketbase-migrations` | Schema migrations in PocketBase — generating, reviewing, and applying them safely across environments. | original |
| `ams-pocketbase-pro` | PocketBase backend mastery — collections, APIs, and self-hosted operations — use when building on PocketBase. | original |
| `ams-pocketbase-realtime` | Realtime subscriptions with PocketBase — live updates, presence patterns, and scaling — use for collaborative or live UI features. | original |
| `ams-podcast-distribution` | Distribute podcasts effectively — directories, RSS feeds, show notes SEO, clips, and cross-promotion. | original |
| `ams-podcast-marketer` | Market through podcasts — launching shows, guest booking, promotion, and measuring podcast ROI. | original |
| `ams-pollinations-guide` | Free, open AI APIs via Pollinations — text, image, and audio generation with minimal setup. | original |
| `ams-polymer-science-basics` | Polymer fundamentals — molecular weight, polymerization methods, thermal transitions, and mechanical behavior of plastics and elastomers. | original |
| `ams-pomodoro-coach` | Coach the Pomodoro Technique properly: interval design, task sizing, interruption handling, and adapting cycles to real work. Use when building focused work hab | original |
| `ams-portfolio-builder` | Design and build a standout professional portfolio with case studies, project curation, and presentation. | original |
| `ams-postcss-pro` | Build CSS pipelines with PostCSS: autoprefixer, nesting, custom plugins, and integration with bundlers. Use when processing CSS in modern build setups. | original |
| `ams-postgres-pro` | Deep PostgreSQL know-how — indexing, tuning, JSONB, and administration — use when working with or troubleshooting Postgres. | original |
| `ams-powershell-pro` | Professional PowerShell: cmdlets, pipeline patterns, modules, remoting, and Windows automation. Use when writing, reviewing, or structuring PowerShell scripts a | original |
| `ams-pr-specialist` | Run public relations — media outreach, press releases, thought leadership, and crisis communications. | original |
| `ams-presentation-designer` | Design compelling slide decks with narrative structure, visual clarity, and delivery-ready polish. | original |
| `ams-pricing-strategist` | Develop pricing strategy — research, models, packaging, testing, and communicating price changes. | original |
| `ams-print-designer` | Design for print with color management, bleeds, paper selection, prepress, and production specs. | original |
| `ams-prisma-pro` | Prisma ORM mastery — schema design, migrations, and query optimization — use when building with Prisma. | original |
| `ams-prisma-pro-dev` | Prisma ORM guidance — schema design, migrations, query optimization, relations, and production operations. | original |
| `ams-product-analytics-guide` | Implement product analytics — event tracking, funnels, retention, experimentation, and data-informed decisions. | original |
| `ams-product-marketer` | Do product marketing — positioning, messaging, launches, sales enablement, and competitive intelligence. | original |
| `ams-prometheus-pro` | Prometheus guidance — metrics design, PromQL, alerting rules, exporters, recording rules, and operations. | original |
| `ams-promotion-case-builder` | Assemble a promotion packet with scope evidence, stakeholder support, and level-criteria mapping. | original |
| `ams-prompt-engineer` | Act as a dedicated prompt engineer — audit existing prompts, diagnose failure modes, rewrite for reliability, and build prompt test suites. Use when you need a  | original |
| `ams-prompt-engineering` | Craft effective prompts — instruction design, few-shot examples, structured outputs, chain-of-thought, and iterative prompt refinement. Use when a model's respo | original |
| `ams-prompt-engineering-guidance` | Team-level guidance for prompt engineering — standards, review processes, prompt libraries, versioning, and rollout practices. Use when standardizing how an org | original |
| `ams-prompt-engineering-pro` | Prompt engineering guidance — system prompts, few-shot, chain-of-thought, structured output, and evaluation-driven iteration. | original |
| `ams-prompt-injection-defense` | Defend LLM systems against prompt injection — attack taxonomy, input handling, output validation, and layered mitigations. Use when building LLM features that p | original |
| `ams-prompt-to-design` | Convert text briefs and ideas into structured design concepts with direction, specs, and production plans. | original |
| `ams-prompt-to-ui-workflows` | Take AI-generated UI into production: code review, hardening, accessibility, performance, and design-system integration. Use after generating UI with AI tools. | original |
| `ams-proposal-figures` | Designing grant proposal figures — conceptual models, preliminary-data displays, and schematics that sell the science. | original |
| `ams-protein-structure-prediction` | Predicting protein structures with AlphaFold/ESMFold — setup, confidence assessment, and honest interpretation. | original |
| `ams-proteomics-pro` | Mass-spectrometry proteomics — experimental design, data processing, quantification, and functional interpretation. | original |
| `ams-protocol-versioning` | Version-controlled lab protocols — writing, reviewing, versioning, and change control for SOPs. | original |
| `ams-psychometrics` | Psychological measurement — scale construction, factor analysis, IRT, and evaluating reliability and validity. | original |
| `ams-psychotherapy-outcomes` | Measuring psychotherapy effectiveness — outcome instruments, reliable change, and benchmarking clinical significance. | original |
| `ams-publication-figures` | Designing publication-quality scientific figures — layout, typography, data-ink, and journal-ready export. | original |
| `ams-puppeteer-pro` | Browser automation with Puppeteer — Chrome DevTools Protocol control, scraping, and PDF generation — use for scripted Chrome workflows. | original |
| `ams-purple-team` | Run collaborative purple-team exercises where offense and defense work together to validate and improve detection coverage. | original |
| `ams-push-notification-strategist` | Design push notification strategy — opt-in flows, segmentation, timing, personalization, and retention-driving messaging. | original |
| `ams-push-notifications-pro` | Engineer push notification systems — architecture, delivery, personalization, and cross-platform best practices. | original |
| `ams-pwa-craftsman` | Build excellent Progressive Web Apps: manifests, service workers, offline strategy, installability, and app-like UX. Use when building or reviewing PWAs. | original |
| `ams-pwa-patterns` | Build Progressive Web Apps: manifests, service workers, offline strategies, installability, and push. Use for app-like web experiences. | original |
| `ams-pydantic-ai` | Build type-safe AI agents with typed agent frameworks — structured outputs via data models, dependency injection, tool validation, and testable agent code. Use  | original |
| `ams-python-pro` | Idiomatic Python: project layout, packaging, type hints, testing, async, and performance. Use when writing, reviewing, or structuring Python projects. | original |
| `ams-pytorch-pro` | PyTorch guidance — tensors, autograd, training loops, DataLoader, distributed training, and production inference. | original |
| `ams-qa-test-planner` | Plan software testing systematically — test strategy, risk-based prioritization, test case design, automation decisions, and defect triage. Use when deciding wh | original |
| `ams-qr-code-pro` | Generate and customize QR codes with error correction, styling, and scan-reliability best practices. | original |
| `ams-qualitative-analysis` | Analyze qualitative data rigorously — coding, thematic analysis, grounded theory, and trustworthy interpretation. Use when working with interviews, open-ended r | original |
| `ams-quantization` | Quantize models for efficient inference — precision formats, calibration, accuracy validation, and hardware considerations. Use when models are too big, slow, o | original |
| `ams-qwen-coder` | Build with Qwen's code models — strong open code generation, completion, and agentic coding capabilities. | original |
| `ams-qwen-guide` | Build with Alibaba's Qwen models — strong open-weight multilingual models from small to frontier scale. | original |
| `ams-r-pro` | Professional R: tidyverse workflows, vectorization, packaging, R Markdown reporting, and Shiny apps. Use when writing, reviewing, or structuring R code for anal | original |
| `ams-rabbitmq-pro` | RabbitMQ guidance — exchanges, queues, routing, acknowledgments, dead-lettering, clustering, and operations. | original |
| `ams-radio-astronomy-basics` | Radio astronomy fundamentals — interferometry concepts, spectral lines (HI, CO), calibration, and imaging basics. | original |
| `ams-rag-engineer` | Engineer retrieval-augmented generation systems — chunking, embeddings, hybrid retrieval, reranking, and grounded generation with citations. Use when building o | original |
| `ams-rag-pro` | RAG guidance — chunking, retrieval tuning, hybrid search, reranking, citations, evaluation, and production RAG. | original |
| `ams-rails-pro` | Ruby on Rails guidance — MVC conventions, ActiveRecord mastery, Hotwire, background jobs, and production ops. | original |
| `ams-raycast-pro` | Master Raycast on macOS: commands, extensions, AI, clipboard history, window management, and custom scripts. Use when turning Raycast into the central command l | original |
| `ams-rbac-designer` | Design role-based access control — role engineering, permission modeling, hierarchies, and governance. | original |
| `ams-react-best-practices` | Idiomatic React: component design, hooks discipline, state placement, rendering performance, and modern patterns. Use when writing or reviewing React code, or c | original |
| `ams-react-hook-form-pro` | Build performant React forms with React Hook Form: validation, controlled inputs, dynamic fields, and error UX. Use when forms need speed and clean validation. | original |
| `ams-react-native-pro` | Professional React Native: cross-platform architecture, navigation, native modules, and performance. Use when writing, reviewing, or structuring React Native ap | original |
| `ams-react-pattern` | Build agents that interleave reasoning and acting — the ReAct loop of thought, action, and observation. | original |
| `ams-react-pro` | Write professional React: hooks discipline, composition, performance, error boundaries, and modern patterns. Use for any React development beyond basics. | original |
| `ams-react-query-pro` | Manage server state with TanStack Query: queries, mutations, caching, invalidation, optimistic updates, and pagination. Use when fetching/mutating remote data i | original |
| `ams-readwise-pro` | Master Readwise: highlight capture, spaced-repetition review, and exporting knowledge into your notes. Use when you read a lot digitally and want highlights to  | original |
| `ams-rebuttal-writing` | Writing effective rebuttals to peer review — point-by-point responses, tone, new analyses, and knowing when to concede. | original |
| `ams-recoil-pro` | Manage React state with Recoil: atoms, selectors, async selectors, and atom families/effects. Use when maintaining Recoil codebases or needing its data-flow gra | original |
| `ams-red-teamer` | Plan and execute authorized red-team operations that emulate real adversaries to test detection and response, with strict scoping and safety controls. | original |
| `ams-red-teaming-llms` | Red-team LLM systems methodically — scoping, adversarial test design, vulnerability classification, and remediation tracking. Use when you need to find weakness | original |
| `ams-redis-pro` | Redis data structures, caching strategies, and production operations — use when adding caching, queues, or rate limiting with Redis. | original |
| `ams-redis-pro-dev` | Redis guidance — data structures, caching patterns, pub/sub, streams, transactions, and production operations. | original |
| `ams-redux-pro` | Manage complex state with Redux Toolkit: slices, thunks, RTK Query, selectors, and DevTools. Use for large apps needing strict state conventions. | original |
| `ams-refactoring-pro` | Systematic refactoring: safe transformations, strangler patterns, characterization tests, and large-scale change management. Use when improving code structure w | original |
| `ams-regex-pro` | Write, test, and debug regular expressions with pattern recipes, engine quirks, and performance safety. | original |
| `ams-regulatory-threat-model` | Threat-model regulatory and compliance risk — mapping legal obligations to security controls and residual exposure. | original |
| `ams-reinforcement-learning` | Understand and apply reinforcement learning — MDPs, value and policy methods, exploration, reward design, and RLHF basics. Use when decisions are sequential and | original |
| `ams-release-health` | Monitoring release health — crash-free rates, adoption, and catching bad deploys early — platform-agnostic patterns. | original |
| `ams-release-pro` | Run reliable releases: versioning, branching, checklists, staged rollouts, and rollback plans. Use when cutting releases or designing a release process. | original |
| `ams-reliability-validity-testing` | Evaluating measurement quality — test-retest, inter-rater agreement, and construct validity evidence. | original |
| `ams-reminder-system` | Build a reliable reminder setup with Muse: capture-everything habit, due dates vs ticklers, recurring reminders, follow-up checks, and escalation when things sl | original |
| `ams-remix-pro` | Idiomatic Remix: loaders/actions, progressive enhancement, nested routing, and web-standard patterns. Use when writing, reviewing, or structuring Remix applicat | original |
| `ams-remote-sensing` | Satellite and airborne remote sensing — multispectral indices, SAR basics, classification, and change detection. | original |
| `ams-remote-work-guide` | Thrive in remote roles with async communication habits, home-office setup, and visibility strategies. | original |
| `ams-renewable-resource-assessment` | Assessing wind, solar, and hydro resources — measurement, modeling, uncertainty, and bankable energy-yield estimates. | original |
| `ams-replicate-guide` | Ship ML models as APIs with Replicate — run open models, deploy custom models, and pay per use. | original |
| `ams-reranking` | Rerank retrieval candidates with cross-encoder models — two-stage pipelines, model selection, latency trade-offs, and evaluation. Use when first-stage retrieval | original |
| `ams-research-engineer` | Do applied AI research engineering — reproduce papers, run ablations, manage experiments, and turn prototypes into reliable systems. Use when bridging the gap b | original |
| `ams-research-paper-assistant` | Work with academic papers — find them, read efficiently, extract claims and methods, compare across papers, and track what matters. Use when doing literature-dr | original |
| `ams-research-paper-writer` | Write academic papers with AI assistance — outlining, drafting sections, tightening arguments, managing citations, and responding to reviewers. Use when turning | original |
| `ams-rest-api-pro` | REST API design guidance — resource modeling, versioning, pagination, auth, error formats, and documentation. | original |
| `ams-resting-state-fmri` | Resting-state fMRI analysis — denoising, seed-based and ICA networks, and reliability-aware interpretation. | original |
| `ams-resubmission-strategy` | Turning a rejected grant into a funded one — triaging reviews, the introduction to resubmission, and strategic revision. | original |
| `ams-resume-parser` | Extracting structured data from resumes — fields, skills, and normalization — use when building hiring pipelines. | original |
| `ams-resume-writer` | Draft, tailor, and polish resumes for specific roles using achievement-based bullets and recruiter conventions. | original |
| `ams-retail-marketer` | Market for retail — in-store experience, promotions, merchandising, omnichannel, and foot traffic growth. | original |
| `ams-reverse-engineer` | Reverse-engineer binaries and protocols for defensive purposes — vulnerability research, malware understanding, and interoperability. | original |
| `ams-review-manager` | Manage online reviews — generation strategies, response playbooks, reputation monitoring, and turning reviews into growth. | original |
| `ams-reviewing-code-for-science` | Reviewing scientific code — correctness, reproducibility, numerical soundness, and constructive feedback. | original |
| `ams-rlhf-pipeline` | Build the full reinforcement-learning-from-human-feedback stack — preference data, reward model, and policy optimization. | original |
| `ams-rollup-pro` | Bundle libraries and apps with Rollup: plugins, tree-shaking, multi-format output, code splitting, and watch mode. Use when building distributable JS libraries. | original |
| `ams-rote` | Eliminate rote work: identify repetitive tasks, measure their cost, and automate or remove them systematically. Use when drowning in repetitive busywork or buil | original |
| `ams-rss-pro` | Master RSS — feed management, readers, content aggregation, monitoring, and automation with feeds. | original |
| `ams-rss-reader-pro` | Master RSS readers: feed curation, triage workflows, filtering, and turning feeds into signal. Use when you want news and blogs on your terms instead of algorit | original |
| `ams-ruby-pro` | Idiomatic Ruby: OOP design, blocks/enumerables, Rails conventions, RSpec testing, and performance awareness. Use when writing, reviewing, or structuring Ruby ap | original |
| `ams-runbook-writer` | Writing runbooks that work at 3am — structure, diagnostics, and safe procedures — use when documenting operational response. | original |
| `ams-rust-pro` | Idiomatic Rust: ownership, lifetimes, error handling, async, project structure, and safe unsafe. Use when writing, reviewing, or structuring Rust programs. | original |
| `ams-rxjs-pro` | Program reactively with RxJS: observables, operators, subjects, higher-order mapping, and subscription management. Use for event streams, async orchestration, a | original |
| `ams-saas-security-essentials` | Cover SaaS security fundamentals — auth, data protection, access control, compliance basics, and incident readiness. | original |
| `ams-salary-negotiator` | Prepare and execute compensation negotiations with market data, scripts, and counter-offer strategy. | original |
| `ams-sales-coach` | Coach sales performance — discovery, objection handling, negotiation, pipeline management, and winning habits. | original |
| `ams-sambanova-guide` | Run open models on SambaNova's reconfigurable hardware — fast inference with enterprise deployment options. | original |
| `ams-saml-pro` | Deploy SAML SSO securely — assertion hardening, metadata management, and defense against signature and XML attacks. | original |
| `ams-sample-biobanking` | Biobanking best practices — consent, SOPs, cold chain, sample tracking, and quality management. | original |
| `ams-sanger-sequencing` | Sanger sequencing workflows — primer design, reaction setup, chromatogram QC, and variant interpretation. | original |
| `ams-sass-pro` | Write maintainable Sass/SCSS: modules (@use), mixins, functions, architecture (7-1), and build integration. Use when styling with Sass in any project. | original |
| `ams-sast-dast-pro` | Run static and dynamic application security testing — tool selection, tuning, triage, and developer integration. | original |
| `ams-scala-pro` | Idiomatic Scala: functional-OO blend, case classes, pattern matching, effect systems, and build tooling. Use when writing, reviewing, or structuring Scala appli | original |
| `ams-scheduling-assistant` | Streamline scheduling — booking flows, availability management, reminders, and reducing no-shows. | original |
| `ams-scientific-argumentation` | Building rigorous scientific arguments — claim hierarchies, evidence standards, handling objections, and logical fallacies to avoid. | original |
| `ams-scikit-learn-pro` | scikit-learn guidance — pipelines, model selection, cross-validation, preprocessing, and production deployment. | original |
| `ams-screen-recorder` | Capture professional screen recordings with setup, narration, editing, and delivery best practices. | original |
| `ams-sea-level-science` | Sea-level rise science — components, observations, projections, and local relative sea-level assessment. | original |
| `ams-second-brain` | Build a second brain: a trusted external system for capturing, organizing, and retrieving everything you learn and need. Use when knowledge is scattered or you  | original |
| `ams-secrets-manager` | Design secrets management — vaulting, rotation, least-privilege access, and eliminating hardcoded credentials. | original |
| `ams-security-auditor` | Plan and execute security audits against controls frameworks (ISO 27001, SOC 2, NIST CSF) with evidence-based findings. | original |
| `ams-security-pro-dev` | Secure development lifecycle: threat modeling, secure coding, dependency management, and security testing for builders. Use when designing, coding, or shipping  | original |
| `ams-seismic-data-analysis` | Earthquake seismology workflows — phase picking, location, magnitude, focal mechanisms, and seismic hazard basics. | original |
| `ams-self-reflection` | Build agents that critique and improve their own outputs — reflection loops, Reflexion-style memory, and verbal reinforcement. | original |
| `ams-semantic-kernel` | Build enterprise AI apps with Semantic Kernel — kernel, plugins, planners, and memory abstractions across languages. | original |
| `ams-semantic-versioning-pro` | Apply semantic versioning correctly: MAJOR.MINOR.PATCH discipline, breaking-change detection, and version policies. Use when versioning libraries, APIs, or pack | original |
| `ams-senior-architect` | Software architect perspective: system decomposition, integration patterns, ADRs, and long-horizon trade-offs. Use when designing systems, evaluating technical  | original |
| `ams-senior-backend` | Senior backend engineer perspective: API design, data modeling, concurrency, reliability, and scalability trade-offs. Use when designing services, data models,  | original |
| `ams-senior-devops` | DevOps/SRE perspective: CI/CD design, infrastructure as code, observability, incident response, and reliability trade-offs. Use when building pipelines, managin | original |
| `ams-senior-frontend` | Senior frontend engineer perspective: component architecture, state management, rendering performance, and UX trade-offs. Use when designing UI features, review | original |
| `ams-senior-fullstack` | Senior fullstack perspective: end-to-end feature ownership, API/UI contracts, data flow across the stack, and pragmatic stack choices. Use when building feature | original |
| `ams-senior-prompt-engineer` | Expert prompt design for LLM systems: instruction structure, few-shot examples, output control, and systematic evaluation. Use when building prompts, agents, or | original |
| `ams-senior-qa` | QA engineering perspective: risk-based test strategy, exploratory testing, defect advocacy, and quality gates. Use when planning test coverage, improving QA pro | original |
| `ams-senior-security` | Security engineering perspective: threat modeling, secure design review, vulnerability triage, and defense in depth. Use when assessing risks, reviewing for vul | original |
| `ams-sentry-pro-dev` | Sentry guidance — error tracking setup, release health, performance monitoring, alert rules, and quota management. | original |
| `ams-seo-content-writer` | Write search-optimized content that ranks — briefs, outlines, drafts, and on-page optimization for articles and landing pages. | original |
| `ams-seo-site-auditor` | Audit websites for SEO: crawling, technical checks, metadata, Core Web Vitals, structured data, and prioritized fixes. Use when diagnosing search visibility pro | original |
| `ams-seo-specialist` | Execute technical and strategic SEO — audits, keyword strategy, link building, and sustainable organic growth. | original |
| `ams-sequelize-pro` | Sequelize ORM guidance — models, associations, migrations, transactions, and production-safe configuration. | original |
| `ams-seroprevalence-surveys` | Designing and analyzing seroprevalence studies — sampling, assay validation, and adjusting for test performance. | original |
| `ams-serp-api-pro` | Using search-engine results APIs — query design, parsing results, and cost control — vendor-neutral patterns. | original |
| `ams-service-worker-pro` | Control the network layer with Service Workers: caching strategies, offline support, background sync, and update flows. Use for offline-first web apps. | original |
| `ams-sglang-guide` | Serve LLMs fast with SGLang — structured generation, radix attention caching, and high-throughput inference runtimes. | original |
| `ams-shadcn-ui` | Build with shadcn/ui: component copying, theming, customization, and composition patterns. Use when using shadcn-style accessible components in React. | original |
| `ams-shell-pro` | Professional shell scripting: safe Bash patterns, quoting, error handling, and maintainable CLI tools. Use when writing or reviewing shell scripts. | original |
| `ams-siem-engineer` | Engineer SIEM platforms — log onboarding, parsing, detection content, correlation, and performance tuning. | original |
| `ams-single-cell-rnaseq` | Single-cell RNA-seq analysis — QC, normalization, clustering, annotation, and trajectory inference. | original |
| `ams-skill-creator` | Design and author high-quality agent skills: scoping, frontmatter, structure, safety review, and validation. Use when creating a new reusable skill from scratch | original |
| `ams-skill-curator` | Safely vet and import third-party agent skills: read-only shallow clone, validate frontmatter, safety-scan every file, adapt tool-specific-isms, never execute r | original |
| `ams-skywork-guide` | Build with Skywork's open models — efficient bilingual models with practical deployment sizing. | original |
| `ams-slack-api-automation` | Automate Slack via its native Web API: bots, messages, workflows, and integrations without middleware. Use when building Slack-native automations with code you  | original |
| `ams-slack-pro` | Master Slack for teams — channel architecture, etiquette, workflows, integrations, and taming notification overload. | original |
| `ams-slack-productivity` | Use Slack productively: channel design, notification control, threads, workflows, and search. Use when Slack is noisy, channels are chaotic, or you want team me | original |
| `ams-sms-marketer` | Run SMS marketing — compliant list building, campaign strategy, automation, and high-converting text programs. | original |
| `ams-sms-pro` | Use SMS professionally — business texting etiquette, alerts, 2FA-adjacent flows, and compliant organizational messaging. | original |
| `ams-soar-pro` | Build security orchestration and automation — playbooks that enrich, contain, and close the loop on repetitive response work. | original |
| `ams-soc-analyst` | Run security operations center workflows — alert triage, investigation, escalation, and shift handover for detection and response. | original |
| `ams-social-engineering-defense` | Defend against social engineering — recognize manipulation tactics, build verification culture, and run awareness programs that work. | original |
| `ams-social-media-designer` | Design scroll-stopping social content with platform specs, hooks, carousels, and brand consistency. | original |
| `ams-social-media-manager` | Plan, create, and manage social media presence — content calendars, platform strategy, engagement, and performance reporting. | original |
| `ams-social-scraper` | Scrape public social content ethically — robots.txt, rate limits, terms of service, and API-first data collection patterns. | original |
| `ams-solana-pro` | Build Solana programs with Anchor: accounts model, PDAs, CPIs, SPL tokens, testing on local validator, and devnet/mainnet deployment. Use when developing on Sol | original |
| `ams-solid-pro` | Idiomatic SolidJS: fine-grained reactivity, signals/memos/effects, component design, and SolidStart patterns. Use when writing, reviewing, or structuring Solid  | original |
| `ams-solidity-pro` | Write secure, gas-efficient Solidity smart contracts for EVM chains: tokens, vaults, access control, upgrade patterns, testing and audit checklists. Use when de | original |
| `ams-spatial-epidemiology` | Geographic disease analysis — cluster detection, disease mapping, spatial regression, and hotspot surveillance. | original |
| `ams-specific-aims-page` | Writing the one-page Specific Aims — the grant's elevator pitch, structure, and the mistakes that lose reviewers in 30 seconds. | original |
| `ams-spectroscopy-basics` | Astronomical spectroscopy — line identification, redshift measurement, equivalent widths, and abundance basics. | original |
| `ams-speed-reader` | Read faster with comprehension: techniques for skimming, scanning, and deep reading at the right speed for the purpose. Use when reading volume overwhelms or yo | original |
| `ams-spike-sorting` | Spike sorting for extracellular electrophysiology — detection, clustering, and quality metrics for single units. | original |
| `ams-spring-pro` | Spring Boot guidance — DI, data access, security, testing, and production-ready Java services. | original |
| `ams-sql-pro` | Expert SQL patterns for complex queries, optimization, and cross-database portability — use when writing, tuning, or debugging SQL. | original |
| `ams-sre-pro` | Site reliability engineering — SLIs/SLOs, error budgets, and reliability practices — use when making systems reliable at scale. | original |
| `ams-ssh-expert` | SSH mastery — key management, config patterns, multiplexing, tunneling, jump hosts, and hardening. | original |
| `ams-starcoder-guide` | Build with StarCoder code models — open code LLMs trained on The Stack with fill-in-the-middle support. | original |
| `ams-startup-advisor` | Advise early-stage startups — idea validation, founder decisions, fundraising strategy, and avoiding common failure modes. | original |
| `ams-statistical-modeling` | Build statistical models properly — choosing models, checking assumptions, quantifying uncertainty, and avoiding common inferential traps. Use when moving beyon | original |
| `ams-statistical-review-checklist` | Reviewing the statistics in a manuscript — design, assumptions, multiplicity, effect sizes, and reproducibility. | original |
| `ams-status-page` | Build and maintain status pages — incident communication, uptime transparency, and subscriber notifications. | original |
| `ams-stellar-classification` | Classifying stars — spectral types, luminosity classes, color–magnitude diagrams, and deriving stellar parameters. | original |
| `ams-stochastic-processes` | Modeling randomness over time — Markov chains, Poisson processes, Brownian motion, SDEs, and simulation. | original |
| `ams-storefront-ordering` | Build direct online ordering for merchants — branded storefronts, menus, checkout, and owned customer relationships. | original |
| `ams-storyboard-artist` | Visualize scripts and concepts with storyboards covering shot composition, pacing, and camera language. | original |
| `ams-storybook-pro` | Develop UI in isolation with Storybook: stories, args, controls, decorators, and interaction/visual testing. Use for component-driven development. | original |
| `ams-styled-components-pro` | Style React with styled-components: theming, transient props, attrs, SSR, and performance patterns. Use when building component-scoped styles with CSS-in-JS. | original |
| `ams-subtitle-pro` | Create accurate subtitles and captions with timing, formatting standards, SRT/VTT workflows, and QC. | original |
| `ams-supabase-pro` | Supabase backend development — Postgres, Auth, Storage, and Row Level Security — use when building on Supabase. | original |
| `ams-support-agent-writer` | Write customer support content — help center articles, macros, chatbot scripts, and troubleshooting guides. | original |
| `ams-survey-designer` | Design effective surveys — question writing, response scales, sampling, bias reduction, and pilot testing. Use when collecting structured data from people and w | original |
| `ams-svelte-pro` | Idiomatic Svelte: runes reactivity, component design, SvelteKit routing/data loading, and performance. Use when writing, reviewing, or structuring Svelte apps. | original |
| `ams-swarm-pattern` | Orchestrate lightweight multi-agent workflows where agents hand off to each other with routines and context variables. | original |
| `ams-swc-pro` | Use SWC for fast transpilation: config, plugins, integration with Next.js/Vite/Rollup, and migration from Babel. Use when replacing Babel or speeding up transfo | original |
| `ams-swift-pro` | Idiomatic Swift: value types, optionals, protocols, structured concurrency, and SwiftUI/UIKit patterns. Use when writing, reviewing, or structuring Swift apps. | original |
| `ams-swiftui-pro` | Professional SwiftUI: declarative UI, state management, data flow, navigation, and performance. Use when writing, reviewing, or structuring SwiftUI apps. | original |
| `ams-symbolic-computation` | Computer algebra with SymPy — exact calculus, equation solving, series, and generating verified numerical code. | original |
| `ams-synthetic-data` | Generate high-quality training data with models — pipelines, filtering, and validation for synthetic datasets that actually help. | original |
| `ams-system-design-interview` | Master system design interviews with a repeatable framework, component deep-dives, and trade-off discussions. | original |
| `ams-systemd-expert` | systemd guidance — unit files, timers, journald, service hardening, targets, and troubleshooting. | original |
| `ams-tailwind-patterns` | Build UIs with Tailwind CSS: utility composition, component extraction, theming, dark mode, and responsive design. Use for utility-first styling in any framewor | original |
| `ams-tailwind-pro` | Professional Tailwind CSS: utility-first workflow, design tokens, component extraction, and maintainable styling. Use when writing, reviewing, or structuring Ta | original |
| `ams-task-manager` | Design a personal task management system that actually works: capture, clarify, organize, review, and engage across any tool. Use when choosing or fixing how yo | original |
| `ams-tauri-mobile-pro` | Build mobile apps with Tauri: Rust backend, web frontend, mobile plugins, permissions, and store deployment. Use when shipping iOS/Android apps from a web codeb | original |
| `ams-tauri-pro` | Professional Tauri: Rust backend + web frontend architecture, commands, security capabilities, and distribution. Use when writing, reviewing, or structuring Tau | original |
| `ams-tdd-pro` | Test-driven development done right: red-green-refactor rhythm, test design, and knowing when TDD fits. Use when adopting TDD, writing tests first, or coaching t | original |
| `ams-teams-pro` | Use Microsoft Teams effectively — team/channel structure, meetings, collaboration, and governance for organizations. | original |
| `ams-technical-interview-prep` | Prepare for coding interviews with DSA patterns, timed practice, and communication coaching. | original |
| `ams-telegram-pro` | Use Telegram professionally — channels, groups, bots, broadcasts, and secure team communication. | original |
| `ams-telemedicine-evaluation` | Evaluating telehealth programs — study designs, quality metrics, equity, and implementation assessment. | original |
| `ams-template-library-design` | Design template libraries — reusable content templates, gallery UX, customization systems, and adoption metrics. | original |
| `ams-tensorflow-pro` | TensorFlow/Keras guidance — model building, tf.data pipelines, training, SavedModel, TF Serving, and TFLite. | original |
| `ams-terraform-pro` | Terraform guidance — HCL structure, modules, state management, workspaces, planning discipline, and safe applies. | original |
| `ams-testing-pro` | Professional testing craft: test design, doubles, boundaries, maintainable suites, and testing strategy. Use when writing tests, designing test suites, or impro | original |
| `ams-text-expander` | Build a text expansion system: snippets for repeated text, fill-ins, date math, and cross-app consistency. Use when you type the same things repeatedly and want | original |
| `ams-therapeutic-drug-monitoring` | Therapeutic drug monitoring — when to measure levels, sampling timing, and dose adjustment. | original |
| `ams-threat-modeler` | Run structured threat-modeling sessions (STRIDE, attack trees, DREAD) to find design-level flaws before code is written. | original |
| `ams-threejs-pro` | Build 3D with Three.js: scenes, cameras, lighting, materials, animation loop, loaders, and performance. Use for programmatic 3D graphics in the browser. | original |
| `ams-threejs-scenes` | Direct 3D website scenes with Three.js: hero scenes, scroll-driven cameras, product stages, and art direction for the web. Use for website 3D sections and scene | original |
| `ams-thumbnail-maker` | Design high-CTR video thumbnails with composition, text, emotion, and platform-specific optimization. | original |
| `ams-time-series-analysis` | Analyze time-ordered data — decomposition, stationarity, forecasting models, changepoint detection, and proper temporal validation. Use when the order of observ | original |
| `ams-time-series-forecasting` | Forecasting time-ordered data — ARIMA/state-space models, stationarity handling, backtesting, and honest prediction intervals. | original |
| `ams-time-tracker` | Track where your time actually goes: manual vs. automatic tracking, categorization, analysis, and turning data into better schedules. Use when diagnosing time l | original |
| `ams-tls-pro` | Deploy and harden TLS — certificate lifecycle, modern cipher configuration, HSTS, and certificate-transparency monitoring. | original |
| `ams-tmux-pro` | Tmux guidance — sessions, windows, panes, keybindings, scripting layouts, and remote pairing workflows. | original |
| `ams-todoist-pro` | Advanced Todoist: projects, labels, filters, priorities, Karma, templates, and integrations. Use when turning Todoist into a complete task system rather than a  | original |
| `ams-together-ai-guide` | Run open models on Together AI — serverless inference, fine-tuning, and GPU clusters for builders. | original |
| `ams-tokenizers` | Understand and work with tokenizers — BPE, WordPiece, Unigram, special tokens, and the practical effects of tokenization on cost and quality. Use when token cou | original |
| `ams-toolformer-pattern` | Teach language models to decide when to call tools — API invocation learned from self-supervised execution feedback. | original |
| `ams-traefik-pro` | Traefik guidance — dynamic routing, providers, middleware chains, Let's Encrypt, and production edge config. | original |
| `ams-transcription-pro` | Master transcription — speech-to-text workflows, accuracy optimization, speaker diarization, and transcript management. | original |
| `ams-transformers-library` | Work with the Transformers ecosystem — pipelines, tokenizers, model loading, training loops, and the hub. Use when using pretrained models for NLP tasks or fine | original |
| `ams-translation-pro` | Handle professional translation — machine translation workflows, localization, quality assurance, and multilingual comms. | original |
| `ams-travel-day-planner` | Plan day trips and travel days with an AI assistant: build itineraries around real open hours and transit, make packing checklists, set a daily budget, and prep | original |
| `ams-treatment-guideline-appraisal` | Critically appraising clinical practice guidelines — AGREE II, evidence grading, and detecting bias. | original |
| `ams-tree-of-thoughts` | Search over multiple reasoning paths — branch, evaluate, backtrack — for problems where one linear chain isn't enough. | original |
| `ams-trigger-dev` | Build reliable background jobs with Trigger.dev: task definition, scheduling, retries, and observability. Use when adding durable background work to a TypeScrip | original |
| `ams-trpc-pro` | tRPC guidance — end-to-end typesafe APIs, routers, procedures, auth, and React Query integration. | original |
| `ams-turborepo-pro` | Manage JS monorepos with Turborepo: task pipelines, caching, affected builds, and workspace conventions. Use when orchestrating builds/tests across multiple pac | original |
| `ams-typeorm-pro` | TypeORM guidance — decorators, repositories, migrations, query builder, and avoiding its classic pitfalls. | original |
| `ams-typescript-pro` | Idiomatic TypeScript: strict typing, generics, discriminated unions, project setup, and type-driven design. Use when writing or reviewing TypeScript, or configu | original |
| `ams-typography-expert` | Master typographic craft with type selection, pairing, scale, spacing, and readability best practices. | original |
| `ams-ui-ux-designer` | Design user interfaces and experiences from research and flows to wireframes, mockups, and usability testing. | original |
| `ams-unit-converter` | Convert units accurately across measurement systems with precision handling and reference tables. | original |
| `ams-url-shortener` | Shorten URLs effectively with slug strategy, link management, QR pairing, and analytics considerations. | original |
| `ams-uuid-generator` | Generate and work with UUIDs across versions with format handling, database, and URL best practices. | original |
| `ams-vaccine-effectiveness` | Estimating vaccine effectiveness from observational data — test-negative designs, cohorts, and bias control. | original |
| `ams-variant-annotation` | Annotating genetic variants — consequence prediction, population frequency, and clinical interpretation. | original |
| `ams-vector-databases` | Choose and operate vector databases — indexing algorithms, filtering, scaling, and production concerns. Use when storing and querying embeddings at scale. | original |
| `ams-vector-db-pro` | Vector database guidance — embeddings, indexing (HNSW/IVF), hybrid search, metadata filtering, and production ops. | original |
| `ams-vercel-pro` | Vercel guidance — deployments, edge/serverless functions, ISR, preview environments, analytics, and cost control. | original |
| `ams-vertex-ai-guide` | Build AI on Google Cloud with Vertex AI — Gemini models, Model Garden, Vector Search, and managed agents. | original |
| `ams-video-conferencing` | Run excellent video conferences — platform-agnostic best practices for facilitation, engagement, and hybrid setups. | original |
| `ams-video-editor` | Edit compelling videos with narrative structure, pacing, cuts, sound design, and color workflow. | original |
| `ams-video-marketer` | Do video marketing — YouTube strategy, short-form video, video ads, and repurposing video into pipeline. | original |
| `ams-video-pro` | Handle professional video tasks with codecs, compression, aspect ratios, and delivery specifications. | original |
| `ams-vim-motions` | Vim motions mastery — operators, text objects, macros, marks, registers, and efficient editing patterns. | original |
| `ams-viral-animation-prompting` | Write prompts that make AI coding agents produce viral-quality animations as code (HTML, Canvas, SVG, Three.js). Covers persona framing, reference stacking, sce | original |
| `ams-vite-pro` | Build and optimize with Vite: dev server, plugins, library mode, env handling, code splitting, and production tuning. Use when developing or deploying Vite-base | original |
| `ams-vite-vibe-coding` | Prototype at speed with Vite + AI coding assistants: scaffolding, rapid iteration loops, and knowing when to slow down for production. Use for fast AI-assisted  | original |
| `ams-vllm-serving` | Serve LLMs at scale with high-throughput inference servers — continuous batching, paged attention, tensor parallelism, and production operations. Use when self- | original |
| `ams-voice-ai-pro` | Build voice features: speech-to-text, text-to-speech, streaming transcription, voice agents, and telephony pipelines. Use when adding speech interfaces to apps. | original |
| `ams-voice-calls-pro` | Excel at business voice calls — preparation, phone presence, difficult conversations, and call follow-through. | original |
| `ams-vpn-architect` | Design secure remote-access VPN architecture — protocol choice, authentication, segmentation, and migration to zero-trust access. | original |
| `ams-vpn-pro` | Use VPNs correctly: when they help, when they don't, protocol and provider choice, and safe configuration. Use when setting up a VPN or deciding whether you nee | original |
| `ams-vue-pro` | Idiomatic Vue 3: Composition API, reactivity, component design, Pinia state, and performance. Use when writing, reviewing, or structuring Vue applications. | original |
| `ams-vulnerability-management` | Run a full vulnerability management lifecycle — discovery, prioritization, remediation SLAs, and continuous measurement. | original |
| `ams-waf-pro` | Deploy and operate web application firewalls — policy tuning, bot management, and virtual patching done right. | original |
| `ams-wasm-pro` | Ship WebAssembly modules: compile from Rust/C/C++, JS interop, memory management, threading, and performance patterns. Use when moving hot code to the browser o | original |
| `ams-web-accessibility` | Build accessible websites: semantic HTML, ARIA, keyboard support, focus management, and WCAG testing. Use for inclusive, compliant web development. | original |
| `ams-web-components-pro` | Build framework-agnostic Web Components: custom elements, shadow DOM, templates, and design-system distribution. Use for shareable components across frameworks. | original |
| `ams-web-designer` | Design modern, responsive websites with UX fundamentals, visual systems, and developer-ready specs. | original |
| `ams-web-performance` | Make websites fast: Core Web Vitals, loading optimization, rendering performance, and measurement workflows. Use when pages are slow or targets must be met. | original |
| `ams-web-scraper` | Ethical web scraping — selectors, pagination, robots.txt, and rate limits — use when extracting data from websites responsibly. | original |
| `ams-web-workers-pro` | Offload work with Web Workers: dedicated/shared workers, messaging, transferables, and worker-based architectures. Use to keep the main thread responsive. | original |
| `ams-web3-pro` | Build dApps on EVM chains: wallet connection, providers and signers, contract reads/writes, gas estimation, events, and chain handling. Use when a frontend need | original |
| `ams-webapp-testing` | Strategy and practice for testing web applications: test pyramid, critical user journeys, flaky-test control, and CI integration. Use when setting up or improvi | original |
| `ams-webgl-pro` | Work directly with WebGL: contexts, shaders (GLSL), buffers, textures, and debugging. Use when you need GPU control below library level. | original |
| `ams-webgpu-pro` | Build WebGPU applications: device setup, pipelines, shaders (WGSL), buffers, compute passes, and fallbacks. Use when targeting next-gen GPU compute/graphics in  | original |
| `ams-webhook-notifier` | Build webhook-driven notifications — event-to-alert pipelines, formatting, routing, and multi-channel fan-out. | original |
| `ams-webhook-patterns` | Design robust webhook systems — delivery guarantees, retries, idempotency, security, and event versioning. | original |
| `ams-webinar-pro` | Host professional webinars on any platform — production checklists, presenter coaching, audience engagement, and follow-up. | original |
| `ams-webinar-producer` | Produce high-converting webinars — topic selection, promotion, live execution, and repurposing into pipeline. | original |
| `ams-webpack-pro` | Configure webpack for complex builds: loaders, plugins, code splitting, caching, Module Federation, and build performance. Use when maintaining or optimizing we | original |
| `ams-webrtc-pro` | Build real-time audio/video with WebRTC: signaling, peer connections, media devices, and TURN infrastructure. Use for video calls and peer-to-peer media. | original |
| `ams-websocket-patterns` | WebSocket patterns for web apps: robust clients, reconnection, resync, multiplexing, and scaling realtime features. Use when adding live features to web fronten | original |
| `ams-websocket-pro` | WebSocket guidance — connection lifecycle, scaling with pub/sub, auth, heartbeats, and fallbacks. | original |
| `ams-webxr-experiences` | Build WebXR AR/VR experiences in the browser: sessions, controllers, hit-testing, anchors, and performance for immersive web apps. Use when creating browser-bas | original |
| `ams-weekly-review` | Run a weekly review that keeps your whole system trusted: capture, clarify, calendar, and project check-ins. Use when tasks slip, the system goes stale, or week | original |
| `ams-weekly-review-ritual` | Run a GTD-style weekly review with the assistant: clear your inboxes, review last week and next week's calendar, check goals and project status, choose next wee | original |
| `ams-western-blot-troubleshooting` | Western blot optimization and troubleshooting — antibodies, transfer, detection, and quantification done right. | original |
| `ams-whatsapp-pro` | Use WhatsApp for business — Business app vs. API, broadcast lists, customer support, and compliant messaging. | original |
| `ams-whiteboard-pro` | Master digital whiteboards: facilitation, templates, visual collaboration, and workshop design. Use when running remote workshops, brainstorms, or visual planni | original |
| `ams-window-manager` | Master window management: tiling, layouts, virtual desktops, and hotkey-driven window control. Use when window juggling eats time or screen space goes to waste. | original |
| `ams-windows-pro` | Master Windows as a power user: Start/search, File Explorer, PowerToys, virtual desktops, automation, and maintenance. Use when setting up Windows for serious w | original |
| `ams-workflow-automation` | Design reliable workflow automations: triggers, idempotency, error handling, observability, and choosing the right tool. Use when automating repetitive processe | original |
| `ams-writing-assistant` | Use AI writing assistants effectively: prompting, drafting, editing, and keeping your voice. Use when writing faster without producing generic AI-sounding text. | original |
| `ams-xdr-pro` | Operate extended detection and response — correlating endpoint, identity, network, and cloud telemetry into unified incidents. | original |
| `ams-xml-pro` | XML processing — parsing, XPath/XSLT, schemas, and safe handling — use when integrating with XML-based systems. | original |
| `ams-xrd-pattern-analysis` | Powder X-ray diffraction from measurement to meaning — phase ID, lattice parameters, crystallite size, and Rietveld refinement. | original |
| `ams-xstate-pro` | Model state with XState state machines: actors, guards, actions, hierarchical and parallel states. Use for complex UI flows, workflows, and anywhere boolean fla | original |
| `ams-yaml-pro` | YAML authoring and processing — gotchas, validation, and safe loading — use when writing configs or parsing YAML. | original |
| `ams-yarn-pro` | Use Yarn effectively: Berry vs Classic, Plug'n'Play, workspaces, constraints, and release workflows. Use when managing JS dependencies with Yarn. | original |
| `ams-yeet` | Ship fast with throwaway automation: quick scripts and one-off automations built in minutes, used, then discarded. Use when a small annoying task needs doing no | original |
| `ams-yi-guide` | Build with 01.AI's Yi models — capable bilingual open models with strong Chinese-English performance. | original |
| `ams-zapier-make-patterns` | Design reliable automations on Zapier and Make: trigger/action patterns, error handling, filters, and scaling. Use when building no-code integrations or choosin | original |
| `ams-zero-trust-architect` | Design zero-trust architecture — identity-centric access, micro-segmentation, continuous verification, and phased migration. | original |
| `ams-zettelkasten` | Practice the Zettelkasten method: atomic notes, unique IDs, linking, and building a thinking partner from your notes. Use when doing research, writing, or long- | original |
| `ams-zig-pro` | Idiomatic Zig: explicit allocators, comptime, error unions, and no-hidden-control-flow philosophy. Use when writing, reviewing, or structuring Zig programs. | original |
| `ams-zod-pro` | Validate with Zod: schemas, coercion, transforms, discriminated unions, and shared client/server contracts. Use when runtime validation and type inference matte | original |
| `ams-zoom-pro` | Run professional Zoom meetings — hosting, facilitation, webinars, recordings, and hybrid meeting excellence. | original |
| `ams-zoom-productivity` | Run Zoom like a pro: settings, hosting controls, breakout rooms, recordings, and meeting facilitation. Use when hosting important meetings, webinars, or living  | original |
| `ams-zsh-pro` | Zsh guidance — interactive shell mastery, completion, prompt themes, plugins, and scripting differences from bash. | original |
| `ams-zustand-pro` | Manage client state with Zustand: stores, slices, selectors, middleware, and async actions. Use for lightweight React state without boilerplate. | original |
