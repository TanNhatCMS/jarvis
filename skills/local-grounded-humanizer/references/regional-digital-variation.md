# Regional and digital variation in Vietnamese

Read this reference when regional vocabulary, community style, online spelling,
code-switching, emoji, or message segmentation materially affects the requested
voice.

## Model repertoire, not identity

A speaker's available forms can reflect origin, residence, mobility, audience,
family, profession, generation, platform, and deliberate accommodation. Mixed
forms are normal. They do not require a single hidden regional classification.

Use regional evidence to answer a narrow question: which forms are natural in
this interaction? Do not use it to decide where a person is from or what kind of
person they are.

### Adaptation thresholds

| Evidence | Safe adaptation |
| --- | --- |
| Explicit request plus a usable target sample | Match the sample moderately while preserving meaning and dignity. |
| Repeated, compatible cluster in comparable turns | Match a few established features at a similar rate. |
| Mixed cluster that changes with audience | Follow the relationship-specific pattern; preserve mixing if it is coherent. |
| One regional-looking word or particle | Do not regionalize the reply. |
| Conflicting or sparse evidence | Use low-marked contemporary Vietnamese. |

An explicit regional label without a sample permits broad compatibility, not a
caricature. Prefer ordinary syntax and vocabulary. Avoid piling up marked forms to
prove that the instruction was followed.

## Treat corpus evidence by provenance

A dataset shows the language that its collection and processing pipeline retained.
It does not automatically show how the current person speaks, what relationship a
form belongs to, or whether an utterance is native, translated, synthetic, quoted,
edited, or spontaneous.

Use corpus material within these limits:

- **Natural interaction from a comparable relationship and channel:** potentially
  useful for sequence and feature rate, provided speaker and audience are known.
- **Edited web, encyclopedia, news, or book text:** useful for vocabulary, syntax,
  domains, and genre; weak evidence for casual conversation.
- **Translated or synthetic instruction data:** useful for task coverage and for
  finding failure patterns; not a default model of Vietnamese voice.
- **Dialect-to-standard word or sentence pairs:** useful for recognition and
  candidate meanings; insufficient for province, identity, politeness, stance, or
  generation density.
- **Tokenizers, stopword lists, taggers, and search analyzers:** useful for locating
  and comparing forms; they do not supply pragmatic meaning or a speaking style.

Never turn a paired dialect list into a substitution table. A local form belongs
inside an address system, syntax, sequence, audience, and community practice. If
those conditions are missing, recognize the form and reply in low-marked
Vietnamese rather than assembling a dialect from entries.

Dataset size raises coverage, not interactional authority. When corpus evidence
conflicts with the current relationship or a reliable target sample, the current
interaction wins for voice selection. Keep provenance notes outside the delivered
reply unless the user asks about the evidence.

## Recognition map, not a generation recipe

Use the following families to notice possible clustering. They are neither
complete nor exclusive, and many forms circulate outside the regions with which
they are commonly associated.

| Feature family | Contrasts an agent may encounter | How to use the evidence |
| --- | --- | --- |
| Alignment and softening particles | `nhé`, `nhá`, `nha`, `nhen`; `nghe`, `nghen`; `hen`, `heng` | Observe which function and relationship each form accompanies. Do not rotate them as synonyms. |
| Confirmation, surprise, or checking particles | `à`, `hả`, `nhỉ`, `ha` | Sequence and punctuation matter. In contact data, one Southern form can overlap several Northern functions, so no one-to-one substitution is safe. |
| Attention and proximity | `này`, `nầy`, `nè`, `ni` | Treat spelling and choice as a cluster cue only after repetition; several forms have wider circulation. |
| Request or invitation endings | `đi`, `coi`, `với`, `nào`, `thôi` | Infer whether the move requests action, invites joint attention, urges continuation, or closes an option. |
| Central and North-Central interrogative/deictic sets | families including `mô`, `tê`, `răng`, `rứa`, `chi` in some local varieties | Do not label all Central speech from one item. These forms and their density vary sharply by province, generation, and audience. |
| Everyday kin and household lexicon | alternatives such as `bố`/`ba` and `mẹ`/`má`; variation in reciprocal use of `con`, `cháu`, and other kin terms | Preserve the pair used in the relationship. Lexical recognition does not by itself determine status or region. |

The broad North, Central, and South labels hide substantial internal variation.
In particular, do not treat Central Vietnamese as one interchangeable bundle.
Prefer the user's own repeated forms over a regional default, and prefer a
province- or community-specific sample over a macro-region label.

When generating, begin with syntax and vocabulary that work across varieties.
Add at most a few marked features already licensed by the sample. A coherent
unmarked reply is better than a densely marked but internally inconsistent one.

## Preserve functional coherence

Regional and community features operate in systems. A particle, address term,
lexical choice, and degree of directness may be individually plausible but sound
artificial when combined without evidence.

- Reuse forms present in the sample before introducing new marked forms.
- Match social function rather than seeking lexical novelty.
- Keep feature density near the source. Do not put a local marker in every clause.
- Do not normalize a naturally mixed repertoire into an imagined pure dialect.
- Do not mix distant variants randomly to create generic "Vietnamese flavor."
- When writing for a broad audience, retain only marked forms needed for voice or
  meaning.

## Read digital writing by function

Online Vietnamese may contain intentional abbreviation, phonetic spelling,
missing diacritics, letter or punctuation repetition, emoji, written laughter,
code-switching, or fragmented messages. It may also contain ordinary mistakes.

For each nonstandard feature, ask:

1. Does it recur?
2. Does it appear in the same interactional function?
3. Is it conventional in this platform or community?
4. Would copying it help the social action, or merely display imitation?
5. Could it reduce clarity, accessibility, or dignity in this output?

### Abbreviation and spelling

- Preserve an established abbreviation when it is unambiguous for this audience.
- Do not generate random misspellings or transpose letters to appear spontaneous.
- Missing diacritics may be a stable input constraint or a local choice. Do not
  copy it automatically into text that needs precision.
- Repeated letters may mark intensity, affection, hesitation, irony, or play.
  Match only the supported function and approximate frequency.
- Normalize errors in edited prose when correctness is part of the task; preserve
  deliberate voice features unless they harm the requested outcome.

### Punctuation, capitalization, and message shape

- Sparse punctuation can signal speed or informality, but can also create
  ambiguity. Preserve comprehensibility.
- Repeated punctuation and capitalization carry stance. Treat them as marked,
  local choices rather than defaults.
- Several short messages are an interaction pattern, not merely line breaks. If
  the channel can return only one response, do not claim separate delivery.
- Match message density only when the target channel and task support it.

### Emoji and written laughter

These can mark affiliation, soften a correction, frame play, or manage tension;
they do not automatically cancel the literal force of a message.

Read the turn in two passes. First remove the markers mentally and identify any
remaining proposition, request, challenge, or invited conclusion. Decide the
substantive response from the sequence and evidence. Then restore the markers as
possible delivery cues. This prevents a visible habit from choosing the answer.

- Match the user's inventory and rate conservatively.
- Do not mirror a marker merely because it appears often; repetition can describe
  the user's style without prescribing the assistant's next turn.
- Do not add an emoji to every potentially delicate statement.
- Do not use laughter to avoid answering, conceal uncertainty, or dismiss a real
  correction.
- Do not let laughter turn a leading question into an admission or a requested
  viewpoint into automatic agreement.
- A sudden absence of an established marker can be episode evidence, but it is
  not proof of anger.

### Code-switching

Code-switching may name technical concepts, quote community language, save space,
signal expertise, create humor, or mark group membership.

- Keep technical terms that the audience already uses.
- Match the language boundary: which concepts switch and which remain Vietnamese.
- Do not sprinkle English into ordinary clauses merely to sound contemporary.
- Preserve a source's switch when translating it would lose the intended social
  or technical meaning.

## Avoid regional and social stereotyping

Never infer intelligence, honesty, warmth, aggression, education, class, gender,
or technical ability from dialect or digital spelling. Do not exaggerate a voice
for comedy unless the user explicitly requests fictional parody and the result
does not target a protected group or impersonate a real person.

If the user requests the style of a named person, extract only supported abstract
features such as brevity, syntax, pacing, or formality. Produce original wording
and do not claim to be that person.

## Calibration check

Remove each marked regional or digital feature in turn. Keep it only when at least
one of these is true:

- it preserves the writer's established voice;
- it performs a needed relational action;
- it improves audience fit;
- it carries meaning that neutral wording would lose.

If the feature exists mainly to prove that the model noticed the style, remove it.
If removing the feature changes the substantive position, re-check whether the
position came from evidence or from surface imitation.
