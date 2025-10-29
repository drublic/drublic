<div class="post__intro" markdown="1">
AI Frontend Generator tools are experiencing a significant surge in popularity and adoption across the industry, with what appears to be multiple new tools being released and announced each week. It seems that every major WYSIWYG Platform provider is now developing and launching their own proprietary solution in this space.

With the recent surge in attention around Claude Code and similar AI-powered development tools, now is the perfect time to examine these platforms in depth and understand how they truly compare.
</div>

I have taken the time to thoroughly examine and test several of these tools, and I want to share my detailed insights and findings with you.

## Hypothesis

I am working under the assumptions outlined in my post [The AI Future of Frontend Development](https://www.hansreinl.de/blog/ai-future-of-frontend-engineering). I want to understand in how far the Frontend Development domain becomes obsolete over time.

My hypothesis is that from design, building a design system to the production code frontend, all could be done using AI in the future — obviously guided by experts.

> As more developers explore the potential of AI and incorporate it into their workflows, we will undoubtedly see a range of new innovations that will continue to shape the industry.

Well, here we are.

With more tools on the rise that are able to provide user interfaces, that look well, perform great and are accessible, it is more likely that designers, business people and engineers jump to use these tools quickly without considering another engineer to build interfaces for them.

This represents a fundamental shift in software development—what Andrej Karpathy recently termed **"vibe coding"**. Instead of manually writing code, developers describe their project to an AI, which generates code based on the prompt. The developer then evaluates results and requests improvements without manually reviewing the code. This approach emphasizes iterative experimentation over traditional code structure, allowing amateur programmers to produce software without extensive training, though it raises questions about understanding and accountability.

This experiment focusses purely on Web. I am using a greenfield project and am not looking into complex long-term projects and maintainability. This is a test with one person, not looking at collaborative features.

## Structured approach

For this experiment, I used a structured approach. I generated a list of features for a greenfield project that I wanted the tools to build.

I then fed each tool the same prompt along with the feature list.

I generated this feature list using Google's Gemini AI, asking it to create a markdown file that works well with LLMs.

Here is the feature list: [speakit-feature-list.md](https://hansreinl.de/speakit-feature-list.md)

Here is the prompt I used:

<blockquote class="blockquote-small" markdown="1">
**Task:** Build the Minimum Viable Product (MVP) for the application named **Speakit**. The complete and definitive feature set, constraints, and scope are provided in the attached document, **"Speakit MVP Feature List"**.

**Final Output:** Generate the complete, runnable App that fulfills these requirements.
</blockquote>

I intentionally did not assign a role to the LLM—I believe the tools should handle this themselves.

After the initial generation, I re-iterated and asked each tool to verify that all features were implemented.

<blockquote class="blockquote-small" markdown="1">
**Task:** Go through the list of features one more time thoroughly to verify that the app is feature complete. Implement what is missing.
</blockquote>

I then compared the code using the following criteria:

## Objective Metrics

1. **Performance:** Did the application perform well under modern standards on Mobile and Desktop. Using Lighthouse scores, local machine
2. **Code Quality:** Maintainability, readability, and adherence to best practices. Measure using: Maintainability Index, code complexity analysis (cyclomatic complexity), Lines of Code, and manual code review
3. **Export/Portability:** Can you extract clean code and deploy elsewhere? Measure: Ability to run exported code without modifications, dependency management
4. **Cost:** Pricing models and value for money. Measure: Cost per project, feature limits at each tier
5. **Tech Stack:** What frameworks/libraries does it use? Are they modern and well-supported? Measure: Framework versions, community size, maintenance status
6. **Version Control Integration:** Git support and collaboration features. Measure: Native Git support, commit history, branching capabilities
7. **Accessibility:** Was accessibility implement by the tool? Using Lighthouse scores, automated accessibility testing tools
8. **Error Handling:** How well does generated code handle edge cases and errors? Measure: Test coverage, error boundary implementation, validation logic

### Subjective Metrics

1. **Developer Experience:** Ease of iteration, debugging capabilities, and learning curve. Measure: User surveys, time to first successful deployment, qualitative assessment
2. **Iteration Speed:** How quickly can you make changes and see results? Measure: Time from prompt to preview, number of iterations needed

### Tooling Landscape

Here are the tools I looked at:
- Lovable
- Replit
- Vercel v0
- base44

Additionally I also used two editors to generate:
- Cursor Editor
- GitHub Copilot through VS Code

Plus, and that’s mainly due to the late hype: Claude Code

Obviously there are more tools. I left out [Locofy.ai](https://www.locofy.ai/), [Anima App](https://dev.animaapp.com/) and [Bolt](https://bolt.new/) just due to the effort.
And others like [Framer](https://www.framer.com/ai/), [Stitch](https://stitch.withgoogle.com/), [UIzard](https://uizard.io/) or [Canva](https://www.canva.com/), all more Design-leaning.

## Comparison
_(scroll horizontally)_
<div class="scrollable-table">
<table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Lovable</th>
              <th>Replit</th>
              <th>Vercel v0</th>
              <th>base44</th>
              <th>Cursor</th>
              <th>GitHub Copilot</th>
              <th>Claude Code</th>
            </tr></thead><tbody>
            <tr>
              <td><strong>Website</strong></td>
              <td>
                <a href="https://lovable.dev/">lovable.dev</a>
              </td>
              <td>
                <a href="https://replit.com/">replit.com</a>
              </td>
              <td>v0.dev</a></td>
              <td>
                <a href="https://base44.com/">base44.com</a>
              </td>
              <td>
                <a href="https://cursor.com/">cursor.com</a>
              </td>
              <td>
                <a href="https://github.com/features/copilot"
                  >github.com/copilot</a
                >
              </td>
              <td>
                <a href="https://www.claude.com/product/claude-code"
                  >https://www.claude.com/product/claude-code</a
                >
              </td>
            </tr>
            <tr>
              <td>Generated output</td>
              <td>
                <a href="https://speakit-core-mvp.lovable.app/"
                  >https://speakit-core-mvp.lovable.app</a
                >
              </td>
              <td>
                <a
                  href="https://10609a1a-c1a1-4f69-8816-e84db3d05d38-00-efwvfsaqwnb.worf.replit.dev/"
                  >https://10609a1a-c1a1-4f69-8816-e84db3d05d38-00-efwvfsaqwnb.worf.replit.dev/</a
                >
              </td>
              <td>
                <a href="https://v0-speakit-mvp-build.vercel.app/"
                  >https://v0-speakit-mvp-build.vercel.app/</a
                >
              </td>
              <td>
                <a href="https://speakit-52ac2ce2.base44.app/history"
                  >https://speakit-52ac2ce2.base44.app/</a
                >
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Backend Functionality</td>
              <td>Yes, on request, Supabase DB, Auth integrated</td>
              <td>Yes, connected to Firebase</td>
              <td>Yes</td>
              <td>Yes, own implementations</td>
              <td>Yes, partial implementation</td>
              <td>Yes, partial implementation</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><strong>Performance</strong></td>
              <td>Mobile: 98<br />Desktop: 100</td>
              <td>Mobile: 54<br />Desktop: 55<br />(Dev version)</td>
              <td>Mobile: 92<br />Desktop: 93</td>
              <td>Mobile: 84<br />Desktop: 88</td>
              <td>Mobile: 84<br />Desktop: 100</td>
              <td>Mobile: 98<br />Desktop: 100</td>
              <td>Mobile: 98<br />Desktop: 100</td>
            </tr>
            <tr>
              <td>
                <strong>Code Quality<br />lizard → LOC, Complexity</strong>
              </td>
              <td>
                NLOC: 4182<br />AvgCCN: 2.1<br />Avg.token: 47.2<br />Fun Cnt:
                250<br /><br />Well organised; Code modern;<br />No Tests
                included
              </td>
              <td>
                NLOC: 5368<br />AvgCCN: 1.9<br />Avg.token: 44.3<br />Fun Cnt:
                296<br /><br />Well organised but somewhat unusual; Code modern;
                No tests included
              </td>
              <td>
                NLOC: 1886<br />AvgCCN: 2.4<br />Avg.token: 43.1<br />Fun Cnt:
                117<br /><br />Well organised; Code modern; No tests included
              </td>
              <td>-</td>
              <td>
                NLOC: 1433<br />AvgCCN: 2.3<br />Avg.token: 41.3<br />Fun Cnt:
                114<br /><br />Well organised; Code modern; no tests included
              </td>
              <td>
                NLOC: 614<br />AvgCCN: 3.5<br />Avg.token: 50.6<br />Fun Cnt:
                54<br /><br />Well organised; Code modern; no tests included
              </td>
              <td>
                NLOC: 614<br />AvgCCN: 3.5<br />Avg.token: 50.6<br />Fun Cnt:
                54<br /><br />Well organised; Code modern; no tests included
              </td>
            </tr>
            <tr>
              <td><strong>Export/Portability</strong></td>
              <td>Each file individually, Download to GitHub</td>
              <td>Each file individually, Download as zip</td>
              <td>
                Each file individually, Download as zip, CLI Download
              </td>
              <td>
                Download only in $50 Subscription Plan, not even starter
              </td>
              <td>Code is right at your hand</td>
              <td>Same as Cursor</td>
              <td>Same as Cursor</td>
            </tr>
            <tr>
              <td><strong>Cost</strong></td>
              <td>$25 / month for 100 credits; $50 for 200</td>
              <td>
                $25 / month + pay as you go for additional usage
              </td>
              <td>
                $20 / month + pay as you go for additional usage
              </td>
              <td>
                $25 / month<br />Backend only with plan for $50 / month
              </td>
              <td>$20 / month</td>
              <td>
                Free; Next plan $10 for unlimited usage and latest models
              </td>
              <td>$20 / month or Pay as you go via API connect</td>
            </tr>
            <tr>
              <td><strong>Tech Stack</strong></td>
              <td>
                TypeScript, React, Shadcn UI with Radix UI, Tailwind, Vite
              </td>
              <td>
                TypeScript, React, Radix UI, Framer Motion, Tailwind, Vite
              </td>
              <td>
                TypeScript, React, Next.js, Shadcn with Radix UI, Tailwind
              </td>
              <td>-</td>
              <td>TypeScript, React, Tailwind</td>
              <td>TypeScript, React, Next.js, Tailwind</td>
              <td>TypeScript, React, Next.js, Tailwind</td>
            </tr>
            <tr>
              <td>
                <strong>Version Control Integration</strong>
              </td>
              <td>Yes, GitHub, 2-way sync</td>
              <td>
                No, there seems to be a .git folder, but I have not found it
              </td>
              <td>Yes, GitHub, 2-way sync</td>
              <td>
                No, only in $50 Subscription Plan, not even starter
              </td>
              <td>Did not generate .git; manual work</td>
              <td>Did not generate .git; manual work</td>
              <td>Did not generate .git; manual work</td>
            </tr>
            <tr>
              <td><strong>Accessibility</strong></td>
              <td>96</td>
              <td>92</td>
              <td>100</td>
              <td>96</td>
              <td>88</td>
              <td>95</td>
              <td>95</td>
            </tr>
            <tr>
              <td><strong>Error Handling</strong></td>
              <td>
                No (Inserting 404 pages displays their content; No error message
                for PDFs &gt;10mb)
              </td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><strong>SEO</strong></td>
              <td>100</td>
              <td>- (Dev mode only)</td>
              <td>100</td>
              <td>100</td>
              <td>91</td>
              <td>100</td>
              <td>100</td>
            </tr>
            <tr>
              <td><strong>Developer Experience</strong></td>
              <td>
                8/10; Good, Code visible, easy to change code; not too verbose
                about what is going on
              </td>
              <td>
                5/10; A bit hard to find all the right options in the interface,
                a bit overloaded, Changing code is possible
              </td>
              <td>
                9/10; Good, Code visible, easy to change code, easy to change
                each individual element, verbose about what is going on
              </td>
              <td>
                2/10; possible to view configuration of functionality, no real
                code visible; no possibility for editing
              </td>
              <td>
                7/10; Manual work involved, all code visible and easy to change,
                verbose about what is going on
              </td>
              <td>
                7/10; Manual work involved, easy to read codebase, verbose about
                what is going on; no shiny interface
              </td>
              <td>
                7/10; Manual work involved, all code visible and easy to change,
                verbose about what is going on
              </td>
            </tr>
            <tr>
              <td><strong>Iteration Speed</strong></td>
              <td>
                Initial: 58s;<br />Worked for 5:41m;<br />Verify: 2:29m
              </td>
              <td>Initial: 2m<br />Worked for 14m</td>
              <td>Worked for 9:46m;<br />Verify: 4:21m</td>
              <td>Worked for 3m;<br />Verify: 1:40m</td>
              <td>Worked for roughly 7m;<br />Verify: 3:47m</td>
              <td>Worked for roughly 16m;<br />Verify: 2m</td>
              <td>Worked for roughly 14m;<br />Verify: roughly 4m</td>
            </tr>
            <tr>
              <td>Could you publish automatically?</td>
              <td>Yes; can set up custom domain</td>
              <td>No; publish with Subscription</td>
              <td>
                Yes; can set up custom domain; Integrates with Vercel
              </td>
              <td>Yes; can set up custom domains</td>
              <td>No — Editor</td>
              <td>No — Editor</td>
              <td>No — Editor</td>
            </tr>
            <tr>
              <td>Additional</td>
              <td>
                + Security Scanner, found 1 issue (Missing RLS Protection for
                users)<br />+ Page speed analysis<br />+ Uses own AI gateway to
                enable AI functionality<br />- Components installed, e.g.
                &quot;recharts&quot;, but not used
              </td>
              <td>
                + Asks to do design first<br />+ Made it possible to use app in
                guest mode without Firebase connection<br />- Verify only
                possible with Subscription<br />- URL pasting required to submit
                the form 2 times before it works<br />- No README file<br />-
                Components installed, e.g. &quot;recharts&quot;, but not used
              </td>
              <td>
                + Lets you choose design system<br />+ Possibility to let AI
                enhance your prompt<br />+ Design Mode lets you edit components
                individually (similar to base44)<br />+ Built an application
                that was working without Firebase config (optional)<br />+ Fixed
                occurring Firebase error while verifying<br />- Error when
                trying to publish the project (fixing it was done with one
                click)<br />- Very minimalistic landing page
              </td>
              <td>
                + Possible to choose from predefined styles<br />+ Visual Edit
                lets you edit components individually (similar to v0)<br />+
                Offers Security Scan before publishing<br />+ E-Mail
                Verification for account<br />- No Markdown upload
              </td>
              <td>
                + Verbose output while working<br />- No Markdown upload<br />-
                Initial build raised error: fs Can&#x27;t be resolved — fixed it
                to get any result<br />- Very minimalistic landing page
              </td>
              <td>
                + Verbose output while working<br />- Landing Page just minimal
                functionality<br />- No Markdown upload<br />- No mention to
                fill .env file<br />- Worked very long for little result
              </td>
              <td>
                - You must have a subscription even if you just want to test<br />-
                No markdown upload<br />- On the app it was hard to read the
                text
              </td>
            </tr>
            <tr>
              <td>Repository Link</td>
              <td>
                <a href="https://github.com/drublic/lovable-speakit-core-mvp"
                  >https://github.com/drublic/lovable-speakit-core-mvp</a
                >
              </td>
              <td>
                <a href="https://github.com/drublic/replit-speakit"
                  >https://github.com/drublic/replit-speakit</a
                >
              </td>
              <td>
                <a href="https://github.com/drublic/v0-speakit-mvp-build"
                  >https://github.com/drublic/v0-speakit-mvp-build</a
                >
              </td>
              <td>-</td>
              <td>
                <a href="https://github.com/drublic/cursor-speakit"
                  >https://github.com/drublic/cursor-speakit</a
                >
              </td>
              <td>
                <a href="https://github.com/drublic/copilot-speakit"
                  >https://github.com/drublic/copilot-speakit</a
                >
              </td>
              <td>
                <a href="https://github.com/drublic/claude-speakit"
                  >https://github.com/drublic/claude-speakit</a
                >
              </td>
            </tr>
          </tbody>
        </table>
</div>

## Feature Completeness
_(scroll horizontally)_
<div class="scrollable-table" markdown="1">
| **Feature ID** | **Feature** | **Lovable** | **Replit** | **Vercel’s v0** | **base44** | **Cursor** | **Copilot** | **Claude** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | URL Input | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| 1.2 | PDF Upload (max 10MB, text-based) | Yes | Yes | Yes | Yes, allowed >10mb | Yes | Yes, allowed >10mb | Yes, allowed > 10mb |
| 1.3 | AI Summarization (gemini-2.5-flash) | Yes | Yes | No, there was an error | Yes | No | No (reader page not accessible) | Yes |
| 2.1 | Web Content Extraction | Yes, but also footer and header etc. was extracted. | Yes | Yes | Partially, some pages just did not load | Yes | No (reader page not accessible) | Yes |
| 2.2 | PDF Text Extraction | No, PDF reading did not work as it should, did not find text | No, failed for all tested PDFs | No, failed to extract content | Yes | No, failed for all tested PDFs | No (reader page not accessible) | No, failed for all tested PDFs |
| 3.1 | TTS Voice Selection (min 2 voices) | Yes | Yes | Yes | Yes, significantly less voices than others | Yes, voice selection did not work | No (reader page not accessible) | Yes, just 2 voices, but that’s the spec ;) |
| 3.2 | Playback Controls (Play/Pause/Resume/Stop) | Yes, only 1 word played | Yes | Yes | Sometimes played, sometimes not | Buttons available, but did not work | No (reader page not accessible) | Yes |
| 3.3 | Reading Speed (0.5x to 2.0x) | Yes | Yes | Yes | Yes | Yes | No (reader page not accessible) | Yes |
| 3.4 | Instant Playback | Yes | No | Yes | Sometimes yes, sometimes  | Yes | No (reader page not accessible) | Yes |
| 4.1 | Real-Time Word Highlighting | Yes | Yes, after initial voice selection | Yes, but is not accurate | No | Yes | No (reader page not accessible) | Yes |
| 4.2 | Auto-Scrolling | Yes | Yes, after initial voice selection | Yes | No | Yes | No (reader page not accessible) | Yes |
| 5.1 | Landing Page (URL input + PDF upload) | Yes | Yes, inserted AI generated image | Yes | No | Yes | Yes, very limited | Yes |
| 5.2 | Minimal Reader Interface | Yes, but could be more minimalistic | Yes | Yes, but could be more minimalistic | Yes | Yes | No (reader page not accessible) | Yes |
| 5.3 | Progress Bar | No | Yes (X of XXX Words played) | Yes | Yes | Yes | No (reader page not accessible) | Yes |
| 5.4 | Responsive Design (desktop/tablet/mobile) | Partially, Controls were not fully visible | Yes | Yes | Yes | Yes | Yes | Yes |
| 5.5 | Authentication UI (Log In/Sign Up) | Yes | No, Error while calling the Firebase Login | Yes | Yes | Yes | Yes (same page with two buttons) | Yes |
| 6.1 | Guest Mode + Authenticated Accounts (Firebase) | Yes, used own Database | No, Firebase failure  | No, failed to create account | No | No, failed to create account | No, failed to create accounts | No, failed to create accounts |
| 6.2 | Data Persistence (session-based for guests, Firestore for authenticated) | Yes, used own Database | No | No | No | No | No | No |
| 6.3 | Security (HTTPS) | Yes | Yes | Yes | Yes | - | - | - |
</div>

## Insights

### Lovable

Easy to use—backend integration is a huge plus. The app worked only partially but looked decent. The core functionality didn't work, which is a major drawback. With iterations, it seems possible to make the app fully functional.

<ul class="gallery">

<li><a target="_blank" href="/ai-generators/lovable/1.jpg"><img src="/ai-generators/lovable/small1.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/lovable/2.jpg"><img src="/ai-generators/lovable/small2.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/lovable/3.jpg"><img src="/ai-generators/lovable/small3.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/lovable/4.jpg"><img src="/ai-generators/lovable/small4.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/lovable/5.jpg"><img src="/ai-generators/lovable/small5.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/lovable/6.jpg"><img src="/ai-generators/lovable/small6.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/lovable/7.jpg"><img src="/ai-generators/lovable/small7.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/lovable/8.jpg"><img src="/ai-generators/lovable/small8.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/lovable/9.jpg"><img src="/ai-generators/lovable/small9.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/lovable/10.jpg"><img src="/ai-generators/lovable/small10.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/lovable/11.jpg"><img src="/ai-generators/lovable/small11.jpg" width="100" /></a></li>
</ul>

### Replit

The "Design First" approach is smart—it lets you iterate on design without full code integration in the background.

I really liked the overall design of the application. It was clean and functional. The errors seem easily solvable, except perhaps the Firebase backend. Here, built-in functionality could be beneficial.

Overall, creating the application took very long—especially compared to other tools.

<ul class="gallery">

<li><a target="_blank" href="/ai-generators/replit/1.jpg"><img src="/ai-generators/replit/small1.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/replit/2.jpg"><img src="/ai-generators/replit/small2.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/replit/3.jpg"><img src="/ai-generators/replit/small3.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/replit/4.jpg"><img src="/ai-generators/replit/small4.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/replit/5.jpg"><img src="/ai-generators/replit/small5.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/replit/6.jpg"><img src="/ai-generators/replit/small6.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/replit/7.jpg"><img src="/ai-generators/replit/small7.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/replit/8.jpg"><img src="/ai-generators/replit/small8.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/replit/9.jpg"><img src="/ai-generators/replit/small9.jpg" width="100" /></a></li>
</ul>

### Vercel’s v0

v0 was thorough in checking that functionality exists and works, though it missed some integration pieces—specifically Summary and Login. These issues could likely be fixed by explicitly pointing them out again, but that shouldn't be necessary for a tool like this. v0 integrates extremely well with the Vercel platform. Not using Firebase might have made it easier for the tool to leverage Supabase, which integrates seamlessly with Vercel.


<ul class="gallery">

<li><a target="_blank" href="/ai-generators/v0/1.jpg"><img src="/ai-generators/v0/small1.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/v0/2.jpg"><img src="/ai-generators/v0/small2.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/v0/3.jpg"><img src="/ai-generators/v0/small3.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/v0/4.jpg"><img src="/ai-generators/v0/small4.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/v0/5.jpg"><img src="/ai-generators/v0/small5.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/v0/6.jpg"><img src="/ai-generators/v0/small6.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/v0/7.jpg"><img src="/ai-generators/v0/small7.jpg" width="100" /></a></li>
</ul>

### base44

I added this tool because I see frequent ads for it on YouTube. That was a mistake.

As an engineer, this tool is a nightmare—there's no code access at all. While it has some functionality, it missed critical features like Guest Mode and Bookmarks. The inability to view or publish the generated code makes it a non-starter for me. This also prevented me from running code quality metrics.

The app itself was unusable since content didn't play reliably. Some functionality felt over-engineered. However, it was the only tool that could play some PDFs—though inconsistently. The pricing is steep. I don't recommend it.

<ul class="gallery">

<li><a target="_blank" href="/ai-generators/base44/1.jpg"><img src="/ai-generators/base44/small1.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/base44/2.jpg"><img src="/ai-generators/base44/small2.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/base44/3.jpg"><img src="/ai-generators/base44/small3.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/base44/4.jpg"><img src="/ai-generators/base44/small4.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/base44/5.jpg"><img src="/ai-generators/base44/small5.jpg" width="100" /></a></li>
</ul>


### Cursor

I have used Cursor extensively for creating applications on my own, well beyond what I tested here—I'm speaking from long-term use.

This editor is developing its own features remarkably fast. What I really love is its planning mode, where you can first iterate on the architecture of an implementation, refine it, and then—once it's ready—either build it yourself or let the tool handle it. For me, this feels like the architectural discussions I would have with a team or co-worker, except you're doing it with an AI that knows your code.

For the given scenario, the page presentation was well executed and looked nice. However, some features weren't implemented well, which caused failures. For an AI that runs in the editor, it did surprisingly well.

<ul class="gallery">

<li><a target="_blank" href="/ai-generators/cursor/1.jpg"><img src="/ai-generators/cursor/small1.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/cursor/2.jpg"><img src="/ai-generators/cursor/small2.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/cursor/3.jpg"><img src="/ai-generators/cursor/small3.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/cursor/4.jpg"><img src="/ai-generators/cursor/small4.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/cursor/5.jpg"><img src="/ai-generators/cursor/small5.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/cursor/6.jpg"><img src="/ai-generators/cursor/small6.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/cursor/7.jpg"><img src="/ai-generators/cursor/small7.jpg" width="100" /></a></li>
</ul>

### GitHub Copilot

This is the result I expected from Cursor as well, to be honest. Copilot seems to excel at other tasks. The landing page was somewhat of a disaster. The functionality didn't come close to meeting the requirements, and the tool wasn't straightforward in telling me what to do with the code.

This tool is built for a different job—it's more of an AI pair-programmer.

<ul class="gallery">

<li><a target="_blank" href="/ai-generators/copilot/1.jpg"><img src="/ai-generators/copilot/small1.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/copilot/2.jpg"><img src="/ai-generators/copilot/small2.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/copilot/3.jpg"><img src="/ai-generators/copilot/small3.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/copilot/4.jpg"><img src="/ai-generators/copilot/small4.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/copilot/5.jpg"><img src="/ai-generators/copilot/small5.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/copilot/6.jpg"><img src="/ai-generators/copilot/small6.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/copilot/7.jpg"><img src="/ai-generators/copilot/small7.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/copilot/8.jpg"><img src="/ai-generators/copilot/small8.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/copilot/9.jpg"><img src="/ai-generators/copilot/small9.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/copilot/10.jpg"><img src="/ai-generators/copilot/small10.jpg" width="100" /></a></li>
</ul>

### Cursor Code

It's unfortunate you can't test the tool without a subscription. I used the API connection and loaded the account with €5 plus taxes. Generating this app cost me $3.34—a significant amount. I'd definitely recommend the subscription instead.

When testing the app, I was surprised by how accurately the features were executed—except for the failing signup/login. But this seems to be a common issue across most tools.

Though it wasn't fast, this tool comes close to what I'd expect from an agentic code generator.
<ul class="gallery">

<li><a target="_blank" href="/ai-generators/claude/1.jpg"><img src="/ai-generators/claude/small1.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/claude/2.jpg"><img src="/ai-generators/claude/small2.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/claude/3.jpg"><img src="/ai-generators/claude/small3.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/claude/4.jpg"><img src="/ai-generators/claude/small4.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/claude/5.jpg"><img src="/ai-generators/claude/small5.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/claude/6.jpg"><img src="/ai-generators/claude/small6.jpg" width="100" /></a></li>
<li><a target="_blank" href="/ai-generators/claude/7.jpg"><img src="/ai-generators/claude/small7.jpg" width="100" /></a></li>
</ul>

## Limitations

This evaluation has several important limitations that should be considered when interpreting the results:

**Testing Timeframe Constraints:** This review represents a snapshot in time during October 2025. The testing was conducted over a limited period, which means that some tool features or capabilities may have been missed or not fully explored. Each tool received the same initial prompt and one follow-up iteration, which may not fully represent their capabilities in extended development scenarios, e.g. see Plan mode in Cursor.

**Evolving Nature of AI Tools:** The AI frontend generation space is rapidly evolving, with frequent updates, new features, and model improvements being released weekly. By the time you read this, some of the tools may have significantly improved or changed their capabilities.

**Subjective Nature of Some Assessments:** Several metrics in this evaluation, particularly in the "Subjective Metrics" section, rely on personal experience and judgment.

## Conclusion

Interestingly, all tools defaulted to the same tech stack—even though it wasn't specified. A common tech stack for web apps appears to be emerging. What does this mean for the engineering community?

Here are all patterns I identified:

### Patterns

- All tools defaulted to the same tech stack (React, Vite, Tailwind CSS, Firebase) without being explicitly asked, suggesting an emerging standard for AI-generated web apps
- Authentication and login functionality was a consistent weak point across multiple tools, indicating this remains a challenging area for AI code generation
- Tools fell into distinct categories: productivity enhancers (Copilot, Claude Code), refactoring specialists (Cursor), and prototype generators (v0, Lovable) → see Recommendations below
- Editor-based tools (Cursor, Claude Code) provided more control and transparency but required more technical knowledge, while standalone generators (v0, Lovable) were faster but less flexible
- Cost models varied dramatically—from subscription-based to pay-per-generation—with significant implications for different use cases — $20-25 / months seems to be a good middle ground though
- Code quality and maintainability varied widely, with some tools producing production-ready code while others generated prototypes requiring significant refactoring
- Most tools struggled with complex feature integration and edge cases, requiring multiple iterations or manual intervention
- Visual design quality was surprisingly high across most tools, but functional completeness often lagged behind aesthetic presentation

### Recommendations

What is your primary use case?

**For boosting day-to-day productivity:** If you need completion, chat, and suggestions to enhance your daily workflow → choose **Copilot** or **Claude Code**.

**For transforming how you build:** If you want to refactor legacy code, automate feature branches, generate test suites, or handle cross-module design → choose **Cursor**.

**For building from scratch or prototyping:** If you're starting a new app, launching a business, need inspiration, want to modify an existing codebase without deep knowledge, or need rapid prototyping → choose **v0**.

### Wrapup

So -- this is my experience with AI Frontend Generators. What is yours? Did I miss any tools? Did one tool work exceptionally well for you? Let me know on [LinkedIn](https://linkedin.com/in/hreinl).
