/* eslint-disable react/prop-types */
import { commonMargin, commonTransition, navDelay } from "theme";
import { css, styled } from "goober";
import { cx, useOnScreen } from "utils";
import { useEffect, useRef, useState } from "react";

import { Link as BaseLink } from "styles";
import NextLink from "next/link";
import Project from "../project";
import useMedia from "use-media";

const S = {
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

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const mountId = setTimeout(() => {
      setMounted(true);
    }, navDelay * 0.75);
    return () => clearTimeout(mountId);
  }, []);

  const refMoreButton = useRef(null);
  const moreButtonOnScreen = useOnScreen(refMoreButton);

  const { featuredProjects, allProjects } = data;
  const projects = [...featuredProjects, ...allProjects].filter(
    ({ frontMatter: { visibleInProjects } }) => visibleInProjects
  );
  const trimmed = projects.slice(0, masonryInitial);
  const projectsToShow = moreShown ? projects : trimmed;
  const total = projectsToShow.length;

  return (
    <div {...props}>
      <S.Masonry
        className={cx("row", "fadeup", mounted && "active")}
        total={total}>
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
      </S.Masonry>
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
        <div
          className={css`
            margin: auto;
            padding-top: ${commonMargin / 2}rem;
            transition: ${commonTransition};
          `}>
          {moreShown ? (
            <NextLink href="/archive" passHref>
              <BaseLink>view the archive</BaseLink>
            </NextLink>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Projects;
