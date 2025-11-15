"use client";

import LoginPopover from "@/app/components/LoginPopover";
import Link from "next/link";
import { m } from "framer-motion";

const featureCards = [
  {
    title: "Realtime intelligence",
    body: "Stream actionable insights across teams with anomaly detection and predictive alerts that surface exactly when you need to act.",
    mark: "AI"
  },
  {
    title: "Workflow automations",
    body: "Design adaptive automations that sync data, trigger nudges, and close loops without writing a single line of code.",
    mark: "⚡"
  },
  {
    title: "Unified visibility",
    body: "A 360° dashboard that brings revenue, product, and operations metrics into a single command center for clarity.",
    mark: "∞"
  }
];

const trustLogos = ["Arcadia", "Northwind", "Atlas One", "Hyperlane", "Fluxbase", "Cloudscale"];

export default function HomePage() {
  return (
    <main>
      <div className="blur-blob blur-blob--blue" aria-hidden="true" />
      <div className="blur-blob blur-blob--teal" aria-hidden="true" />

      <header className="nav-container">
        <div className="nav-brand">
          <span className="nav-brand__mark">N</span>
          NimbusFlow
        </div>
        <div className="nav-actions">
          <LoginPopover />
          <Link className="primary-btn" href="/dashboard">
            Start for free
          </Link>
        </div>
      </header>

      <section className="hero">
        <m.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="badge floating-badge">
            <span className="badge__spark" aria-hidden="true" />
            Introducing NimbusFlow 3.0
          </span>
          <h1>Where high-velocity teams choreograph impact</h1>
          <p>
            NimbusFlow blends AI guidance, live collaboration, and automated workflows into a single experience so your
            team can ship strategic outcomes faster than ever.
          </p>
          <div className="cta-group">
            <Link className="primary-btn" href="/dashboard">
              Experience the demo
            </Link>
            <button className="secondary-btn" type="button">
              Watch overview
            </button>
          </div>
        </m.div>

        <m.div
          className="trust-bar"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.55 }}
        >
          <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
            Trusted by leaders orchestrating billions of customer moments
          </div>
          <div className="trust-logos">
            {trustLogos.map((label) => (
              <m.div
                key={label}
                className="trust-logo"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
              >
                {label}
              </m.div>
            ))}
          </div>
        </m.div>
      </section>

      <section className="feature-section">
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <div className="metrics-grid">
            <m.div
              className="metrics-card grad-border"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.1 }}
            >
              <div className="metrics-value">98%</div>
              <div className="metrics-label">Customer satisfaction after onboarding with NimbusFlow sequences.</div>
            </m.div>
            <m.div
              className="metrics-card grad-border"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.18 }}
            >
              <div className="metrics-value">3.4x</div>
              <div className="metrics-label">Average increase in execution velocity across cross-functional squads.</div>
            </m.div>
            <m.div
              className="metrics-card grad-border"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.26 }}
            >
              <div className="metrics-value">72%</div>
              <div className="metrics-label">Reduction in redundant tooling spend with a single collaborative OS.</div>
            </m.div>
          </div>
        </m.div>

        <m.div
          className="feature-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.12, delayChildren: 0.12 }
            }
          }}
        >
          {featureCards.map((feature) => (
            <m.article
              key={feature.title}
              className="feature-card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="feature-card__icon">{feature.mark}</div>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </m.article>
          ))}
        </m.div>
      </section>

      <footer className="footer">
        NimbusFlow is crafted for teams who believe that every customer journey deserves precision and delight. Ready to
        orchestrate your next breakthrough?
      </footer>
    </main>
  );
}
