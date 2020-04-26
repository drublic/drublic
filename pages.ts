export interface PageInterface {
  title: string;
  action: string;
  content?: string;
}

export const PAGES: PageInterface[] = [{
  title: "Homepage",
  action: "/",
  content: "index",
}, {
  title: "About",
  action: "/resume",
  content: "resume",
}, {
  title: "Privacy",
  action: "/privacy",
  content: "privacy",
}, {
  title: "Legal",
  action: "/Legal",
  content: "legal",
}, {
  title: "Information page",
  action: "/info",
  content: "about-info",
}, {
  title: "Portfolio",
  action: "/portfolio",
  content: "portfolio",
}, {
  title: "Blog",
  action: "/blog",
  content: "blog",
}, {
  title: "Blog",
  action: "/blog/:id",
  content: "post",
}, {
  title: "What I want to do",
  action: "/what-i-want-to-do",
  content: "what-i-want-to-do",
}, {
  title: "Podcasting",
  action: "/podcasting",
  content: "podcasting",
}, {
  title: "Error",
  action: "/404",
  content: "error",
}, {
  title: "Contact Form",
  action: "/form",
}];
