import { colors, config, sizes } from "theme";

import { Link } from "styles";
import dynamic from "next/dynamic";
import { styled } from "goober";

const { commonMargin } = config;

const S = {
  layout: {
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
  },
  with: {
    FinaleGithubLink: styled(Link)`
      padding: 1rem;
      color: ${colors.primary};
    `,
    SocialList: styled("ul")`
      display: flex;
      justify-content: space-evenly;
      list-style: none;
      margin-bottom: -25%;
    `,
  },
};

const CommonSocial = dynamic(() => import("./commonsocials"));

const Footer = ({ data, isMobile }) => {
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
        {isMobile ? <CommonSocial isFooter={true} /> : null}
      </S.with.SocialList>
    </S.layout.Container>
  );
};

export default Footer;
