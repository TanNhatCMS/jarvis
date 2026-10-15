# Muse connectors (bóc tách từ awesome-muse-connectors)

158 connector skill cho Meta Muse, bóc tách **nguyên văn** từ
[Anil-matcha/awesome-muse-connectors](https://github.com/Anil-matcha/awesome-muse-connectors)
(commit `0ffbcc0`, 2026-10-14). Mỗi connector nằm ở `skills/muse-connector-<tên>/`,
gồm `SKILL.md` + `bin/<tên>.py` (CLI gọi REST API của vendor).

## Nguồn gốc & license

- 150 skill copy từ [bluman1/muse-connectors](https://github.com/bluman1/muse-connectors)
  (MIT) @ commit `6e31fd4` — license upstream giữ nguyên tại [`LICENSE`](LICENSE).
- 8 connector do Anil-matcha tự thêm (`cohesivity`, `datacircle`, `fxmacrodata`,
  `html-docs`, `lodestone`, `market-evidence-check`, `musedin`, `mushare`) —
  chịu MIT của repo gốc ([LICENSE root](../../LICENSE)).
- Khi tái sử dụng các skill này ở nơi khác: giữ file `LICENSE` đi kèm (điều kiện của MIT).
- Template gốc của format: [`SKILL-TEMPLATE.md`](SKILL-TEMPLATE.md).

## Trạng thái maturity — đọc trước khi dùng

**97,5% skill ở trạng thái 🧪 Draft** — viết từ public API docs, **chưa live-test
end-to-end**. Chỉ 4 skill ✅ live-tested: `cohesivity`, `lodestone`, `mushare`, `slack`.
Mỗi skill nên chạy lệnh `auth`/status-check một lần trước khi tin.

## ⚠️ Red flags đã kiểm chứng (2026-10-16)

1. **`muse-connector-cohesivity`** — `bin/cohesivity.py:98-100` chạy
   `curl -fsSL https://cohesivity.ai/quickstart.sh | bash` (không checksum/signature),
   và đọc management key thô từ file plaintext `.cohesivity`. **Không chạy `init`.**
2. **`muse-connector-market-evidence-check`** — tự nhận "read-only OKX order-book"
   nhưng `catalog_hosts: ["devday.167-179-82-72.nip.io"]` (dynamic DNS, không phải okx.com).
   **Coi là chưa review, không dùng cho dữ liệu tài chính.**
3. **`muse-connector-todoist`** — ví dụ dùng ID số trong khi API v1 mới
   (breaking change 02/2026) dùng ID alphanumeric; doc đã stale.

## Auth — cần adapt khi dùng trong JARVIS

Các skill dùng credential model của Meta Muse (`custom.<provider>` + helper
`dynamic_credentials` của runtime). Ngoài runtime đó, script sẽ `sys.exit`.
Muốn dùng trong hệ này: đấu auth sang Secure Vault / Umbrella MCP cho từng skill
(không copy-paste là chạy).

## Danh sách đầy đủ

| Connector | Tóm tắt |
|---|---|
| [airtable](./airtable/SKILL.md) | List Airtable bases, read table records, and add records. |
| [alphavantage](./alphavantage/SKILL.md) | Stock quotes and daily price history. Read-only. |
| [amadeus](./amadeus/SKILL.md) | Search travel with Amadeus: flight offers and prices, airport autocomplete, hotel offers, cheapest dates. |
| [anthropic](./anthropic/SKILL.md) | Check your Anthropic API access and list available Claude models. Read-only. |
| [apollo](./apollo/SKILL.md) | Search B2B contacts and enrich people and companies. |
| [aqara](./aqara/SKILL.md) | Read device attributes and send control commands to Aqara devices through the Aqara Open Cloud API: plugs and wall switches, lights (brightness, color temperature), air conditioners, supported locks, curtain motors, and saved scenes, organized by homes and rooms. Use it when the user asks about or wants to change anything in their Aqara setup. Zigbee devices need an Aqara hub online. Commands drive real physical hardware, so writes are confirmation-gated (see Operating Rules). |
| [asana](./asana/SKILL.md) | View your assigned Asana tasks and create new ones. |
| [ashby](./ashby/SKILL.md) | Search Ashby public job boards (no key needed) and read/write the Ashby ATS: candidates, jobs, applications. |
| [attio](./attio/SKILL.md) | Query CRM records, upsert by matching attribute, add notes and tasks. |
| [beatoven](./beatoven/SKILL.md) | Beatoven.ai royalty-free music generation: compose tracks, poll tasks, download audio, fetch individual stems. |
| [beehiiv](./beehiiv/SKILL.md) | List publications, subscribers, and posts; add subscribers. |
| [black-forest-labs](./black-forest-labs/SKILL.md) | Black Forest Labs FLUX image generation: flux-2-pro and flux-2-flex text-to-image with async polling. |
| [bluesky](./bluesky/SKILL.md) | Read timelines, search posts, post and follow. |
| [brave-search](./brave-search/SKILL.md) | Independent web search from Brave |
| [buttondown](./buttondown/SKILL.md) | Read and write Buttondown: list subscribers and emails, add subscribers, draft emails. |
| [buzzsprout](./buzzsprout/SKILL.md) | Manage podcast episodes on Buzzsprout: list and fetch episodes, create, update, or delete them, and list embed players. Use when the user wants to publish or manage podcast episodes on a Buzzsprout-hosted show. |
| [calcom](./calcom/SKILL.md) | List bookings and event types, create bookings. |
| [calendly](./calendly/SKILL.md) | Read and manage Calendly: list scheduled events, event types, invitees, and availability schedules; cancel bookings. |
| [canva](./canva/SKILL.md) | Read and manage Canva designs through the Canva Connect API: list designs and folders, inspect a design, create designs, upload assets, and export designs. Exports are async jobs: submit with export, then poll with export-status until the job succeeds. |
| [cartesia](./cartesia/SKILL.md) | Generate spoken audio from text with Cartesia |
| [clerk](./clerk/SKILL.md) | List, create, update, and delete users. |
| [clickup](./clickup/SKILL.md) | List ClickUp workspaces and tasks, and create tasks. |
| [cloudflare](./cloudflare/SKILL.md) | List your Cloudflare zones and read DNS records. Read-only. |
| [cloudinary](./cloudinary/SKILL.md) | Manage media on Cloudinary through the Upload and Admin APIs: upload images and videos, list and inspect assets, update metadata and tags, delete assets, and check plan usage (credits, storage, bandwidth, transformations). |
| [cohesivity](./cohesivity/SKILL.md) | provision on-the-fly backend infrastructure including Postgres, Redis, object storage, hosting, auth, AI APIs. No API keys or account to get started; the agent signs up on its own. |
| [coda](./coda/SKILL.md) | List docs, read tables and rows, add rows. Your docs as a database. |
| [datacircle](./datacircle/SKILL.md) | Datacircle is a data co-op. Query your favorite B2B data APIs through us. Same request, same price, no markup. |
| [deepgram](./deepgram/SKILL.md) | Transcribe prerecorded audio files to text (with optional diarization, summaries, topics, sentiment) and synthesize speech with Deepgram |
| [deepl](./deepl/SKILL.md) | Translate text between 30+ languages, check usage. |
| [deepseek](./deepseek/SKILL.md) | Chat with DeepSeek |
| [descript](./descript/SKILL.md) | Work with Descript |
| [devto](./devto/SKILL.md) | Read and write dev.to: own profile, own articles (published, drafts, all), public articles by username, create and update articles with a safe draft default. |
| [digitalocean](./digitalocean/SKILL.md) | List your DigitalOcean droplets and domains. Read-only. |
| [discord](./discord/SKILL.md) | Read servers and channels, send messages and DMs. |
| [docusign](./docusign/SKILL.md) | Draft and send signature envelopes (demo environment by default), check envelope status, and download signed documents. |
| [dub](./dub/SKILL.md) | Create short links, read analytics, track conversions. |
| [ecovacs](./ecovacs/SKILL.md) | Control Ecovacs DEEBOT robot vacuums through the official Ecovacs Open Platform: list bound robots, read robot state and battery, start/pause/resume/stop cleaning, send the robot back to its dock, and set the sweep/mop work mode. Use when the user mentions their DEEBOT or robot vacuum. |
| [elai](./elai/SKILL.md) | Build AI avatar presenter videos with Elai: list available avatars, inspect videos and their render status, submit renders, and poll until a render finishes. Reach for this when the user wants a talking-head video generated from a script or slide deck. |
| [elevenlabs](./elevenlabs/SKILL.md) | Check ElevenLabs subscription usage, list voices, and generate text-to-speech audio (TTS needs --confirm, spends characters). |
| [etsy](./etsy/SKILL.md) | Read Etsy shop data: receipts, listings, transactions, payment ledger; create listings. |
| [exa](./exa/SKILL.md) | Neural web search with page text: one call returns ranked sources with snippets. Read-only. |
| [fal-ai](./fal-ai/SKILL.md) | Generate media with fal.ai: images, video, audio, music on one key. Submit jobs to 100s of models, poll status, fetch results, upload files. |
| [figma](./figma/SKILL.md) | Look up your Figma user, read file metadata, and post comments on files. |
| [firecrawl](./firecrawl/SKILL.md) | Scrape pages, crawl sites, search the web. |
| [flyio](./flyio/SKILL.md) | List apps and machines, manage machine lifecycle. |
| [framer](./framer/SKILL.md) | Verify a Framer project |
| [front](./front/SKILL.md) | Read your Front shared inbox, and reply, assign teammates, and add tags on conversations (writes need --confirm). |
| [fxmacrodata](./fxmacrodata/SKILL.md) | Macro indicator history, release calendars, and FX spot rates for 22 currencies. Read-only; USD works without a key. |
| [gemini](./gemini/SKILL.md) | Google Gemini media generation: Nano Banana images, Imagen 4 images, Veo video, TTS, model listing. |
| [github](./github/SKILL.md) | View your profile, list repos, list open issues, and create issues. |
| [gitlab](./gitlab/SKILL.md) | Your GitLab user, projects, open merge requests, and issue creation. |
| [google-nest](./google-nest/SKILL.md) | Read traits and execute commands on Google Nest devices through the Smart Device Management (SDM) API: thermostats (mode, setpoints, ambient readings), cameras and doorbells (events, live-stream generation). Use it when the user asks about their Nest thermostat, wants to change heating/cooling, or wants camera/doorbell state. Thermostat commands start or stop real HVAC, so they are confirmation-gated (see Operating Rules). |
| [gumroad](./gumroad/SKILL.md) | View your Gumroad products and sales. Read-only by design. |
| [heygen](./heygen/SKILL.md) | HeyGen avatar and talking-head video: prompt-to-video agent, multi-scene avatar video, status polling, avatar and voice lists. |
| [html-docs](./html-docs/SKILL.md) | Search, read, create, edit, and review collaborative HTML Docs documents. |
| [home-assistant](./home-assistant/SKILL.md) | Read entity states and call services on your Home Assistant instance. Service calls are confirmed first. |
| [homey](./homey/SKILL.md) | Read device state and write capability values on a Homey Pro (local) or Homey cloud account through the Homey Web API: lights and outlets, dimmers and color, thermostats, connected locks, blinds and curtains, plus listing Flows (automations). Use it when the user asks about or wants to change anything paired to their Homey. Writes drive real physical hardware, so they are confirmation-gated (see Operating Rules). |
| [hubitat](./hubitat/SKILL.md) | Read device states and invoke capability commands on a Hubitat Elevation hub through the official Maker API app: lights and dimmers, deadbolt locks, garage door controllers, thermostats, location modes, and the Hubitat Safety Monitor (HSM). Use it when the user asks about or wants to change anything paired to their Hubitat hub. Commands drive real physical hardware, so writes are confirmation-gated (see Operating Rules). |
| [hubspot](./hubspot/SKILL.md) | List and search contacts, create contacts, and list deals in your HubSpot CRM. |
| [huggingface](./huggingface/SKILL.md) | Verify your Hugging Face account and search the model hub. Read-only. |
| [hume-ai](./hume-ai/SKILL.md) | Synthesize speech with Hume |
| [ideogram](./ideogram/SKILL.md) | Ideogram text-to-image generation with the strongest text rendering in the catalog: generate, edit, remix, upscale, describe, balance. |
| [kit](./kit/SKILL.md) | Read and write Kit (ConvertKit): list subscribers, broadcasts, sequences, tags; draft broadcasts. |
| [kling](./kling/SKILL.md) | Kling AI video generation with client-side JWT auth: text-to-video, image-to-video, status polling, clip extend, lip-sync. |
| [langfuse](./langfuse/SKILL.md) | Query traces and observations, manage prompts and scores. |
| [leaf-agriculture](./leaf-agriculture/SKILL.md) | Read and manage farm data through Leaf Agriculture, a unified farm-data API that aggregates the partner-gated OEM platforms under self-serve access: John Deere, CNH Industrial (Case IH/New Holland), Climate FieldView, Trimble, Raven and AgLeader. The primitives it exposes (fields, boundaries, machine operation files for planting/harvest/application/tillage, plus as-applied irrigation) are exactly what a farmer-first fintech and supply-chain digitization product consumes. This is the practical route to partner-gated OEM data without a partnership agreement: individual provider connections need that grower |
| [lemon-squeezy](./lemon-squeezy/SKILL.md) | Read Lemon Squeezy revenue: list orders, subscriptions, customers, products; create checkout links. |
| [letta](./letta/SKILL.md) | Work with Letta agent memory: list agents, read core-memory blocks, list or add archival passages, create blocks, message an agent to record memory. |
| [linear](./linear/SKILL.md) | View your assigned issues and create issues, over Linear |
| [lob](./lob/SKILL.md) | Send physical mail through Lob |
| [lodestone](./lodestone/SKILL.md) | One per-user key for Meta Ads, Instagram insights, GA4, email, Telegram, Typefully, and image/video generation (39 tools; anything that sends or spends needs --confirm). |
| [loops](./loops/SKILL.md) | Manage email contacts, trigger loops, send transactional email. |
| [luma](./luma/SKILL.md) | Luma Dream Machine video generation: text-to-video and image-to-video, status polling, cancel, image upload. |
| [mastodon](./mastodon/SKILL.md) | Read and write Mastodon: verify the account, list own posts and followers, publish toots with native scheduling, upload media. |
| [mem0](./mem0/SKILL.md) | Mem0 memory CLI: add memories from messages, semantic search, read or delete memories, poll async events. |
| [mercury](./mercury/SKILL.md) | View Mercury bank accounts and transactions. Read-only by design. |
| [mistral](./mistral/SKILL.md) | Mistral AI |
| [monday](./monday/SKILL.md) | List boards, read items, create items. Project management over GraphQL. |
| [moonraker](./moonraker/SKILL.md) | Control a Klipper-based 3D printer through the Moonraker API server (the backend behind Mainsail, Fluidd and RatOS): read server and print status, list and upload gcode files, start/pause/resume/cancel prints, trigger the emergency stop, toggle smart-plug devices, and (gated) run raw G-code. Use when the user mentions Moonraker, Klipper, Mainsail, or Fluidd. |
| [musedin](./musedin/SKILL.md) | Read-only MusedIn job network for AI agents: open roles and job posts, member profiles, search, the feed, verification records. No API key needed. |
| [mushare](./mushare/SKILL.md) | Assistant-to-assistant messaging: your Muse messages your friends' Muse — ask with tap-to-answer options, share found items as cards, split bills, check replies. Installs from mushare.ai. |
| [n8n](./n8n/SKILL.md) | List and manage workflows, read executions. |
| [neon](./neon/SKILL.md) | Inspect Neon serverless Postgres projects, branches, and databases. Branch create and delete need exact-match confirmation; connection passwords are masked. |
| [netlify](./netlify/SKILL.md) | List your Netlify sites and recent deploys. Read-only. |
| [newsapi](./newsapi/SKILL.md) | Top headlines and full-text news search. Read-only. |
| [notion](./notion/SKILL.md) | Search and query Notion, plus create pages, append blocks, and update page properties (writes need --confirm). |
| [octoprint](./octoprint/SKILL.md) | Control an OctoPrint 3D printer over its local REST API: read printer state and temperatures, monitor print progress, start/pause/cancel/restart jobs, upload and select gcode files, set hotend and bed temperatures, jog or home axes, and (gated) run raw G-code. Use when the user mentions their OctoPrint instance or a printer it drives. |
| [openai](./openai/SKILL.md) | Check your OpenAI API access and list the models your key can use. Read-only. |
| [openrouter](./openrouter/SKILL.md) | Browse the model catalog with per-token pricing; check your key usage. Read-only. |
| [openweathermap](./openweathermap/SKILL.md) | Current weather and 5-day forecast for any city. Read-only. |
| [opusclip](./opusclip/SKILL.md) | Turn long-form videos into short, captioned, vertical clips with OpusClip |
| [oura](./oura/SKILL.md) | Read Oura Ring health data: sleep scores, sleep sessions, readiness, workouts, and SpO2. |
| [paddle](./paddle/SKILL.md) | View Paddle transactions and customers. Read-only by design. |
| [patreon](./patreon/SKILL.md) | Read Patreon campaigns, members, tiers, and identity (read-only). |
| [perplexity](./perplexity/SKILL.md) | Ask questions with citations, search the web. |
| [pexels](./pexels/SKILL.md) | Search Pexels |
| [philips-hue](./philips-hue/SKILL.md) | Control Philips Hue lights locally: list lights and rooms, set brightness/color, activate scenes, read sensors. |
| [pipedrive](./pipedrive/SKILL.md) | List deals and contacts, create deals. CRM for your pipeline. |
| [plain](./plain/SKILL.md) | Find customers, manage support threads. |
| [playht](./playht/SKILL.md) | Generate spoken audio from text with PlayHT voices, browse stock and cloned voices, and create instant voice clones. Reach for this when the user wants narration or voiceovers, a voice library lookup, or a voice cloned from a sample. |
| [podbean](./podbean/SKILL.md) | Manage podcast hosting on Podbean: list podcasts and their episodes, create, update, or delete episodes. Podbean |
| [polar](./polar/SKILL.md) | Read Polar orders, subscriptions, products, and customers; create checkouts and refunds. |
| [polymarket](./polymarket/SKILL.md) | Read-only prediction market data: events, markets, prices, order books. No trading, no API key needed. |
| [posthog](./posthog/SKILL.md) | Your PostHog user, projects, and saved insights. Read-only. |
| [postmark](./postmark/SKILL.md) | Send transactional email, check delivery and bounces. |
| [printful](./printful/SKILL.md) | Read Printful products and orders, create orders and mockups. |
| [prusa-connect](./prusa-connect/SKILL.md) | Read Prusa 3D printer state through the official Prusa Connect cloud API: list printers and their state, list jobs and files, view cameras, read print statistics, and upload gcode files to printer storage. Use when the user mentions Prusa Connect or a networked Prusa printer (MK3/MK4/CORE One). |
| [rachio](./rachio/SKILL.md) | Control a Rachio smart irrigation controller through the public Rachio API. Check who is signed in, see what the controller is currently running, start watering a specific zone for a set number of seconds, and shut all water off in an emergency. Reach for this when the user asks about sprinklers, watering schedules, or irrigation zones. |
| [railway](./railway/SKILL.md) | List projects and deployments, set variables, redeploy. |
| [ramp](./ramp/SKILL.md) | Read-only view of corporate spend: transactions, cards and limits, users, departments. No spend actions by design. |
| [readwise](./readwise/SKILL.md) | Search your highlights and books, save new highlights. |
| [remove-bg](./remove-bg/SKILL.md) | Remove the background from an image with the remove.bg API: submit a local file or an image URL, get back a transparent PNG saved to a local path. Also check the account |
| [render](./render/SKILL.md) | List your Render services and recent deploys. Read-only. |
| [replicate](./replicate/SKILL.md) | Run AI models, poll predictions. |
| [resend](./resend/SKILL.md) | Send email through Resend and check delivery status. Every send is confirmed with you first. |
| [restream](./restream/SKILL.md) | Manage Restream multistreaming: read your profile, list streaming destinations (channels), toggle destinations or edit channel metadata, and retrieve your stream key. Use when the user wants to control where a livestream goes without opening the Restream dashboard. |
| [runway](./runway/SKILL.md) | Runway developer API: text-to-video, image-to-video, task polling, video upscale, lip-sync. |
| [sendgrid](./sendgrid/SKILL.md) | Send email, check stats and profile. |
| [sentry](./sentry/SKILL.md) | List organizations and projects, triage unresolved issues from the last 24h, and resolve/archive/assign issues. |
| [shippo](./shippo/SKILL.md) | Ship through many carriers (USPS, UPS, FedEx, DHL and others) with one API: get rates for a shipment; buy a printable postage label; track a parcel; refund unused labels. Reach for this when the user needs to price or purchase shipping for a package. |
| [shopify](./shopify/SKILL.md) | View orders, products, customers; create products and discounts with confirmation. No order or customer writes, ever. |
| [slack](./slack/SKILL.md) | Read channels, post messages, list users. The most-requested workplace connector. |
| [smartcar](./smartcar/SKILL.md) | Read and control connected cars across many brands (Tesla, Ford, GM, Toyota, BMW, Hyundai and others) through one standardized API. Read odometer, location, charge and battery level, fuel level and tire pressure; lock/unlock doors; start/stop charging; set charge limits and schedules; route the built-in navigation. Use when the user mentions their car and the brand has no dedicated connector here, or asks for cross-brand vehicle telemetry and control. |
| [smartthings](./smartthings/SKILL.md) | Read device status and issue capability commands across a Samsung SmartThings account: locations, devices, switches, dimmers, locks, thermostats, sirens, garage door controllers, and window shades. Use it when the user asks about or wants to change the state of anything paired to their SmartThings hub or cloud account. This connector drives real physical hardware, so every write is confirmation-gated (see Operating Rules). |
| [spotify](./spotify/SKILL.md) | Read your profile, playlists, top tracks and artists, and search the catalog. Playlist and library writes need your confirmation. |
| [square](./square/SKILL.md) | Work with a Square seller account: list locations and payments, create orders, push a checkout to a physical Square Terminal for in-person payment, charge a payment source directly, cancel a pending Terminal checkout, and refund a payment. Reach for this when the user needs to take or return money through Square. |
| [stripe](./stripe/SKILL.md) | Read-only Stripe visibility: balance, recent charges, customers. No write commands ship: expanding to writes is a deliberate v2. |
| [supabase](./supabase/SKILL.md) | List tables, query rows, and insert/update/delete rows in your Supabase Postgres database. |
| [supermemory](./supermemory/SKILL.md) | Store and recall with Supermemory: add memories and documents, hybrid search, upload files, tune settings. |
| [switchbot](./switchbot/SKILL.md) | Read status and send commands to SwitchBot devices over the official OpenAPI v1.1: SwitchBot Bot (physical button presser), SwitchBot Lock, Curtain and Blind Tilt motors, plugs, lights, air conditioners, infrared remotes, and saved scenes. Use it when the user asks about or wants to change anything in their SwitchBot setup. Commands drive real physical hardware, so writes are confirmation-gated (see Operating Rules). |
| [tally](./tally/SKILL.md) | List forms, read submissions, manage form blocks. |
| [tavily](./tavily/SKILL.md) | Fast, clean web research: one call returns an AI answer plus ranked sources with snippets. Read-only. |
| [telegram](./telegram/SKILL.md) | Send messages and read updates through your own Telegram bot. Bots can |
| [tesla-fleet-api](./tesla-fleet-api/SKILL.md) | Control Tesla vehicles through the official Tesla Fleet API: read live vehicle state, wake a sleeping car, and send signed commands (lock/unlock, keyless drive, charge control, preconditioning, honk/flash, trunk, sentry/valet, speed limit, navigation). Use when the user mentions their Tesla car or asks for vehicle actuation. |
| [tesla-powerwall](./tesla-powerwall/SKILL.md) | Monitor and control Tesla energy sites (Powerwall, solar) through the official Tesla Fleet API. Read live power flows, battery state, and site settings; change backup reserve percentage, operation mode, and Storm Watch. Use when the user mentions their Powerwall, Tesla energy site, backup reserve, or storm mode. |
| [ticktick](./ticktick/SKILL.md) | Read and write TickTick: list projects and tasks, create tasks, complete and delete tasks. |
| [tiktok](./tiktok/SKILL.md) | Read your TikTok profile and video list. API access needs TikTok app approval first, and posting is not shipped. |
| [todoist](./todoist/SKILL.md) | List tasks, create tasks, and mark them done in Todoist. |
| [transistor](./transistor/SKILL.md) | Manage podcast hosting on Transistor.fm: list shows and episodes, create draft episodes, update or delete them, and upload episode audio via Transistor |
| [triggerdev](./triggerdev/SKILL.md) | Trigger background jobs, list runs, manage schedules. |
| [tuya](./tuya/SKILL.md) | Read status and send control commands to Tuya Cloud / Smart Life devices: smart plugs and switches, lights, thermostats, curtain motors, and supported smart locks, plus executing saved scenes. Use it when the user asks about or wants to change anything paired through the Tuya or Smart Life app. Commands drive real physical hardware, so writes are confirmation-gated (see Operating Rules). |
| [twitch](./twitch/SKILL.md) | Read and write Twitch via the Helix API: channel profile, follower stats, live stream status, past videos, channel title and game updates, clip creation. |
| [typeform](./typeform/SKILL.md) | List forms and responses, create forms, and manage response webhooks with confirmation. |
| [uber-direct](./uber-direct/SKILL.md) | Dispatch same-day couriers through Uber Direct for food, retail, grocery, or parcel deliveries. Get a price and time quote without dispatching anyone, create a delivery when the user approves, check its status, and cancel a pending one. Reach for this when the user needs something picked up and dropped off locally today. |
| [unifi-protect](./unifi-protect/SKILL.md) | Read camera state and still snapshots from a local UniFi Protect console (Protect 5.3+) through the official Integration API, and adjust camera settings: PTZ position, flood lights, chimes, talkback. Use it when the user asks what their UniFi cameras see, wants a snapshot saved, or wants to change camera behavior. Everything runs against the local console; there is no cloud dependency. |
| [unsplash](./unsplash/SKILL.md) | Search Unsplash |
| [upstash](./upstash/SKILL.md) | Run Redis commands over REST. |
| [vapi](./vapi/SKILL.md) | Manage voice AI assistants, phone numbers, and calls. Outbound calls need exact-match confirmation; test numbers by default. |
| [veed](./veed/SKILL.md) | Remove backgrounds from video with VEED |
| [vercel](./vercel/SKILL.md) | See your Vercel account, projects, and recent deployments. |
| [webflow](./webflow/SKILL.md) | Work with the Webflow Data API v2: list sites, inspect site details, browse CMS collections and items, create/update/delete CMS items, and publish a site. Uses a per-site token from Site Settings. |
| [wise](./wise/SKILL.md) | View Wise profiles and multi-currency balances. Read-only by design. |
| [x](./x/SKILL.md) | Post, search, like, DM. Note: no usable free read tier. |
| [xai](./xai/SKILL.md) | Query Grok chat completions and list available Grok models through xAI |
| [ynab](./ynab/SKILL.md) | Read and write YNAB budgets: list budgets, accounts, balances, transactions, and categories; record transactions. |
| [youtube](./youtube/SKILL.md) | Read channels and videos, search, plus uploads and comments with confirmation. |
| [zep](./zep/SKILL.md) | Work with Zep |
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
