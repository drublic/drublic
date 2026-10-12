<div class="post__intro" markdown="1">

**Most AI rollouts have made senior engineers slower.**

Writing code got cheaper. The bottleneck moved to planning, review, and verification. That was the opening thought I brought into a roundtable at the [t3 CTO Summit](https://www.t3-summit.com/) in Berlin, and it shaped the hour that followed.
</div>

[Greg Fawson](https://www.linkedin.com/in/gregfawson/) invited me back to the summit to host a peer exchange on something most engineering leaders are already feeling: how you adopt AI without the hype, how you govern it, and what it does to junior and senior roles. [Kristian Melson](https://www.linkedin.com/in/kristianmelson/) shaped the content and kept the day running smoothly. My job was not to give a talk. It was to keep air moving so people could steal each other’s best patterns.

I prepared a set of notes beforehand: questions I wanted to ask, and a few practices I had seen work when the room went quiet. More than twenty people joined around the coffee tables at CityCube.

<aside class="event-card">
  <p class="event-card__eyebrow">From my roundtable at</p>
  <a class="event-card__brand" href="https://www.t3-summit.com/" target="_blank" rel="noopener noreferrer">
    <span class="event-card__logo"><img src="/assets/t3-cto-summit-logo.png" alt="" width="48" height="46" /></span>
    <span>t3 CTO Summit</span>
  </a>
  <p class="event-card__meta">11:25 AM – 12:25 PM · Roundtable 3 · CityCube Berlin · 9 Oct 2026</p>
  <p class="event-card__title">Beyond the Hype: Driving Pragmatic AI Adoption and Team Governance</p>
  <div class="event-card__desc">
    <p>Most engineering organizations have rolled out AI assistance, but at the executive level the initial magic has worn off. Leaders sit between two extremes: developers quietly using unvetted tools in silos, and seniors burning out on pull-request review from a surge of AI-generated code. The bottleneck has shifted from how fast we write code to how we plan, govern, and verify it across teams.</p>
    <p>A pragmatic session for engineering leaders on structural AI adoption: what is genuinely delivering in the day job, what guidelines actually protect the codebase, and how to manage engineer reluctance. We covered adoption, governance, and talent calibration over the next 12–18 months.</p>
  </div>
</aside>

What shows up again and again once the exec-layer magic wears off: developers quietly using unvetted tools in silos; seniors drowning in AI-generated PRs; and “adoption” that is really a license count, with no change to how work is reviewed, estimated, or hired for. Shipping licenses is not adoption. Adoption is when those things actually change.

Elsewhere at the summit the same questions kept surfacing. I also sat in Alex Ischenko’s session on the AI-native reorg. Some organisations in the room are already far along, while measuring impact and moving toward more business-near, forward-deployed setups still feels like open work for many.

What follows are the notes and examples I brought into the roundtable, woven with what we discussed.

## Adoption: Making AI Work Reviewable

We started with writing versus review. Code got cheaper to produce; planning, review, and verification did not. I asked the table for one pattern that made AI-assisted work *reviewable and shippable* (not just faster drafts), and which adoption metrics they trust, or refuse to trust, when leadership asks for numbers.

A few practices I had prepared, and that resonated in the room:

**Spec before code.** A short specification first (intent, constraints, done-when), then implement. It cuts the “fast draft of the wrong thing” problem and gives reviewers something to check against, not only a diff. This is the same spine I have been writing about as [spec over prompt](/blog/spec-over-prompt-agentic-engineering).

**WIP limits for AI-assisted work.** The same idea as Scrum or Kanban caps, applied to AI-touched changes in flight, per person or per reviewer. Throughput stays honest. Seniors stop becoming an unbounded review queue.

**A community of practice.** A short, recurring share of what worked and what burned people. It is also how you keep pace with weekly model and tool churn without every squad reinventing alone.

One more that is easy to defend upward: treat review as a contract (intent, blast radius, how verified). No narrative, bounce the change. Count trusted merges against that contract, not seats or lines generated.

## Governance: Friday Owner, Tuesday Enforcement

Adoption without ownership is fragile. I framed it with two moments. If something AI-touched goes wrong on a Friday afternoon (a bad leak, a bad merge, customer data in the wrong model) and nobody can name who decides what happens next, you do not have governance. You have a tool budget and a policy PDF. Mid-week the same idea applies: a rule only matters if someone can enforce it on a normal Tuesday, in a PR or a “can I paste this into the model?” moment, without waiting for a security committee.

We talked about who decides which tools, models, and data are allowed; how secrets and customer data are handled; and who owns it when it goes wrong. What broke when that was unclear came up quickly.

The patterns I had ready map to that:

**Named owner plus allowlist.** Engineering and security jointly own what is allowed: tools, models, data classes. Default deny for secrets, customer data, and production code into public models. Exceptions expire; they are not Slack folklore.

**Enforce in the flow of work.** A tech lead or reviewer can block a bad tool use or unsafe paste in the PR or pairing moment. Security takes the hard cases. A useful health check: who actually said no this month?

**Ask a postmortem question even when a human clicked merge.** When an AI-touched change causes an incident: where did the AI output enter the system, and which control failed (allowlist, review, or tests)?

## Roles: Juniors, Seniors, and a Sustainable Review Load

Juniors can produce more code earlier, so the bar shifts toward shipping something correct, explained, and verified. Seniors do more shaping and reviewing; that load has to stay sustainable next to their own delivery. On top of that, engineers have to keep up with how fast AI tooling moves. If only part of the team does, you need a deliberate fix through hiring and education.

We talked about how expectations have changed day to day, what keeps review from becoming a permanent senior bottleneck, and how people are closing the skill gap: hiring, training, or both.

What I had prepared:

**Make review cheaper, not heroic.** Small PRs, clear intent in the description, optional second pass with another model or agent as a cross-check before a human reviews. Humans still own merge. Agents catch the obvious so seniors spend time on design and risk.

**Protect senior capacity like any other WIP.** Put review and planning time on the timetable, not leftovers. Cap how much AI-assisted work sits waiting on the same few people.

**Close the gap on purpose.** Hire for verification, judgment, and learning speed, not only raw coding speed. Teach “how we use AI here” through shared standards, pairing, and a community of practice. For the next twelve to eighteen months, the mid-level bet looks like owning more of the end-to-end loop (spec, implement, review standard, mentor), and less like only closing tickets alone.

## What I’m Taking Away

Two themes ran through the whole discussion, not only one section: **ownership** and **knowledge sharing**.

Ownership kept coming back: who decides which tools are allowed, who can say no on a Tuesday, who shows up when something AI-touched goes wrong on a Friday. Without a named owner, adoption stays fragile no matter how good the tooling looks.

Knowledge sharing was the other constant. Communities of practice, pairing, teaching “how we use AI here,” and closing the skill gap on purpose. People kept returning to the idea that AI adoption fails quietly when learnings stay in one squad or one senior’s head.

Around that sat the rest: adoption practices that make AI work shippable (not just faster drafts), and the shift in junior and senior work, and hiring, as review becomes the bottleneck.

We ran out of time before the close I had planned: everyone naming one thing they would try or stop in the next thirty days. Take that question home with you. It works just as well in a team retro as it would have around those tables.

Thanks to everyone who joined the exchange, to [Kristian Melson](https://www.linkedin.com/in/kristianmelson/) for shaping the content and running the event, and to Greg Fawson for the invitation.

If you were in the room, or you are fighting the same review bottleneck: what’s one pattern that made AI-assisted work reviewable and shippable in your org?

<ul class="gallery gallery--thirds">
<li><img src="/assets/t3-cto-summit-ai-roundtable.jpg" alt="Peer exchange roundtable at the t3 CTO Summit, CityCube Berlin" /></li>
<li><img src="/assets/t3-cto-summit-stage.jpg" alt="Stage session at CityCube, 9 October" /></li>
<li><img src="/assets/t3-cto-summit-interactive-session.jpg" alt="Interactive session at the summit" /></li>
</ul>
