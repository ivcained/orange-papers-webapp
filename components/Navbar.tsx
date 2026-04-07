"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { SearchModal } from "./SearchModal";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/letters", label: "Letters" },
  { href: "/content/religious-roots", label: "Religious Roots" },
  { href: "/content/cult", label: "Cult Test" },
];

export function Navbar() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Close menu when pathname changes using derived state (avoids setState-in-effect lint)
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMenuOpen(false);
  }

  return (
    <>
      <nav className="navbar" style={{ borderColor: scrolled ? "#2a2a2a" : "transparent" }}>
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          <div className="navbar-logo-icon">🍊</div>
          <div className="navbar-logo-text">
            Orange Papers
            <small>AA Truth Archive</small>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="navbar-nav">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: search + hamburger */}
        <div className="navbar-right">
          <button
            className="search-btn"
            onClick={() => setSearchOpen(true)}
            id="navbar-search-btn"
            aria-label="Search"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <span className="search-btn-text">Search</span>
            <span className="search-kbd">⌘K</span>
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className={`hamburger-icon ${menuOpen ? "open" : ""}`}>
              <span /><span /><span />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-inner">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="mobile-search-btn"
              onClick={() => { setMenuOpen(false); setSearchOpen(true); }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              Search articles...
            </button>
          </div>
        </div>
      )}

      {/* Backdrop for mobile menu */}
      {menuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
}
