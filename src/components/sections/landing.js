import { Link, Section } from "styles";
import { colors, config } from "theme";
import { css, styled } from "goober";
import { invert, lighten } from "polished";
import { useEffect, useState } from "react";

import { cx } from "utils";

const { email, commonMargin, commonTransition, navDelay } = config;

const S = {
  timings: [100, 200, 300, 400],
};
S.layout = {
  MainWrapper: styled(Section)`
    justify-content: center;
    @media (min-width: 40rem) {
      margin-left: ${commonMargin * 1.25}rem;
    }
  `,
  CenterRow: styled("div")`
    flex-direction: column !important;
  `,
};
S.with = {
  SupTitle: styled("h4")`
    margin-bottom: 0;
    font-family: "mono", monospace;
    font-size: smaller;
    color: ${lighten(0.35, colors.quaternary)};
    @media (min-width: 40rem) {
      font-size: initial;
    }
  `,
  Title: styled("h1")`
    margin-bottom: 0;
    text-shadow: ${invert(colors.quaternary)} 0px ${commonMargin}px
      ${commonMargin}px;
    font-weight: 500;
  `,
  SubTitle: styled("h2")`
    color: ${lighten(0.7, "#000000")};
  `,
  Blurb: styled("div")`
    p {
      @media (min-width: 40rem) {
        font-size: larger;
      }
      a {
        transition: ${commonTransition};
        text-decoration: underline;
      }
    }
  `,
};

const Landing = ({ data, ...props }) => {
  const { frontMatter, html } = data;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mountId = setTimeout(() => {
      setMounted(true);
    }, navDelay / 2);
    return () => clearTimeout(mountId);
  }, []);

  return (
    <S.layout.MainWrapper {...props}>
      <S.layout.CenterRow className="row">
        <div className="column">
          <S.with.SupTitle className={cx("fadeup", mounted && "active")}>
            {frontMatter.supTitle}
          </S.with.SupTitle>
          <S.with.Title
            className={cx("fadeup", mounted && "active")}
            style={{
              transitionDelay: `${S.timings[0]}ms`,
            }}>
            {frontMatter.title}
          </S.with.Title>
          <S.with.SubTitle
            className={cx("fadeup", mounted && "active")}
            style={{
              transitionDelay: `${S.timings[1]}ms`,
            }}>
            {frontMatter.subTitle}
          </S.with.SubTitle>
          <S.with.Blurb
            className={cx("fadeup", mounted && "active")}
            style={{
              transitionDelay: `${S.timings[2]}ms`,
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <aside className="row">
          <div
            style={{
              transitionDelay: `${S.timings[3]}ms`,
            }}
            className={cx(
              "column",
              "fadeup",
              mounted && "active",
              css`
                @media (min-width: 40rem) {
                  padding-left: ${commonMargin}rem !important;
                }
              `
            )}>
            <Link href={`mailto:${email}`} className="button button-outline">
              get in touch
            </Link>
          </div>
        </aside>
      </S.layout.CenterRow>
    </S.layout.MainWrapper>
  );
};

export default Landing;
