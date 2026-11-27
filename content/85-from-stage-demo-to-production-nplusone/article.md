<div class="post__intro" markdown="1">

**One Linear ticket, written live on stage, through every station of an agentic SDLC: ticket, context, spec and plan, build, review, hand-off, all the way to production.**

On Tuesday, 17 November, I gave a five-minute live demo in my talk _From Vibe Coding to Agentic Engineering: Designing the Modern SDLC_ at the [Digitale Leute Summit](/blog/factory-factory-factory-digitale-leute-summit) in Cologne.
</div>

<aside class="tldr" aria-label="In short">
<p class="section-label"><span class="section-label__mark" aria-hidden="true"></span>In short</p>
<ul>
<li>One ticket, written live on stage, became four releases for N+One riders.</li>
<li>The line that mattered most was "the rider's location, not default coordinates". It kept the agent from a convenient but wrong fallback.</li>
<li>The agent built. I wrote the ticket, approved the plan, read the diff and decided what shipped.</li>
</ul>
</aside>

The demo task was small on purpose: show the weather in the training calendar of [N+One](https://www.nplusone.app/), my AI cycling coach. The backend already had weather data for the Dynamic Coach, so the work was a new route, a UI component, translations and tests. It was small enough for five minutes on stage and real enough to ship.

A demo only proves the first few stations. This post follows the same ticket afterwards: how it was sliced, what context the agent got, where the spec stopped the agent from guessing, what broke on the way to production, and how a spec change turned into a second release on Sunday.

## Slicing the Ticket So It Can Ship

<figure class="image image--right image--medium">
  <img src="/assets/nplusone-npo-211-linear-ticket.png" alt="Linear ticket NPO-211, Training calendar shows the weather for today and tomorrow, a sub-issue of NPO-88. Problem: riders leave the app to check the weather. Acceptance: a weather chip on today and tomorrow with icon, high temperature and rain above 30%; the rider's location, not default coordinates; all other days unchanged; if the weather request fails, the calendar still loads without the chip; a test covers which days get a chip and the failure case; copy in en, de and other languages. Out of scope: no location override per day, no bad-weather hints on sessions, no change to the weather API or the mobile app. Links: NPO-88, the day column component and GET /api/weather." />
  <figcaption class="image__caption image__caption--no-border">NPO-211 in Linear: problem, acceptance, out of scope, links. Finally marked Done.</figcaption>
</figure>

The full idea had been in Linear since July as NPO-88: location-aware weather for upcoming days, with a multi-day forecast, location overrides for travel, session hints, wind warnings and mobile support. That's a real product bet. It isn't a five-minute demo, or a clean first task for an agent.

At 10:49 on stage I created a smaller child ticket, NPO-211: _Training calendar shows the weather for today and tomorrow_. It is the [demo ticket from the slides](https://drublic.github.io/talk-agentic-sdlc/60.html#/27), and it has the four parts I ask for in every ticket: problem, acceptance, out of scope, and links.

One detail changed live. My prep slide only asked for English and German copy, so I added "and other languages", because N+One runs in six.

## From Ticket to Code

My rule for this station in the talk ([slide 19](https://drublic.github.io/talk-agentic-sdlc/60.html#/18)) is simple:

> If a new colleague couldn't start from the ticket, neither can an agent.

The demo followed the loop from the talk, which I described in more depth in [Agentic Engineering Across the SDLC](/blog/agentic-engineering-across-the-software-development-lifecycle). Everything stayed inside the repository:

1. **Ticket.** Cursor read NPO-211 straight from Linear through MCP, with the acceptance criteria and scope intact.
2. **Context.** The repo's `AGENTS.md` set the architecture rules, the six-language requirement and the check command.
3. **Spec.** The agent drafted an OpenSpec change before any code: proposal, design, tasks, and spec scenarios that include the failure path.
4. **Plan.** I approved the plan in Cursor's plan mode, then the build went one task at a time: a summary helper, an API route, the calendar UI, and tests.
5. **Review.** Automated review caught the mechanical misses. I read the diff and decided what ships.

The failure case from the ticket became a scenario in the spec, before any code existed:

```markdown
#### Scenario: Fetch failure omits chips

- GIVEN the weather request fails or returns no usable forecast
- WHEN the Training week renders
- THEN all day columns still render
- AND no weather chip is shown
- AND workouts remain visible and interactive
```

The design doc went one step further on location: if the rider's location can't be resolved, omit the chip rather than show the weather for a default city. That's the decision an agent would otherwise make on its own, quietly, with the most convenient fallback.

On stage we got through the ticket, the spec and the approved plan, and the agent started on the first task before my five minutes were up. That was the point of the demo: not a finished feature, but a change that a colleague could pick up from the repo and understand.

## After the Demo

If this were a pure demo story, I'd say I merged on stage. That isn't what happened.

<figure class="image image--right">
  <img src="/assets/digitale-leute-summit-2026-stage.jpg" alt="Hans Christian Reinl speaking on stage at Digitale Leute Summit, laptops on a lectern beside him" />
  <figcaption class="image__caption image__caption--no-border">Talking about review, the part of the loop that stays human. Digitale Leute Summit, Cologne.<span class="image__caption__copywrite">Marius, Digitale Leute</span></figcaption>
</figure>

The live session produced the shape and the spec. Five minutes is enough to get from a ticket to an approved plan, not to build, review and verify a feature. And one of the rules in the same talk is: never merge a PR you haven't read yourself. So the build, the review and checking the real calendar happened at my desk.

The first version landed on Thursday evening at 20:22: 23 files covering the spec, the API route, the calendar, six language files and tests.

Production didn't go green right away either. Unrelated commits had broken the build, so the weather chips went live at 22:51, once those were fixed.

Then I had a second thought, as a rider: when do I actually ride? Either in the morning or in the afternoon. So ideally I see the weather for both. Especially in the cold, it helps to know whether the sun comes out later in the day. One daily high for today and tomorrow doesn't tell you that.

Because the spec was already in the repo, changing it on Sunday was quick. I updated the spec and shipped a second change:

- The forecast covered three days instead of two. It has since grown to a full week.
- The single high became morning (around 09:00) and afternoon (around 15:00) icons and temperatures, with translated tooltips.
- Rain still only shows above 30%, so dry days stay quiet.

That went live cleanly at 13:12 on Sunday, ready for riders planning their week the next day.

One honest footnote: NPO-211 stayed in Backlog until I sat down to write this post. In the talk I argued that [merged is not done](https://drublic.github.io/talk-agentic-sdlc/60.html#/30). Apparently shipped isn't the same as updated in Linear either.

Here's the whole path of the ticket in one view, from the backlog to the last release:

<figure class="timeline">
<figcaption class="timeline__head">
<ul class="timeline__legend">
<li><span class="timeline__dot timeline__dot--me"></span>by me</li>
<li><span class="timeline__dot timeline__dot--review"></span>by the agent, after my review</li>
<li><span class="timeline__dot timeline__dot--agent"></span>live for riders</li>
</ul>
<p class="timeline__stat"><span class="timeline__stat-label">Shipped from one ticket</span><span class="timeline__stat-value">4 releases</span><span class="timeline__stat-sub">NPO-211, N+One training calendar</span></p>
</figcaption>
<ol class="timeline__list">
<li class="timeline__event"><span class="timeline__dot timeline__dot--me"></span><span class="timeline__title">NPO-88: location-aware weather</span><span class="timeline__desc">Five ideas in one ticket</span><span class="timeline__meta">Backlog</span></li>
<li class="timeline__event"><span class="timeline__dot timeline__dot--me"></span><span class="timeline__title">NPO-211 written on stage</span><span class="timeline__desc">Problem, acceptance, out of scope, links</span><span class="timeline__meta">Digitale Leute Summit</span></li>
<li class="timeline__event"><span class="timeline__dot timeline__dot--review"></span><span class="timeline__title">Spec and plan</span><span class="timeline__desc">OpenSpec change with the failure path</span><span class="timeline__meta">Plan approved live</span></li>
<li class="timeline__event"><span class="timeline__dot timeline__dot--review"></span><span class="timeline__title">First version merged</span><span class="timeline__desc">Route, calendar UI, six languages, tests</span><span class="timeline__meta">23 files</span></li>
<li class="timeline__event"><span class="timeline__dot timeline__dot--agent"></span><span class="timeline__title">Today and tomorrow</span><span class="timeline__desc">Daily high, rain above 30%</span><span class="timeline__meta">After fixing an unrelated build</span></li>
<li class="timeline__event"><span class="timeline__dot timeline__dot--agent"></span><span class="timeline__title">Morning and afternoon</span><span class="timeline__desc">Three days, two icons per day</span><span class="timeline__meta">Spec change first</span></li>
<li class="timeline__event"><span class="timeline__dot timeline__dot--agent"></span><span class="timeline__title">Chips on mobile</span><span class="timeline__desc">Shared DayWeatherChip in the day list</span><span class="timeline__meta">Separate slice</span></li>
<li class="timeline__event"><span class="timeline__dot timeline__dot--agent"></span><span class="timeline__title">A full week</span><span class="timeline__desc">Seven days, mobile and desktop</span><span class="timeline__meta">NPO-211 marked Done</span></li>
</ol>
</figure>

## What Shipped for Riders

<figure class="image image--right image--phone">
  <img src="/assets/nplusone-training-weather-mobile.png" alt="N+One training calendar on an iPhone, with morning and afternoon weather chips next to Friday, Saturday and Sunday" />
  <figcaption class="image__caption image__caption--no-border">Weather chips in the N+One training calendar on mobile.</figcaption>
</figure>

Open your training calendar and the coming week now shows a small weather chip on each day: morning and afternoon conditions, temperatures, and the rain chance when it's above 30%. Days beyond the forecast's reach simply stay without a chip.

Mobile was out of scope for NPO-211, so at first the chips only showed on desktop. They followed as a separate slice, and that was a good check on the original one. The mobile list already received the forecast. It just never rendered it. Because the chip logic lived in one place from the start (the summary helper, the 30% rain rule, the translated tooltips), mobile was mostly wiring: a shared `DayWeatherChip` in the day list, plus tests.

The same evening, one more change extended the chips from three days to a full week, on mobile and desktop at once. Because both views use the same component, the change only had to happen in one place, plus the weather integration and tests.

Three safeguards sit behind it:

- **Your location, never a silent fallback.** It uses the Dynamic Coach's location from your recent rides, travel or home. If that fails, there's no chip.
- **It never blocks the calendar.** The weather loads separately, so if it fails, your week still shows.
- **All six languages.** English, German, French, Spanish, Italian and Portuguese.

<section class="lessons" aria-labelledby="four-lessons">
<h2 id="four-lessons" class="lessons__heading">Four Lessons from One Small Feature</h2>
<ol class="lessons__grid">
<li class="lessons__item"><span class="lessons__index">01</span><span class="lessons__title">Scope is an engineering lever</span><span class="lessons__body">NPO-88 sat in the backlog for four months because it bundled five ideas. NPO-211 shipped because it took one slice and said what was out of scope.</span></li>
<li class="lessons__item"><span class="lessons__index">02</span><span class="lessons__title">Failure cases belong in the ticket</span><span class="lessons__body">Writing "the calendar loads without the chip if the weather fails" and "the rider's location, not the default coordinates" into the acceptance criteria stopped the agent from inventing a misleading fallback.</span></li>
<li class="lessons__item"><span class="lessons__index">03</span><span class="lessons__title">Specs make iteration cheap</span><span class="lessons__body">Going from a two-day high to three days of morning and afternoon took one spec update and a clean diff, not a rewrite.</span></li>
<li class="lessons__item"><span class="lessons__index">04</span><span class="lessons__title">A green build isn't product taste</span><span class="lessons__body">Tests check behaviour. It still took a rider looking at November weather to ask for morning and afternoon instead of a daily high.</span></li>
</ol>
</section>

## Template: An Agent-Ready Ticket

The structure is deliberately boring. Four headings, the same ones from the talk ([slide 19](https://drublic.github.io/talk-agentic-sdlc/60.html#/18)), and any tracker can hold them. A template doesn't make a ticket good. What you write under each heading does: the one sentence that names the real problem, the failure case nobody thought of, the thing the agent must leave alone.

Here it is with the hints I keep in mind while filling it in:

```markdown
## Problem
What is wrong or missing, from the user's side. One or two sentences.

## Acceptance
What done looks like, checked against the real system.
Include the edge case and what happens when something fails.

## Out of scope
What the agent must not build or change in this ticket.

## Links
Parent ticket, related PRs, and the files and docs to start from.
```

In NPO-211, the line that mattered most was "the rider's location, not default coordinates". It took ten seconds to write, and it's why the agent didn't ship weather for a city the rider isn't in.

If you want the full context, I wrote up [the two days at Digitale Leute Summit](/blog/factory-factory-factory-digitale-leute-summit), including the dark factory debate and where human judgement still belongs. The slides are below, opened on the demo ticket.

<div class="slide-deck">
  <figure class="slide-deck__stage image--has-frame">
    <iframe
      id="talk-slides-demo"
      class="slide-deck__frame"
      src="https://drublic.github.io/talk-agentic-sdlc/60.html#/27"
      title="Slides: From Vibe Coding to Agentic Engineering, demo ticket"
      loading="lazy"
      allowfullscreen
    ></iframe>
  </figure>
  <div class="slide-deck__bar" role="toolbar" aria-label="Slide navigation">
    <button
      type="button"
      class="button button--outline slide-deck__nav"
      aria-label="Previous slide"
      onclick="(function(){var f=document.getElementById('talk-slides-demo');if(!f||!f.contentWindow)return;f.contentWindow.postMessage(JSON.stringify({method:'prev'}), '*');f.focus();})()"
    >
      <span aria-hidden="true">←</span> Previous
    </button>
    <a
      class="button slide-deck__open"
      href="https://drublic.github.io/talk-agentic-sdlc/60.html#/27"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open full screen
    </a>
    <button
      type="button"
      class="button button--outline slide-deck__nav"
      aria-label="Next slide"
      onclick="(function(){var f=document.getElementById('talk-slides-demo');if(!f||!f.contentWindow)return;f.contentWindow.postMessage(JSON.stringify({method:'next'}), '*');f.focus();})()"
    >
      Next <span aria-hidden="true">→</span>
    </button>
  </div>
</div>

What's the one line in your tickets that saves you the most rework? I'd love to hear it. Reply on [LinkedIn](https://www.linkedin.com/in/hreinl/) or [send me a message](mailto:hi@hansreinl.de).

If you ride outdoors and want a cycling coach you can talk to, one that looks at your weather, calendar and training load together, take a look at [nplusone.app](https://www.nplusone.app/).
