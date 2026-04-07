import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div style={{ fontSize: "4rem" }}>🍊</div>
      <h1>404</h1>
      <p>This page wasn&apos;t found. It may have moved or never existed in our archive.</p>
      <Link href="/" className="btn-primary" style={{ marginTop: "1rem" }}>
        Back to Home
      </Link>
    </div>
  );
}
