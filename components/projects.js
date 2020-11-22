import dynamic from "next/dynamic"

export default function Projects({ filenames }) {
  const Projects = filenames.map((name) =>
    dynamic(() => import(`../pages/projects/${name}`))
  )
  const metas = filenames.map(
    (name) => require(`../pages/projects/${name}`).meta
  )

  return (
    <>
      <div>
        <legend>Projects</legend>
        <hr className="hide-tablet" />
        <style jsx>{`
          div {
            display: flex;
            justify-content: flex-start;
            margin-bottom: 1rem;
          }
          legend {
            background: black;
            color: white;
            width: fit-content;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          hr {
            margin-left: 1rem;
            width: 25%;
            height: 1px;
            background: lightgray;
            border: 1px solid lightgray;
          }
        `}</style>
      </div>
      <div className="row root">
        <style jsx>{`
          .root {
            max-width: 60%;
            margin: 0 auto;
          }
        `}</style>
        {Projects.map((Project, i) => (
          <div key={i} className="col card">
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
