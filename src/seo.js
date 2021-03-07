import config, { socials } from "./config"

export default {
  titleTemplate: `%s - ${config.name()}`,
  defaultTitle: config.name(),
  description: config.description,
  canonical: config.url,
  twitter: {
    cardType: "summary",
    site: socials.twitter,
    handle: socials.twitter,
  },
  openGraph: {
    site_name: config.name(),
    type: "profile",
    profile: {
      firstName: config.first,
      lastName: config.last,
      userName: socials.ograph,
      gender: "male",
    },
  },
  additionalMetaTags: [
    { name: "application-name", content: config.name() },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    { name: "apple-mobile-web-app-title", content: config.name() },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "msapplication-tap-highlight", content: "no" },
    { name: "author", content: config.name() },
    { name: "keywords", content: config.keywords },
    { name: "copyright", content: config.name() },
    { name: "creator", content: config.name() },
    { name: "rating", content: "General" },
    { name: "coverage", content: "Worldwide" },
  ],
}
