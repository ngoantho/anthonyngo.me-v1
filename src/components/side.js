import { colors } from "theme";
import { styled } from "goober";

const S = {
  Container: styled("aside")`
    position: fixed;
    left: 0;
    bottom: 0;
    width: ${(props) => `${props.fit}rem`};
    color: ${colors.primary};
    display: none;
    @media (min-width: 80rem) {
      display: block;
    }
  `,
};

const Side = ({ children }) => {
  return <S.Container fit="5">{children}</S.Container>;
};

export default Side;
