import dynamic from "next/dynamic"
import Section from "./section"

export default function Projects({ projects, metas }) {
  const Projects = projects.map((name) =>
    dynamic(() => import(`../pages/projects/${name}`))
  )

  return (
    <>
      <Section name="Projects" />
      <div className="root">
        <style jsx>{`
          .root {
            display: flex;
            flex-wrap: wrap;
          }
          .item {
            flex: 1 1 auto;
            margin: 1rem;
            width: calc(100% / 3);
          }
          @media (max-width: 40rem) {
            .item {
              width: 100%;
            }
          }
        `}</style>
        {Projects.map((Project, i) => (
          <div key={i} className="item card">
            {metas[i].link ? (
              <a href={metas[i].link}>
                <strong>{metas[i].header}</strong>
              </a>
            ) : (
              <strong>{metas[i].header}</strong>
            )}
            <Project />
          </div>
        ))}
      </div>
    </>
  )
}
