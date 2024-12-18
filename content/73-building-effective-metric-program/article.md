<div class="post__intro" markdown="1">
At [LeadingEng in Berlin](https://leaddev.com/leadingeng-berlin/) in November this year, I had the opportunity to lead a Table Talk on a topic that has been a significant focus of my work lately: building and implementing effective metric programs. It's a subject that sounds deceptively simple, but as I've discovered, it's a journey filled with complexities and invaluable lessons. This experience has resonated with my reflections on transitioning from engineering to management, as detailed in my blog post [From Engineering into Management](https://www.hansreinl.de/blog/from-engineering-into-management), where defining clear objectives and measuring progress are paramount for success. Just as in managing teams, managing metrics requires a strategic and thoughtful approach.
</div>

<figure class="image image--block" markdown="1">
  ![](/assets/metric-program.jpg)

<figcaption class="image__caption image__caption--no-border" markdown="1">
  <span class="image__caption__copywrite">[Mikail ](https://unsplash.com/@mcverry)</span>
</figcaption>
</figure>

Like many organizations, we initially treated "metrics" as a buzzword. We knew we wanted to be data-driven, but the practical application was hazy. Product teams had their metrics, but engineering felt like a different beast. Were we even measuring the right things?

One of our biggest hurdles was the sheer diversity of our engineering landscape. We had teams working on iOS and Android apps, others building web applications with a mix of programming languages and frameworks. This meant we couldn't just use a one-size-fits-all approach. We needed a flexible framework that could adapt to different development processes and technologies while still providing comparable data across teams.

"Start somewhere" is good advice, but starting without a clear direction can lead you down a rabbit hole of irrelevant metrics. We needed a framework to identify the key indicators that truly reflected our team's impact.

## Enter Engineering KPIs: Cutting Through the Noise

This is where Engineering KPIs became our guiding light. By focusing on a small set of clear, measurable metrics aligned with our team's goals, we were able to filter out the noise and focus on what truly mattered.

One specific example stands out: our initial approach to measuring errors. Like everyone else, we tracked the number of errors. But simply counting errors isn't enough. Not all errors are created equal. Some have a negligible impact on users, while others cause major disruptions. So, we took a more nuanced approach. We defined custom metrics that captured the errors with the biggest impact on our users. For example, we started tracking "crash-free users" as a percentage, which gave us a much clearer picture of user experience than just raw error counts.

The most valuable Engineering KPIs are those that directly support key product metrics. For a streaming platform like ours, metrics like video loading speed and buffering time are critical. Improving these, directly contributes to viewer engagement and satisfaction.

| Metric                     | Value (Seconds) | Change (%) |
|-----------------------------|-----------------|------------|
| Average Loading Time (Before) | 20              | -          |
| Average Loading Time (After)  | 9               | -55%       |

_Table 1: Average Video Loading Time Before and After Optimization_

## From Data to Action: Turning Insights into Impact

Collecting data without acting on it is a waste of time and resources. The real value comes from using those insights to drive change. We implemented a two-pronged approach:

1. **North Star Metric:** A long-term, aspirational goal that aligned with the overall business objectives.
2. **Short-Term Goals:** Realistic, achievable targets set within 3-month cycles. This allowed us to iterate quickly and adapt to changing circumstances.

Regular reviews are essential. We established monthly meetings with our teams to discuss progress, analyze data, and adjust our metrics as needed. This continuous feedback loop ensured our metrics remained relevant and impactful.

| North Star Metric (Product) | Engineering Metric | Target (Next 3 Months) | Initiatives/Actions |
| --- | --- | --- | --- |
| Improve User Retention | Average Time to First Interaction (TTFI) | Reduce by 20% | -   Optimize database queries.<br>-   Implement caching strategies.<br>-   Improve API response times. |
|  | Error Rate (Specific User-Impacting Errors) | Reduce by 10% | -   Implement more robust error handling.<br>-   Improve automated testing coverage.<br>-   Invest in better monitoring and alerting. |
|  | Deployment Frequency | Increase by 50% | -   Implement CI/CD pipelines.<br>-   Automate testing and deployment processes.<br>-   Improve code review practices to facilitate faster releases. |

_Table 2: An example for engineering metrics with a North Star Goal_

## Building Buy-In: Metrics as a Team Sport

Metrics aren't just an engineering concern. Getting buy-in from other departments is crucial. We found that adopting OKRs (Objectives and Key Results) helped align metrics across the organization. This fostered a shared understanding of goals and how each team contributed to the overall success. This collaborative approach resonated strongly with the importance of cross-functional collaboration I highlighted in my blog post on [The crucial role of an engineering manager in a company's success](https://www.hansreinl.de/blog/the-crucial-role-of-an-engineering-manager-in-a-companies-success).

Metrics can be a double-edged sword. They can reveal inefficiencies, but they also celebrate successes. By fostering a culture of data-informed decision-making, we framed failures as learning opportunities and celebrated achievements based on quantifiable impact.

The journey to a successful metric program is ongoing. But by focusing on the right KPIs, taking action on the insights they provide, and fostering collaboration, we can empower our teams to achieve real, measurable business impact.
