# Research basis and limits

This file records the design basis for maintainers. It is not a runtime checklist
and should not be loaded for ordinary rewriting or replies.

## Design claims supported by research

### Person reference is relational

Vietnamese person reference draws productively on pronouns, kin terms, names, and
omission. Form selection is conditioned by formality, intimacy, status, and the
current social relationship. The same pronoun pair can index solidarity in one
network and hostility in another.

- Thanh Tran and Catherine Travis,
  [Shifting rules across generations: Variable subject expression in the Canberra Vietnamese heritage language](https://www.cambridge.org/core/journals/language-variation-and-change/article/shifting-rules-across-generations-variable-subject-expression-in-the-canberra-vietnamese-heritage-language/4BEC843B095A980D6D8FB0522B235BA0)
- Jack Sidnell and colleagues,
  [The problem of peers in Vietnamese interaction](https://rai.onlinelibrary.wiley.com/doi/abs/10.1111/1467-9655.12053)

Design consequence: model reciprocal address and relationship changes; do not
map isolated forms directly to fixed attitudes or identities.

### Regional forms are variable and accommodative

Northern speakers living in Ho Chi Minh City use Southern sentence-final variants
at substantial rates, especially in natural interaction. Several Southern forms
do not map one-to-one onto Northern forms or functions.

- Trinh Cam Lan,
  [Accommodation in dialect contact: evidence from an urban community in Vietnam](https://vietnamjournal.ru/2618-9453/article/view/105391)
- Le Thi Minh Trang,
  [Sentence-final modal particles in Southwestern Vietnamese](https://jol.vn/index.php/ngonngu/en/article/view/770)
- Nguyen Van Hiep,
  [Differences in expressing modality in the three major dialects of Vietnamese](https://doi.org/10.21485/hufsea.2009.18.2.009)

Design consequence: represent region as a repertoire and require repeated,
relationship-relevant evidence before adapting marked forms.

The recognition map in `regional-digital-variation.md` therefore lists feature
families rather than direct translations. The Southwestern particle inventory is
drawn from conversational fieldwork; Central and North-Central forms are marked
as subregional because macro-region labels conceal substantial internal
variation.

### Directness and politeness are not opposites

Vietnamese requests may be direct while politeness is carried by address terms,
honorific elements, particles, supportive moves, and the power-distance context.

- Thi Thuy Minh Nguyen and Helen Basturkmen,
  [Requests and politeness in Vietnamese as a native language](https://doi.org/10.1075/prag.23.4.05ngu)

Design consequence: calibrate the whole relational package instead of making
every polite response indirect or verbose.

### Digital spelling contains intentional social information

Vietnamese social-media spelling includes both accidental error and deliberate
variation such as abbreviation, slang, wordplay, and platform-specific forms.
Over-normalization can remove useful information.

- Thanh-Nhi Nguyen and colleagues,
  [ViLexNorm: A Lexical Normalization Corpus for Vietnamese Social Media Text](https://aclanthology.org/2024.eacl-long.85/)

Design consequence: infer the function of a nonstandard form before copying or
normalizing it. Never manufacture random errors as a shortcut to naturalness.

### Written style performs relationship work

Vietnamese writers may use kin terms, Vietnamese lexical items, emoticons, and
written laughter even in workplace email to build closeness. These choices should
be interpreted as a system in context rather than as isolated deviations.

- Thi Thuy Minh Nguyen and Rhonda Oliver,
  [Relationship building in Vietnamese English written business communication](https://link.springer.com/article/10.1186/s40554-015-0018-5)

Design consequence: formal and informal are insufficient as the only style
categories. Track relationship, audience, action, and genre separately.

### Sequence and missing modalities matter

Vietnamese turn-taking uses adjacency, syntax, prosody, pause, overlap, gaze, and
body movement. Written chat exposes only part of that evidence.

- Nguyen Thi Le Hang,
  [Turn-taking strategies in Vietnamese and English casual conversations](https://js.vnu.edu.vn/FS/article/view/1460)

Design consequence: interpret turns in sequence, but keep uncertainty when voice,
timing, image, or other relevant modalities are unavailable.

### Stance and identity are built across interaction

Stance is not only an opinion attached to a sentence. It evaluates an object,
positions the speaker, and aligns or disaligns that speaker with another person;
its meaning is dialogic, sequential, and socially consequential.

- John W. Du Bois,
  [The stance triangle](https://doi.org/10.1075/pbns.164.07du)

Design consequence: a conversational agent should not become a blank mirror of
the latest user turn. It should carry forward a coherent, evidence-grounded
speaker identity while allowing new evidence and relationship changes to update
its position.

### Utterances perform actions, not sentence templates

Speech-act work distinguishes the grammatical material of an utterance from what
the speaker is doing with it. Conversation-analytic work further shows that a
yes/no question makes a type-conforming answer easier, while recipients can
transform the terms or agenda of a question when accepting its design would
misrepresent their position.

- John R. Searle,
  [A classification of illocutionary acts](https://doi.org/10.1017/S0047404500006837)
- Geoffrey Raymond,
  [Grammar and social organization: Yes/no interrogatives and the structure of responding](https://doi.org/10.2307/1519752)
- Tanya Stivers and Makoto Hayashi,
  [Transformative answers: One way to resist a question's constraints](https://doi.org/10.1017/S0047404509990637)

Design consequence: classify the needed action internally, not the punctuation or
surface sentence type. An agent may answer the useful part of a question while
rejecting an unsupported premise, role, or binary. The taxonomy must not become a
set of canned response forms.

### Speaker footing carries responsibility

Goffman's account of footing separates the person producing words from the author
who selects them and the principal whose position is established by them. In
ordinary conversation these often coincide; quotation, delegation, institutional
speech, and relayed policy can separate them.

- Erving Goffman,
  [Footing](https://doi.org/10.1515/semi.1979.25.1-2.1)

Design consequence: an assistant should speak from the operating position that
owns the reply. It must distinguish its own judgment and actions from quoted user
policy, third-party claims, tool output, and institutional authority. Adding a
first-person pronoun to a detached feature audit does not solve the footing error.

### Repair depends on evidence and restores progress

Conversation repair addresses local trouble in speaking, hearing, or
understanding, with a strong organization around self-repair. Participants also
make their knowledge basis relevant when claims are doubted, and communication
updates common ground for the purpose at hand.

- Emanuel Schegloff, Gail Jefferson, and Harvey Sacks,
  [The preference for self-correction in the organization of repair in conversation](https://doi.org/10.2307/413107)
- Anita Pomerantz,
  [Giving a source or basis: The practice in conversation of telling "how I know"](https://doi.org/10.1016/0378-2166(84)90002-X)
- John Heritage and Geoffrey Raymond,
  [The terms of agreement: Indexing epistemic authority and subordination in talk-in-interaction](https://doi.org/10.1177/019027250506800103)
- Herbert H. Clark and Susan E. Brennan,
  [Grounding in communication](https://doi.org/10.1037/10096-006)

Design consequence: repair the smallest unsupported claim or failed action,
replace it with a source-matched account, and resume the task. Apology,
self-deprecation, or fluent explanation is not repair when the operational state
remains unchanged.

### Agreement pressure and verbal self-reflection are unreliable

LLM evaluations find that models may match a user's stated belief over a truthful
answer. Research on self-correction also finds that asking a model to reflect can
degrade answers when it cannot locate the actual error, while verification of a
specific condition or an externally identified mistake makes correction more
reliable.

- Mrinank Sharma and colleagues,
  [Towards understanding sycophancy in language models](https://arxiv.org/abs/2310.13548)
- Gladys Tyen and colleagues,
  [LLMs cannot find reasoning errors, but can correct them given the error location](https://aclanthology.org/2024.findings-acl.826/)
- Zhenyu Wu and colleagues,
  [Large language models can self-correct with key condition verification](https://aclanthology.org/2024.emnlp-main.714/)

Design consequence: criticism should trigger inspection of a concrete claim,
receipt, condition, or state transition. Do not treat agreement, repeated
apology, self-insult, or narration of internal reflection as evidence that an
error was found or fixed.

### Uncertainty is part of the claim, not a stylistic effect

Conversation participants present themselves as more or less knowledgeable, and
those knowledge claims are asserted, contested, and defended across sequences.
Recent LLM calibration work likewise finds a persistent gap between internal
uncertainty and the decisiveness of generated language; prompting that explicitly
targets faithful uncertainty can improve that alignment.

- John Heritage,
  [The Epistemics of Epistemics](https://doi.org/10.1017/9781108936583.016)
- Gabrielle Kaili-May Liu and colleagues,
  [MetaFaith: Faithful Natural Language Uncertainty Expression in LLMs](https://aclanthology.org/2025.emnlp-main.1505/)

Design consequence: do not sprinkle hesitation or hedges to imitate people.
When uncertainty matters, let it cause a useful action such as checking,
requesting load-bearing information, or qualifying the exact unsupported claim.

### Practitioner editing advice is useful when bounded by evidence

Vietnamese practitioner guidance repeatedly recommends a specific audience,
authentic voice, varied rhythm, real examples, fewer clichés, and revision by
reading the text aloud. Academic-writing guidance emphasizes supplying actual
data and findings, preserving technical content and citations, adapting register
to the reader, and separating reporting from interpretation.

- Khoa Bùi,
  [Humanize AI text: làm văn AI tự nhiên như người](https://khoabui.vn/humanize-ai-text/)
- ProofreaderPro,
  [21 lời nhắc AI thực sự giúp bạn viết bài báo nghiên cứu tốt hơn](https://proofreaderpro.ai/vi/blog/ai-prompts-for-academic-writing)

Design consequence: use these as editing heuristics, not a generation recipe.
Sentence variation should follow meaning; hedging should follow evidence and
genre; first person should follow a real authorial position; specific examples
must come from supplied or verified material. Never invent experience, detail,
or uncertainty merely to create a human-looking surface.

### Prompt collections expose useful edits and unsafe shortcuts

Several public prompt collections converge on audience fit, plain wording,
sentence-level variation, concrete examples, preservation of meaning, and a final
read in the author's own voice. They also contain instructions that should not be
generalized: fixed word bans, universal style ratios, mandatory rhetorical
questions, fabricated personal detail, arbitrary humor, repeated clarification
until a confidence threshold, or optimization for detector scores.

- Niksmac,
  [10 Prompts Will Humanize Your AI Content](https://gist.github.com/niksmac/2598c85f554a2032a917eba492efc7ea)
- Sabrina Ramonov,
  [humanize_ai_writing.md](https://github.com/SabrinaRamonov/prompts/blob/main/humanize_ai_writing.md)
- Aaron Miller,
  [humanize-writing](https://github.com/aaaronmiller/humanize-writing)
- GitHub topic surveys for
  [humanize-ai](https://github.com/topics/humanize-ai) and
  [ai-content-humanizer](https://github.com/topics/ai-content-humanizer)
- TextPulse,
  [Best AI Humanizer for Academic Writing](https://textpulse.ai/blog/best-ai-humanizer)
- ProofreaderPro,
  [How to Humanize AI Text for Academic Writing](https://proofreaderpro.ai/blog/how-to-humanize-ai-text)

Design consequence: diagnose patterns in context, edit the discourse rather than
performing synonym substitution, protect fixed spans, and let genre determine how
much voice is appropriate. Quantitative checks are prompts to inspect, not targets
that define human writing. Detector evasion is outside this skill's purpose.

### Dataset provenance limits what style can be learned

The VTSNLP curated corpus has broad topical coverage and was assembled from C4,
OSCAR, Vietnamese Wikipedia, a news corpus, and additional crawled material. Its
pipeline standardizes Unicode, removes exact duplicates, then applies heuristic
and classifier-based filters. The public preview is dominated by edited factual
prose, and the quality classifier uses Wikipedia as high-quality examples. That
makes it useful for language and domain coverage, not a ground truth for casual
interaction.

The VTSNLP instruction corpus contains 4.53 million rows across instruction
categories. Its dataset card documents fields and size but not a detailed source
or quality methodology. The project announcement describes a mixture of
translation and synthetic generation with Gemini-based generation and quality
control. Public samples include repeated translated instruction scaffolds,
formulaic conclusions, artifacts, and some English rows. It therefore provides
task diversity but cannot be treated as an unfiltered sample of native Vietnamese
conversation.

- VTSNLP,
  [Vietnamese Curated Dataset](https://huggingface.co/datasets/VTSNLP/vietnamese_curated_dataset)
- VTSNLP,
  [Instruct General Dataset](https://huggingface.co/datasets/VTSNLP/instruct_general_dataset)
- NVIDIA,
  [Processing High-Quality Vietnamese Language Data with NeMo Curator](https://developer.nvidia.com/blog/processing-high-quality-vietnamese-language-data-with-nvidia-nemo-curator)
- Tuan Nguyen,
  [Viettel–NVIDIA dataset announcement](https://www.linkedin.com/posts/tuannq95_processing-high-quality-vietnamese-language-activity-7266490986288037888-NG7p)

Vietnamese NLP repositories such as Underthesea, Vitk, stopword lists, and an
Elasticsearch analyzer provide segmentation, tagging, normalization, search, or
lexical filtering. Those operations can support corpus inspection but do not
model address, stance, irony, relationship, or regional accommodation. The small
Central Vietnam dataset contains dialect-to-standard word and sentence pairs but
provides no detailed collection, speaker, province, audience, or licensing notes
on its repository page; it is recognition evidence, not a dialect-generation
recipe.

- [Underthesea](https://github.com/undertheseanlp/underthesea)
- [Vietnamese stopwords](https://github.com/stopwords/vietnamese-stopwords)
- [Elasticsearch Vietnamese analysis plugin](https://github.com/duydo/elasticsearch-analysis-vietnamese)
- [Vitk](https://github.com/phuonglh/vn.vitk)
- [CentralVietnamDataset](https://github.com/trituenhantaoio/CentralVietnamDataset)

Design consequence: record source, genre, production method, and missing metadata
before using a sample. Corpus frequency never overrides a reliable target sample
or the current relationship. Word pairs help recognition; only comparable
interaction can support interactional behavior or feature density. See
`vietnamese-data-notes.md` for the maintenance audit.

## Limits

These studies examine particular communities, genres, age groups, or locations.
None licenses a universal table of regional personalities, particles, or response
rules. Update the skill by changing inference criteria when new evidence exposes a
systematic failure. The practitioner sources above are commercial or experience-
based rather than universal linguistic evidence. Do not accumulate a new rule for
every memorable example or adopt a checklist item outside the genre and evidence
that justify it.
