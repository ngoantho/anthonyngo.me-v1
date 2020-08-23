import CommonSocial from "./commonsocials";
import PropTypes from "prop-types";
import Side from "./side";
import { commonMargin } from "theme";
import { styled } from "goober";

const { bool } = PropTypes;

const StyledList = styled("ul")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;

  &::before {
    content: "";
    display: block;
    width: 1px;
    height: ${commonMargin * 4}rem;
    margin-bottom: 1.5rem;
    background: darkslategray;
  }
`;

const SocialBar = ({ homePage }) => (
  <Side homePage={homePage}>
    <StyledList>
      <CommonSocial isFooter={false} />
    </StyledList>
  </Side>
);

SocialBar.propTypes = {
  homePage: bool,
};

export default SocialBar;
