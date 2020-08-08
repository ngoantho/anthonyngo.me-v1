import Side from "./side";
import { config } from "theme";
import { styled } from "goober";

const { contactMe } = config;
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
      height: 10rem;
      margin: 0 auto;
      background-color: darkslategray;
    }
  `,
  Link: styled("a")`
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
            <S.Link href={url} target="_blank">
              <img src={require(`public/${icon}`)} alt={type} title={type} />
            </S.Link>
          </li>
        ))}
      </S.List>
    </Side>
  );
};

export default SocialBar;
