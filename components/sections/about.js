/* eslint-disable react/no-unescaped-entities */

import { contact } from "seo.config"
import { styled } from "goober"

let ContactButton = styled("input")`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background-color: ${(props) => props.color} !important;
  border-color: ${(props) => props.color} !important;
`

export default function About() {
  return (
    <section>
      <h3 className="heading">About Me</h3>
      <div className="row">
        <div className="column">
          <p>
            Hello! I'm Anthony, a computer science student based in Seattle, WA.
            I'm currently a junior studying at{" "}
            <a href="//seattleu.edu">Seattle University</a>, completing my
            Bachelor's Degree in Computer Science.
          </p>
        </div>
        <div className="column">
          {Object.entries(contact).map(([key, value], i) => (
            <a key={i} href={value.url}>
              <ContactButton type="submit" value={key} color={value.color} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
