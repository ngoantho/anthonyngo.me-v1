import { Icon, Link } from "styles";

import Side from "./side";
import { config } from "theme";
import { styled } from "goober";

const { contactMe, commonMargin } = config;

const S = {
  List: styled("ul")`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    &::after {
      content: "";
      display: block;
      width: 1px;
      height: ${commonMargin * 5}rem;
      margin: 0 auto;
      background-color: darkslategray;
    }
  `,
  Link: styled(Link)`
    padding: 1rem;

    img {
      width: 50%;
      height: auto;
    }
  `,
};

const SocialBar = () => {
  const formattedMedia = Object.entries(contactMe);

  return (
    <Side>
      <S.List>
        {formattedMedia.map(([type, { icon, url }], i) => (
          <li key={i}>
            <S.Link
              href={url}
              target="_blank"
              rel="nofollow noopener noreferrer">
              <Icon src={require(`public/${icon}`)} alt={type} title={type} />
            </S.Link>
          </li>
        ))}
      </S.List>
    </Side>
  );
};

export default SocialBar;
