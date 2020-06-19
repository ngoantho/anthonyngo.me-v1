const { Asset } = require("parcel-bundler");
const MarkdownIt = require("markdown-it");
const serializeObject = require("parcel-bundler/src/utils/serializeObject");

const Meta = require("markdown-it-meta");

class MarkdownAsset extends Asset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = "js";
    let md = new MarkdownIt("default", {
      html: true,
      linkify: true,
      typographer: true,
    }).use(Meta);
    this.md = md;
  }

  async parse(markdownString) {
    const html = this.md.render(markdownString);
    return {
      // eslint-disable-next-line object-shorthand
      html: html,
      meta: this.md.meta,
    };
  }

  generate() {
    return serializeObject(
      this.ast,
      this.options.minify && !this.options.scopeHoist
    );
  }
}

module.exports = MarkdownAsset;
