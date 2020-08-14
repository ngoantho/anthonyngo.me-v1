import { colors, config } from "theme";
import { useEffect, useState } from "react";

import { cx } from "utils/index";
import { styled } from "goober";

const { navDelay } = config;

const S = {
  Container: styled("aside")`
    position: fixed;
    left: 0;
    bottom: 0;
    width: ${(props) => `${props.fit}rem`};
    color: ${colors.primary};
    display: none;
    z-index: 2;
    @media (min-width: 40rem) {
      display: block;
    }
  `,
};

const DELAY = navDelay * 1.5;

const Side = ({ children, homePage }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const mountId = setTimeout(
      () => {
        setMounted(true);
      },
      homePage ? DELAY : 0
    );
    return () => clearTimeout(mountId);
  }, []);

  return (
    <S.Container fit="5" className={cx("fade", mounted && "active")}>
      {children}
    </S.Container>
  );
};

export default Side;
