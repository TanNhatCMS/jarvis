# ATTRIBUTION

Code gốc của repo này (`workflows/`, tài liệu, script) được cấp phép **MIT** —
xem [LICENSE](LICENSE).

Các thư mục `skills/` và `agents/` chứa nội dung **bóc tách / điều chỉnh** từ
các dự án nguồn mở. Mỗi nguồn giữ nguyên license của nó như liệt kê dưới đây.
File này là bản kê attribution tập trung của repo.

## Bảng tổng hợp

| Nhóm | Skills / Agents | Nguồn | License |
|---|---|---|---|
| ECC | 55 skills `skills/ecc-*/` + 71 agents `agents/ecc/` | [affaan-m/ECC](https://github.com/affaan-m/ECC) | MIT |
| ZCode | `agent-browser`, `ai-elements`, `dogfood`, `feature-boundary-planner`, `react-best-practices` | [zai-org/ZCode](https://github.com/zai-org/ZCode) | Apache-2.0 |
| karpathy | `karpathy` | [jidechao/karpathy-skills](https://github.com/jidechao/karpathy-skills) | MIT |
| superpowers | `superpowers-brainstorming`, `superpowers-tdd`, `superpowers-debugging`, `superpowers-code-review` | [obra/superpowers](https://github.com/obra/superpowers) | MIT |
| ponytail | `ponytail` | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | MIT |
| taste-design | `taste-design` | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | MIT |
| anthropics | `anthropics-mcp-builder`, `anthropics-skill-creator` | [anthropics/skills](https://github.com/anthropics/skills) | Apache-2.0 |
| addyosmani | `addyosmani-api-design`, `addyosmani-security`, `addyosmani-observability`, `addyosmani-constraints`, `addyosmani-performance` | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | MIT |
| mattpocock | `mattpocock-grill-docs`, `mattpocock-domain-model`, `mattpocock-wayfinder`, `mattpocock-triage` | [mattpocock/skills](https://github.com/mattpocock/skills) | MIT |
| caveman | `caveman` | [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Apache-2.0 (kể từ v3.0.0 — xem ghi chú) |
| headroom | `headroom` | [roman-ryzenadvanced/headroom-skill](https://github.com/roman-ryzenadvanced/headroom-skill) | Apache-2.0 |
| rtk | `rtk` | [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | Apache-2.0 |
| dev-best-practices | `dev-best-practices` | [MG-Cafe/claude-code-best-practices](https://github.com/MG-Cafe/claude-code-best-practices) | MIT |
| codex-review | `codex-review` | [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) | Apache-2.0 |
| web-scrape | `web-scrape` | [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | AGPL-3.0 (chỉ dùng như dịch vụ ngoài — xem ghi chú) |
| serena | `serena` | [oraios/serena](https://github.com/oraios/serena) | GPL-3.0-or-later (tool chạy độc lập — xem ghi chú) |
| microsoft/JARVIS | `easytool-skill-author` (skill) + `prompts/hugginggpt-4stage.md`, `docs/task-dag-chaining.md`, `docs/taskbench-evaluation-schema.md` (tài liệu tham khảo) | [microsoft/JARVIS](https://github.com/microsoft/JARVIS) | MIT |
| muse-connectors | 158 connectors `connectors/<tên>/` (bóc tách nguyên văn, commit `0ffbcc0`; trước 2026-10-22 nằm ở `skills/muse-connector-*/`, đã tách ra `connectors/` tên trần đúng cấu trúc upstream) + catalog tại `connectors/README.md` + 14 bot brief template `prompts/bot-templates/` (của Anil-matcha, copy nguyên văn) | [Anil-matcha/awesome-muse-connectors](https://github.com/Anil-matcha/awesome-muse-connectors) (150 skill copy từ [bluman1/muse-connectors](https://github.com/bluman1/muse-connectors) @ `6e31fd4`) | MIT (dual: `connectors/LICENSE` cho 150 skill copy; root LICENSE cho 8 connector + templates của Anil) |
| awesome-muse-skills | 1496 skills `skills/ams-*/` + `skills/ams-kw-*/` + `skills/ams-imp-*/` (commit `faf37c0`) + ghi chú tại `skills/awesome-muse-skills/README.md` | [aicodedecode/awesome-muse-skills](https://github.com/aicodedecode/awesome-muse-skills) (kw-port từ [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)) | MIT (originals + một phần imports) / Apache-2.0 (kw-port + một phần imports) |
| animated-short-film | `animated-short-film` (SKILL.md + `references/` + `examples/`, không lấy `docs/` landing page) + `JARVIS-NOTE.md` (map media-generation→media, TTS→spoken-audio) | [sonlovinbot/Muse-animated-short-film](https://github.com/sonlovinbot/Muse-animated-short-film) (Đặng Hữu Sơn) | MIT |
| grounded-humanizer | `local-grounded-humanizer` (SKILL.md + `references/` 7 file + `evals/behavior-cases.md`, commit `4784ca7`; chỉ đổi frontmatter `name`, không lấy `agents/openai.yaml`) | [monasprox/humanizer](https://github.com/monasprox/humanizer) (mở rộng từ [blader/humanizer](https://github.com/blader/humanizer)) | MIT |
| ai-code-review | `ai-code-review` (SKILL.md + `references/` 6 file; đã sửa các tham chiếu commands/rules của repo nguồn sang tương đương jarvis, chỗ không có tương đương ghi rõ là gap) | User cung cấp trực tiếp (file zip, 2026-10-22); nội dung phương pháp theo "How the Claude Code team does code review" — [Anthropic / Claude Code blog](https://claude.dev/blog) | Chưa rõ — gói nguồn không kèm LICENSE; không tự gán license |
| php2shell-checker | `phpcheck-server` (chỉ SKILL.md), `phpcheck-url` (SKILL.md + `scripts/phpcheck.js` + `LICENSE` nguyên văn) | [openai/php2shell-checker](https://github.com/openai/php2shell-checker) @ `40a4746` | Apache-2.0 |

License trong bảng được kiểm chứng từ GitHub API / file LICENSE của upstream
ngày 2026-10-15. Copyright thuộc về các tác giả của từng dự án nguồn
(xem link nguồn).

## Ghi chú license

- **ECC (MIT):** đã verify qua npm (`ecc-universal@2.2.3` công bố MIT).
  55 skills + 71 agents được bóc ra từ bản cài ECC.
- **ZCode (Apache-2.0):** đã lược bỏ các skill gắn cứng nội bộ ZCode
  (architecture-governance, dep-refs, electron). Toàn văn Apache-2.0 ở cuối file này.
- **anthropics/skills (Apache-2.0):** upstream không đặt LICENSE ở root mà đặt
  `LICENSE.txt` trong từng skill (`skills/mcp-builder/LICENSE.txt`,
  `skills/skill-creator/LICENSE.txt`). Hai file trong repo này là bản copy
  nguyên văn, đã đối chiếu đúng.
- **caveman:** upstream có 2 file license — `LICENSE` (Apache-2.0, áp dụng cho
  toàn bộ repo kể từ v3.0.0, bao gồm cả skill — xem `LICENSING.md` của upstream)
  và `LICENSE-MIT` (chỉ lưu giữ cho các phiên bản skill trước v3.0.0).
  Skill trong repo này giống từng byte với upstream `main` (v4.x, gồm các commit
  sau 3.0.0) nên áp dụng **Apache-2.0**. File `skills/caveman/LICENSE` trước đây
  chép nhầm text MIT — đã thay bằng toàn văn Apache-2.0 (2026-10-15).
- **serena:** skill này **chỉ là tài liệu wrapper** — không copy bất kỳ code nào
  của Serena vào repo. Serena application là GPL-3.0-or-later, chạy như một tool
  độc lập ngoài repo, nên GPL không lây sang repo này. (Chi tiết phân tách
  license của Serena: SolidLSP là MIT, Serena application là GPL-3.0-or-later —
  xem file `LICENSE` trong repo gốc.)
- **web-scrape / firecrawl:** skill chỉ là tài liệu hướng dẫn gọi Firecrawl API
  (dịch vụ bên ngoài), không chứa code của `firecrawl/firecrawl` (AGPL-3.0).
- **grounded-humanizer (MIT):** bóc từ monasprox/humanizer @ `4784ca7`
  (2026-10-10), bản mở rộng của blader/humanizer. License MIT dual-copyright
  (Siqi Chen 2025 + Grounded Humanizer contributors 2026) — file LICENSE copy
  nguyên văn. Thân SKILL.md nguyên văn, chỉ đổi frontmatter `name`
  (`humanizer` → `grounded-humanizer`, tránh đè `ams-humanizer`) và thêm
  `extracted_from`. Không lấy `agents/openai.yaml` (manifest agent cho nền tảng
  OpenAI-style, không phù hợp chuẩn repo).
  Vì không phân phối code AGPL nên AGPL không áp đặt nghĩa vụ lên repo này.
  Nếu sau này ai vendor code Firecrawl vào repo thì phải tuân thủ AGPL-3.0.
- **php2shell-checker (Apache-2.0):** bóc nguyên văn cả 2 skill của
  openai/php2shell-checker @ `40a4746` (2026-10-22): `phpcheck-server`
  (chỉ SKILL.md, bảng vulnerable-range cắt tại 2026-10-20) và `phpcheck-url`
  (SKILL.md + `scripts/phpcheck.js` nguyên văn từng byte + `LICENSE`
  Apache-2.0 copy từ root upstream). Chỉ điều chỉnh ở bản jarvis: mở rộng
  dòng `description` trong frontmatter cho dễ kích hoạt và thêm ghi chú
  nguồn; `phpcheck-server` có thêm ghi chú rằng script của `phpcheck-url`
  chạy được ở chế độ `--local`. Vet script (2026-10-22): chỉ `fetch`
  HEAD/GET đọc header `Server`/`X-Powered-By` (không follow redirect,
  không đọc body, timeout ≤60s, từ chối URL có credential/fragment) và
  `execFileSync(php, ['-v'])` không qua shell — không exploit probe,
  không ghi file, không gửi dữ liệu đi nơi khác. Test upstream
  `node --test phpcheck.test.js`: 39/39 pass trên máy này.
- **File LICENSE riêng trong từng skill:** hiện có ở `anthropics-mcp-builder`,
  `anthropics-skill-creator`, `caveman`, `dev-best-practices`, `headroom`,
  `karpathy`, `phpcheck-url`, `taste-design`. Các skill còn lại dùng bản kê tập trung trong
  file này (kèm toàn văn Apache-2.0 ở phụ lục).

## Phụ lục: toàn văn Apache License 2.0

(Áp dụng cho các skill Apache-2.0 trong bảng trên.)

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright 2026 Anthropic, PBC.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
