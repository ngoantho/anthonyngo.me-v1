export const cx = (...args) => {
  const result = new Set();
  for (const item of args) {
    const type = typeof item;
    if (type === "string" && item.length > 0) {
      result.add(item);
    } else if (type === "boolean" && item) {
      result.add(item);
    } else if (type === "object" && item !== null) {
      for (const [key, value] of Object.entries(item)) {
        if (value) result.add(key);
      }
    }
  }

  return [...result].join(" ");
};
