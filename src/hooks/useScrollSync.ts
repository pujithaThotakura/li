import { useEffect, useRef } from "react";

export const useScrollSync = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const body = bodyRef.current;
    if (!header || !body) return;

    const handleScroll = () => {
      header.scrollLeft = body.scrollLeft;
    };

    body.addEventListener("scroll", handleScroll);
    return () => body.removeEventListener("scroll", handleScroll);
  }, []);

  return { headerRef, bodyRef };
};
