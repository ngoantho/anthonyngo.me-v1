import styled from "astroturf";

import ProjectsCMS from "../projects.md";

let Styles = styled("section")`
  @import "../../styles/mixins.scss";
  @media (--not-mobile) {
    @include squeezeLess();
  }

  h2 {
    margin-top: 12px;
    margin-bottom: 0px;
    text-align: center;
  }

  table {
    table-layout: auto;

    thead > tr > th {
      &:not(:first-child):not(:last-child) {
        a {
          color: var(--text-main);
        }
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
