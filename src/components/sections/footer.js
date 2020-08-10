import { Icon, Link } from "styles";
import { colors, config, sizes } from "theme";

import { styled } from "goober";

const { contactMe, commonMargin } = config;

const S = {};
S.layout = {
  Container: styled("footer")`
    padding-top: ${commonMargin}rem !important;
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
  SocialLink: styled(Link)`
    padding: 1rem;

    img {
      width: 25%;
      height: auto;
    }
  `,
};

const Footer = ({ data }) => {
  const formattedMedia = Object.entries(contactMe);

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
        {formattedMedia.map(([type, { icon, url }], i) => (
          <li key={i}>
            <S.with.SocialLink
              href={url}
              target="_blank"
              rel="nofollow noopener noreferrer">
              <Icon src={require(`public/${icon}`)} alt={type} title={type} />
            </S.with.SocialLink>
          </li>
        ))}
      </S.with.SocialList>
    </S.layout.Container>
  );
};

export default Footer;
