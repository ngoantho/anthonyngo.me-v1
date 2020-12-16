import styled from "astroturf";

import ProjectsCMS from "../cms/projects.md";

let Styles = styled("section")`
  @import "../../styles/mixins.scss";
  @media (--not-mobile) {
    @include squeezeLess();
  }

  table {
    table-layout: auto;

    thead > tr > th {
      h1 {
        margin-top: 0px;
        margin-bottom: 0px;
        transform: scale(0.75) translate(-15%, 15%);
      }
      &:last-child {
        vertical-align: bottom;
      }
    }

    tbody > tr > td {
      &:first-child {
        font-weight: bold;
        a {
          color: var(--text-main);
        }
      }
      &:last-child {
        font-family: "mono";
        transform: scale(0.85);
      }
    }
  }
`;

export default function Projects({ ...props }) {
  return (
    <Styles {...props}>
      <ProjectsCMS />
    </Styles>
  );
}
