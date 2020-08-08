import { join } from "path";
import markdownToHtml from "./mdToHtml";
import matter from "gray-matter";
import { promises } from "fs";
const { readFile } = promises;

export async function parse(file, dir = "") {
  const filePath = join(dir, file);
  const fileContents = await readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const htmlContent = await markdownToHtml(content);

  return {
    html: htmlContent,
    frontMatter: { ...data },
  };
}

export async function getProjectByFile(filePath) {
  return await parse(`${filePath}`);
}
