"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => document.getElementById(l.id));
      const current = sections.findLast(
        (s) => s && s.getBoundingClientRect().top <= 100
      );
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.inner}>
          <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className={styles.logoKC}>KC</span>
            <span className={styles.logoDot}>.</span>
          </button>

          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  id={`nav-${link.id}`}
                  className={`${styles.link} ${active === link.id ? styles.active : ""}`}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className={styles.indicator}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="mailto:kiretyv@gmail.com"
            className={`btn-primary ${styles.ctaBtn}`}
            id="nav-hire-btn"
          >
            Hire Me
          </a>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            id="nav-hamburger"
          >
            <span className={menuOpen ? styles.barOpen1 : styles.bar} />
            <span className={menuOpen ? styles.barOpen2 : styles.bar} />
            <span className={menuOpen ? styles.barOpen3 : styles.bar} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`${styles.mobileLink} ${active === link.id ? styles.mobileLinkActive : ""}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            ))}
            <a href="mailto:kiretyv@gmail.com" className="btn-primary" style={{ marginTop: "8px" }}>
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
