"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink } from "lucide-react";
import styles from "./Experience.module.css";

const experience = {
  role: "Full Stack Developer Intern",
  period: "June 2025 – Sept 2025",
  company: "Vardhan Pvt. Ltd",
  location: "Remote",
  highlights: [
    {
      metric: "20-30",
      unit: "daily interviews",
      desc: "Directed development of an AI-driven interview simulation platform using React, Node.js, and MongoDB.",
    },
    {
      metric: "35%",
      unit: "efficiency gain",
      desc: "Integrated Gemini API to generate domain-specific interview questions with personalized feedback.",
    },
    {
      metric: "20%",
      unit: "less downtime",
      desc: "Engineered secure RESTful APIs for authentication, analytics, and performance tracking.",
    },
    {
      metric: "15-30",
      unit: "active testers",
      desc: "Implemented real-time data visualization dashboards to track interview readiness.",
    },
    {
      metric: "8 weeks",
      unit: "delivery",
      desc: "Collaborated on end-to-end architecture to deliver a robust, production-ready platform.",
    },
  ],
  stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "RESTful APIs"],
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Experience() {
  return (
    <section className={`section ${styles.section}`} id="experience">
      <div className="container">
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeUp}
        >
          <p className="section-label">// experience</p>
          <h2 className="section-title">
            Professional&nbsp;<span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            Hands-on experience building production-grade AI-powered applications.
          </p>
        </motion.div>

        <div className={styles.layout}>
          {/* Timeline line */}
          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            <div className={styles.timelineDot} />
          </div>

          {/* Main experience card */}
          <motion.div
            className={`glass-card ${styles.card}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            variants={fadeUp}
          >
            {/* Header */}
            <div className={styles.cardHeader}>
              <div className={styles.companyIcon}>
                <Briefcase size={22} color="#3b82f6" />
              </div>
              <div className={styles.cardMeta}>
                <h3 className={styles.role}>{experience.role}</h3>
                <p className={styles.company}>{experience.company}</p>
              </div>
              <div className={styles.badges}>
                <span className="badge badge-blue">
                  <Calendar size={11} style={{ marginRight: 5 }} />
                  {experience.period}
                </span>
                <span className="badge badge-violet">
                  <MapPin size={11} style={{ marginRight: 5 }} />
                  {experience.location}
                </span>
              </div>
            </div>

            {/* Stack */}
            <div className={styles.stackRow}>
              {experience.stack.map((tech) => (
                <span key={tech} className={`badge badge-cyan ${styles.stackBadge}`}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Highlight metrics grid */}
            <div className={styles.metricsGrid}>
              {experience.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  className={styles.highlight}
                  custom={i + 2}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className={styles.checkIcon}>
                    <CheckCircle2 size={16} color="#10b981" />
                  </div>
                  <div>
                    <div className={styles.highlightMeta}>
                      <span className={styles.metric}>{h.metric}</span>
                      <span className={styles.unit}>{h.unit}</span>
                    </div>
                    <p className={styles.highlightDesc}>{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className={styles.cardFooter}>
              <a
                href="https://github.com/Kiretychowdary"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                id="experience-github"
                style={{ fontSize: "0.875rem" }}
              >
                View Related Projects <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
