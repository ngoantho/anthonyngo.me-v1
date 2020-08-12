import { Link as BaseLink, Section } from "styles";
import { colors, config } from "theme";
import { css, styled } from "goober";
import { useEffect, useState } from "react";

import NextLink from "next/link";
import Project from "../project";
import useMedia from "use-media";

const { commonMargin, commonTransition } = config;

const S = {};
S.layout = {
  MainWrapper: styled(Section)``,
  OverhangComp: styled("ul")`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (min-width: 40rem) {
      flex-direction: row;
      justify-content: flex-start;
      margin-left: ${commonMargin * 1.25}rem;

      li.archive-link {
        margin: 0 0 ${commonMargin}rem ${commonMargin}rem;
      }
    }
  `,
  Masonry: styled("div")`
    align-content: center;
    flex-wrap: wrap;

    @media (min-width: 80rem) {
      flex-direction: column !important;
      padding: 0 50px !important;
      height: ${(props) => `${Number(props.total) * 45}px`};
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

    @media (min-width: 40rem) and (max-width: 80rem) {
      padding-left: 20% !important;
      blockquote:nth-child(2n + 1) {
        order: 1;
      }
      blockquote:nth-child(2n) {
        order: 2;
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

  useEffect(() => {
    if (isDesktop && !moreShown) setMoreShown(true);
  }, [isDesktop]);

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
        <li className="archive-link">
          <NextLink href="/archive" passHref>
            <BaseLink
              className={css`
                color: ${colors.tertiary};
              `}>
              view the archive
            </BaseLink>
          </NextLink>
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
          margin-top: ${commonMargin}rem;
        `}>
        <button
          className={[
            "button-outline",
            css`
              width: 50%;
              margin: auto;
              transition: ${commonTransition};
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
