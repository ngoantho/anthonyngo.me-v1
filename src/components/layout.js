// ref: https://github.com/sylvainpolletvillard/postcss-grid-kiss
import { css } from "linaria";

const Layout = ({ children }) => (
  <>
    <data
      className={css`
        :global {
          #__next {
            min-height: 100vh;
            grid-kiss:
            "+------------++-----+"
            "| < header > ||     |"
            "+------------+|     |"
            "+------------+|  ^  |"
            "| <  main  > || nav |"
            "+------------+|  v  |"
            "+------------+|     |"
            "| < footer > ||     |"
            "+------------++-----+"
            ;
          }
        }
      `}
    />
    {children}
  </>
);

export default Layout;
