import { css } from "linaria";

const Layout = ({ children }) => (
  <>
    <data
      className={css`
        :global() {
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
        }
        display: none;
      `}
    />
    {children}
  </>
);

export default Layout;
