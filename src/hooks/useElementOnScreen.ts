import { useState, useEffect, useMemo } from "react";
export default function useElementOnScreen(options: any, targetRef: any) {
  const [isVisible, setIsVisible] = useState();
  const callbackFunc = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const optionMemo = useMemo(() => {
    return options;
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunc, optionMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [optionMemo, targetRef]);

  return isVisible;
}
