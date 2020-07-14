export function useConfig(additional) {
  return {
    ...additional,
  };
}

const withConfig = (Component, additional) => ({ children, ...props }) => {
  return (
    <Component config={{ ...additional }} {...props}>
      {children}
    </Component>
  );
};
export { withConfig };
