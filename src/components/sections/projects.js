import styled from "astroturf";
import ProjectsCMS from "cms/projects.md";

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
    }

    tbody > tr {
      @media (--is-mobile) {
        display: flex;
        flex-direction: column;
      }

      td > em {
        display: block;
      }

      td:first-child {
        font-weight: bold;
        padding-bottom: 0;
        a {
          color: var(--text-main);
        }
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
