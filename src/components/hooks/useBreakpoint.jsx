import { useState, useEffect } from "react";

const getBreakpoint = (width) => {
  if (width < 768) {
    return "mobile";
  } else if (width < 1200) {
    return "tablet";
  } else {
    return "desktop";
  }
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(
    getBreakpoint(window.innerWidth)
  );

  useEffect(() => {
    const onResize = () => {
      const current = getBreakpoint(window.innerWidth);
      setBreakpoint((prev) => (current === prev ? prev : current));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  switch (breakpoint) {
    case "mobile":
      return { breakpoint: breakpoint, pageSize: 4, bestProductsPageSize: 1 };
    case "tablet":
      return { breakpoint: breakpoint, pageSize: 6, bestProductsPageSize: 2 };
    case "desktop":
      return { breakpoint: breakpoint, pageSize: 10, bestProductsPageSize: 4 };
    default:
      return { breakpoint: breakpoint, pageSize: 4, bestProductsPageSize: 1 };
  }
};

export default useBreakpoint;
