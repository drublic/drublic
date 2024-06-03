
Some weeks ago I made a <a href="https://github.com/h5bp/html5-boilerplate/pull/852" title="Pull Request to update jQuery to version 1.7.0" target="_blank">pull request for HTML5Boilerplate</a> which should update jQuery to the latest version available on the Google <abbr title="Content Delivery Network">CDN</abbr>. How ever I copied the old version of minified jQuery because the uncompressed version was available but the minified wasn’t. Stupid thing!

That’s why I created <a href="http://ismothereffinjqueryup.drublic.de/" title="Visit the project's page and check if the latest jQuery-version is already available on CDNs" target="_blank">Is Mothereffin’ jQuery up?</a> The service checks three major CDNs for the availability of the latest jQuery version.

<a href="http://ismothereffinjqueryup.drublic.de/" title="Visit the project's page and check if the latest jQuery-version is already available on CDNs" target="_blank" class="button">View Is Mothereffin’ jQuery up?</a>


## How to Check if the File is up

I had some difficulties to find the right method how to detect if a file is already available with JavaScript. If you don’t have to deal with cross-domain requests this is not a big thing and done pretty easy. But I need cross-domain requests.

If a file is not available on a server, the request dies with an error 404 and no callback will be called. See <a href="http://jsfiddle.net/drublic/9rgXz/" target="_blank">this Fiddle</a> for a test-case. Even a <code>try-catch</code>-expression <a href="http://jsfiddle.net/drublic/WqWEC/" title="Tested on jsFiddle" target="_blank">does not help</a>.

I decided to check all files for availability and if the request ends up in an error nothing will happen. The script will check if all files are available after three seconds and will otherwise “tell” the user that it’s not. This is not a bullet-proof method as it could take more then three seconds to request all files. If you have a better idea please let me know.<br>
For the moment the resources will be labeled as “available” when they are loaded even if they were labeled “not available” before. So you will not end up with wrong result, it just may take a second more to show you that.

## The Styles

The project was build “mobile-first”. It makes use of the <a href="http://www.w3.org/TR/css3-flexbox/" title="The specification of the CSS3 Flexible Box Model" target="_blank">CSS3 Flexible Box Model</a> instead of <code>float</code> and all the other stuff.

I’m not supporting IE in any way because I think most web-developer don’t use Internet Explorer.

## Todo
<ul>
<li>Support more libraries such as Mootools, Dojo, Prototype, ExtJS and YUI</li>
<li>Let users submit other CDN via a form</li>
<li><del>Link buttons to their library</del><ins>Done with <a href="https://github.com/drublic/isMothereffinjQueryUp/commit/145a150854bde08ae651f0124b363a4120b7156b" target="_blank">this commit</a></ins> – <a href="https://hansreinl.de/archive/is-mothereffin-jquery-up/#comment-166">suggestion</a> by <a href="http://mathiasbynens.be/">Mathias</a></li>
</ul>

Let me know if you want some other features.

## Contribute via GitHub

I’ve put this <a href="https://github.com/drublic/isMothereffinjQueryUp" title="The project on GitHub" target="_blank">project up</a> on GutHub. Feel free to contribute or just watch it.

Feature requests can also be placed in <a href="https://github.com/drublic/isMothereffinjQueryUp/issues" title="The issue tracker for isMothereffinjQueryUp" target="_blank">the issue-tracker</a> there.
