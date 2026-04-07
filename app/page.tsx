import Link from "next/link";
import { ARTICLES, LETTERS, CATEGORIES } from "@/lib/content-index";
import type { Metadata } from "next";
import { DiscordInvite } from "@/components/DiscordInvite";

export const metadata: Metadata = {
  title: "The Orange Papers — Truth About Alcoholics Anonymous",
  description:
    "A comprehensive in-depth investigation of Alcoholics Anonymous and twelve-step programs. Over 400 articles and letters by 'Orange'.",
};

const FEATURED = [
  { slug: "effectiveness", title: "The Effectiveness of Twelve-Step Treatment", desc: "Statistical analysis reveals AA's true success rate — the numbers you're not told.", icon: "📊" },
  { slug: "addiction-monster", title: "The Lizard-Brain Addiction Monster", desc: "An alternative biological model of addiction that actually explains the science.", icon: "🧠" },
  { slug: "propaganda", title: "Propaganda & Debating Techniques", desc: "The psychological manipulation tactics used to suppress critical thinking in AA.", icon: "🎭" },
  { slug: "religious-roots", title: "The Religious Roots of A.A.", desc: "How Bill Wilson lifted Alcoholics Anonymous wholesale from a fascist-era religious cult.", icon: "📜" },
  { slug: "cult-answers", title: "The Cult Test", desc: "Every cult characteristic measured — how does AA score? The results are startling.", icon: "🧪" },
  { slug: "rat-park", title: "Rat Park & Other Children's Stories", desc: "The famous study that blew up conventional addiction mythology.", icon: "🐀" },
];

const CATEGORY_ORDER = [
  CATEGORIES.CORE,
  CATEGORIES.ALTERNATIVE,
  CATEGORIES.PROPAGANDA,
  CATEGORIES.CULT,
  CATEGORIES.RELIGIOUS,
  CATEGORIES.DOCUMENTS,
  CATEGORIES.MISC,
];

export default function HomePage() {
  const articlesByCategory: Record<string, typeof ARTICLES> = {};
  for (const cat of CATEGORY_ORDER) {
    articlesByCategory[cat] = ARTICLES.filter(a => a.category === cat);
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-inner">
          <div className="hero-badge">
            <span>🍊</span>
            The Orange Papers — Digital Archive
          </div>

          <h1 className="hero-title">
            The Truth About<br />
            <span>Alcoholics Anonymous</span>
          </h1>

          <p className="hero-subtitle">
            A comprehensive, evidence-based series investigating A.A., twelve-step programs,
            real recovery science, and the hidden history of the organization that controls addiction treatment worldwide.
          </p>

          <div className="hero-quote-box">
            &ldquo;There is a principle which is a bar against all information, which is proof against all arguments
            and which cannot fail to keep a man in everlasting ignorance &mdash; that principle is contempt prior to investigation.&rdquo;
            <cite>&mdash; Herbert Spencer (misquoted in the Big Book by Bill Wilson)</cite>
          </div>

          <div className="hero-ctas">
            <Link href="/content/intro" className="btn-primary">
              Start Reading
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/articles" className="btn-secondary">
              Browse All Articles
            </Link>
            <DiscordInvite variant="hero" />
            <a href="https://orangepapers.eth.limo" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Original Site ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="stats-bar">
        {[
          { num: "428+", label: "Letters Volumes" },
          { num: "90+", label: "Core Articles" },
          { num: "14MB+", label: "Original Content" },
          { num: "20+", label: "Years of Research" },
        ].map(s => (
          <div className="stat-item" key={s.label}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="divider" />

      {/* ── Featured Articles ── */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Featured Reading</h2>
          <span className="section-count">Start Here</span>
        </div>
        <div className="cards-grid">
          {FEATURED.map(item => (
            <Link key={item.slug} href={`/content/${item.slug}`} className="article-card">
              <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{item.icon}</div>
              <div className="article-card-title">{item.title}</div>
              <div className="article-card-desc">{item.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── Articles by Category ── */}
      {CATEGORY_ORDER.map(cat => {
        const articles = articlesByCategory[cat];
        if (!articles?.length) return null;
        return (
          <section className="section" key={cat}>
            <div className="section-header">
              <h2 className="section-title">{cat}</h2>
              <span className="section-count">{articles.length} articles</span>
            </div>
            <div className="cards-grid">
              {articles.map(article => (
                <Link key={article.slug} href={`/content/${article.slug}`} className="article-card">
                  <div className="article-card-title">{article.title}</div>
                  {article.description && (
                    <div className="article-card-desc">{article.description}</div>
                  )}
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <div className="divider" />

      {/* ── Letters ── */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Letters — We Get Lots of Mail...</h2>
          <span className="section-count">{LETTERS.length} volumes</span>
        </div>
        <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
          Hundreds of volumes of reader correspondence — debates, testimonials, research, and dialogue.
        </p>
        <div className="letters-grid">
          {LETTERS.map(letter => (
            <Link key={letter.slug} href={`/content/${letter.slug}`} className="letter-link">
              {letter.title}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
