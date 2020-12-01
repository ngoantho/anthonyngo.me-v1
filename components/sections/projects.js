import { styled } from "goober"

let Grid = styled("div")`
  display: flex;
  flex-wrap: wrap;
`

let Item = styled("div")`
  flex: 1 1 auto;
  margin: 1rem;
  width: calc(100% / 3);

  @media (max-width: 40rem) {
    width: 100%;
  }
`

export default function Projects({ data }) {
  return (
    <section>
      <h3 className="heading">Projects</h3>
      <Grid>
        {data &&
          data.map((project, i) => (
            <Item key={i}>
              <strong>
                {project.link ? (
                  <a href={project.link}>{project.title}↗</a>
                ) : (
                  `${project.title}`
                )}
              </strong>
              {project.content}
            </Item>
          ))}
      </Grid>
    </section>
  )
}
