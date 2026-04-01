"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award, BookOpen, Target } from "lucide-react";
import styles from "./Achievements.module.css";

const achievements = [
  {
    icon: <Trophy size={22} />,
    color: "#f59e0b",
    title: "LeetCode Global Rank 7.5k",
    desc: "Achieved Global Rank 7,500 in LeetCode Weekly Challenge among 19,000+ participants.",
    tag: "Competitive Programming",
  },
  {
    icon: <Star size={22} />,
    color: "#8b5cf6",
    title: "Top 2% — Ideathon",
    desc: "Top 2% Performer in Ideathon Submission at Vignan University with 500+ participants.",
    tag: "Innovation & Design",
  },
  {
    icon: <Medal size={22} />,
    color: "#10b981",
    title: "3rd Place — Web Contest 2024",
    desc: "3rd Place in Web Project Submission at Vignan University — 2024.",
    tag: "Web Development",
  },
  {
    icon: <Award size={22} />,
    color: "#3b82f6",
    title: "1st Place — Web Contest 2025",
    desc: "1st Place in Web Project Submission at Vignan University — 2025.",
    tag: "Web Development",
  },
];

const certifications = [
  {
    icon: <BookOpen size={18} />,
    title: "Data Structures & Algorithms",
    issuer: "Certified Course",
    color: "#3b82f6",
  },
  {
    icon: <BookOpen size={18} />,
    title: "MERN Stack Development",
    issuer: "Certified Course",
    color: "#8b5cf6",
  },
  {
    icon: <BookOpen size={18} />,
    title: "Python Foundations",
    issuer: "Certified Course",
    color: "#06b6d4",
  },
  {
    icon: <BookOpen size={18} />,
    title: "SQL Basics",
    issuer: "Certified Course",
    color: "#10b981",
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

export default function Achievements() {
  return (
    <section className={`section ${styles.section}`} id="achievements">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// achievements</p>
          <h2 className="section-title">
            Awards &amp;&nbsp;<span className="gradient-text">Recognition</span>
          </h2>
          <p className="section-subtitle">
            Milestones and certifications that reflect my dedication to excellence.
          </p>
        </motion.div>

        {/* Achievements grid */}
        <div className={styles.achievementsGrid}>
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              className={`glass-card ${styles.achieveCard}`}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              style={{ "--achieve-color": a.color } as React.CSSProperties}
            >
              <div className={styles.achieveIcon} style={{ background: `${a.color}18`, border: `1px solid ${a.color}30` }}>
                <span style={{ color: a.color }}>{a.icon}</span>
              </div>
              <div className={styles.achieveContent}>
                <span className={styles.achieveTag} style={{ color: a.color, borderColor: `${a.color}30`, background: `${a.color}10` }}>
                  <Target size={10} /> {a.tag}
                </span>
                <h3 className={styles.achieveTitle}>{a.title}</h3>
                <p className={styles.achieveDesc}>{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className={styles.certSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className={styles.certTitle}>
            <BookOpen size={20} />
            Certifications
          </h3>
          <div className={styles.certGrid}>
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                className={styles.certCard}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ "--cert-color": cert.color } as React.CSSProperties}
              >
                <div className={styles.certBadge} style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}25` }}>
                  <span style={{ color: cert.color }}>{cert.icon}</span>
                </div>
                <div>
                  <p className={styles.certName}>{cert.title}</p>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
