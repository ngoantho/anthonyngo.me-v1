import { getProjectByFile, parse } from "./parse";

import { promises } from "fs";

const { readdir } = promises;

function getDateFromString(string) {
  let parts = string.split("-");
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

export async function getProjectsFrom(dir, featured = false) {
  const dirs = Array.isArray(dir) ? dir : [dir];

  let slugs = await Promise.all(
    dirs.map(async (dir) => [dir, await readdir(dir)])
  );
  let slugs2 = await Promise.all(
    slugs.map(
      async ([dir, slugList]) =>
        await Promise.all(
          slugList
            .filter((slug) => !/^(\.|_)/.test(slug))
            .map((slug) => parse(slug, dir, featured))
        )
    )
  );
  let projects = await Promise.all(
    slugs2.flat().sort(async (projectA, projectB) => {
      const {
        frontMatter: { date: a },
      } = await projectA;
      const {
        frontMatter: { date: b },
      } = await projectB;

      if (typeof a === "string") {
        return getDateFromString(a) - getDateFromString(b);
      } else {
        console.error(`Unknown date type: ${typeof a}`);
        return 0;
      }
    })
  );

  return projects;
}

export { getProjectByFile };
