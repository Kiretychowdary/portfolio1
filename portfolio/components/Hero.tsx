"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink, ChevronDown, Code2 } from "lucide-react";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import styles from "./Hero.module.css";

const roles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "AI Integration Specialist",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  /* typewriter effect */
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 70);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const socialLinks = [
    { href: "https://github.com/Kiretychowdary", icon: <SiGithub size={20} />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/kirety-manne-954045297/", icon: <FaLinkedin size={20} />, label: "LinkedIn" },
    { href: "https://leetcode.com/u/kirety_ksvid_0007/", icon: <SiLeetcode size={20} />, label: "LeetCode" },
    { href: "mailto:kiretyv@gmail.com", icon: <Mail size={20} />, label: "Email" },
  ];

  return (
    <section className={styles.hero} id="hero">
      {/* Ambient orbs */}
      <div className={styles.orbBlue} aria-hidden="true" />
      <div className={styles.orbViolet} aria-hidden="true" />
      <div className={styles.orbCyan} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {/* Status badge */}
        <motion.div
          className={styles.statusBadge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className={styles.statusDot} />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <h1 className={styles.greeting}>Hi there, I&apos;m</h1>
          <h2 className={styles.name}>
            Kirety{" "}
            <span className="gradient-text">Chowdary</span>
          </h2>
        </motion.div>

        {/* Typewriter */}
        <motion.div
          className={styles.roleWrap}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Code2 size={22} color="#3b82f6" />
          <span className={styles.role}>{displayed}</span>
          <span className={styles.cursor} />
        </motion.div>

        {/* Description */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          B.Tech CSE student at{" "}
          <span className={styles.highlight}>Vignan University</span>. Building
          production-ready web applications with{" "}
          <span className={styles.highlight}>MERN stack</span> and integrating{" "}
          <span className={styles.highlight}>AI tools</span> to craft intelligent,
          scalable digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <a
            href="#projects"
            id="hero-view-projects"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects <ExternalLink size={16} />
          </a>
          <a
            href="#contact"
            id="hero-contact"
            className="btn-outline"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in Touch <Mail size={16} />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className={styles.socials}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label={s.label}
              id={`hero-social-${s.label.toLowerCase()}`}
            >
              {s.icon}
              <span className={styles.socialTooltip}>{s.label}</span>
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          {[
            { value: "2+", label: "Projects Built" },
            { value: "7.5k", label: "LeetCode Rank" },
            { value: "Top 2%", label: "Ideathon Performer" },
            { value: "1st", label: "Web Contest 2025" },
          ].map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} color="var(--text-muted)" />
      </motion.div>
    </section>
  );
}
