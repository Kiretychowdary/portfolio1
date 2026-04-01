"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import styles from "./About.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeUp}
        >
          <p className="section-label">// about me</p>
          <h2 className="section-title">
            Crafting Digital&nbsp;
            <span className="gradient-text">Experiences</span>
          </h2>
          <p className="section-subtitle">
            A passionate computer science student turning ideas into impactful web applications.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Bio card */}
          <motion.div
            className={`glass-card ${styles.bioCard}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            variants={fadeUp}
          >
            <div className={styles.avatarWrap}>
              <div className={styles.avatar}>
                <span className={styles.avatarInitials}>KC</span>
              </div>
              <div className={styles.avatarGlow} aria-hidden="true" />
            </div>

            <div className={styles.bioText}>
              <h3 className={styles.bioName}>Kirety Chowdary Manne</h3>
              <p className={styles.bioRole}>Full Stack Developer &amp; AI Enthusiast</p>

              <p className={styles.bioPara}>
                I&apos;m a final-year B.Tech Computer Science student at Vignan University, Guntur,
                with a deep passion for building full-stack web applications that solve real
                problems. I specialize in the <strong>MERN stack</strong> and love integrating
                cutting-edge <strong>AI APIs</strong> to create intelligent applications.
              </p>
              <p className={styles.bioPara}>
                During my internship at Vardhan Pvt. Ltd., I built an AI-driven interview
                simulation platform from scratch, managing 20–30 mock interviews daily. Beyond
                coding, I enjoy competitive programming on LeetCode and have a Global Rank of
                7.5k in weekly challenges.
              </p>

              <div className={styles.contactInfo}>
                {[
                  { icon: <MapPin size={15} />, text: "Guntur, India" },
                  { icon: <Mail size={15} />, text: "kiretyv@gmail.com", href: "mailto:kiretyv@gmail.com" },
                  { icon: <Phone size={15} />, text: "+91 7382104555" },
                ].map((item) => (
                  <div key={item.text} className={styles.contactRow}>
                    <span className={styles.contactIcon}>{item.icon}</span>
                    {item.href ? (
                      <a href={item.href} className={styles.contactLink}>{item.text}</a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </div>
                ))}
              </div>

              <a
                href="https://kiretyportfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                id="about-live-portfolio"
                style={{ marginTop: "20px", display: "inline-flex" }}
              >
                View Live Portfolio <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right column */}
          <div className={styles.rightCol}>
            {/* Education card */}
            <motion.div
              className={`glass-card ${styles.eduCard}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={2}
              variants={fadeUp}
            >
              <div className={styles.eduHeader}>
                <div className={styles.eduIconWrap}>
                  <GraduationCap size={24} color="#3b82f6" />
                </div>
                <div>
                  <h4 className={styles.eduTitle}>Education</h4>
                  <p className={styles.eduSub}>Academic Background</p>
                </div>
              </div>
              <div className={styles.eduBody}>
                <div className={styles.eduDegree}>
                  B.Tech in Computer Science &amp; Engineering
                </div>
                <div className={styles.eduUniversity}>
                  Vignan University, Guntur
                </div>
                <div className={styles.eduMeta}>
                  <span className="badge badge-blue">Aug 2022 – May 2026</span>
                  <span className="badge badge-emerald">CGPA: 7.34</span>
                </div>
              </div>
            </motion.div>

            {/* What I do cards */}
            <motion.div
              className={styles.doGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={3}
              variants={fadeUp}
            >
              {[
                {
                  emoji: "🧠",
                  title: "AI Integration",
                  desc: "Building AI-powered apps using Gemini, OpenAI and other cutting-edge APIs",
                  color: "#3b82f6",
                },
                {
                  emoji: "⚡",
                  title: "Full Stack Dev",
                  desc: "End-to-end development with React, Node.js, Express and MongoDB",
                  color: "#8b5cf6",
                },
                {
                  emoji: "🏆",
                  title: "Competitive Coding",
                  desc: "DSA enthusiast with Global Rank 7.5k on LeetCode",
                  color: "#06b6d4",
                },
                {
                  emoji: "🎨",
                  title: "UI/UX Design",
                  desc: "Crafting beautiful, responsive interfaces using Figma and modern CSS",
                  color: "#10b981",
                },
              ].map((item) => (
                <div key={item.title} className={styles.doCard} style={{ "--card-color": item.color } as React.CSSProperties}>
                  <span className={styles.doEmoji}>{item.emoji}</span>
                  <h5 className={styles.doTitle}>{item.title}</h5>
                  <p className={styles.doDesc}>{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
