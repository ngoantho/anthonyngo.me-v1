import { borderRadius, commonMargin, commonTransition } from "config";
import { css, styled } from "goober";
import { cx, useOnScreen } from "utils/index";

import { Section } from "styles";
// import { colors } from "theme"
import useMedia from "use-media";
import { useRef } from "react";

const S = {
  layout: {
    MainWrapper: styled(Section)`
      .row {
        @media (min-width: 40rem) {
          margin-left: ${commonMargin * 1.25}rem;
          padding-right: ${commonMargin * 2.5}rem;
        }
      }
    `,
    Header: styled("ul")`
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      flex-direction: column;
      margin: 0;
      padding: 0;

      li.line {
        height: 1px;
        width: 25%;
        background-color: darkslategray;
      }

      @media (min-width: 40rem) {
        justify-content: flex-start;
        flex-direction: row;
        margin-left: ${commonMargin * 1.25}rem;

        li.line {
          margin: 0 0 ${commonMargin}rem ${commonMargin}rem;
        }
      }
    `,
    PicComp: styled("div")`
      display: grid !important;

      a {
        margin: auto;
        &:focus {
          outline: 0;
        }
      }
    `,
  },
  with: {
    AvatarLink: styled("a")`
      border-radius: ${borderRadius};
      background-color: var(--colors-accent);
      display: grid;

      &:hover,
      &:focus {
        picture > img {
          mix-blend-mode: normal;
          filter: none;
          transform: translateY(-3px);
        }
      }
    `,
    Avatar: styled("picture")`
      & > img {
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1);
        border-radius: ${borderRadius};
        transition: ${commonTransition};
        height: 100%;
      }
    `,
  },
};

const About = ({ data, ...props }) => {
  const { frontMatter, html } = data;
  const ref = useRef(null);
  const visible = useOnScreen(ref, "75%");

  const breakpoint = useMedia("(min-width: 60rem)");

  return (
    <S.layout.MainWrapper
      className={cx("fadeup", visible && "active")}
      {...props}>
      <S.layout.Header>
        <li
          className={css`
            margin-bottom: 0;
          `}>
          <h2>{frontMatter.title}</h2>
        </li>
        <li className="line" />
      </S.layout.Header>
      <div className="row row-center" ref={ref}>
        <div
          className="column column-50"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
        <S.layout.PicComp
          className={cx("column", breakpoint ? "column-33" : "column-40")}>
          <S.with.AvatarLink href="//github.com/ngoantho">
            <S.with.Avatar>
              <source
                srcSet={require(`public/${frontMatter.avatar}?webp`)}
                type="image/webp"
              />
              <source
                srcSet={require(`public/${frontMatter.avatar}`)}
                type="image/png"
              />
              <img src={require(`public/${frontMatter.avatar}`)} alt="Me" />
            </S.with.Avatar>
          </S.with.AvatarLink>
        </S.layout.PicComp>
      </div>
    </S.layout.MainWrapper>
  );
};

export default About;
