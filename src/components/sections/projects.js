import { css, styled } from "goober";

import Project from "../project";
import useMedia from "use-media";
import { useState } from "react";

const S = {};
S.layout = {
  MainWrapper: styled("section")`
    display: flex;
    flex-direction: column;
    margin-bottom: 10vh;
  `,
  OverlineComp: styled("ul")`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  `,
  Masonry: styled("div")`
    align-content: center;
    flex-wrap: wrap;

    @media (min-width: 80rem) {
      flex-direction: column !important;
    }

    @media (min-width: 40rem) and (max-width: 80rem) {
      margin-left: 10% !important;
    }

    @media (min-width: 40rem) {
      padding-left: 1rem !important;
      height: ${(props) => `${props.total * 100}px`};

      blockquote:nth-child(3n + 1) {
        order: 1;
      }
      blockquote:nth-child(3n + 2) {
        order: 2;
      }
      blockquote:nth-child(3n) {
        order: 3;
      }
    }

    &::before,
    &::after {
      content: "";
      flex-basis: 100%;
      width: 0;
      order: 2;
    }
  `,
};
S.with = {
  OverlineWrapper: styled("li")`
    /*
    counter-increment: item 1;
    &::before {
      content: "0" counter(item) ". ";
      text-align: right;
      font-size: 75%;
    }
    */
  `,
  OverlineLine: styled("li")`
    @media (min-width: 40rem) {
      border: 1px solid darkslategrey;
      height: 0.2rem;
      width: 25%;
      margin: 0 0 2rem 2rem;
    }
  `,
};

const Projects = ({
  data,
  masonryInitial = 6,
  showMoreButton = true,
  ...props
}) => {
  const [moreShown, setMoreShown] = useState(false);
  const isDesktop = useMedia("(min-width: 80rem)");
  const isTablet = useMedia("(min-width: 40rem) and (max-width: 80rem)");

  const { featuredProjects, allProjects } = data;
  const visibleFeaturedProjects = featuredProjects
    .filter(({ frontMatter: { visibleInProjects } }) => visibleInProjects)
    .reverse();
  const visibleAllProjects = allProjects
    .filter(({ frontMatter: { visibleInProjects } }) => visibleInProjects)
    .slice(0, !moreShown ? masonryInitial : allProjects.length)
    .reverse();

  return (
    <S.layout.MainWrapper {...props}>
      <S.layout.OverlineComp>
        <S.with.OverlineWrapper>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h2
            className={css`
              display: inline-block;
            `}>
            Some things I've built
          </h2>
        </S.with.OverlineWrapper>
        <S.with.OverlineLine />
      </S.layout.OverlineComp>
      <S.layout.Masonry
        className="row"
        total={visibleFeaturedProjects.length + visibleAllProjects.length}>
        {visibleFeaturedProjects.map(({ frontMatter, html }, i) => (
          <Project
            key={i}
            frontMatter={frontMatter}
            html={html}
            isTablet={isTablet}
            isDesktop={isDesktop}
            featured={true}
          />
        ))}
        {visibleAllProjects.map(({ frontMatter, html }, i) => (
          <Project
            key={i}
            frontMatter={frontMatter}
            html={html}
            isTablet={isTablet}
            isDesktop={isDesktop}
            featured={false}
          />
        ))}
      </S.layout.Masonry>
      <div
        className={css`
          display: grid;
          margin-top: 5rem;
        `}>
        <button
          className={[
            "button-outline",
            css`
              margin: auto;
              display: ${showMoreButton ? "initial" : "none"};
            `,
          ].join(" ")}
          onClick={() => setMoreShown(!moreShown)}>
          {!moreShown ? "show more" : "show less"}
        </button>
      </div>
    </S.layout.MainWrapper>
  );
};

export default Projects;
