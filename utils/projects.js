import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const projectsDir = join(process.cwd(), "_content/projects")

function getProjectSlugs() {
  return fs.readdirSync(projectsDir)
}

function getProjectBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(projectsDir, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { content, data } = matter(fileContents)

  return { content, ...data }
}

export default function handler() {
  const slugs = getProjectSlugs()
  const projects = slugs.map((slug) => getProjectBySlug(slug))
  return projects
}
