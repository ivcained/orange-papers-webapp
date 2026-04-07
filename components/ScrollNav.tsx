"use client";
import { useEffect, useState, useCallback } from "react";

export function ScrollNav() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const onScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setVisible(scrollY > 400);
    setProgress(docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <>
      {/* Reading progress bar — fixed top of viewport */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${progress * 100}%`,
          height: "3px",
          background: "var(--accent-orange)",
          zIndex: 9999,
          pointerEvents: "none",
          opacity: progress > 0 ? 1 : 0,
          transition: "width 0.1s linear, opacity 0.3s",
        }}
      />

      {/* Back-to-top button — fixed bottom-right */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`scroll-to-top${visible ? " scroll-to-top--visible" : ""}`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </>
  );
}
