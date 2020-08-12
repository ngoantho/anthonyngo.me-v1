import { colors, config, sizes } from "theme";

import { CommonSocial } from "components";
import { Link } from "styles";
import { styled } from "goober";

const { commonMargin } = config;

const S = {};
S.layout = {
  Container: styled("footer")`
    padding-top: ${commonMargin}px !important;
    padding-bottom: ${commonMargin}rem !important;
    text-align: center;
    display: flex;
    flex-direction: column;
  `,
  Finale: styled("div")`
    font-family: "mono", monospace;
    font-size: ${sizes.s};
    line-height: 1;
    @media (max-width: 40rem) {
      margin-bottom: ${commonMargin}rem;
    }
  `,
};
S.with = {
  FinaleGithubLink: styled(Link)`
    padding: 1rem;
    color: ${colors.primary};
  `,
  SocialList: styled("ul")`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    margin-bottom: -25%;
    @media (min-width: 40rem) {
      display: none;
    }
  `,
};

const Footer = ({ data }) => {
  return (
    <S.layout.Container className="container">
      <S.layout.Finale>
        <S.with.FinaleGithubLink
          href={data.github}
          target="_blank"
          rel="nofollow noopener noreferrer">
          {data.blurb}
        </S.with.FinaleGithubLink>
      </S.layout.Finale>
      <S.with.SocialList>
        <CommonSocial isFooter={true} />
      </S.with.SocialList>
    </S.layout.Container>
  );
};

export default Footer;
