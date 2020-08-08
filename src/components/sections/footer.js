import { colors, config, sizes } from "theme";
import { css, styled } from "goober";

import { cx } from "utils";
import useMedia from "use-media";

const { contactMe } = config;

const S = {};
S.layout = {
  Container: styled("footer")`
    padding: 1.5rem !important;
    text-align: center;
  `,
  Finale: styled("div")`
    font-family: "mono", monospace;
    font-size: ${sizes.s};
    line-height: 1;
    @media (max-width: 40rem) {
      margin-bottom: 2rem;
    }
  `,
  Social: styled("div")`
    color: ${colors.primary};
    margin: 0 auto 1rem;
    @media (min-width: 72.5rem) {
      display: none !important;
    }
  `,
};
S.with = {
  FinaleGithubLink: styled("a")`
    padding: 1rem;
    color: ${colors.primary};
  `,
  SocialList: styled("ul")`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    margin-bottom: 0;
  `,
  SocialLink: styled("a")`
    padding: 1rem;
  `,
};

const Footer = ({ data }) => {
  const { frontMatter } = data;
  const formattedMedia = Object.entries(contactMe);
  const notMobile = useMedia("(min-width: 40rem)");
  const isDesktop = useMedia("(min-width: 72.5rem)");

  return (
    <S.layout.Container className="row">
      <S.layout.Finale
        className={cx("column", {
          "column-40": notMobile && !isDesktop,
          "column-offset-10": notMobile && !isDesktop,
        })}>
        <S.with.FinaleGithubLink href={frontMatter.github} target="_blank">
          {frontMatter.blurb}
        </S.with.FinaleGithubLink>
      </S.layout.Finale>
      <S.layout.Social
        className={cx("column", {
          "column-40": notMobile,
        })}>
        <S.with.SocialList>
          {formattedMedia.map(([type, { icon, url }], i) => (
            <li key={i}>
              <S.with.SocialLink href={url} target="_blank">
                <img
                  src={require(`public/${icon}`)}
                  alt={type}
                  title={type}
                  className={css`
                    width: 25%;
                    height: auto;
                  `}
                />
              </S.with.SocialLink>
            </li>
          ))}
        </S.with.SocialList>
      </S.layout.Social>
    </S.layout.Container>
  );
};

export default Footer;
