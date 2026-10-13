---
name: claude-code-best-practices
description: Universal best-practice rules for Claude Code. Locks framework choices, layering boundaries, file locations, workflow patterns, and communication style. Drop into ./CLAUDE.md, .claude/skills/claude-code-best-practices/SKILL.md, or ~/.claude/skills/ for global use.
---

# Claude Code Best Practices

Apply these rules whenever you write, edit, or review code in any project.

---

## 1. Pair every "use X" with an explicit "NOT Y"

When the project specifies a library or framework, also state the alternative it explicitly avoids. Without the negative, the most popular default from your training data sneaks back in on every refactor.

Format: **"Use [LIBRARY], NOT [POPULAR_DEFAULT]. Reason: [WHY]."**

Examples to follow:
- Use **httpx**, NOT requests. Reason: async-first.
- Use **Vitest**, NOT Jest. Reason: faster ESM support.
- Use **TanStack Query**, NOT Redux for server state. Reason: server state is not client state.
- Use **zod**, NOT yup for schema validation. Reason: zod has better TypeScript inference.

If the project's CLAUDE.md does not specify a library for a category you need, **ask which one** before adding a new dependency. Never default silently.

---

## 2. Lock layering boundaries in one sentence

State each layering rule as a single declarative sentence in the form: **"X doesn't know about Y."** One sentence beats a paragraph of architecture theory.

Examples to follow:
- Components are pure UI — no API calls, no router imports, no global state access.
- Controllers don't know about the database driver. All access through the repository.
- Domain models don't import from `/infra`. Pass dependencies as constructor args.
- The view doesn't know if data came from cache or origin. The repository decides.
- The view model doesn't know which backend is active. Multi-backend goes through a protocol.

When implementing, **refuse to violate these rules**. If a task requires crossing a boundary, surface that and ask for permission before proceeding. Never silently widen a layer's scope.

---

## 3. Document the WHY for every non-obvious rule

For every wrapper, workaround, or unusual pattern, the rule must include four pieces:

1. **Name** — what is it called
2. **Purpose** — what does it do
3. **Reason** — why does it exist
4. **Paper trail** — which ticket, bug, or PR documented the original problem

Format: **"[NAME] wraps [THING] for [PURPOSE], because [REASON]. See [TICKET-ID]. Don't unwrap."**

Examples:
- `ApiResponse` wraps fetch results so we can attach trace IDs to errors. See ENG-1234. Don't replace with raw fetch.
- `SafeNumber` wraps user-input numbers as bigint to avoid JS float-precision loss on payments. See FIN-2031. Don't unwrap to Number.
- `RetryPolicy` wraps third-party API calls because vendor X drops 3% of requests. See INC-5678. Don't bypass.

Without the **why**, the wrapper looks like overhead and gets refactored away. The **paper trail** makes the rule non-negotiable.

---

## 4. Pin every location — flags, paths, folders

**Never invent a file path. Never guess where a feature flag lives.** Always look for the location in CLAUDE.md.

Required entries in any project CLAUDE.md:

### Feature flags
- Where they live: e.g. `config/flags.yaml`, env vars, LaunchDarkly with prefix `MYAPP_`
- Currently active flags listed by exact name + default value

### Persistence locations
- Secrets: e.g. 1Password CLI, AWS Secrets Manager — **never on disk**
- User uploads: exact path e.g. `storage/uploads/{user_id}/`
- Caches: e.g. `~/.cache/myapp/` — safe to delete, rebuilt on demand
- Logs: e.g. `/var/log/myapp/` — rotation policy stated

### Folder map
- Tests: `__tests__/` next to file under test, OR `/tests/` for integration
- Migrations: `db/migrations/YYYY-MM-DD_description.sql`
- Public types: `types/` — exported via `index.ts`
- Internal types: `_types/` — never imported across package boundaries
- Fixtures: `__fixtures__/` next to tests
- Docs: `docs/` as Markdown — update with code in the same PR

When adding a new artifact (test, migration, type, fixture, doc), **use the convention from the map**. Never improvise placement.

---

## 5. Default to Plan mode for complex tasks

For any task that:
- Touches 3+ files, OR
- Involves destructive operations (delete, drop, force-push, schema change), OR
- Affects production code or user data

Do this:
1. Start in **Plan mode** (Shift+Tab twice).
2. Write the full plan — which files, which functions, what tests, what could break.
3. Wait for human approval of the plan.
4. Only then switch to execution mode.

If progress stalls during execution, **return to Plan mode and re-scope** rather than improvise.

For high-stakes plans, run a second Claude session as the "reviewer" of the plan before executing.

---

## 6. Capture every correction as a permanent rule

When the human corrects you, **do not just fix the immediate output**. Always:

1. Acknowledge the correction explicitly.
2. Append a new rule to `lessons.md` (or `CLAUDE.md` if it's a foundational rule).
3. Use the format: **"When [SITUATION], do [CORRECT THING], not [WRONG THING]. (Corrected on [DATE], see PR #[NUMBER] if applicable.)"**
4. Read `lessons.md` at the start of every new session.

This is the **compounding loop** — the whole point. Without it, every session you re-explain the same things. With it, after two weeks the codebase rules read better than a new hire's onboarding doc.

Once a month, review `lessons.md` and consolidate stable rules into `CLAUDE.md`.

---

## 7. Automate anything you do 3+ times

If a workflow is performed 3+ times, convert it into one of these:

### Slash commands — for scripted, deterministic actions
Create in `.claude/commands/<name>.md`. Examples:
- `/ship-pr` — open a PR with conventional commit + description + checklist
- `/run-evals` — run the eval suite, report failures with diffs
- `/format-all` — run formatter + linter across changed files
- `/techdebt` — find and fix one piece of tech debt in the current file
- `/update-docs` — update docs for any function signature changed in this commit

### Subagents — for scoped context windows
Create in `.claude/agents/<name>.md`. The proven triad:
- `writer.md` — implements changes, follows CLAUDE.md
- `reviewer.md` — reads diffs, blocks on CLAUDE.md violations, blocks on `lessons.md` violations
- `tester.md` — runs the test suite, reports failures with line numbers

**Rule: 1 subagent = 1 task.** Don't bloat agents with multiple responsibilities.

### Hooks — for unbreakable enforcement
Create in `.claude/hooks/`. Examples:
- `post-tool-use.sh` — auto-format after every Edit/Write
- `pre-tool-use.sh` — block dangerous commands (`rm -rf`, `git push --force`, schema drops)
- `session-start.sh` — load `lessons.md` into context

### Pre-allowed permissions — to remove friction
In `.claude/settings.json`, pre-approve safe commands so you stop hitting the "can I run this?" wall:

```json
{
  "permissions": {
    "allow": [
      "Bash(npm test:*)",
      "Bash(npm run lint:*)",
      "Bash(npm run typecheck)",
      "Bash(git status)",
      "Bash(git diff:*)",
      "Bash(git log:*)",
      "Bash(ls:*)",
      "Bash(cat:*)",
      "Bash(find:*)"
    ]
  }
}
```

**Rule of thumb:**
- **Hooks** = enforcement (cannot be skipped)
- **CLAUDE.md** = preferences (try to follow)
- **Slash commands** = scripted, deterministic actions
- **Subagents** = scoped context (cleaner main session)
- **Permissions** = friction removal

---

## 8. Communication style

### When responding:
- Lead with the change made or the answer — not the explanation.
- For diffs, show the smallest diff that satisfies the request.
- Default to no comments in code. Add a comment only when the WHY is non-obvious or surprising.
- Never write multi-paragraph docstrings unless asked.
- Don't narrate your internal deliberation. Show results, not process.

### When uncertain:
- If the task requires guessing user intent, **ask** before acting.
- If the task crosses a layering boundary defined in CLAUDE.md, surface it before proceeding.
- If the test suite would fail with your change, surface it before proposing the change.

### When done:
- One or two sentences. What changed and what's next.
- Do not summarize what the diff already shows.

---

## 9. Safety defaults (always-on)

These rules apply even when no project CLAUDE.md exists:

- **Never commit secrets.** Scan every diff for keys, tokens, credentials. If found, refuse to commit and surface them.
- **Never silently run destructive commands.** Any `rm -rf`, `git push --force`, `git reset --hard`, `DROP TABLE`, schema migration, or production deploy requires explicit human approval — even if a permission exists.
- **Never swallow errors.** If you catch an exception, either re-raise it, log it visibly, or surface it to the human. Silent `try/except: pass` is forbidden.
- **Never modify `.env`, `.git/`, `node_modules/`, or any vendored dependency.** If the task requires it, ask first.
- **Never log PII.** Mask emails, IDs, tokens before any log statement.

---
