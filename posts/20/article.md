{"title":"About Git’s Cherry-Picking","permalink":"about-gits-cherry-picking","author":"Hans Christian","authorUrl":"","categories":["Git"],"tags":["cherry-picking","Git","Organize Code","Version Control","work together"],"headline":"About Git’s Cherry-Picking","metaTags":"","metaDescription":"","date":"2012-01-06"}


		

					<p style="font: 1.5em monospace;">$ git commit -m 'Edit styles for headlines, fixes #321'</p>
<p style="font: 1.5em monospace;">$ git checkout master</p>
<p style="font: 3em/1.5em monospace; margin-bottom: 30px;">$ <span style="color: #c20cb9;">git</span> cherry-pick <span style="color: #1197bb;">h181c289</span></p>		
		
							<div class="message">
				<h3>Hey there…</h3>
				<p>This post is 537 days old. It was written on 06.01.2012. Please make sure to be careful with the information provided and check a more recent source on this topic.</p>
			</div>
		
		<p>At <a href="http://gebruederheitz.de/">/gebrüderheitz</a> we use Git as a version control system as we think this is the best to work together on a level which is easy to learn and work with.</p>
<p>Before we used Git we’ve used SVN but this is by far not as flexible as Git. There are enough posts gathering the difference between Git and SVN so I will not cover any of these.</p>
<p>When working in a team it’s important to keep your different stages of development in sync and control somehow: There is a front-end development going on which is in deep connection with the server-side development; you may also want to develop a new sub-project within your main project; and then there is a tested and fully working live-version of a project.</p>
<p>With Git it’s pretty obvious to use branches to organize different states of the project’s development.</p>
<h2>Branches</h2>
<p>Branches can consist of the whole project’s files and some more commits covering a specific issue or feature. Also they can show a whole different approach of a project and do not necessarily need to consist of the main project’s files.</p>
<p>For our projects we try to keep these branches tight so we will not have a problem when it comes to merging branches – to let one feature or development approach flow into the main development line. Keep in mind that branches in a project are indeed cheap. So use them where you think they might fit. Don’t think about it to long. It will help you in your whole working-process.</p>
<h2>Cherry-Picks</h2>
<p>Sometimes, when it comes to bug fixing you don’t want to put fixes in your live-branch. You fix them in your development-branch and commit them over there. The dev-branch might be on a whole other level as your live branch as you’ve developed some things that will be part of a next major update or so. Therefore Git’s cherry-picking has become a perfect addition to our workflow.</p>
<p>With cherry-picking you are able to pull single commits from one branch to another.</p>
<p>Another part where you might want to use cherry-picking is when a colleague and you develop in two different branches and one contributes to the other’s sub-project without changing the branch. There are some other use cases. Please feel free to share where you use cherry-picking through the comments.</p>
<h2>How to Use Cherry-Picking</h2>
<p>I am using a GUI for doing all the Git-related stuff which is pretty handy and easy. But I think it is important to know how to handle Git via the console anyway.</p>
<p>Here is how to cherry-pick commits.</p>
<p>At first you need to commit your changes in the development branch.</p>

<div class="wp_syntax"><div class="code"><pre class="bash" style="font-family: monospace;">$ <span style="color: #c20cb9; font-weight: bold;">git</span> commit <span style="color: #660033;">-m</span> <span style="color: #ff0000;">'This is some bugfix-message'</span></pre></div></div>

<p>You now need the commit-hash for the commit you want to cherry-pick in another branch.</p>

<div class="wp_syntax"><div class="code"><pre class="bash" style="font-family: monospace;">$ <span style="color: #c20cb9; font-weight: bold;">git</span> log <span style="color: #660033;">-1</span></pre></div></div>

<p>This will return the meta-data for your latest commit. You can now copy the first 7 or so numbers of the commit-hash. It’s not necessary to copy the whole hash as the hash-partial only needs to be unique above all commits of the project.</p>
<p>Now you need to change your checked out branch to the branch where you want to insert – cherry-pick – this particular commit. While <code>&lt;live&gt;</code> is the name of this branch, do this:</p>

<div class="wp_syntax"><div class="code"><pre class="bash" style="font-family: monospace;">$ <span style="color: #c20cb9; font-weight: bold;">git</span> checkout <span style="color: #000000; font-weight: bold;">&lt;</span>live<span style="color: #000000; font-weight: bold;">&gt;</span></pre></div></div>

<p>Keep in mind to commit all your changes in the current branch first or stash them.</p>
<p>Lastly you have to tell the checked out branch to use this commit and do the cherry-pick for real!</p>

<div class="wp_syntax"><div class="code"><pre class="bash" style="font-family: monospace;">$ <span style="color: #c20cb9; font-weight: bold;">git</span> cherry-pick <span style="color: #000000; font-weight: bold;">&lt;</span>hash-partial<span style="color: #000000; font-weight: bold;">&gt;</span></pre></div></div>

<p><code>&lt;hash-partial&gt;</code> is pretty self explaining I guess.</p>
<p>Git now automatically merges the commit into the specific branch.</p>
<h2>Merging Branches Later</h2>
<p>From what I experienced it is no problem to merge branches later when you cherry-picked some commits. This works just fine!</p>
				

		
	