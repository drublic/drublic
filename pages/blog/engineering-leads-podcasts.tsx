import React from "react";
import useSWR from "swr";
import Post from "../../lib/blog/post";
import fetcher from "../../lib/utils/fetcher";

const data = [
  {
    link: "https://alphalist.com/podcast",
    image: "/assets/alphalist.jpeg",
    title: "alphalist.CTO Podcast - For CTOs and Technical Leaders",
    author: "Tobias Schlottke - OMR",
    comment:
      "Learn from the best in the branch like the CTO of GitHub, CloudFlare or HashiCorp how they handle engineering challanges.",
    spotify: "https://open.spotify.com/show/08QvFNH32V1yRiwfNQhTYx",
    apple: "https://podcasts.apple.com/podcast/id1512227295",
  },
  {
    link: "https://techleadjournal.dev/",
    image: "/assets/techlead-journal.png",
    title: "TechLead.Journal()",
    author: "Henry Suryawirawan",
    comment:
      "Technical leadership requires more than just coding skills. This podcast provides you with it and covers technical topics as well as leadership advice.",
    spotify: "https://open.spotify.com/show/5suS91H6OfqDt14ZsOD4RV",
    apple: "https://podcasts.apple.com/podcast/id1523421550",
  },
  {
    link: "https://www.vox.com/land-of-the-giants-podcast",
    image: "/assets/landofthegiants.png",
    title: "Land of the Giants",
    author: "Recode",
    comment:
      "Understanding large technical companies like Apple, Google or Netflix helps in understanding the technical landscape better. This podcast tells you the stories behind these companies.",
    spotify:
      "https://open.spotify.com/show/6DdYNi0EakNKPDuONnWiam?si=44o2wrc-SiWLaadgZfTdaQ&nd=1",
    apple:
      "https://podcasts.apple.com/us/podcast/land-of-the-giants/id1465767420",
  },
  {
    link: "https://open.spotify.com/show/6fMfv0yrsDKOnpLfxwqJek?si=TS5NgKSaR3G8GdA8VMATlg&dl_branch=1&nd=1",
    image: "/assets/blt.jpeg",
    title: "The BLT Podcast",
    author: "Anjo Gaul",
    comment:
      "A faily new podcast is The BLT Podcast that interviews technical leaders to discover the human side of technology.",
    spotify:
      "https://open.spotify.com/show/6fMfv0yrsDKOnpLfxwqJek?si=TS5NgKSaR3G8GdA8VMATlg&dl_branch=1&nd=1",
  },
  {
    link: "https://www.infoq.com/the-infoq-podcast/",
    image: "/assets/infoq.jpeg",
    title: "The InfoQ Podcast",
    author: "InfoQ",
    comment:
      "The InfoQ Podcast is a technical podcast that discusses software architecutre questions with guests like Sam Newman and others.",
    spotify: "https://open.spotify.com/show/4NhWaYYpPWgWRDAOqeRQbj",
    apple:
      "https://podcasts.apple.com/us/podcast/the-infoq-podcast/id1106971805",
  },
  {
    link: "https://software-architektur.tv/",
    image: "/assets/softwarearchitekturimstream.jpg",
    title: "[German] Software Architektur im Stream",
    author: "Eberhard Wolff",
    comment:
      "One addition in German language: This fantastic podcast by Eberhard Wolff tackles wide ranging topics in the realm of Software Archtitecture like Micro Services, organising collaboration and the role of a Software Architect.",
    spotify: "https://open.spotify.com/show/7ySg1eZoWYBshd6QpGaW8B",
    apple:
      "https://podcasts.apple.com/us/podcast/softwarearchitektur-im-stream/id1538545458",
  },
];

const template = ({ link, image, title, author, comment, spotify, apple }) => `
    <li class="article58-list-item">
      <div class="article58-content">
        <a href=${link}><img src=${image} alt="" class="article58-cover"></a>

        <div>
          <a href="${link}">
            <p class="article58-title"><b>${title}</b><br />
            ${author}</p>
          </a>

          <p><a href="${spotify}">Spotify</a> ${
  apple ? `&bull; <a href="${apple}">Apple Podcasts</a>` : ""
}</p>
        </div>
      </div>

      <p>${comment}</p>
    </li>
    `;

const BlogPost = () => {
  const { data: posts, error: postsError } = useSWR("/api/posts", fetcher);
  const { data: post, error } = useSWR(
    `/api/posts/engineering-leads-podcasts`,
    fetcher
  );

  if (!post) {
    return null;
  }

  const renderedData = data.map(template);

  return (
    <Post post={post} posts={posts}>
      <div className="post__intro">
        <p>
          In the last years my career took a turn into the direcation of
          technical management. While I listen to a lot of podcasts on a daily
          basis I started to collect a list of podcasts that help me stear
          through my work.
        </p>
      </div>

      <p>
        Here is a list of podcasts for engineering managers, tech leaders and
        software architects.
      </p>

      <style
        dangerouslySetInnerHTML={{
          __html: `
.article58-list {
  list-style: none;
  padding-left: 0;
  margin-top: 3rem;
  border-top: 1px solid var(--border-color);
}

.article58-list-item {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.article58-content {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.article58-list-item a {
  border-bottom: 0;
}

.article58-cover {
  border-radius: 0.25rem;
  width: 6rem;
  height: 6rem;
  margin-right: 1.5rem;
}

.article58-title {
  margin-bottom: 0.5rem;
}`,
        }}
      />

      <ul
        className="article58-list"
        dangerouslySetInnerHTML={{ __html: renderedData.join("") }}
      ></ul>

      <p>
        Any good additions that you have on your list? Please share it with me
        via <a href="https://twitter.com/drublic">@drublic on Twitter</a>.
      </p>
    </Post>
  );
};

export default BlogPost;
