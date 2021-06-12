import React from "react";

const Community = () => (
  <>
    <h2>Community and Open Source</h2>

    <div className="work__element">
      <a href="http://workingdraft.de/" className="work__element__image">
        <img src="/img/work/wd.png" alt="Working Draft" />
      </a>

      <div className="work__element__content">
        <h3>
          Working <span>Draft</span>
        </h3>
        <p>
          <a href="http://workingdraft.de/">Working Draft</a> is a wildly
          recognized German weekly news podcast for web developers. I am a
          co-hosts of the show.
        </p>
        <p>
          Find out more about the Working Draft in the{" "}
          <a href="/podcasting">Podcasting</a> section
        </p>
        <p className="work__element__date">
          Co-host since 2012, podcast exists since 2011
        </p>
      </div>
    </div>

    <div className="work__element">
      <a href="http://nightlybuild.io/" className="work__element__image">
        <img src="/img/work/nightlybuild.png" alt="NightlyBuild" />
      </a>

      <div className="work__element__content">
        <h3>NightlyBuild</h3>
        <p>
          <a href="http://nightlybuild.io/">NightlyBuild</a> is a hand-crafted
          after work conference for web enthusiasts loving technology, design
          and inspiration in Cologne, Germany.
        </p>
        <p>
          Together with four colleagues we created the friday-evening conference
          for four years and had a blast in working with speakers from around
          the world as well as locals.
        </p>
        <p className="work__element__date">
          First conference done in 2014 - 2018
        </p>
      </div>
    </div>

    <div className="work__element">
      <a href="http://html5boilerplate.com/" className="work__element__image">
        <img src="/img/work/html5bp.png" alt="HTML5 Boilerplate" />
      </a>

      <div className="work__element__content">
        <h3>HTML5 Boilerplate</h3>
        <p>
          I am a member of the{" "}
          <a href="http://html5boilerplate.com/">HTML5 Boilerplate</a>{" "}
          developer&#8217;s team. It is the web&#8217;s most popular front-end
          template.
        </p>
        <p className="work__element__date">
          Part of development team 2012 - 2014
        </p>
      </div>
    </div>

    {/* <div className="work__element">
      <a href="http://use-init.com/" className="work__element__image">
        <img src="/img/work/init.png" alt="INIT" />
      </a>

      <div className="work__element__content">
        <h3>INIT</h3>
        <p><a href="http://use-init.com/">INIT</a> is an Open Source framework for front-end projects which adds a decent workflow utilizing Grunt, Bower and more.</p>
        <p className="work__element__date">Development since 2012</p>
      </div>
    </div> */}

    <div className="work__element">
      <a
        href="http://drublic.github.io/css-modal/"
        className="work__element__image"
      >
        <img src="/img/work/modal.png" alt="CSS Modal" />
      </a>

      <div className="work__element__content">
        <h3>
          CSS <span>Modal</span>
        </h3>
        <p>
          <a href="http://drublic.github.io/css-modal/">CSS Modal</a> is a modal
          overlay which can be used without JavaScript as a requirement. It is
          Open Source.
        </p>
        <p className="work__element__date">Development since 2013</p>
      </div>
    </div>
  </>
);

export default Community;
