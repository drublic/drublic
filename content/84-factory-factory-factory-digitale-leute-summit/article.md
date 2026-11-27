<div class="post__intro" markdown="1">

**Factory Factory Factory. Dark or not?** Two days full of one question: where does human judgement come in, and where do we just trust?

That was one of the common themes at this year’s [Digitale Leute Summit](https://www.digitale-leute.de/summit/26/) in Cologne.
</div>

Fantastic conference. If it hadn’t rained that much, I could have gone there by bike.

<aside class="event-card">
  <p class="event-card__eyebrow">From my talk at</p>
  <a class="event-card__brand" href="https://www.digitale-leute.de/summit/26/schedule/from-vibe-coding-to-agentic-engineering-designing-the-modern-sdlc/" target="_blank" rel="noopener noreferrer">
    <span class="event-card__logo"><img src="/assets/digitale-leute-logo.png" alt="" width="48" height="48" /></span>
    <span>Digitale Leute Summit</span>
  </a>
  <p class="event-card__meta">10:20 · AI Deep Dive Day · Cologne · 17 Nov 2026 · 60 min</p>
  <p class="event-card__title">From Vibe Coding to Agentic Engineering: Designing the Modern SDLC</p>
  <div class="event-card__desc">
    <p>The long cut of my talk: mapping AI agents to discovery, delivery, and operations with clear ownership at each phase.</p>
  </div>
</aside>

## Judgement vs. Trust

[Jonathan Evens](https://www.linkedin.com/in/jonathan-evens/) looked at what separates good judgment from bad, at a time when AI keeps getting more capable and it’s tempting to automate as much as possible.

In my 60-minute edition of the talk on agentic SDLC, the most used word was probably “review”: human judgement around the artifacts agents generate. Specs, plans, diffs, test results. The agent can produce all of them. Someone still has to decide whether they are right.

[Benedikt Stemmildt](https://benedikt.stemmildt.com/de/) took it one step further and discussed dark factories: pipelines that ship without a human reviewing the code. I would not bet on that for most teams yet, but it sharpens the question. If you remove the human from the review, what replaces their judgement? Tests? Specs? Trust in the harness?

I wrote up the shorter 20-minute cut of this talk after [code.talks in Hamburg](/blog/from-vibe-coding-agentic-engineering-code-talks), including the best question from that crowd: when do you take the keyboard back?

The live demo from this talk didn't stay a demo. The weather ticket I wrote on stage has since shipped to N+One riders. Here is [how it went from stage demo to production](/blog/from-stage-demo-to-production-nplusone), including the parts that didn't go cleanly.

<ul class="gallery gallery--thirds gallery--equal">
<li><img src="/assets/digitale-leute-summit-2026-jonathan-evens.jpg" alt="Jonathan Evens presenting on the main stage at Digitale Leute Summit, with a large portrait on the screen above" /></li>
<li><img src="/assets/digitale-leute-summit-2026-dark-factory-talk.jpg" alt="A speaker presenting a slide about development as the bottleneck at Digitale Leute Summit" /></li>
<li><img src="/assets/digitale-leute-summit-2026-room.jpg" alt="View across the audience towards a speaker and projected slide, with a camera and a live-stream monitor in the foreground" /></li>
</ul>

## Between the Sessions

For me the most valuable part were the discussions I had with people on this topic. Who owns the merge decision? What does a good review look like when the author is an agent? How much does a team need to see before it trusts a pipeline? Everyone I talked to had a different line, and the lines moved depending on the product, the team, and the risk.

I met teams from large corporates, people from product, UX, and engineering, and got some new perspectives I would not have found in my own bubble. I also caught up with long-time friends, and not nearly for long enough. And it was a bliss to see so many people from the [Digitale Leute School](https://www.linkedin.com/school/digitale-leute-school/) again in person.

<ul class="gallery gallery--thirds gallery--equal">
<li><img src="/assets/digitale-leute-summit-2026-selfie.jpg" alt="Hans Christian Reinl in a selfie with a bearded attendee in glasses at the summit, under purple stage lights" /></li>
<li><img src="/assets/digitale-leute-summit-2026-handshake.jpg" alt="Hans Christian Reinl and another attendee clasping hands in front of the Digitale Leute Summit sponsor wall" /></li>
</ul>

<ul class="gallery gallery--thirds gallery--equal">
<li><img src="/assets/digitale-leute-summit-2026-flag.jpg" alt="A Digitale Leute Summit beach flag reading Build. Better. Products. in front of a red-brick building" /></li>
<li><img src="/assets/digitale-leute-summit-2026-backdrop.jpg" alt="Hans Christian Reinl standing in front of the Digitale Leute Summit sponsor wall" /></li>
</ul>

Thank you to the whole Digitale Leute team for two great days in Cologne. I am already looking forward to the next edition. Tell me the date and I will be there.

## The Slides

The 60-minute cut from the AI Deep Dive Day:

<div class="slide-deck">
  <figure class="slide-deck__stage image--has-frame">
    <iframe
      id="talk-slides-60"
      class="slide-deck__frame"
      src="https://drublic.github.io/talk-agentic-sdlc/60.html"
      title="Slides: From Vibe Coding to Agentic Engineering (60 min cut)"
      loading="lazy"
      allowfullscreen
    ></iframe>
  </figure>
  <div class="slide-deck__bar" role="toolbar" aria-label="Slide navigation">
    <button
      type="button"
      class="button button--outline slide-deck__nav"
      aria-label="Previous slide"
      onclick="(function(){var f=document.getElementById('talk-slides-60');if(!f||!f.contentWindow)return;f.contentWindow.postMessage(JSON.stringify({method:'prev'}), '*');f.focus();})()"
    >
      <span aria-hidden="true">←</span> Previous
    </button>
    <a
      class="button slide-deck__open"
      href="https://drublic.github.io/talk-agentic-sdlc/60.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open full screen
    </a>
    <button
      type="button"
      class="button button--outline slide-deck__nav"
      aria-label="Next slide"
      onclick="(function(){var f=document.getElementById('talk-slides-60');if(!f||!f.contentWindow)return;f.contentWindow.postMessage(JSON.stringify({method:'next'}), '*');f.focus();})()"
    >
      Next <span aria-hidden="true">→</span>
    </button>
  </div>
</div>
