import Link from "next/link";
import { ARTICLES, CATEGORIES } from "@/lib/content-index";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Articles",
  description: "Browse all Orange Papers articles by category — critiques, history, alternative recovery, and more.",
};

const CATEGORY_ORDER = [
  CATEGORIES.CORE,
  CATEGORIES.ALTERNATIVE,
  CATEGORIES.PROPAGANDA,
  CATEGORIES.CULT,
  CATEGORIES.RELIGIOUS,
  CATEGORIES.DOCUMENTS,
  CATEGORIES.MISC,
];

const CATEGORY_ICONS: Record<string, string> = {
  [CATEGORIES.CORE]: "🔍",
  [CATEGORIES.ALTERNATIVE]: "🌱",
  [CATEGORIES.PROPAGANDA]: "🎭",
  [CATEGORIES.CULT]: "🧪",
  [CATEGORIES.RELIGIOUS]: "⛪",
  [CATEGORIES.DOCUMENTS]: "📄",
  [CATEGORIES.MISC]: "📦",
};

export default function ArticlesPage() {
  const byCategory: Record<string, typeof ARTICLES> = {};
  for (const cat of CATEGORY_ORDER) {
    byCategory[cat] = ARTICLES.filter(a => a.category === cat);
  }

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 2rem" }}>
      {/* Header */}
      <div style={{ marginBottom: "3rem" }}>
        <div className="content-breadcrumb" style={{ marginBottom: "1rem" }}>
          <Link href="/">Home</Link>
          <span className="sep">›</span>
          <span style={{ color: "var(--text-primary)" }}>Articles</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2.5rem", marginBottom: "0.75rem" }}>
          All Articles
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
          {ARTICLES.length} articles across {CATEGORY_ORDER.length} categories.
          Use <strong style={{ color: "var(--accent-orange)" }}>⌘K</strong> to search.
        </p>
      </div>

      {/* Category sections */}
      {CATEGORY_ORDER.map(cat => {
        const articles = byCategory[cat];
        if (!articles?.length) return null;
        return (
          <section key={cat} style={{ marginBottom: "3.5rem" }}>
            <div className="section-header" style={{ marginBottom: "1.25rem" }}>
              <span style={{ fontSize: "1.5rem" }}>{CATEGORY_ICONS[cat]}</span>
              <h2 className="section-title">{cat}</h2>
              <span className="section-count">{articles.length}</span>
            </div>
            <div className="cards-grid">
              {articles.map(article => (
                <Link key={article.slug} href={`/content/${article.slug}`} className="article-card">
                  <div className="article-card-title">{article.title}</div>
                  {article.description && (
                    <div className="article-card-desc">{article.description}</div>
                  )}
                  <div className="article-card-tag">{cat}</div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
