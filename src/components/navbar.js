import Menu from "./mobmenu";
import { styled } from "goober";

const S = {};
S.layout = {
  Container: styled("header")``,
};
S.with = {};

function Navbar() {
  return (
    <S.layout.Container className="header">
      <Menu />
    </S.layout.Container>
  );
}

export default Navbar;
