import { css, styled } from "goober";

import Link from "next/link";
import Project from "../project";
import useMedia from "use-media";
import { useState } from "react";

const S = {};
S.layout = {
  MainWrapper: styled("section")`
    display: flex;
    flex-direction: column;
    margin-bottom: 20vh;
  `,
  OverhangComp: styled("ul")`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-direction: column;
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
S.with = {};

const Projects = ({ data, masonryInitial = 6, ...props }) => {
  const [moreShown, setMoreShown] = useState(false);
  const isDesktop = useMedia("(min-width: 80rem)");
  const isTablet = useMedia("(min-width: 40rem) and (max-width: 80rem)");

  if (isDesktop && !moreShown) setMoreShown(true);

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
      <S.layout.OverhangComp>
        <li
          className={css`
            margin-bottom: 0;
          `}>
          <h2>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Some things I've built
          </h2>
        </li>
        <li
          className={css`
            margin: -1rem 0 3rem;
          `}>
          <Link href="/archive">
            <a href="/archive">view the archive</a>
          </Link>
        </li>
      </S.layout.OverhangComp>
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
          margin-top: 4rem;
        `}>
        <button
          className={[
            "button-outline",
            css`
              width: 50%;
              margin: auto;
              @media (min-width: 80rem) {
                display: none;
              }
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
