import CommonSocial from "./commonsocials";
import Side from "./side";
import { config } from "theme";
import { styled } from "goober";

const { commonMargin } = config;

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
};

const SocialBar = ({ homePage }) => {
  return (
    <Side homePage={homePage}>
      <S.List>
        <CommonSocial isFooter={false} />
      </S.List>
    </Side>
  );
};

export default SocialBar;
