import { Icon, Link } from "styles";

import { config } from "theme";
import { styled } from "goober";

const { contactMe } = config;

const SharedSocialLink = styled(Link)`
  padding: 1rem;

  img {
    width: 50%;
    height: auto;
  }

  &.isFooter {
    img {
      width: 25%;
    }
  }
`;

function CommonSocials({ isFooter }) {
  const formattedMedia = Object.entries(contactMe);

  return formattedMedia.map(([type, { icon, url }], i) => (
    <li key={i}>
      <SharedSocialLink
        href={url}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={[isFooter && "isFooter"].filter(Boolean)}>
        <Icon src={require(`public/${icon}`)} alt={type} title={type} />
      </SharedSocialLink>
    </li>
  ));
}

export default CommonSocials;
