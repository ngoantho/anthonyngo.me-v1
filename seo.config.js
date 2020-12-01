export const common = {
  name: "Anthony Ngo",
  email: "contact@anthonyngo.me",
  location: "Seattle, WA",
  language: "en-US",
  description:
    "Anthony Ngo is a current computer science student studying at Seattle University, who is passionate about making open source software, creating technology to help others, and building a better future.",
  keywords:
    "Anthony Ngo, Anthony, Ngo, ngoantho, internship, software engineer, javascript, SeattleU",
  url: "anthonyngo.me",
}

export const contact = {
  LinkedIn: {
    url: "https://www.linkedin.com/in/anthongo/",
    color: "dodgerblue",
  },
  GitHub: {
    url: "https://github.com/ngoantho",
    color: "lightgray",
  },
  Instagram: {
    url: "https://www.instagram.com/ant.ngo_1/",
    color: "lightpink",
  },
  Twitter: {
    url: "https://twitter.com/@vadlus",
    color: "lightskyblue",
    handle: "@vadlus",
  },
}

export default {
  description: common.description,
  canonical: common.url,
  twitter: {
    cardType: "summary",
    site: contact.Twitter.handle,
    handle: contact.Twitter.handle,
  },
  openGraph: {
    url: common.url,
    title: common.title,
    description: common.description,
    type: "profile",
    profile: {
      firstName: "Anthony",
      lastName: "Ngo",
      userName: "ngoantho",
      gender: "male",
    },
  },
  additionalMetaTags: [
    { name: "application-name", content: common.name },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    { name: "apple-mobile-web-app-title", content: common.name },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "msapplication-tap-highlight", content: "no" },
    { name: "author", content: common.name },
    { name: "keywords", content: common.keywords },
    { name: "copyright", content: common.name },
    { name: "creator", content: common.name },
    { name: "rating", content: "General" },
    { name: "coverage", content: "Worldwide" },
  ],
}
