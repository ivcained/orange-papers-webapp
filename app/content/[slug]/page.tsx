import { redirect } from "next/navigation";
import { ARTICLES, ALL_CONTENT, CATEGORIES, type ContentItem } from "@/lib/content-index";
import { processHtmlFile } from "@/lib/html-processor";
import type { Metadata } from "next";
import Link from "next/link";
import { DiscordInvite } from "@/components/DiscordInvite";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_CONTENT.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = ALL_CONTENT.find(c => c.slug === slug);
  if (!item) return { title: "Not Found" };
  return {
    title: item.title,
    description: item.description || `${item.title} — The Orange Papers`,
  };
}

function getSiblings(slug: string): { prev?: ContentItem; next?: ContentItem } {
  const idx = ALL_CONTENT.findIndex(c => c.slug === slug);
  return {
    prev: idx > 0 ? ALL_CONTENT[idx - 1] : undefined,
    next: idx < ALL_CONTENT.length - 1 ? ALL_CONTENT[idx + 1] : undefined,
  };
}

function getCategoryArticles(category: string, excludeSlug: string): ContentItem[] {
  return ARTICLES.filter(a => a.category === category && a.slug !== excludeSlug).slice(0, 8);
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const item = ALL_CONTENT.find(c => c.slug === slug);

  if (!item) {
    redirect("/");
  }

  const content = await processHtmlFile(item.filename);
  const siblings = getSiblings(slug);

  // Sidebar items for the category
  const sidebarItems = item.category === CATEGORIES.LETTERS
    ? []
    : getCategoryArticles(item.category, slug);

  return (
    <div className="content-page">
      {/* Sidebar */}
      <aside className="content-sidebar">
        <div className="sidebar-section">
          <div className="sidebar-section-title">Navigation</div>
          <Link href="/" className="sidebar-link">← Home</Link>
          <Link href="/articles" className="sidebar-link">All Articles</Link>
          {item.category === CATEGORIES.LETTERS && (
            <Link href="/letters" className="sidebar-link">All Letters</Link>
          )}
        </div>

        {sidebarItems.length > 0 && (
          <div className="sidebar-section">
            <div className="sidebar-section-title">{item.category}</div>
            {sidebarItems.map(a => (
              <Link
                key={a.slug}
                href={`/content/${a.slug}`}
                className={`sidebar-link ${a.slug === slug ? "active" : ""}`}
              >
                {a.title}
              </Link>
            ))}
          </div>
        )}

        {/* Letter navigation */}
        {item.category === CATEGORIES.LETTERS && (
          <div className="sidebar-section">
            <div className="sidebar-section-title">Quick Jump</div>
            {[1, 50, 100, 150, 200, 250, 300, 350, 400, 428].map(n => (
              <Link key={n} href={`/content/letters-${n}`} className="sidebar-link">
                Letter Vol. {n}
              </Link>
            ))}
          </div>
        )}

        {/* Discord invite — visible while reading on desktop sidebar */}
        <div className="sidebar-section">
          <DiscordInvite variant="sidebar" />
        </div>
      </aside>

      {/* Main content */}
      <div>
        <article className="content-article">
          {/* Breadcrumb */}
          <nav className="content-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">›</span>
            <Link href="/articles">{item.category}</Link>
            <span className="sep">›</span>
            <span style={{ color: "var(--text-primary)" }}>{item.title}</span>
          </nav>

          {/* Header */}
          <header className="content-header">
            <div className="content-category-badge">
              {item.category}
            </div>
            <h1 className="content-title">{item.title}</h1>
            {item.description && (
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6 }}>
                {item.description}
              </p>
            )}
          </header>

          {/* The actual content */}
          {content.found ? (
            <div
              className="op-content-wrapper"
              style={{ paddingLeft: 0, paddingRight: 0 }}
              dangerouslySetInnerHTML={{ __html: content.html }}
            />
          ) : (
            <div style={{ padding: "3rem", color: "var(--text-muted)", textAlign: "center" }}>
              <p>This content is not available in the local copy.</p>
              <p style={{ marginTop: "0.5rem", fontSize: "0.85rem" }}>
                Try the{" "}
                <a
                  href={`https://orangepapers.eth.limo/${item.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  original source ↗
                </a>
              </p>
            </div>
          )}

          {/* Prev/Next navigation */}
          <nav className="content-nav-bar">
            {siblings.prev && (
              <Link href={`/content/${siblings.prev.slug}`} className="content-nav-btn">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 200 }}>
                  {siblings.prev.title}
                </span>
              </Link>
            )}
            <div style={{ flex: 1 }} />
            {siblings.next && (
              <Link href={`/content/${siblings.next.slug}`} className="content-nav-btn">
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 200 }}>
                  {siblings.next.title}
                </span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            )}
          </nav>
        </article>
      </div>
    </div>
  );
}
