import Link from "next/link";
import { DiscordInvite } from "./DiscordInvite";


const FOOTER_LINKS = {
  "Core Articles": [
    { href: "/content/intro", label: "Introduction" },
    { href: "/content/effectiveness", label: "AA Effectiveness" },
    { href: "/content/secrets", label: "12 Biggest Secrets" },
    { href: "/content/propaganda", label: "Propaganda Techniques" },
    { href: "/content/horrors", label: "Horror Stories" },
  ],
  "Recovery": [
    { href: "/content/addiction-monster", label: "Lizard-Brain Monster" },
    { href: "/content/rat-park", label: "Rat Park" },
    { href: "/content/what-works", label: "What Works?" },
    { href: "/content/alt-list", label: "Evidence-Based Groups" },
    { href: "/content/top10", label: "Top 10 Reading List" },
  ],
  "Research": [
    { href: "/content/cult", label: "Cult Test" },
    { href: "/content/religious-roots", label: "Religious Roots" },
    { href: "/content/bibliography", label: "Bibliography" },
    { href: "/letters", label: "All Letters" },
    { href: "/content/links", label: "External Links" },
  ],
};

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: "linear-gradient(135deg, #ff6b2b, #f59e0b)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.2rem"
            }}>🍊</div>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)" }}>
              The Orange Papers
            </span>
          </div>
          <p>
            An in-depth series investigating Alcoholics Anonymous, twelve-step programs, 
            and evidence-based alternatives for substance misuse recovery.
            Originally by &quot;Orange&quot; — this is a mirror/preservation.
          </p>
          <p style={{ marginTop: "0.5rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
            This mirror has no affiliation with the original author. 
            For corrections contact the site maintainer.
          </p>
          <DiscordInvite variant="footer" />
        </div>

        {Object.entries(FOOTER_LINKS).map(([section, links]) => (
          <div key={section}>
            <div className="footer-col-title">{section}</div>
            <ul className="footer-links">
              {links.map(link => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>© The Orange Papers — Mirror & Preservation. Original content by &quot;Orange&quot;.</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link href="/articles">Articles</Link>
          <Link href="/letters">Letters</Link>
          <a href="https://orangepapers.eth.limo" target="_blank" rel="noopener noreferrer">Original Site ↗</a>
        </div>
      </div>
    </footer>
  );
}
