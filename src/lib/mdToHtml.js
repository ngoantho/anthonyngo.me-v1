import attr from "remark-attr";
import html from "remark-html";
import remark from "remark";

export default async function markdownToHtml(markdown) {
  const result = await remark().use(attr).use(html).process(markdown);
  return result.toString();
}
