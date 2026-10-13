<div class="post__intro" markdown="1">

**Spec over Prompt: Agentic Engineering That Survives Production**

Vibe coding still feels magical.

You describe a feature, the model fills the editor, and for a moment it looks like software engineering got cheaper.

Then the PR lands in a real repo. The diff is unreviewable. Naming drifts. Existing patterns get reinvented. Acceptance criteria lived in a chat you already closed.

Production does not fail because the model is “bad.” It fails because **prompt is not a system of record**.

This post is the 2026 update to my agentic workflow: keep the discipline from earlier posts, and put a durable agreement layer in front of the agent — **spec over prompt**.
</div>

I already wrote the two halves of this story:

👉 Related: [From Vibe Coding to Agentic Engineering](/blog/from-vibe-coding-agentic-engineering)  
👉 Related: [AI in Production: Agentic Engineering Across the SDLC](/blog/agentic-engineering-across-the-software-development-lifecycle)

What was missing was a concrete spine for *agreement* — something agents can read, humans can review, and the next session can find without replaying chat history.

That spine is [OpenSpec](https://github.com/Fission-AI/OpenSpec), run through Cursor. The teaching cut below comes from a live workshop on 17 Sep 2026 (Digitale Leute School, Module 3 — MVP Development with AI II): watch-only demo, Reveal deck, demo product **Startlist**, prepared change `add-race-startlist`.

## Terms (tight)

**Vibe coding** — prompt → paste → tweak. Great for exploration. Fragile as a delivery system.

**Agentic engineering** — multi-step agents that use tools and the filesystem, with the human as architect: intent, constraints, acceptance.

**Spec-driven** — durable proposal, design, tasks, and spec deltas *before* code. Chat is a scratchpad. Files in the repo are the agreement.

If you only remember one line: the agent executes; the human owns intent, constraints, and acceptance.

## The workflow that still holds

The pipeline from the first post still stands. I compress it here so we can extend it, not replace it.

1. **Structured story** — context, requirements, edge cases, acceptance criteria *before* generation. Full and lightweight templates live in the [vibe → agentic post](/blog/from-vibe-coding-agentic-engineering); I will not republish them.
2. **v0 as design intent** — fast UI exploration and optional starter PR. Not a paste-into-`main` artifact.
3. **Cursor in the real repo** — Plan mode against existing types, conventions, and architecture. Screenshots plus constraints beat “rewrite this component from scratch.”
4. **Architectural gatekeeping** — simplify abstractions, kill duplicates, own state placement, reject TODO-shaped error handling.
5. **Verify, then merge** — tests, CI, justified dependencies. Humans decide merge risk.

That workflow scales because design and integration are separated, and review is mandatory. What it still lacked was a **shared memory** across sessions and agents.

## Map it to the SDLC

The second post maps the same idea onto lifecycle phases. The principle does not change:

> The agent executes.  
> The human defines intent, constraints, and acceptance.

| SDLC phase | Agent role | Human role |
| --- | --- | --- |
| Discovery | Expand and structure requirements | Set intent; kill ambiguity |
| Design | Rapid prototypes / design intent | Product and UX judgment |
| Implementation | Scoped code against the repo | Architecture boundaries |
| Verification | Surface regressions; propose fixes | Quality and risk gate |
| Operations | Faster triage scaffolding | Severity, rollback, learnings |

Without that map, AI usage becomes random prompts. With it, you get phase-specific outputs and explicit ownership. OpenSpec is how you make the early phases *enforceable* at agent speed.

## The missing spine: OpenSpec

Chat is a terrible system of record.

It forgets. It forks. It cannot be reviewed like a PR. Two agents cannot reliably share the same intent unless that intent lives in files.

OpenSpec gives you two surfaces in the repo:

- `openspec/specs/` — **current truth** about the system
- `openspec/changes/<id>/` — **in-flight agreement** for one change (proposal, spec deltas, design, tasks)

A change folder is the unit of review. Code is the consequence of an accepted change, not a substitute for one.

That is the thesis I keep repeating in conference cuts: **spec over prompt**. Prompting is how you talk to the agent. Specs are how the team — and the next agent session — know what “done” means.

### The loop I teach (and use)

In Cursor (hyphenated slash commands):

1. `/opsx-explore` — think with the codebase; no commitment yet  
2. `/opsx-propose` — create `openspec/changes/<id>/` artifacts  
3. **Human reviews** the artifacts (this is the gate)  
4. `/opsx-update` — fix bad requirements *in the change*, not in a new chat myth  
5. `/opsx-apply` — implement from tasks against the real repo  
6. `/opsx-archive` — fold deltas into `openspec/specs/` so the next change has memory  

Two-surface gotcha that burns people in demos:

- **Terminal:** `openspec …` (CLI)
- **Cursor chat:** `/opsx-*` (slash commands, **hyphen**)

Same spine, different entry points. If the room mixes them up, the loop looks “broken” when it is only mis-invoked.

### Live 1 sketch — propose, catch, apply one slice

Workshop product: **Startlist** — brownfield replacement for a club’s race Excel. Spec the full system; ship **one vertical slice**.

That brownfield framing matters. Greenfield demos hide the hard part. In a real club workflow, Excel already “works,” people already have habits, and the agent will happily invent a second architecture next to the first unless the change folder constrains it.

Framing for the demo (not a production case study):

- One race  
- A start list  
- Mark a rider registered  
- Persist in SQLite  
- Auth stubbed  
- Hosting, reimbursement, and the rest of the club ops **later**

Prepared change id: `add-race-startlist`.

Pedagogy that matters more than the tool names:

- Audience is **watch-only** — learn the loop, do not chase local setup mid-session  
- Read acceptance **out loud** from Given / When / Then in the change specs  
- Stop before the rabbit holes: tests as a separate gate, deploy, broad refactor  

Typical Live 1 arc:

1. `/opsx-propose` for `add-race-startlist`  
2. Catch **one** bad or over-scoped requirement in review (update the change folder)  
3. `/opsx-apply` for slice 1 only  
4. Check scenarios against the written Given / When / Then — not against “what we meant in chat”

Saying the scenarios out loud sounds theatrical until you try it. Ambiguity dies faster when a human has to speak the acceptance criteria than when everyone nods at a markdown file.

That is spec over prompt in one sitting.

### Live 2 sketch — parallel agents, one change folder

After the proposal is reviewed, multiple agents can read the **same** `openspec/changes/add-race-startlist/` folder and work isolated streams (same idea as git worktrees: parallel execution, shared agreement).

The shared change folder is the point. Parallelism without a reviewed agreement is just concurrent vibe coding. Parallelism *after* review is how you spend agent speed without multiplying architecture drift.

Hard rule:

- Agents propose and apply  
- **Humans merge** — no auto-merge theater  

When the slice is done, `/opsx-archive` moves the durable bits into `openspec/specs/`. Skip archive and the next change starts amnesiac again. You are back to vibe, with better fonts.

## Where teams break it

Most failures are still process failures — the same ones from the earlier posts, plus one new one that only shows up once you adopt a change folder:

- **Vague intent** — prompting from a feeling instead of a structured story  
- **Paste-as-ship** — treating generated UI or a starter PR as production  
- **Invented architecture** — agents creating patterns the repo already owns  
- **Merge without gates** — skipping verification, or letting agents “finish” by merging  
- **Skip archive** — change folders die; `specs/` never learn  

The pattern is familiar: speed without agreement. Agents make that failure mode louder, not different.

When that happens, teams blame the model. Usually the agreement layer never existed — or it existed in a chat thread nobody can review.

## Minimum viable adoption

You do not need a process cathedral. Start with four non-negotiables:

1. **Structured requirements** before generation  
2. **Architecture-aware integration** in the real repository  
3. **Hard verification** before merge  
4. **A reviewed change folder** before `/opsx-apply`

That fourth item is the update. It is also the cheapest way to make parallel agents safe: they share files humans already accepted.

Codify how *your* team works in `AGENTS.md` / Cursor Skills / reusable review gates — the evolution of the `.cursorrules` homework I called out in the first post. Specs hold *what*; those files hold *how we work here*.

## Takeaways

- Vibe coding fails in production because chat is not a system of record.  
- Agentic engineering still means: agent executes; human owns intent, constraints, acceptance.  
- OpenSpec makes that enforceable: `openspec/specs/` for truth, `openspec/changes/<id>/` for in-flight agreement.  
- Run the Cursor loop: explore → propose → human review → update → apply → archive.  
- Brownfield pattern: spec the system, ship one vertical slice; parallel agents may share a change folder; humans merge.

## Closing

AI does not replace the SDLC.

OpenSpec makes the SDLC enforceable at agent speed — if you treat the change folder as the agreement and keep merge risk human.

If you want the longer tooling walkthrough, start with [From Vibe Coding to Agentic Engineering](/blog/from-vibe-coding-agentic-engineering). If you want ownership by phase, read [Agentic Engineering Across the SDLC](/blog/agentic-engineering-across-the-software-development-lifecycle). This post is the spine that sits between them when you are ready to run the loop in a real repo.

I teach and speak on this material; if you are wiring agents into an existing delivery system and want a production-first cut, that is the conversation I care about.
