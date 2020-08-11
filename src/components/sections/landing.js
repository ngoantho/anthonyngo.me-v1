import { Link, Section } from "styles";
import { colors, config } from "theme";
import { css, styled } from "goober";
import { invert, lighten } from "polished";

const { email, commonMargin, commonTransition } = config;

const S = {};
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
  Core: styled("div")``,
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

  return (
    <S.layout.MainWrapper {...props}>
      <S.layout.CenterRow className="row">
        <S.layout.Core className="column">
          <S.with.SupTitle>{frontMatter.supTitle}</S.with.SupTitle>
          <S.with.Title>{frontMatter.title}</S.with.Title>
          <S.with.SubTitle>{frontMatter.subTitle}</S.with.SubTitle>
          <S.with.Blurb dangerouslySetInnerHTML={{ __html: html }} />
        </S.layout.Core>
        <aside className="row">
          <div
            className={[
              "column",
              css`
                @media (min-width: 40rem) {
                  padding-left: ${commonMargin}rem !important;
                }
              `,
            ].join(" ")}>
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
