import sitemap from "../next-sitemap"

export let socials = {
  twitter: "@vadlus",
  ograph: "ngoantho",
  email: "hi@anthonyngo.me",
}

export default {
  first: "Anthony",
  last: "Ngo",
  name: function () {
    return `${this.first} ${this.last}`
  },
  email: socials.email,
  location: "Seattle, WA",
  language: "en-US",
  keywords:
    "Anthony Ngo, Anthony, Ngo, ngoantho, internship, software engineer, SeattleU",
  description: "",
  url: sitemap.siteUrl,
}
