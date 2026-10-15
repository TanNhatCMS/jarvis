# SKILLS INDEX

Danh mục 244 skills trong `skills/`. License từng nguồn: xem [ATTRIBUTION.md](ATTRIBUTION.md).

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

## Muse connectors (158 skills — Anil-matcha/awesome-muse-connectors, MIT)

> Chi tiết nguồn gốc, red flags và lưu ý auth: [skills/muse-connectors/README.md](skills/muse-connectors/README.md).
> 97,5% skill ở trạng thái 🧪 Draft (chưa live-test).

| Skill | Mô tả |
|---|---|
| `muse-connector-airtable` | List Airtable bases, read table records, and add records. |
| `muse-connector-alphavantage` | Stock quotes and daily price history. Read-only. |
| `muse-connector-amadeus` | Search travel with Amadeus: flight offers and prices, airport autocomplete, hotel offers, cheapest dates. |
| `muse-connector-anthropic` | Check your Anthropic API access and list available Claude models. Read-only. |
| `muse-connector-apollo` | Search B2B contacts and enrich people and companies. |
| `muse-connector-aqara` | Read device attributes and send control commands to Aqara devices through the Aqara Open Cloud API: plugs and wall switches, lights (brightness, color temperature), air conditioners, supported locks, curtain motors, and saved scenes, organized by homes and rooms. Use it when the user asks about or wants to change anything in their Aqara setup. Zigbee devices need an Aqara hub online. Commands drive real physical hardware, so writes are confirmation-gated (see Operating Rules). |
| `muse-connector-asana` | View your assigned Asana tasks and create new ones. |
| `muse-connector-ashby` | Search Ashby public job boards (no key needed) and read/write the Ashby ATS: candidates, jobs, applications. |
| `muse-connector-attio` | Query CRM records, upsert by matching attribute, add notes and tasks. |
| `muse-connector-beatoven` | Beatoven.ai royalty-free music generation: compose tracks, poll tasks, download audio, fetch individual stems. |
| `muse-connector-beehiiv` | List publications, subscribers, and posts; add subscribers. |
| `muse-connector-black-forest-labs` | Black Forest Labs FLUX image generation: flux-2-pro and flux-2-flex text-to-image with async polling. |
| `muse-connector-bluesky` | Read timelines, search posts, post and follow. |
| `muse-connector-brave-search` | Independent web search from Brave |
| `muse-connector-buttondown` | Read and write Buttondown: list subscribers and emails, add subscribers, draft emails. |
| `muse-connector-buzzsprout` | Manage podcast episodes on Buzzsprout: list and fetch episodes, create, update, or delete them, and list embed players. Use when the user wants to publish or manage podcast episodes on a Buzzsprout-hosted show. |
| `muse-connector-calcom` | List bookings and event types, create bookings. |
| `muse-connector-calendly` | Read and manage Calendly: list scheduled events, event types, invitees, and availability schedules; cancel bookings. |
| `muse-connector-canva` | Read and manage Canva designs through the Canva Connect API: list designs and folders, inspect a design, create designs, upload assets, and export designs. Exports are async jobs: submit with export, then poll with export-status until the job succeeds. |
| `muse-connector-cartesia` | Generate spoken audio from text with Cartesia |
| `muse-connector-clerk` | List, create, update, and delete users. |
| `muse-connector-clickup` | List ClickUp workspaces and tasks, and create tasks. |
| `muse-connector-cloudflare` | List your Cloudflare zones and read DNS records. Read-only. |
| `muse-connector-cloudinary` | Manage media on Cloudinary through the Upload and Admin APIs: upload images and videos, list and inspect assets, update metadata and tags, delete assets, and check plan usage (credits, storage, bandwidth, transformations). |
| `muse-connector-cohesivity` | provision on-the-fly backend infrastructure including Postgres, Redis, object storage, hosting, auth, AI APIs. No API keys or account to get started; the agent signs up on its own. |
| `muse-connector-coda` | List docs, read tables and rows, add rows. Your docs as a database. |
| `muse-connector-datacircle` | Datacircle is a data co-op. Query your favorite B2B data APIs through us. Same request, same price, no markup. |
| `muse-connector-deepgram` | Transcribe prerecorded audio files to text (with optional diarization, summaries, topics, sentiment) and synthesize speech with Deepgram |
| `muse-connector-deepl` | Translate text between 30+ languages, check usage. |
| `muse-connector-deepseek` | Chat with DeepSeek |
| `muse-connector-descript` | Work with Descript |
| `muse-connector-devto` | Read and write dev.to: own profile, own articles (published, drafts, all), public articles by username, create and update articles with a safe draft default. |
| `muse-connector-digitalocean` | List your DigitalOcean droplets and domains. Read-only. |
| `muse-connector-discord` | Read servers and channels, send messages and DMs. |
| `muse-connector-docusign` | Draft and send signature envelopes (demo environment by default), check envelope status, and download signed documents. |
| `muse-connector-dub` | Create short links, read analytics, track conversions. |
| `muse-connector-ecovacs` | Control Ecovacs DEEBOT robot vacuums through the official Ecovacs Open Platform: list bound robots, read robot state and battery, start/pause/resume/stop cleaning, send the robot back to its dock, and set the sweep/mop work mode. Use when the user mentions their DEEBOT or robot vacuum. |
| `muse-connector-elai` | Build AI avatar presenter videos with Elai: list available avatars, inspect videos and their render status, submit renders, and poll until a render finishes. Reach for this when the user wants a talking-head video generated from a script or slide deck. |
| `muse-connector-elevenlabs` | Check ElevenLabs subscription usage, list voices, and generate text-to-speech audio (TTS needs --confirm, spends characters). |
| `muse-connector-etsy` | Read Etsy shop data: receipts, listings, transactions, payment ledger; create listings. |
| `muse-connector-exa` | Neural web search with page text: one call returns ranked sources with snippets. Read-only. |
| `muse-connector-fal-ai` | Generate media with fal.ai: images, video, audio, music on one key. Submit jobs to 100s of models, poll status, fetch results, upload files. |
| `muse-connector-figma` | Look up your Figma user, read file metadata, and post comments on files. |
| `muse-connector-firecrawl` | Scrape pages, crawl sites, search the web. |
| `muse-connector-flyio` | List apps and machines, manage machine lifecycle. |
| `muse-connector-framer` | Verify a Framer project |
| `muse-connector-front` | Read your Front shared inbox, and reply, assign teammates, and add tags on conversations (writes need --confirm). |
| `muse-connector-fxmacrodata` | Macro indicator history, release calendars, and FX spot rates for 22 currencies. Read-only; USD works without a key. |
| `muse-connector-gemini` | Google Gemini media generation: Nano Banana images, Imagen 4 images, Veo video, TTS, model listing. |
| `muse-connector-github` | View your profile, list repos, list open issues, and create issues. |
| `muse-connector-gitlab` | Your GitLab user, projects, open merge requests, and issue creation. |
| `muse-connector-google-nest` | Read traits and execute commands on Google Nest devices through the Smart Device Management (SDM) API: thermostats (mode, setpoints, ambient readings), cameras and doorbells (events, live-stream generation). Use it when the user asks about their Nest thermostat, wants to change heating/cooling, or wants camera/doorbell state. Thermostat commands start or stop real HVAC, so they are confirmation-gated (see Operating Rules). |
| `muse-connector-gumroad` | View your Gumroad products and sales. Read-only by design. |
| `muse-connector-heygen` | HeyGen avatar and talking-head video: prompt-to-video agent, multi-scene avatar video, status polling, avatar and voice lists. |
| `muse-connector-html-docs` | Search, read, create, edit, and review collaborative HTML Docs documents. |
| `muse-connector-home-assistant` | Read entity states and call services on your Home Assistant instance. Service calls are confirmed first. |
| `muse-connector-homey` | Read device state and write capability values on a Homey Pro (local) or Homey cloud account through the Homey Web API: lights and outlets, dimmers and color, thermostats, connected locks, blinds and curtains, plus listing Flows (automations). Use it when the user asks about or wants to change anything paired to their Homey. Writes drive real physical hardware, so they are confirmation-gated (see Operating Rules). |
| `muse-connector-hubitat` | Read device states and invoke capability commands on a Hubitat Elevation hub through the official Maker API app: lights and dimmers, deadbolt locks, garage door controllers, thermostats, location modes, and the Hubitat Safety Monitor (HSM). Use it when the user asks about or wants to change anything paired to their Hubitat hub. Commands drive real physical hardware, so writes are confirmation-gated (see Operating Rules). |
| `muse-connector-hubspot` | List and search contacts, create contacts, and list deals in your HubSpot CRM. |
| `muse-connector-huggingface` | Verify your Hugging Face account and search the model hub. Read-only. |
| `muse-connector-hume-ai` | Synthesize speech with Hume |
| `muse-connector-ideogram` | Ideogram text-to-image generation with the strongest text rendering in the catalog: generate, edit, remix, upscale, describe, balance. |
| `muse-connector-kit` | Read and write Kit (ConvertKit): list subscribers, broadcasts, sequences, tags; draft broadcasts. |
| `muse-connector-kling` | Kling AI video generation with client-side JWT auth: text-to-video, image-to-video, status polling, clip extend, lip-sync. |
| `muse-connector-langfuse` | Query traces and observations, manage prompts and scores. |
| `muse-connector-leaf-agriculture` | Read and manage farm data through Leaf Agriculture, a unified farm-data API that aggregates the partner-gated OEM platforms under self-serve access: John Deere, CNH Industrial (Case IH/New Holland), Climate FieldView, Trimble, Raven and AgLeader. The primitives it exposes (fields, boundaries, machine operation files for planting/harvest/application/tillage, plus as-applied irrigation) are exactly what a farmer-first fintech and supply-chain digitization product consumes. This is the practical route to partner-gated OEM data without a partnership agreement: individual provider connections need that grower |
| `muse-connector-lemon-squeezy` | Read Lemon Squeezy revenue: list orders, subscriptions, customers, products; create checkout links. |
| `muse-connector-letta` | Work with Letta agent memory: list agents, read core-memory blocks, list or add archival passages, create blocks, message an agent to record memory. |
| `muse-connector-linear` | View your assigned issues and create issues, over Linear |
| `muse-connector-lob` | Send physical mail through Lob |
| `muse-connector-lodestone` | One per-user key for Meta Ads, Instagram insights, GA4, email, Telegram, Typefully, and image/video generation (39 tools; anything that sends or spends needs --confirm). |
| `muse-connector-loops` | Manage email contacts, trigger loops, send transactional email. |
| `muse-connector-luma` | Luma Dream Machine video generation: text-to-video and image-to-video, status polling, cancel, image upload. |
| `muse-connector-mastodon` | Read and write Mastodon: verify the account, list own posts and followers, publish toots with native scheduling, upload media. |
| `muse-connector-mem0` | Mem0 memory CLI: add memories from messages, semantic search, read or delete memories, poll async events. |
| `muse-connector-mercury` | View Mercury bank accounts and transactions. Read-only by design. |
| `muse-connector-mistral` | Mistral AI |
| `muse-connector-monday` | List boards, read items, create items. Project management over GraphQL. |
| `muse-connector-moonraker` | Control a Klipper-based 3D printer through the Moonraker API server (the backend behind Mainsail, Fluidd and RatOS): read server and print status, list and upload gcode files, start/pause/resume/cancel prints, trigger the emergency stop, toggle smart-plug devices, and (gated) run raw G-code. Use when the user mentions Moonraker, Klipper, Mainsail, or Fluidd. |
| `muse-connector-musedin` | Read-only MusedIn job network for AI agents: open roles and job posts, member profiles, search, the feed, verification records. No API key needed. |
| `muse-connector-mushare` | Assistant-to-assistant messaging: your Muse messages your friends' Muse — ask with tap-to-answer options, share found items as cards, split bills, check replies. Installs from mushare.ai. |
| `muse-connector-n8n` | List and manage workflows, read executions. |
| `muse-connector-neon` | Inspect Neon serverless Postgres projects, branches, and databases. Branch create and delete need exact-match confirmation; connection passwords are masked. |
| `muse-connector-netlify` | List your Netlify sites and recent deploys. Read-only. |
| `muse-connector-newsapi` | Top headlines and full-text news search. Read-only. |
| `muse-connector-notion` | Search and query Notion, plus create pages, append blocks, and update page properties (writes need --confirm). |
| `muse-connector-octoprint` | Control an OctoPrint 3D printer over its local REST API: read printer state and temperatures, monitor print progress, start/pause/cancel/restart jobs, upload and select gcode files, set hotend and bed temperatures, jog or home axes, and (gated) run raw G-code. Use when the user mentions their OctoPrint instance or a printer it drives. |
| `muse-connector-openai` | Check your OpenAI API access and list the models your key can use. Read-only. |
| `muse-connector-openrouter` | Browse the model catalog with per-token pricing; check your key usage. Read-only. |
| `muse-connector-openweathermap` | Current weather and 5-day forecast for any city. Read-only. |
| `muse-connector-opusclip` | Turn long-form videos into short, captioned, vertical clips with OpusClip |
| `muse-connector-oura` | Read Oura Ring health data: sleep scores, sleep sessions, readiness, workouts, and SpO2. |
| `muse-connector-paddle` | View Paddle transactions and customers. Read-only by design. |
| `muse-connector-patreon` | Read Patreon campaigns, members, tiers, and identity (read-only). |
| `muse-connector-perplexity` | Ask questions with citations, search the web. |
| `muse-connector-pexels` | Search Pexels |
| `muse-connector-philips-hue` | Control Philips Hue lights locally: list lights and rooms, set brightness/color, activate scenes, read sensors. |
| `muse-connector-pipedrive` | List deals and contacts, create deals. CRM for your pipeline. |
| `muse-connector-plain` | Find customers, manage support threads. |
| `muse-connector-playht` | Generate spoken audio from text with PlayHT voices, browse stock and cloned voices, and create instant voice clones. Reach for this when the user wants narration or voiceovers, a voice library lookup, or a voice cloned from a sample. |
| `muse-connector-podbean` | Manage podcast hosting on Podbean: list podcasts and their episodes, create, update, or delete episodes. Podbean |
| `muse-connector-polar` | Read Polar orders, subscriptions, products, and customers; create checkouts and refunds. |
| `muse-connector-polymarket` | Read-only prediction market data: events, markets, prices, order books. No trading, no API key needed. |
| `muse-connector-posthog` | Your PostHog user, projects, and saved insights. Read-only. |
| `muse-connector-postmark` | Send transactional email, check delivery and bounces. |
| `muse-connector-printful` | Read Printful products and orders, create orders and mockups. |
| `muse-connector-prusa-connect` | Read Prusa 3D printer state through the official Prusa Connect cloud API: list printers and their state, list jobs and files, view cameras, read print statistics, and upload gcode files to printer storage. Use when the user mentions Prusa Connect or a networked Prusa printer (MK3/MK4/CORE One). |
| `muse-connector-rachio` | Control a Rachio smart irrigation controller through the public Rachio API. Check who is signed in, see what the controller is currently running, start watering a specific zone for a set number of seconds, and shut all water off in an emergency. Reach for this when the user asks about sprinklers, watering schedules, or irrigation zones. |
| `muse-connector-railway` | List projects and deployments, set variables, redeploy. |
| `muse-connector-ramp` | Read-only view of corporate spend: transactions, cards and limits, users, departments. No spend actions by design. |
| `muse-connector-readwise` | Search your highlights and books, save new highlights. |
| `muse-connector-remove-bg` | Remove the background from an image with the remove.bg API: submit a local file or an image URL, get back a transparent PNG saved to a local path. Also check the account |
| `muse-connector-render` | List your Render services and recent deploys. Read-only. |
| `muse-connector-replicate` | Run AI models, poll predictions. |
| `muse-connector-resend` | Send email through Resend and check delivery status. Every send is confirmed with you first. |
| `muse-connector-restream` | Manage Restream multistreaming: read your profile, list streaming destinations (channels), toggle destinations or edit channel metadata, and retrieve your stream key. Use when the user wants to control where a livestream goes without opening the Restream dashboard. |
| `muse-connector-runway` | Runway developer API: text-to-video, image-to-video, task polling, video upscale, lip-sync. |
| `muse-connector-sendgrid` | Send email, check stats and profile. |
| `muse-connector-sentry` | List organizations and projects, triage unresolved issues from the last 24h, and resolve/archive/assign issues. |
| `muse-connector-shippo` | Ship through many carriers (USPS, UPS, FedEx, DHL and others) with one API: get rates for a shipment; buy a printable postage label; track a parcel; refund unused labels. Reach for this when the user needs to price or purchase shipping for a package. |
| `muse-connector-shopify` | View orders, products, customers; create products and discounts with confirmation. No order or customer writes, ever. |
| `muse-connector-slack` | Read channels, post messages, list users. The most-requested workplace connector. |
| `muse-connector-smartcar` | Read and control connected cars across many brands (Tesla, Ford, GM, Toyota, BMW, Hyundai and others) through one standardized API. Read odometer, location, charge and battery level, fuel level and tire pressure; lock/unlock doors; start/stop charging; set charge limits and schedules; route the built-in navigation. Use when the user mentions their car and the brand has no dedicated connector here, or asks for cross-brand vehicle telemetry and control. |
| `muse-connector-smartthings` | Read device status and issue capability commands across a Samsung SmartThings account: locations, devices, switches, dimmers, locks, thermostats, sirens, garage door controllers, and window shades. Use it when the user asks about or wants to change the state of anything paired to their SmartThings hub or cloud account. This connector drives real physical hardware, so every write is confirmation-gated (see Operating Rules). |
| `muse-connector-spotify` | Read your profile, playlists, top tracks and artists, and search the catalog. Playlist and library writes need your confirmation. |
| `muse-connector-square` | Work with a Square seller account: list locations and payments, create orders, push a checkout to a physical Square Terminal for in-person payment, charge a payment source directly, cancel a pending Terminal checkout, and refund a payment. Reach for this when the user needs to take or return money through Square. |
| `muse-connector-stripe` | Read-only Stripe visibility: balance, recent charges, customers. No write commands ship: expanding to writes is a deliberate v2. |
| `muse-connector-supabase` | List tables, query rows, and insert/update/delete rows in your Supabase Postgres database. |
| `muse-connector-supermemory` | Store and recall with Supermemory: add memories and documents, hybrid search, upload files, tune settings. |
| `muse-connector-switchbot` | Read status and send commands to SwitchBot devices over the official OpenAPI v1.1: SwitchBot Bot (physical button presser), SwitchBot Lock, Curtain and Blind Tilt motors, plugs, lights, air conditioners, infrared remotes, and saved scenes. Use it when the user asks about or wants to change anything in their SwitchBot setup. Commands drive real physical hardware, so writes are confirmation-gated (see Operating Rules). |
| `muse-connector-tally` | List forms, read submissions, manage form blocks. |
| `muse-connector-tavily` | Fast, clean web research: one call returns an AI answer plus ranked sources with snippets. Read-only. |
| `muse-connector-telegram` | Send messages and read updates through your own Telegram bot. Bots can |
| `muse-connector-tesla-fleet-api` | Control Tesla vehicles through the official Tesla Fleet API: read live vehicle state, wake a sleeping car, and send signed commands (lock/unlock, keyless drive, charge control, preconditioning, honk/flash, trunk, sentry/valet, speed limit, navigation). Use when the user mentions their Tesla car or asks for vehicle actuation. |
| `muse-connector-tesla-powerwall` | Monitor and control Tesla energy sites (Powerwall, solar) through the official Tesla Fleet API. Read live power flows, battery state, and site settings; change backup reserve percentage, operation mode, and Storm Watch. Use when the user mentions their Powerwall, Tesla energy site, backup reserve, or storm mode. |
| `muse-connector-ticktick` | Read and write TickTick: list projects and tasks, create tasks, complete and delete tasks. |
| `muse-connector-tiktok` | Read your TikTok profile and video list. API access needs TikTok app approval first, and posting is not shipped. |
| `muse-connector-todoist` | List tasks, create tasks, and mark them done in Todoist. |
| `muse-connector-transistor` | Manage podcast hosting on Transistor.fm: list shows and episodes, create draft episodes, update or delete them, and upload episode audio via Transistor |
| `muse-connector-triggerdev` | Trigger background jobs, list runs, manage schedules. |
| `muse-connector-tuya` | Read status and send control commands to Tuya Cloud / Smart Life devices: smart plugs and switches, lights, thermostats, curtain motors, and supported smart locks, plus executing saved scenes. Use it when the user asks about or wants to change anything paired through the Tuya or Smart Life app. Commands drive real physical hardware, so writes are confirmation-gated (see Operating Rules). |
| `muse-connector-twitch` | Read and write Twitch via the Helix API: channel profile, follower stats, live stream status, past videos, channel title and game updates, clip creation. |
| `muse-connector-typeform` | List forms and responses, create forms, and manage response webhooks with confirmation. |
| `muse-connector-uber-direct` | Dispatch same-day couriers through Uber Direct for food, retail, grocery, or parcel deliveries. Get a price and time quote without dispatching anyone, create a delivery when the user approves, check its status, and cancel a pending one. Reach for this when the user needs something picked up and dropped off locally today. |
| `muse-connector-unifi-protect` | Read camera state and still snapshots from a local UniFi Protect console (Protect 5.3+) through the official Integration API, and adjust camera settings: PTZ position, flood lights, chimes, talkback. Use it when the user asks what their UniFi cameras see, wants a snapshot saved, or wants to change camera behavior. Everything runs against the local console; there is no cloud dependency. |
| `muse-connector-unsplash` | Search Unsplash |
| `muse-connector-upstash` | Run Redis commands over REST. |
| `muse-connector-vapi` | Manage voice AI assistants, phone numbers, and calls. Outbound calls need exact-match confirmation; test numbers by default. |
| `muse-connector-veed` | Remove backgrounds from video with VEED |
| `muse-connector-vercel` | See your Vercel account, projects, and recent deployments. |
| `muse-connector-webflow` | Work with the Webflow Data API v2: list sites, inspect site details, browse CMS collections and items, create/update/delete CMS items, and publish a site. Uses a per-site token from Site Settings. |
| `muse-connector-wise` | View Wise profiles and multi-currency balances. Read-only by design. |
| `muse-connector-x` | Post, search, like, DM. Note: no usable free read tier. |
| `muse-connector-xai` | Query Grok chat completions and list available Grok models through xAI |
| `muse-connector-ynab` | Read and write YNAB budgets: list budgets, accounts, balances, transactions, and categories; record transactions. |
| `muse-connector-youtube` | Read channels and videos, search, plus uploads and comments with confirmation. |
| `muse-connector-zep` | Work with Zep |
| `muse-connector-market-evidence-check` | Read-only OKX cost/freshness evidence for a stated size. No key, no trading. |
