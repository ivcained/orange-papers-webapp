"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ALL_CONTENT } from "@/lib/content-index";
import Fuse from "fuse.js";

const fuse = new Fuse(ALL_CONTENT, {
  keys: ["title", "category", "description"],
  threshold: 0.35,
  minMatchCharLength: 2,
});

const CATEGORY_ICONS: Record<string, string> = {
  "Core Critiques": "🔍",
  "Alternative Recovery": "🌱",
  "History & Evidence": "📜",
  "Pro-AA Propaganda Analyzed": "🎭",
  "Letters": "✉️",
  "Religious Roots of A.A.": "⛪",
  "Cult Test": "🧪",
  "Supporting Documents": "📄",
  "Miscellaneous": "📦",
};

interface SearchState {
  query: string;
  focusedIdx: number;
}

export function SearchModal({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [state, setState] = useState<SearchState>({ query: "", focusedIdx: 0 });
  const inputRef = useRef<HTMLInputElement>(null);

  const { query, focusedIdx } = state;

  const results =
    query.length >= 2
      ? fuse.search(query).slice(0, 12).map((r) => r.item)
      : ALL_CONTENT.filter((c) => c.category !== "Letters").slice(0, 12);

  function setQuery(q: string) {
    setState({ query: q, focusedIdx: 0 });
  }

  function setFocused(idx: number) {
    setState((s) => ({ ...s, focusedIdx: idx }));
  }

  useEffect(() => {
    inputRef.current?.focus();
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocused(Math.min(focusedIdx + 1, results.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocused(Math.max(focusedIdx - 1, 0));
      }
      if (e.key === "Enter" && results[focusedIdx]) {
        router.push(`/content/${results[focusedIdx].slug}`);
        onClose();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [results, focusedIdx, onClose, router]);

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-row">
          <svg
            className="search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            className="search-input"
            placeholder="Search articles, letters, topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            id="search-modal-input"
          />
          <button className="search-close-btn" onClick={onClose}>
            ESC
          </button>
        </div>

        <div className="search-results">
          {results.length === 0 ? (
            <div className="search-empty">
              No results for &ldquo;{query}&rdquo;
            </div>
          ) : (
            results.map((item, idx) => (
              <a
                key={item.slug}
                href={`/content/${item.slug}`}
                className={`search-result-item ${idx === focusedIdx ? "focused" : ""}`}
                onClick={onClose}
                onMouseEnter={() => setFocused(idx)}
              >
                <div className="search-result-icon">
                  {CATEGORY_ICONS[item.category] || "📄"}
                </div>
                <div>
                  <div className="search-result-title">{item.title}</div>
                  <div className="search-result-cat">{item.category}</div>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
