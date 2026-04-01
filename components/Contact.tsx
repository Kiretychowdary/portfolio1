"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import styles from "./Contact.module.css";

const contactCards = [
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "kiretyv@gmail.com",
    href: "mailto:kiretyv@gmail.com",
    color: "#3b82f6",
  },
  {
    icon: <Phone size={22} />,
    label: "Phone",
    value: "+91 7382104555",
    href: "tel:+917382104555",
    color: "#10b981",
  },
  {
    icon: <MapPin size={22} />,
    label: "Location",
    value: "Guntur, Andhra Pradesh, India",
    href: "https://maps.google.com/?q=Guntur,India",
    color: "#f43f5e",
  },
];

const socialLinks = [
  {
    icon: <SiGithub size={22} />,
    label: "GitHub",
    handle: "@Kiretychowdary",
    href: "https://github.com/Kiretychowdary",
    color: "#f1f5f9",
  },
  {
    icon: <FaLinkedin size={22} />,
    label: "LinkedIn",
    handle: "kirety-manne-954045297",
    href: "https://www.linkedin.com/in/kirety-manne-954045297/",
    color: "#0ea5e9",
  },
  {
    icon: <SiLeetcode size={22} />,
    label: "LeetCode",
    handle: "kirety_ksvid_0007",
    href: "https://leetcode.com/u/kirety_ksvid_0007/",
    color: "#f59e0b",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Contact() {
  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// contact</p>
          <h2 className="section-title">
            Let&apos;s&nbsp;<span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Open to full-time roles, internships, freelance projects, and collaboration.
            Don&apos;t hesitate to reach out!
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Left: contact info */}
          <div className={styles.leftCol}>
            {/* Contact cards */}
            <div className={styles.contactCards}>
              {contactCards.map((card, i) => (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={styles.contactCard}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  style={{ "--card-color": card.color } as React.CSSProperties}
                  id={`contact-card-${card.label.toLowerCase()}`}
                >
                  <div className={styles.contactIcon} style={{ background: `${card.color}18`, border: `1px solid ${card.color}30` }}>
                    <span style={{ color: card.color }}>{card.icon}</span>
                  </div>
                  <div>
                    <p className={styles.contactLabel}>{card.label}</p>
                    <p className={styles.contactValue}>{card.value}</p>
                  </div>
                  <ExternalLink size={14} className={styles.externalIcon} />
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              className={`glass-card ${styles.socialCard}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className={styles.socialTitle}>Find me on</p>
              <div className={styles.socialLinks}>
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    style={{ "--link-color": s.color } as React.CSSProperties}
                    id={`contact-social-${s.label.toLowerCase()}`}
                  >
                    <div className={styles.socialIcon} style={{ color: s.color }}>
                      {s.icon}
                    </div>
                    <div>
                      <p className={styles.socialPlatform}>{s.label}</p>
                      <p className={styles.socialHandle}>{s.handle}</p>
                    </div>
                    <ExternalLink size={14} className={styles.externalIcon} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: CTA card */}
          <motion.div
            className={`glass-card ${styles.ctaCard}`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className={styles.ctaOrb} aria-hidden="true" />
            <div className={styles.ctaContent}>
              <div className={styles.ctaEmoji}>👋</div>
              <h3 className={styles.ctaHeading}>Ready to collaborate?</h3>
              <p className={styles.ctaText}>
                I&apos;m currently open to exciting opportunities. Whether it&apos;s a full-time
                role, an internship, or a cool side project, I&apos;d love to hear from you.
              </p>

              <div className={styles.ctaHighlights}>
                {[
                  "Full-time opportunities",
                  "Internships & co-ops",
                  "Freelance projects",
                  "Open source collaborations",
                ].map((item) => (
                  <div key={item} className={styles.ctaItem}>
                    <span className={styles.ctaDot} />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="mailto:kiretyv@gmail.com"
                className="btn-primary"
                id="contact-email-cta"
                style={{ width: "100%", justifyContent: "center", marginTop: "8px" }}
              >
                <Send size={16} />
                Send me an Email
              </a>

              <a
                href="https://www.linkedin.com/in/kirety-manne-954045297/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                id="contact-linkedin-cta"
                style={{ width: "100%", justifyContent: "center", marginTop: "10px" }}
              >
                <FaLinkedin size={16} />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        className={styles.footer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="container">
          <div className={styles.footerInner}>
            <p className={styles.footerLogo}>
              KC<span style={{ color: "var(--accent-blue)" }}>.</span>
            </p>
            <p className={styles.footerText}>
              Designed &amp; built by{" "}
              <span style={{ color: "var(--accent-blue)" }}>Kirety Chowdary Manne</span>
            </p>
            <p className={styles.footerCopy}>© 2025 All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
