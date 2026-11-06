<div class="post__intro" markdown="1">

**Manual prompting does not scale.** It feels like magic until the chat dies, the review queue explodes, and nobody can say what “done” meant.

That was the spine of my talk at [code.talks](https://codetalks.com/) in Hamburg.
</div>

code.talks is still one of the densest developer conferences in Germany: two days at Kinopolis, parallel stages, and a crowd that packs the cinemas. I had Stage 3 on Thursday morning for twenty minutes. Roughly 150 people showed up. Energy was high.

<aside class="event-card">
  <p class="event-card__eyebrow">From my talk at</p>
  <a class="event-card__brand" href="https://codetalks.com/speaker/hans-reinl" target="_blank" rel="noopener noreferrer">
    <span class="event-card__logo"><img src="/assets/code-talks-logo.svg" alt="" width="48" height="48" /></span>
    <span>code.talks</span>
  </a>
  <p class="event-card__meta">10:45 – 11:05 · Stage 3 · Kinopolis Hamburg · 5 Nov 2026</p>
  <p class="event-card__title">From Vibe Coding to Agentic Engineering: Designing the Modern SDLC</p>
  <div class="event-card__desc">
    <p>Most developers started their AI journey with vibe coding: typing prompts, generating snippets, and copy-pasting them into an IDE. It feels like magic, but manual prompting does not scale. It creates context silos, review bottlenecks, and fragile work in complex codebases.</p>
    <p>Software engineering is shifting toward agentic engineering: treating LLMs as interconnected components inside a structured SDLC. I walked through connecting issue tracking (Linear) to the IDE (Cursor) via MCP, using structured specifications as the source of truth, and what comes next as agent networks get longer-running.</p>
  </div>
</aside>

I kept the talk close to how I actually ship: one developer’s path from ticket to pull request. I wrote earlier versions of that thinking in [From Vibe Coding to Agentic Engineering](/blog/from-vibe-coding-agentic-engineering) and [Agentic Engineering Across the SDLC](/blog/agentic-engineering-across-the-software-development-lifecycle). Those posts are from spring. A lot has changed since then. Fresh write-ups of the current setup are coming. This one is about the talk and the crowd.

## What Landed with the Crowd

The frame I used on stage was simple. An agent is a model plus a harness. Vibe coding is the model with almost no harness. Agentic engineering is designing that harness on purpose: prompts, tools, rules, sandboxes, guardrails, orchestration, observability.

Once you accept that, the SDLC stops being “chat until it looks right.” It becomes a path with stations. Ticket, context, spec and plan, build, review, hand-off. Each station needs one tool, one artifact, and one rule. Writing code got cheaper. Planning, context, and verification did not. That is the bottleneck shift most teams are already feeling.

I closed with three Monday moves at a high level: put durable context in the repo, make the next ticket agent-ready, and treat verification as a real gate. The detailed how of that loop belongs in the follow-ups I still want to publish.

The best question from the crowd was direct: when do you take the keyboard back? My answer was not a clever threshold or a model name. It was the loop itself. Let the agent work step by step. Then stop and make sure the whole thing actually works: against the ticket, against the spec, against the tests, against what you would merge with your name on it.

The keyboard comes back at the gate, not halfway through a vibing session because the output “felt off.” If you cannot say what done looks like before the agent starts, you will not know when to interrupt either.

## Elsewhere at the Conference

I also sat in [Nico Martin](https://codetalks.com/speaker/nico-martin)’s session, *Boring but Effective: WebAI That Ships*. The through-line was making models available offline: small open models in the browser, on the user’s hardware, without a cloud round-trip. Afterwards Nico and I sat down to record a [Working Draft](https://workingdraft.de/) episode on that topic. It goes online tomorrow morning; I will link it here once it is live.

And I caught [Bernd Strehl](https://codetalks.com/speaker/bernd-strehl) (Vercel) and [Moritz Meyer](https://codetalks.com/speaker/moritz-meyer) (1KOMMA5°) on *From Your Laptop to Slack*: scaling eve agents across teams. Same theme I care about: the hard part is not the demo on one laptop. It is credentials, conversation state, MCP connections, feedback loops, and cost once more than one team depends on the agent.

Between sessions I reconnected with people from Vercel and mittwald, and a lot of other folks who are building this stuff for real. That part of the conference is hard to overstate. I will say more about those conversations on LinkedIn.

## What I’m Taking Away

Two things stuck after my talk.

First, the crowd already knows vibe coding. People did not need a definition. They needed a clearer line for when the human owns the merge decision again. The keyboard question is the adoption question in disguise.

Second, the interesting talks around me were not “look what the model can do.” They were about where the work runs (offline in the browser vs cloud), and how you scale an agent from a personal setup to something a team can trust in Slack. Same pattern as my own talk: the harness and the org design matter more than the prompt.

Thanks to everyone who showed up at 10:45, to the code.talks crew for the stage, and to the people who made the two days in Hamburg worth the trip.

Next stop for this talk is a longer cut: the [Digitale Leute Summit](https://www.digitale-leute.de/summit/26/schedule/from-vibe-coding-to-agentic-engineering-designing-the-modern-sdlc/) on 17 November in Cologne, sixty minutes instead of twenty. Come find me after the deep dive.

What’s your rule for taking the keyboard back?

## The Slides

The 20-minute cut from Stage 3:

<div class="slide-deck">
  <figure class="slide-deck__stage image--has-frame">
    <iframe
      id="talk-slides-20"
      class="slide-deck__frame"
      src="https://drublic.github.io/talk-agentic-sdlc/20.html"
      title="Slides: From Vibe Coding to Agentic Engineering (20 min cut)"
      loading="lazy"
      allowfullscreen
    ></iframe>
  </figure>
  <div class="slide-deck__bar" role="toolbar" aria-label="Slide navigation">
    <button
      type="button"
      class="slide-deck__nav"
      aria-label="Previous slide"
      onclick="(function(){var f=document.getElementById('talk-slides-20');if(!f||!f.contentWindow)return;f.contentWindow.postMessage(JSON.stringify({method:'prev'}), '*');f.focus();})()"
    >
      <span aria-hidden="true">←</span> Previous
    </button>
    <a
      class="slide-deck__open"
      href="https://drublic.github.io/talk-agentic-sdlc/20.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open full screen
    </a>
    <button
      type="button"
      class="slide-deck__nav"
      aria-label="Next slide"
      onclick="(function(){var f=document.getElementById('talk-slides-20');if(!f||!f.contentWindow)return;f.contentWindow.postMessage(JSON.stringify({method:'next'}), '*');f.focus();})()"
    >
      Next <span aria-hidden="true">→</span>
    </button>
  </div>
</div>

<ul class="gallery gallery--thirds gallery--equal">
<li><img src="/assets/code-talks-nico-martin-webai.jpg" alt="Nico Martin on stage at code.talks 2026, Hugging Face WebAI talk" /></li>
<li><img src="/assets/code-talks-vercel-1komma5.jpg" alt="Bernd Strehl and Moritz Meyer presenting From Your Laptop to Slack at code.talks 2026" /></li>
<li><img src="/assets/code-talks-dinner.jpg" alt="Conference dinner at code.talks in Hamburg" /></li>
</ul>
