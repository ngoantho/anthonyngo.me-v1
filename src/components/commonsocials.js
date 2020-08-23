import { Icon, Link } from "styles";

import { contactMe } from "theme";
import { cx } from "utils";
import { styled } from "goober";

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

export default function CommonSocials({ isFooter }) {
  const formattedMedia = Object.entries(contactMe);

  return formattedMedia.map(([type, { icon, url }], i) => (
    <li key={i}>
      <SharedSocialLink
        href={url}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={cx(isFooter && "isFooter")}>
        <Icon src={icon} alt={type} title={type} />
      </SharedSocialLink>
    </li>
  ));
}
