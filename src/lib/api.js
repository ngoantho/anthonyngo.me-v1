import { getProjectByFile, parse } from "./parse";

import { promises } from "fs";

const { readdir } = promises;

function getDateFromString(string) {
  let parts = string.split("-");
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

export async function getProjectsFrom(dir) {
  let slugs = await readdir(dir);
  let projects = await Promise.all(
    slugs
      .map((slug) => parse(slug, dir))
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

export { getProjectByFile };
