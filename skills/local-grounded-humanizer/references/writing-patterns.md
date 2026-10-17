# Writing patterns

Read this reference when rewriting prose or reviewing why prose sounds generated. It is adapted from [blader/humanizer](https://github.com/blader/humanizer) and Wikipedia's [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).

Use patterns as evidence, not a ban list. One deliberate dash, triad, heading, or formal word is not proof of artificial writing. Edit when the construction is automatic, repetitive, or poorly matched to the reader.

Do not optimize prose for detector scores, perplexity, burstiness, or a universal
quota for passive voice, hedges, sentence lengths, transitions, or personal
pronouns. Those measurements can reveal a passage worth rereading; they cannot
decide whether the passage is right for its meaning, author, field, or audience.

## Strong patterns

Edit these on one clear occurrence unless the context makes them useful.

### Staging instead of stating

Remove openers that announce a point instead of making it: `let's dive in`, `here's the thing`, `real talk`, `to be clear`, `honestly?`, or their equivalents in the target language.

Before:

> Here's the thing: this isn't just a caching issue. It's a reliability problem.

After:

> Stale cache entries make the service return inconsistent results.

### Empty contrast

Watch for `not X but Y`, `not only X`, or a negative sentence followed by a positive restatement. Keep the contrast only if both halves carry information or correct a belief the reader is likely to hold.

### Dramatic closer

Remove a short final line that only repeats or labels the paragraph before it: `That is the real win`, `Let that sink in`, `This changes everything`.

### Inflated significance

Replace claims that ordinary events are `pivotal`, `transformative`, `a testament`, `a broader shift`, or `the future` with the concrete fact or consequence.

### Borrowed authority

Do not use `experts say`, prestige outlet lists, follower counts, or unnamed critics as substitutes for a source and its actual claim. Never invent the source.

### Chat residue

Remove greetings, praise, canned agreement, process narration, and offers that are not part of the artifact: `Great question`, `Certainly`, `I hope this helps`, `Would you like me to continue?`.

## Cumulative patterns

These matter when several appear together or one is repeated.

- ideas forced into groups of three;
- every sentence using the same opening or length;
- dashes used as the default connector;
- stacked qualifiers that obscure the actual confidence level;
- passive voice that hides the actor;
- abstract AI vocabulary such as `delve`, `landscape`, `tapestry`, `robust`, `vibrant`, or `showcase` used in clusters;
- shallow `-ing` riders that add unsupported meaning;
- decorative bold labels, emojis, title case, or horizontal rules on every section;
- headings followed by a sentence that repeats the heading;
- documentation that narrates the previous draft instead of the current behavior;
- replies that re-explain shared context before reaching the decision.

## Vary rhythm through meaning, not random edits

Natural rhythm often changes because the writer is doing different things:
setting context, making a claim, qualifying it, giving an example, or landing a
point. Vary sentence length and structure where those functions change. Do not
alternate long and short sentences mechanically or fragment prose merely to
produce visible variation.

Read the draft at speaking pace. Repair places that force an unnatural breath,
hide the main verb, repeat the same launch, or connect ideas with a formal linker
that the relationship and genre do not need.

## Calibrate uncertainty instead of decorating with hedges

Hedging can express real evidential caution, disciplinary convention, or a
genuine alternative interpretation. It should not be added wholesale to make a
text appear thoughtful or human.

- Keep direct claims direct when the source supports them.
- Qualify the smallest claim whose evidence is incomplete.
- In academic writing, follow the target field's conventions and distinguish
  results from interpretation.
- When a missing fact can be checked, check it instead of surrounding it with
  vague uncertainty.
- Do not add filler, hesitation, or competing viewpoints without a reason in the
  source, evidence, or task.

## Use concrete detail without inventing a life

Replace vague examples with real details already present in the source or
provided by the user. If a specific detail is necessary and absent, request it or
leave the claim general. Never invent a number, anecdote, memory, personal
experience, quotation, or citation to make prose feel authentic.

First person is appropriate when the author has supplied a viewpoint or
experience, the genre calls for an authorial position, or the assistant is giving
its own grounded assessment of the visible work. It is not a license to fabricate
biography or emotion.

When prose sounds abstract, look for noun-heavy descriptions of processes and
replace them where possible with an actor, a verb, an object, and a concrete
consequence. Preserve technical terms that the intended reader actually needs.

## Voice matching

When a reliable sample exists, preserve its deliberate quirks: sentence length, contractions, punctuation rate, preferred terms, uncertainty, humor, and asides. Do not erase a writer's specific detail or mixed feelings merely because they are irregular.

Do not add first-person reactions, memories, preferences, or experiences just because the target voice is personal. A source may justify style; it does not supply new facts.

## Rewrite method

1. List the claims and details the source actually contains.
2. Mark fixed spans before editing: names, numbers, dates, quotations, citations,
   formulas, code, technical terms, links, and required keywords.
3. Identify the few patterns doing the most damage.
4. Rewrite around the paragraph's or section's work instead of swapping synonyms
   or randomizing each sentence independently.
5. Compare the draft with the source for dropped or added claims and every fixed
   span. Preserve the distinction between findings, interpretation, examples,
   quotations, and hypothetical scenarios.
6. Check that uncertainty and first-person language are supported rather than
   added for texture.
7. Read for rhythm. Keep variation that serves meaning; remove variation
   manufactured to display personality.

The final version should preserve semantic content and epistemic status. Shortening is allowed when it removes repetition, filler, or unsupported significance.
