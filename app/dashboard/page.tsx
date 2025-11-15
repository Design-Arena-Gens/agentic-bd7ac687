"use client";

import Link from "next/link";
import { m } from "framer-motion";

export default function DashboardPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background:
          "radial-gradient(circle at 15% 15%, rgba(111, 255, 180, 0.12), transparent 50%), linear-gradient(145deg, #060b16, #101a33)"
      }}
    >
      <m.section
        className="glass-panel"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{
          padding: "3rem 3.5rem",
          maxWidth: "640px",
          width: "90%",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: "2.75rem", marginBottom: "1rem", letterSpacing: "-0.02em" }}>Your SaaS Command Hub</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2.4rem" }}>
          This is a placeholder dashboard experience. Swap in your live product analytics, customer journeys, and
          workflow automations to deliver instant value the moment someone signs in.
        </p>
        <Link className="primary-btn" href="/">
          Back to marketing site
        </Link>
      </m.section>
    </main>
  );
}
