"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";

export default function LoginPopover() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      router.push("/dashboard");
    },
    [router]
  );

  const scheduleClose = useCallback(() => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => setOpen(false), 80);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  }, []);

  useEffect(
    () => () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    },
    []
  );

  return (
    <div
      className="login-popover"
      onMouseEnter={cancelClose}
      onMouseLeave={scheduleClose}
      onFocusCapture={cancelClose}
      onBlurCapture={scheduleClose}
    >
      <button
        type="button"
        className="secondary-btn"
        aria-expanded={open}
        onClick={() => setOpen((state) => !state)}
      >
        Login
      </button>
      <AnimatePresence>
        {open ? (
          <m.div
            key="login-panel"
            className="login-popover__panel"
            initial={{ opacity: 0, scale: 0.94, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -12 }}
            transition={{ duration: 0.18, ease: [0.215, 0.61, 0.355, 1] }}
            role="dialog"
            aria-label="Secure login"
          >
            <div>
              <span className="badge__spark" aria-hidden="true" /> Welcome back
            </div>
            <h3 style={{ margin: "0.85rem 0 0.35rem", fontSize: "1.4rem", letterSpacing: "-0.01em" }}>
              Sign in to continue
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
              Access your command center with a single secure login.
            </p>
            <form className="login-popover__form" onSubmit={handleSubmit}>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@nimbusflow.com" required />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" placeholder="••••••••" required />
              </div>
              <div className="login-meta">
                <label style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                  <input type="checkbox" name="remember" />
                  Keep me signed in
                </label>
                <a href="#forgot">Forgot?</a>
              </div>
              <button type="submit" className="primary-btn login-submit">
                Enter dashboard
              </button>
            </form>
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
