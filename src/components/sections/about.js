/* eslint-disable react/prop-types */

import { borderRadius, commonMargin, commonTransition } from "theme";
import { css, styled } from "goober";
import { cx, useOnScreen } from "utils";

import { CoreSection } from "styles";
import useMedia from "use-media";
import { useRef } from "react";

const S = {
  MainWrapper: styled(CoreSection)`
    .row {
      @media (min-width: 40rem) {
        padding: 0 ${commonMargin * 2.5}rem;
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
  AvatarLink: styled("a")`
    border-radius: ${borderRadius};

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
    }
  `,
};

const About = ({ data, ...props }) => {
  const { frontMatter, html } = data;
  const notMobile = useMedia("(min-width: 40rem)");
  const ref = useRef(null);
  const visible = useOnScreen(ref, "50%");

  return (
    <S.MainWrapper className={cx("fadeup", visible && "active")} {...props}>
      <div className="row row-center" ref={ref}>
        <strong
          className={cx(
            !notMobile &&
              css`
                &::after {
                  content: "";
                  display: inline-block;
                  position: relative;
                  top: -1rem;
                  height: 1px;
                  width: 100%;
                  background: darkslategray;
                }
              `
          )}>
          Q & A
        </strong>
        <blockquote className={cx("column", notMobile && "column-50")}>
          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        </blockquote>
        <S.PicComp className="column">
          <S.AvatarLink href="//github.com/ngoantho">
            <S.Avatar>
              <source
                srcSet={require(`public/${frontMatter.avatar}?webp`)}
                type="image/webp"
              />
              <source
                srcSet={require(`public/${frontMatter.avatar}`)}
                type="image/png"
              />
              <img src={require(`public/${frontMatter.avatar}`)} alt="Me" />
            </S.Avatar>
          </S.AvatarLink>
        </S.PicComp>
      </div>
    </S.MainWrapper>
  );
};

export default About;
