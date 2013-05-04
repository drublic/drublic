In the last couple of months I&#8217;ve worked on several projects that needed an overlay with some content on it. Some front-end frameworks as for example [Bootstrap](http://twitter.github.io/bootstrap/) refer to them as [modals](http://twitter.github.io/bootstrap/javascript.html#modals).

You can find a lot of implementations that do exactly what I search for but they all have one major drawback: They rely on JavaScript.

Yes, sure, everyone has JavaScript enabled these days but why use a technique that you don&#8217;t necessarily need for a given problem? Also most implementations have drawbacks when it comes to mobile devices and responsive web design in general or accessibility. Apart from that they add a lot of code, that is not necessary for a lot of pages. Others might add dependencies such as for example jQuery which you don&#8217;t need at all on your micro-site.

To tackle these problems I decided to write my own implementation of a modal that fulfills what I need.

## Modals built out of pure CSS

[CSS Modal](http://drublic.github.io/css-modal) is the result of this experiment.

Here is what is cool about it:

*   CSS Modal is built out of pure CSS while JavaScript is only for some sugar.
*   The modals are designed using responsive web design methods.
*   It is accessible, cross-browser, media-adaptive, small and fast!

Another cool thing is that you can use CSS Modal as Sass plugin and apply it to your custom classes using Sass placeholders.

[Visit the website](http://drublic.github.io/css-modal "CSS Modal")&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[View an example](http://drublic.github.io/css-modal#modal-text "CSS Modal Example")

Check out [the website](http://drublic.github.io/css-modal) to get documentation and more examples. The project is [on GitHub](https://github.com/drublic/css-modal) so if you use it and find bugs, please report them.

General feedback is also very welcome. Please tweet me!
