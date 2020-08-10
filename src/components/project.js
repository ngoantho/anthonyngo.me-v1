import { Icon as BaseIcon, Link } from "styles";
import { colors, config, sizes } from "theme";

import { cx } from "utils/index";
import { lighten } from "polished";
import { styled } from "goober";

const { borderRadius, commonTransition } = config;

const S = {};
S.layout = {
  Base: styled("blockquote")`
    border-radius: ${borderRadius};
    border-left: 0px solid #000000;
    background-color: ${colors.tintLight};
    min-height: min-content;
    display: grid !important;
    transition: ${commonTransition};
    &:hover,
    &:focus {
      transform: translateY(-3px);
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
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
};
S.with = {
  HeaderType: styled("em")`
    font-family: "mono", monospace;
    font-size: ${sizes.xs};
    color: ${colors.tertiary};
  `,
  HeaderText: styled("h6")`
    color: ${lighten(0.7, "#000000")};
  `,
  Icon: styled(BaseIcon)`
    width: 100%;
    height: auto;
    @media (max-width: 40rem) {
      width: 50%;
    }
  `,
  FooterTags: styled("li")`
    color: ${lighten(0.7, "#000000")};
    font-size: ${sizes.s};
  `,
  FooterItem: styled("ul")`
    display: flex !important;
    list-style: none;
    margin-bottom: 0;
    &:first-child {
      flex-wrap: wrap;
      li {
        padding-right: 1.5rem;
      }
    }
    &:last-child {
      li {
        margin-bottom: 0;
      }
    }
  `,
};

export default function Project({
  frontMatter,
  html,
  isTablet,
  isDesktop,
  featured,
}) {
  return (
    <S.layout.Base
      tabIndex="0"
      className={cx("column", {
        "column-40": isTablet,
        "column-25": isDesktop,
      })}>
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
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
        <S.layout.FooterComp className="row">
          <S.with.FooterItem className="column column-75">
            {frontMatter.tags.map((tag, i) => (
              <S.with.FooterTags key={i}>{tag}</S.with.FooterTags>
            ))}
          </S.with.FooterItem>
          <S.with.FooterItem className="column column-25">
            <li>
              {frontMatter.github ? (
                <Link
                  href={`//github.com/ngoantho/${frontMatter.github}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer">
                  <S.with.Icon
                    src={require("public/icons/github-mark-light.png")}
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
                  <S.with.Icon
                    src={require("public/icons/external.png")}
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
