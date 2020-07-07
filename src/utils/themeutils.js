import theme, { sizes, spacing, weights } from "@/theme";

export function useTheme() {
  return {
    colors: { ...theme },
    weights,
    sizes,
    spacing,
  };
}

const withTheme = (Component) => ({ children, ...props }) => (
  <Component
    theme={{
      colors: { ...theme },
      weights,
      sizes,
      spacing,
    }}
    {...props}>
    {children}
  </Component>
);
export { withTheme };
