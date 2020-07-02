import { withTheme } from "styled-components";
import { styled } from "linaria/react"

const GlobalNext = styled.div``

const Layout = ({ children }) => {
  return (
    <>
      <GlobalNext />
      {children}
    </>
  );
};

export default withTheme(Layout)
