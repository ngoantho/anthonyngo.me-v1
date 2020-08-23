/* eslint-disable react/prop-types */
import { Icon, Link } from "styles";
import {
  borderRadius,
  colors,
  commonMargin,
  commonTransition,
  sizes,
} from "theme";
import { css, styled } from "goober";
import { cx, useOnScreen } from "utils/index";

import { darken } from "polished";
import { lighten } from "polished";
import { useRef } from "react";

const MULT = 0.3;

const S = {
  layout: {
    Base: styled("blockquote")`
      border-radius: ${borderRadius};
      border-left: 0px solid #000000;
      background: ${colors.primary};
      min-height: min-content;
      display: grid !important;
      transition: ${commonTransition};
      &:hover,
      &:focus {
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
        transform: translateY(-3px);
      }
      @media (min-width: 40rem) {
        margin-right: 1%;
      }
    `,
    PreviewComp: styled("picture")`
      grid-row: 1;
      grid-column: 1;
      opacity: 0.1;
      pointer-events: none;
      display: grid;

      & > img {
        border-radius: 1rem;
        margin-top: auto;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: auto !important;
      }
    `,
    ContentComp: styled("div")`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      grid-row: 1;
      grid-column: 1;

      main {
        margin: ${commonMargin * 1.5}rem 0;

        p > a {
          transition: ${commonTransition};
        }
      }

      &.hasPreview__featured {
        padding-left: 0.5rem;
      }
      &.hasPreview__regular {
        padding: 0.5rem 0.5rem 0 0.5rem;
      }
    `,
    FooterComp: styled("footer")`
      flex-direction: row !important;
    `,
  },
  with: {
    HeaderType: styled("em")`
      font-family: "mono", monospace;
      font-size: ${sizes.xs};
      color: ${darken(0.3, colors.quaternary)};
    `,
    HeaderText: styled("h6")`
      color: ${lighten(MULT, "#000000")};
    `,
    Icon: css`
      width: 50%;
      height: auto;
      @media (min-width: 40rem) and (max-width: 80rem) {
        width: 75%;
      }
      @media (min-width: 80rem) {
        width: 100%;
      }
    `,
    FooterTags: styled("li")`
      color: ${lighten(MULT * 2, "#000000")};
      font-size: 1.2rem;
    `,
    FooterItem: styled("ul")`
      display: flex !important;
      list-style: none;
      margin-bottom: 0;
      &:first-child {
        flex-wrap: wrap;
        li {
          padding-right: 1rem;
        }
      }
      &:last-child {
        li {
          margin-bottom: 0;
        }
      }
    `,
  },
};

export default function Project({
  frontMatter,
  html,
  isTablet,
  isDesktop,
  featured,
  index,
}) {
  const ref = useRef(null);
  const visible = useOnScreen(ref, "25%");

  return (
    <S.layout.Base
      tabIndex="0"
      className={cx("column", "fadeup", visible && "active", {
        "column-45": isTablet,
        "column-30": isDesktop,
      })}
      style={{
        transitionDelay: `${(index + 1) * 10}ms`,
      }}>
      {frontMatter.preview ? (
        <S.layout.PreviewComp>
          <source
            srcSet={require(`public/${frontMatter.preview}?webp`)}
            type="image/webp"
          />
          <source
            srcSet={require(`public/${frontMatter.preview}`)}
            type="image/png"
          />
          <img
            src={require(`public/${frontMatter.preview}`)}
            alt={frontMatter.preview}
          />
        </S.layout.PreviewComp>
      ) : null}
      <S.layout.ContentComp
        className={cx({
          hasPreview__regular: frontMatter.preview && !featured,
          hasPreview__featured: frontMatter.preview && featured,
        })}>
        <header>
          {featured ? <S.with.HeaderType>Highlighted</S.with.HeaderType> : null}
          <S.with.HeaderText>
            <strong>{frontMatter.title}</strong>
          </S.with.HeaderText>
        </header>
        <main
          ref={ref}
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
        <S.layout.FooterComp className="row">
          <S.with.FooterItem className="column column-80">
            {frontMatter.tags &&
              frontMatter.tags.map((tag, i) => (
                <S.with.FooterTags key={i}>{tag}</S.with.FooterTags>
              ))}
          </S.with.FooterItem>
          <S.with.FooterItem className="column column-20">
            <li>
              {frontMatter.github ? (
                <Link
                  href={`//github.com/${frontMatter.github}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer">
                  <Icon
                    className={S.with.Icon}
                    src="icons/github-mark.png"
                    alt={frontMatter.github}
                  />
                </Link>
              ) : null}
            </li>
            <li>
              {frontMatter.external ? (
                <Link
                  href={`//${frontMatter.external}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer">
                  <Icon
                    className={S.with.Icon}
                    src="icons/external.png"
                    alt={frontMatter.external}
                  />
                </Link>
              ) : null}
            </li>
          </S.with.FooterItem>
        </S.layout.FooterComp>
      </S.layout.ContentComp>
    </S.layout.Base>
  );
}
