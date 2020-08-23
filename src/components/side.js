import { colors, navDelay } from "theme";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { cx } from "utils/index";
import { styled } from "goober";

const { node, bool } = PropTypes;

const StyledContainer = styled("aside")`
  position: fixed;
  top: 0;
  right: 0;
  width: 5rem;
  z-index: 2;
  color: ${colors.primary};
`;

export default function Side({ children, homePage }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const mountId = setTimeout(
      () => {
        setMounted(true);
      },
      homePage ? navDelay : 0
    );
    return () => clearTimeout(mountId);
  }, []);

  return (
    <StyledContainer className={cx("fadedown", mounted && "active")}>
      {children}
    </StyledContainer>
  );
}

Side.propTypes = {
  children: node,
  homePage: bool,
};
