import styled from "astroturf";
import ReadMeCMS from "cms/readme.md";

let Styles = styled("section")`
  @import "../../styles/mixins.scss";
  @include flexColumn();
  @media (--not-mobile) {
    @include squeeze();
  }

  img {
    border-radius: 50%;
    margin-top: 10px;
  }

  h1 {
    margin-top: 12px;
    text-align: center;
  }

  p {
    margin-top: 6px;
    margin-bottom: 6px;

    &:first-child {
      margin: 0 auto;
    }
  }

  ul {
    @include fancyList();
    columns: 2;
  }
`;

export default function ReadMe({ ...props }) {
  return (
    <Styles {...props}>
      <ReadMeCMS />
    </Styles>
  );
}
