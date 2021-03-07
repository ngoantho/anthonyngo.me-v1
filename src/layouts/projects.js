import {NextSeo} from "next-seo"

let ProjectsLayout = ({ children }) => {
  return (
    <main id="projects">
      {children}
      <NextSeo title="Projects" />
      <style jsx global>{`
      main#projects {
        & h1 {
          text-underline-offset: 1.2rem;
          text-decoration-thickness: 0.1rem;
        }
      }
      `}</style>
    </main>
  )
}

export default ProjectsLayout