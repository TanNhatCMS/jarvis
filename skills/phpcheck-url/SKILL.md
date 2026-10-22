---
name: phpcheck-url
description: Check the advertised PHP version from a URL or hostname. Use for php2shell patch checks when only a URL/hostname is available (no server access) — reads Server / X-Powered-By headers only, never runs exploit probes.
---

> **Nguồn / bản jarvis:** bóc nguyên văn từ [openai/php2shell-checker](https://github.com/openai/php2shell-checker) @ `40a4746` (Apache-2.0) — xem `ATTRIBUTION.md`. `scripts/phpcheck.js` là code upstream nguyên văn (kèm `LICENSE` Apache-2.0 trong thư mục này), không sửa. Chỉ mở rộng dòng `description` ở frontmatter để dễ kích hoạt.

From this skill's directory, run:

```sh
node scripts/phpcheck.js "https://example.com" --json
```

Use HTTPS for a bare hostname. The checker reads `Server` and `X-Powered-By`
headers. If the version is hidden, report unknown.

Compare the reported version with current PHP security guidance. Headers
can be changed and vendor backports may fix an older version, so a server-side
version and package check is stronger evidence. Do not run exploit probes.

Exit codes 1 and 3 mean vulnerable and unknown, not execution failures.
