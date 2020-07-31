import { join } from "path";
import markdownToHtml from "./mdToHtml";
import matter from "gray-matter";
import { promises } from "fs";
const { readdir, readFile } = promises;

async function getProjectBySlug(slug, dir) {
  const filePath = join(dir, slug);
  const fileContents = await readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const htmlContent = await markdownToHtml(content);

  return {
    frontMatter: { ...data },
    html: htmlContent,
  };
}

function getDateFromString(string) {
  let parts = string.split("-");
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

export async function getProjectsFrom(dir) {
  let slugs = await readdir(dir);
  let projects = await Promise.all(
    slugs
      .map((slug) => getProjectBySlug(slug, dir))
      .sort(async (projectA, projectB) => {
        const {
          frontMatter: { date: a },
        } = await projectA;
        const {
          frontMatter: { date: b },
        } = await projectB;
        if (typeof a === "number") return a - b;
        if (typeof a === "string")
          return getDateFromString(a) - getDateFromString(b);
        else return 0;
      })
  );

  return projects;
}

export * from "./parse";
