/* @jsx jsx */
import { css, jsx } from "@emotion/core";

// import { fadeInUp } from "styles/anims";
import { withConfig } from "utils";

const FeaturedProjects = ({ posts, config, ...props }) => {
  return (
    <section {...props} css={styles(config)}>
      <ol name="overline-wrap">
        <li name="overline-wrap_item">
          {/* eslint-disable react/no-unescaped-entities */}
          <h2 name="overline-bc">Some things I've built</h2>
        </li>
        <div name="overline" />
      </ol>
    </section>
  );
};

const styles = (context) => css`
  display: flex;
  flex-direction: column;
  ${context.fullPage ? "min-height: 100vh" : ""}

  [name="overline-wrap"] {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

    [name="overline-wrap_item"] {
      counter-increment: item 1;
      & > [name="overline-bc"] {
        display: inline-block;
      }

      &::before {
        content: "0" counter(item) ". ";
        text-align: right;
      }
    }

    [name="overline"] {
      @media (min-width: ${context.overlineVisibilityCutoff}) {
        border: 1px solid lightgrey;
        height: 0.2rem;
        width: ${context.overlineWidth};
        margin: 0 0 2rem 2rem;
      }
    }
  }
`;

export default withConfig(FeaturedProjects, {
  fullPage: true,
  overlineVisibilityCutoff: "36rem",
  overlineWidth: "35%",
});
