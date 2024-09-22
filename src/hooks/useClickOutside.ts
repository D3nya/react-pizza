import React, { useEffect } from "react";

export default function useClickOutside(
  elementRef: React.RefObject<HTMLSpanElement>,
  callback: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      event.preventDefault();
      if (
        elementRef &&
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        // Call Callback only if event happens outside element or descendent elements
        callback();
      }
      return;
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [elementRef, callback]);
}
