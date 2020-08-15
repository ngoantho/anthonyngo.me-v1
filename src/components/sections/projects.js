import { Link as BaseLink, Section } from "styles";
import { colors, config } from "theme";
import { css, styled } from "goober";
import { cx, useOnScreen } from "utils";
import { useEffect, useRef, useState } from "react";

import NextLink from "next/link";
import Project from "../project";
import useMedia from "use-media";

const { commonMargin, commonTransition } = config;

const S = {
  layout: {
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
          transition-delay: 100ms;
          margin: 0 0 ${commonMargin}rem ${commonMargin}rem;
        }
      }
    `,
    Masonry: styled("div")`
      align-content: center;
      flex-wrap: wrap;
      transition: ${commonTransition};

      @media (min-width: 80rem) {
        flex-direction: column !important;
        padding: 0 50px !important;
        height: ${(props) => `${Number(props.total) * 100}px`};
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
        padding-left: 10% !important;
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
  },
};

const Projects = ({ data, masonryInitial = 6, ...props }) => {
  const [moreShown, setMoreShown] = useState(false);
  const isDesktop = useMedia("(min-width: 80rem)");
  const isTablet = useMedia("(min-width: 40rem) and (max-width: 80rem)");

  useEffect(() => {
    if (isDesktop && !moreShown) setMoreShown(true);
  }, [isDesktop]);
  useEffect(() => {
    if (isTablet && moreShown) setMoreShown(false);
  }, [isTablet]);

  const refTitle = useRef(null);
  const refArchiveLink = useRef(null);
  const refMoreButton = useRef(null);

  const titleOnScreen = useOnScreen(refTitle);
  const archiveLinkOnScreen = useOnScreen(refArchiveLink, "-25px");
  const moreButtonOnScreen = useOnScreen(refMoreButton);

  const { featuredProjects, allProjects } = data;
  const projects = [...featuredProjects, ...allProjects].filter(
    ({ frontMatter: { visibleInProjects } }) => visibleInProjects
  );
  const trimmed = projects.slice(0, masonryInitial);
  const projectsToShow = moreShown ? projects : trimmed;
  const total = projectsToShow.length;

  return (
    <S.layout.MainWrapper {...props}>
      <S.layout.OverhangComp>
        <li
          className={css`
            margin-bottom: 0;
          `}>
          <h2
            ref={refTitle}
            className={cx("fadeup", titleOnScreen && "active")}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Some things I've built
          </h2>
        </li>
        <li
          ref={refArchiveLink}
          className={cx(
            "archive-link",
            "fadeup",
            archiveLinkOnScreen && "active"
          )}>
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
      <S.layout.Masonry className="row" total={total}>
        {projectsToShow.map(({ frontMatter, html, featured }, i) => (
          <Project
            key={i}
            frontMatter={frontMatter}
            html={html}
            isTablet={isTablet}
            isDesktop={isDesktop}
            featured={featured}
            index={i}
          />
        ))}
      </S.layout.Masonry>
      <div
        className={css`
          display: grid;
          margin-top: ${commonMargin}rem;
        `}>
        {total >= masonryInitial ? (
          <button
            ref={refMoreButton}
            className={cx(
              "button-outline",
              "fadeup",
              moreButtonOnScreen && "active",
              css`
                width: 25%;
                margin: auto;
                transition: ${commonTransition};
                @media (min-width: 80rem) {
                  display: none;
                }
              `
            )}
            onClick={() => setMoreShown(!moreShown)}>
            {!moreShown ? "show more" : "show less"}
          </button>
        ) : null}
      </div>
    </S.layout.MainWrapper>
  );
};

export default Projects;
