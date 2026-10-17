# Vietnamese data-source notes

This maintenance file records what the reviewed Vietnamese resources can and
cannot support. It is not a phrase bank and should not be loaded for ordinary
replies.

Review date: 2026-10-09. No large dataset was downloaded. The audit used public
dataset cards and viewer previews. For `CentralVietnamDataset`, two small CSVs
(about 105 KB total) were downloaded temporarily and 24 rows from the beginning,
middle, and end of each file were inspected.

## Source audit

| Source | Observed material | Useful for | Does not establish |
| --- | --- | --- | --- |
| VTSNLP Vietnamese Curated Dataset | 12.17M documents, 34.6 GB; C4, OSCAR, Wikipedia, news, and crawled sources; Unicode normalization, exact deduplication, heuristic and classifier filtering | broad vocabulary, document syntax, domains, noisy-data and duplicate handling | casual turn-taking, relationship-specific address, a person's voice, regional identity |
| VTSNLP Instruct General Dataset | 4.53M rows, 3.41 GB; 11 category values; translated/synthetic task material according to the project announcement; sparse public card | task families, instruction formats, recurring synthetic or translation artifacts | native conversational frequency, reliable personal style, natural reasoning narration |
| NVIDIA NeMo Curator account | reproducible pipeline steps and before/after filtering analysis; Wikipedia used as high-quality classifier data and unfiltered news as low-quality data | understanding what “quality” means in this corpus and which material filtering favors | proof that retained text is socially natural or suitable for chat |
| CentralVietnamDataset | 294-line and 1,246-line CSVs with local-to-standard pairs; repository has one commit and no visible methodology or license | recognizing possible local forms and candidate standard meanings; generating test inputs | province, speaker demographics, relationship, pragmatic force, coverage, production-ready dialect generation |
| Underthesea | normalization, diacritic restoration, segmentation, tagging, parsing, NER, classification, and other NLP functions | preprocessing and locating comparable forms | conversational stance or voice |
| Vietnamese stopwords | lexical list for filtering or retrieval | search/index preprocessing and sensitivity checks | dispensable words in generation; particles that should always be removed |
| Elasticsearch Vietnamese analysis plugin | tokenizer, lowercase and stopword filters, optional punctuation and ASCII folding | search analysis and corpus queries | sentence quality, politeness, register, or naturalness |
| Vitk | older Spark-based segmentation, POS tagging, and dependency parsing toolkit; repository marks itself obsolete | historical tooling context and structural preprocessing | current style guidance or dialogue behavior |

## Sampling observations

- The curated-corpus previews contain mostly edited factual prose and visible
  remnants from source documents. Topic breadth is real, but it is document
  breadth rather than conversation breadth.
- Instruction previews repeatedly use translated scaffolding that requests
  detailed steps and outputs a formulaic conclusion. Several rows contain
  mistranslations, label drift, malformed punctuation, or English content. These
  are useful negative examples for assistant prose.
- The Central Vietnam files mix word-level and sentence-level pairs despite their
  filenames. Samples include lexical, phonological, spelling, and whole-utterance
  correspondences that cannot be assigned safely to one internally uniform
  repertoire from the repository alone. With no speaker or province metadata,
  mixing them into one voice would erase the distinctions the skill is supposed
  to preserve.
- A stopword list includes discourse particles and multiword expressions that may
  carry interactional work. Removing them mechanically would damage Vietnamese
  voice even when it improves a retrieval index.

## Adoption rules

1. Use a dataset row to learn only what its provenance and annotation support.
2. Separate recognition, normalization, retrieval, task coverage, genre coverage,
   and conversation modeling; they are different jobs.
3. Prefer comparable multi-turn interaction with known speaker/audience roles for
   dialogue behavior.
4. Treat translated and synthetic examples as possible failure generators, not as
   default Vietnamese phrasing.
5. Never paste a regional list into a prompt as a style palette. Turn it into
   recognition tests and require current conversational evidence before adapting.
6. Preserve source metadata and sampling limits in maintenance notes; keep them
   out of the user's reply unless the user asks for the research basis.
