const landing = (async () => {
  return (await import("./landing/index")).default;
})();
export { landing };
