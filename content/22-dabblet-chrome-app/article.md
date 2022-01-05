I think all of you know Lea Verou’s *dabblet*.

> *dabblet* is an interactive playground for quickly testing snippets of CSS and HTML code. It uses -prefix-free, so that you won’t have to add any prefixes in your CSS code. You can save your work in Github gists, embed it in other websites and share it with others.<br>
<cite>~&nbsp;<a href="http://dabblet.com/help/" target="_blank">About *dabblet*</a></cite>


Some time ago I made <a href="https://chrome.google.com/webstore/detail/hiigmadmngbpbmacbkfngpkjfmmpagfk" title="jsFiddle Chrome App on the App Store" target="_blank">this tiny</a> Google Chrome App for jsFiddle which is in case just a bookmarklet with a bigger icon.

I did this for *dabblet*, too but extended the app to something more: It displays all your dabblets with title and creation-date. You can then visit your dabblet directly.

You can find the app in the Google Chrome App store now.

<a href="https://chrome.google.com/webstore/detail/ehlimmpmogmglpfidpkbocdblhlnofke" title="Download the App in the Google Chrome App Store" class="button" target="_blank">Download</a>

This project <a href="https://github.com/drublic/dabblet-chrome-app" title="Find the Chrome App on GitHub" target="_blank">is on GitHub</a>, so please feel free to contribute and <a href="https://github.com/drublic/dabblet-chrome-app/issues" title="Report bugs and feature requests on GitHub" target="_blank">report bugs and feature requests</a>.
<h2 id="changelog">Changelog</h2>

These are the major changes. All commits can be found <a href="https://github.com/drublic/dabblet-chrome-app/commits/master" title="Commit History for the Chrome App - dabblet">on GitHub</a>.

<strong>v1.0.0</strong> – Aug. 19, 2012
<ul>
<li>Add button for viewing gist</li>
<li>Remove hogan.js in favor of an own replacer</li>
<li>Show “view dabblet” link in GitHub newsfeed</li>
</ul>

<strong>v0.7</strong> – Feb. 13, 2012
<ul>
<li>Add search – <a href="https://github.com/drublic/dabblet-chrome-app/issues/2">#2</a></li>
<li>Rewrite code-basis based on JS AMD with <a href="http://requirejs.org/" title="RequireJS">RequireJS</a></li>
<li>Display message if user has no gists to display – <a href="https://github.com/drublic/dabblet-chrome-app/issues/3">#3</a></li>
</ul>

<strong>v0.45</strong> – Feb. 02, 2012
<ul>
<li>Add a link to fork Gists on dabblet when visiting <a href="https://gist.github.com/">them on GitHub</a></li>
</ul>
