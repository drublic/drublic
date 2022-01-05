
In the last couple of months I’ve worked on several projects that needed an overlay with some content on it. Some front-end frameworks as for example <a href="http://twitter.github.io/bootstrap/">Bootstrap</a> refer to them as <a href="http://twitter.github.io/bootstrap/javascript.html#modals">modals</a>.<br>
You can find a lot of implementations that do exactly what I search for but they all have one major drawback: They rely on JavaScript.

Yes, sure, everyone has JavaScript enabled these days but why use a technique that you don’t necessarily need for a given problem? Also most implementations have drawbacks when it comes to mobile devices and responsive web design in general or accessibility. Apart from that they add a lot of code, that is not necessary for a lot of pages. Others might add dependencies such as for example jQuery which you don’t need at all on your micro-site.

To tackle these problems I decided to write my own implementation of a modal that fulfills what I need.

## Modals built out of pure CSS

<a href="http://drublic.github.io/css-modal">CSS Modal</a> is the result of this experiment.

Here is what is cool about it:

* CSS Modal is built out of pure CSS while JavaScript is only for some sugar.
* The modals are designed using responsive web design methods.
* It is accessible, cross-browser, media-adaptive, small and fast!

Another cool thing is that you can use CSS Modal as Sass plugin and apply it to your custom classes using Sass placeholders.

<a href="http://drublic.github.io/css-modal" class="button" title="CSS Modal">Visit the website</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://drublic.github.io/css-modal#modal-text" class="button" title="CSS Modal Example">View an example</a>

Check out <a href="http://drublic.github.io/css-modal">the website</a> to get documentation and more examples. The project is <a href="https://github.com/drublic/css-modal">on GitHub</a> so if you use it and find bugs, please report them.

General feedback is also very welcome. Please tweet me!
