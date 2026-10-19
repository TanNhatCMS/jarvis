---
name: codex-review
description: "Review code with a second model via the Codex CLI: standard review or adversarial review that challenges design choices. Use after implementing a feature, before opening a PR, or when you want an independent second opinion — the dev-team review phase uses the same model, this uses a different one."
---
<!--
Attribution: review prompts adapted from openai/codex-plugin-cc (Apache-2.0).
Adapted for JARVIS: replaced Claude Code plugin machinery with direct `codex exec` calls.
-->

# Code Review via Codex CLI

Run an independent code review using the `codex` CLI (a different model family
than the one writing the code). Review-only: never fix, never patch.

## Prerequisites

- `codex` CLI installed and authenticated (`codex --version`).
- A git repo with the change to review.

## Standard review

```bash
# Review uncommitted working-tree changes
git status --short --untracked-files=all
git diff --shortstat
codex exec "Review the uncommitted changes in this repo (git diff HEAD). \
Report: correctness bugs, security issues, edge cases, and anything that \
contradicts the repo's existing conventions. Be specific with file:line. \
Do not fix anything, only report."
```

```bash
# Review a branch against a base
codex exec "Review the diff of $(git rev-parse --abbrev-ref HEAD) against $BASE. \
Same reporting rules as above. Do not fix anything, only report."
```

## Adversarial review

Challenges the approach itself, not just the implementation:

```bash
codex exec "Adversarial review of the uncommitted changes in this repo. \
Question: is this the right approach at all? What assumptions does it depend \
on? Where could the design fail under real-world conditions (scale, errors, \
concurrency, bad input)? Suggest what you would do differently and why. \
Do not fix anything, only report."
```

## Rules

1. **Review-only.** Do not apply fixes, do not commit, do not leave the review
   unreported. Return findings verbatim, then you may triage them separately.
2. **Scope first.** Check `git status`/`git diff --shortstat` before reviewing;
   if there is nothing to review, say so instead of reviewing stale state.
3. **Keep the framing.** For adversarial review, do not soften the challenge —
   the value is in questioning the design, not re-checking syntax.
4. Large reviews: run in background and continue other work; the result arrives
   on its own.
