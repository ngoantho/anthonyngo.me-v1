import { useEffect, useState } from "react";

// credit: https://stackoverflow.com/a/7616484
export function hash(string) {
  let hash = 0;
  let i;
  let chr;
  for (i = 0; i < string.length; i++) {
    chr = string.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

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

export function useOnScreen(ref, rootMargin = "0px", threshold = 1.0) {
  // if (typeof window === "undefined") return true;

  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio === 1) {
          setIntersecting(true);
        }
      },
      {
        root: null,
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return isIntersecting;
}
