import Link from "next/link";
import { LETTERS } from "@/lib/content-index";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Letters — Mail from Readers",
  description: "428 volumes of reader correspondence — debates, testimonials, and dialogue about AA and recovery.",
};

// Group into chunks of 50
const GROUPS: { label: string; letters: typeof LETTERS }[] = [];
for (let i = 0; i < LETTERS.length; i += 50) {
  const chunk = LETTERS.slice(i, i + 50);
  const first = i + 1;
  const last = Math.min(i + 50, LETTERS.length);
  GROUPS.push({ label: `Letters ${first}–${last}`, letters: chunk });
}

export default function LettersPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem clamp(1rem, 4vw, 2rem)" }}>
      {/* Header */}
      <div style={{ marginBottom: "3rem" }}>
        <div className="content-breadcrumb" style={{ marginBottom: "1rem" }}>
          <Link href="/">Home</Link>
          <span className="sep">›</span>
          <span style={{ color: "var(--text-primary)" }}>Letters</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2.5rem", marginBottom: "0.75rem" }}>
          Letters — We Get Lots of Mail...
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", maxWidth: 600 }}>
          {LETTERS.length} volumes of reader correspondence — debates, testimonials, recovery stories, research sharing, 
          and the full spectrum of dialogue about AA and alternatives.
        </p>
      </div>

      {/* Groups */}
      {GROUPS.map((group) => (
        <section key={group.label} style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ 
            fontSize: "0.9rem", 
            textTransform: "uppercase", 
            letterSpacing: "0.08em", 
            color: "var(--text-muted)",
            marginBottom: "0.75rem",
            paddingBottom: "0.5rem",
            borderBottom: "1px solid var(--border-subtle)"
          }}>
            {group.label}
          </h2>
          <div className="letters-grid">
            {group.letters.map(letter => (
              <Link key={letter.slug} href={`/content/${letter.slug}`} className="letter-link">
                {letter.title}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
