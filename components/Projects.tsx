"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Layers } from "lucide-react";
import { SiGithub } from "react-icons/si";
import styles from "./Projects.module.css";

const projects = [
  {
    name: "UTrack",
    tagline: "Smart Digital Bill Manager",
    period: "June 2025 – July 2025",
    liveUrl: "https://musical-naiad-0639f5.netlify.app/",
    githubUrl: "https://github.com/Kiretychowdary/Utrack",
    stack: ["React.js", "Node.js", "Express.js", "Firebase", "Firestore", "Gemini Multimodal", "Docker", "Cloud Run"],
    color: "#3b82f6",
    emoji: "🧾",
    highlights: [
      "Digital bill management platform with receipt scanning and automatic warranty tracking",
      "Razorpay payment gateway integration for real-time transaction capture and analytics",
      "Context-aware AI agent analyzing bill history for personalized financial recommendations",
      "JWT authentication, containerized via Docker on Google Cloud Run for scalable production",
    ],
    tags: ["AI/ML", "FinTech", "Cloud"],
  },
  {
    name: "AceMyInterview",
    tagline: "AI-Powered Interview Simulator",
    period: "June 2025 – Aug 2025",
    liveUrl: "https://aiksvid.netlify.app/",
    githubUrl: "https://github.com/Kiretychowdary/AceMyInterview",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini API"],
    color: "#8b5cf6",
    emoji: "🎯",
    highlights: [
      "AI-powered interview simulator reducing average user preparation time by 30%",
      "Google Gemini API for NLP-based question generation improving diversity by 40%",
      "Custom analytics dashboard tracking progress of 30+ mock interview sessions",
      "Secure system supporting 30+ concurrent users with MERN stack",
    ],
    tags: ["AI/ML", "EdTech", "MERN"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.65 },
  }),
};

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <p className="section-label">// projects</p>
          <h2 className="section-title">
            Featured&nbsp;<span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle">
            Production-ready applications built with modern tech stacks and AI integrations.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              className={`${styles.card} ${hovered === i ? styles.cardHovered : ""}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ "--project-color": project.color } as React.CSSProperties}
            >
              {/* Top glow bar */}
              <div className={styles.colorBar} style={{ background: project.color }} />

              {/* Card header */}
              <div className={styles.cardTop}>
                <div className={styles.projectEmoji} style={{ background: `${project.color}18`, border: `1px solid ${project.color}30` }}>
                  {project.emoji}
                </div>

                <div className={styles.projectLinks}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                    id={`project-github-${project.name.toLowerCase()}`}
                    aria-label={`${project.name} GitHub`}
                  >
                    <SiGithub size={18} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                    id={`project-live-${project.name.toLowerCase()}`}
                    aria-label={`${project.name} Live Demo`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectTagline}>{project.tagline}</p>

                {/* Tags */}
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag} style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}0f` }}>
                      {tag}
                    </span>
                  ))}
                  <span className={styles.period}>
                    <Calendar size={11} /> {project.period}
                  </span>
                </div>

                {/* Highlights */}
                <ul className={styles.highlights}>
                  {project.highlights.map((h, j) => (
                    <li key={j} className={styles.highlightItem}>
                      <span className={styles.bulletDot} style={{ background: project.color }} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className={styles.stackSection}>
                  <div className={styles.stackLabel}>
                    <Layers size={12} /> Stack
                  </div>
                  <div className={styles.stack}>
                    {project.stack.map((tech) => (
                      <span key={tech} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover CTA */}
              <div className={styles.cardFooter}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: "0.85rem", padding: "10px 20px" }}
                >
                  View Live Demo <ExternalLink size={14} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: "0.85rem", padding: "10px 20px" }}
                >
                  <SiGithub size={14} /> Source Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className={styles.githubCta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p>Want to see more of my work?</p>
          <a
            href="https://github.com/Kiretychowdary"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            id="projects-view-all-github"
          >
            <SiGithub size={16} /> All Repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
