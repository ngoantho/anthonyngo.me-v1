import { colors, commonMargin, sizes } from "theme";

import { Link } from "styles";
import PropTypes from "prop-types";
import { darken } from "polished";
import dynamic from "next/dynamic";
import { styled } from "goober";

const { bool, shape, string } = PropTypes;

const S = {
  layout: {
    Container: styled("footer")`
      padding-top: ${commonMargin}px !important;
      padding-bottom: ${commonMargin}px !important;
      text-align: center;
      display: flex;
      flex-direction: column;
    `,
    Finale: styled("div")`
      font-family: "mono", monospace;
      font-size: ${sizes.s};
      line-height: 1;
    `,
  },
  with: {
    FinaleGithubLink: styled(Link)`
      padding: 1rem;
      color: ${darken(0.3, colors.primary)};
    `,
    SocialList: styled("ul")`
      display: flex;
      justify-content: space-evenly;
      list-style: none;
      margin-bottom: 0;
    `,
  },
};

const CommonSocial = dynamic(() => import("./commonsocials"));

const Footer = ({ data, isMobile }) => {
  return (
    <S.layout.Container className="container">
      <S.with.SocialList>
        {isMobile ? <CommonSocial isFooter={true} /> : null}
      </S.with.SocialList>
      <S.layout.Finale>
        <S.with.FinaleGithubLink
          href={data.github}
          target="_blank"
          rel="nofollow noopener noreferrer">
          {data.blurb}
        </S.with.FinaleGithubLink>
      </S.layout.Finale>
    </S.layout.Container>
  );
};

Footer.propTypes = {
  isMobile: bool,
  data: shape({
    github: string,
    blurb: string,
  }),
};

export default Footer;
