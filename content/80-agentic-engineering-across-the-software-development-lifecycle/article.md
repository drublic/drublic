<div class="post__intro" markdown="1">

**AI in Production: How I Run Agentic Engineering Across the SDLC**

Most people describe AI coding workflows as a tooling stack.

I think that misses the point.

In production, AI only becomes reliable when you map it to the **software development lifecycle (SDLC)** and assign clear responsibilities to both the human and the agent.

That shift is the difference between demos and dependable delivery.
</div>

In my previous post, I explained how I move from vibe coding to agentic engineering using v0 and Cursor.

👉 Related: [From Vibe Coding to Agentic Engineering](/blog/from-vibe-coding-agentic-engineering)

This post takes the next step:

- I map that workflow to the SDLC
- I define what the AI should do in each phase
- I define what the human must own in each phase
- I show where teams usually fail

If you use AI in production, this framing is what keeps quality stable as complexity grows.

If you have not read the first post yet, start there, then come back to this lifecycle framing.

## Why SDLC Mapping Matters

Without SDLC mapping, AI usage becomes random:

- Prompts are ad hoc
- Decisions are undocumented
- Architecture drifts
- Regressions creep in

With SDLC mapping, AI becomes a repeatable system:

- Inputs are structured
- Outputs are phase-specific
- Ownership is explicit
- Quality gates are enforced

Agentic engineering is not "let the model code."

It is "orchestrate the model inside an engineering lifecycle."

## The Agentic SDLC Model

I run AI with one guiding principle:

> The agent executes.
> The human defines intent, constraints, and acceptance.

That principle stays constant across every SDLC phase.

### 1. Discovery and Requirements

This phase decides quality downstream.

If the requirement input is vague, every later artifact gets weaker.

My approach:

- Start with a structured feature definition
- Include user persona and context
- Define functional and non-functional constraints
- Force edge cases and acceptance criteria early

This is where I still use models like ChatGPT or Gemini heavily: not for code, but for thinking structure. These days I see myself using Cursor's Agents Window more and more to do tasks like this.

If you want the exact requirement template I use, it is in my previous post.

Deliverable from AI:

- A structured user story that is specific enough for design and implementation

Human accountability:

- Validate business relevance
- Remove ambiguous language
- Resolve conflicting requirements

### 2. Design and Solution Shaping

Once requirements are stable, I move to rapid UI/UX exploration.

This is where v0 is strongest:

- Fast layout iteration
- Visual hierarchy exploration
- Early interaction ideas

But I treat this output as **design intent**, not final architecture.

For a broader tool perspective, I compared several generators in detail:

👉 Related: [AI Frontend Generator Comparison: Claude Code vs v0 vs Cursor vs Replit](/blog/ai-code-generators-frontend-comparison)

Deliverable from AI:

- A visual prototype and optional starter PR

Human accountability:

- Check consistency with product language
- Reject misleading interaction patterns
- Confirm responsive behavior expectations

### 3. Implementation and Integration

This is where many teams lose control.

They paste generated code directly into production branches.

I do the opposite:

- Use Cursor in the real repository
- Start in Plan mode to align with existing architecture
- Reuse existing components and utilities
- Keep code changes scoped and explicit

The agent writes and refactors quickly.

But every instruction is constrained by the source of truth: the codebase itself.

Deliverable from AI:

- Implementation aligned with existing patterns
- Updated tests for behavior changes

Human accountability:

- Enforce architecture boundaries
- Catch hidden complexity and duplication
- Approve only maintainable abstractions

### 4. Verification and Quality Gates

This is the phase that turns "works on my machine" into production confidence.

I treat verification as a hard gate, never an optional cleanup step.

Checks I require before merge:

- Tests pass locally and in CI
- New behavior has test coverage
- Error states are explicit
- Performance impact is acceptable
- Dependencies are justified

Deliverable from AI:

- Suggested fixes for failing tests and integration issues
- Review support for obvious regressions

Human accountability:

- Make final risk decision
- Block merge when uncertainty is high
- Verify non-functional requirements were met

### 5. Release and Operations

Shipping is not the end of the SDLC.

It is the beginning of operational learning.

Post-release, I use AI for:

- Incident triage assistance
- Log pattern summarization
- Fast hypothesis generation during debugging
- Drafting remediation checklists

But incident ownership stays human.

Deliverable from AI:

- Faster analysis and response scaffolding

Human accountability:

- Decide severity and priority
- Execute rollback or mitigation
- Feed learnings into the next planning cycle

## Where Teams Usually Break the System

Most failures are process failures, not model failures.

Common anti-patterns:

- Skipping structured requirements and prompting from vague ideas
- Treating generated UI as production-ready code
- Letting agents create architecture without guardrails
- Merging without strong verification gates
- Ignoring operational feedback after release

When this happens, teams say "AI is unreliable."

In reality, lifecycle discipline is missing.

## A Practical Responsibility Matrix

| SDLC Phase | AI Agent Role | Human Role | Primary Output |
| --- | --- | --- | --- |
| Discovery | Expand and structure requirements | Set intent and resolve ambiguity | Structured user story |
| Design | Rapid prototype generation | Product and UX judgment | Visual direction |
| Implementation | Generate and refactor scoped code | Architectural governance | Maintainable implementation |
| Verification | Surface regressions and propose fixes | Quality and risk gatekeeping | Merge confidence |
| Operations | Accelerate incident analysis | Accountability and decisions | Continuous improvement inputs |

## Start Simple: Minimum Viable Version

If you want to adopt this without process overhead, start with three non-negotiables:

- Structured requirements before generation
- Architecture-aware integration in the real repo
- Hard verification gates before merge

Everything else can evolve over time.

## Final Thoughts

The big lesson from using AI in production is simple:

AI does not replace the SDLC.

It makes the SDLC more important.

Agentic engineering works when each phase has:

- Explicit purpose
- Clear ownership
- Enforced quality gates

If you map agents to lifecycle phases instead of tasks in isolation, you get compounding leverage over time.

That is the path from impressive output to reliable software delivery.
