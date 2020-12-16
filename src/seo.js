import config, { contact } from "./config";
export default {
  description: config.description,
  canonical: `https://${config.url}`,
  twitter: {
    cardType: "summary",
    site: contact.Twitter.handle,
    handle: contact.Twitter.handle,
  },
  openGraph: {
    url: config.url,
    title: config.title,
    description: config.description,
    type: "profile",
    profile: {
      firstName: "Anthony",
      lastName: "Ngo",
      userName: "ngoantho",
      gender: "male",
    },
  },
  additionalMetaTags: [
    { name: "application-name", content: config.name },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    { name: "apple-mobile-web-app-title", content: config.name },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "msapplication-tap-highlight", content: "no" },
    { name: "author", content: config.name },
    { name: "keywords", content: config.keywords },
    { name: "copyright", content: config.name },
    { name: "creator", content: config.name },
    { name: "rating", content: "General" },
    { name: "coverage", content: "Worldwide" },
  ],
};
