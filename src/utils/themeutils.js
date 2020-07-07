import ThemeContext, { sizes, spacing, weights } from "@/theme";

import { useContext } from "react";

export function useTheme(additional) {
  const theme = useContext(ThemeContext);

  return {
    colors: { ...theme },
    weights,
    sizes,
    spacing,
    config: { ...additional },
  };
}

const withTheme = (Component, additional) => ({ children, ...props }) => {
  const theme = useContext(ThemeContext);

  return (
    <Component
      theme={{
        colors: { ...theme },
        weights,
        sizes,
        spacing,
      }}
      config={{ ...additional }}
      {...props}>
      {children}
    </Component>
  );
};
export { withTheme };
