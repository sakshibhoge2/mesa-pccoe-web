import {
  useEffect,
  useRef,
} from "react";

import type {
  ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

function ScrollReveal({
  children,
  className = "",
}: Props) {
  const ref =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add(
              "reveal-visible"
            );

            observer.disconnect();
          }
        },
        {
          threshold: 0.12,
        }
      );

    observer.observe(element);

    return () =>
      observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;