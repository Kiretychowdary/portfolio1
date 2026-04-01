"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skillCategories = [
  {
    label: "Languages",
    icon: "💻",
    color: "#3b82f6",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 78 },
      { name: "JavaScript", level: 90 },
      { name: "C", level: 70 },
    ],
  },
  {
    label: "Frontend",
    icon: "🎨",
    color: "#8b5cf6",
    skills: [
      { name: "React.js", level: 92 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 88 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    label: "Backend",
    icon: "⚙️",
    color: "#06b6d4",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "JWT Auth", level: 82 },
    ],
  },
  {
    label: "Databases",
    icon: "🗄️",
    color: "#10b981",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 78 },
      { name: "MySQL", level: 75 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    label: "DevOps & Tools",
    icon: "🛠️",
    color: "#f59e0b",
    skills: [
      { name: "Docker", level: 72 },
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 75 },
      { name: "AWS (Basics)", level: 60 },
    ],
  },
  {
    label: "CS Fundamentals",
    icon: "🧠",
    color: "#f43f5e",
    skills: [
      { name: "Data Structures", level: 88 },
      { name: "Algorithms", level: 85 },
      { name: "OOP", level: 90 },
      { name: "DBMS", level: 80 },
    ],
  },
];

const techCloud = [
  "React.js", "Node.js", "Express.js", "MongoDB", "Python", "Java",
  "JavaScript", "TypeScript", "Docker", "Git", "PostgreSQL", "MySQL",
  "Firebase", "Gemini API", "Tailwind CSS", "HTML5", "CSS3", "Figma",
  "AWS", "JWT", "REST APIs", "DSA", "OOP", "DBMS",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const cat = skillCategories[activeCategory];

  return (
    <section className={`section ${styles.section}`} id="skills">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// skills</p>
          <h2 className="section-title">
            Technical&nbsp;<span className="gradient-text">Arsenal</span>
          </h2>
          <p className="section-subtitle">
            A curated set of tools and technologies I use to build amazing products.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className={styles.tabs}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {skillCategories.map((c, i) => (
            <button
              key={c.label}
              id={`skill-tab-${c.label.toLowerCase().replace(/\s/g, "-")}`}
              className={`${styles.tab} ${activeCategory === i ? styles.tabActive : ""}`}
              onClick={() => setActiveCategory(i)}
              style={{ "--tab-color": c.color } as React.CSSProperties}
            >
              <span>{c.icon}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Skill bars */}
        <motion.div
          key={activeCategory}
          className={`glass-card ${styles.skillPanel}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.panelHeader}>
            <span className={styles.panelEmoji}>{cat.icon}</span>
            <div>
              <h3 className={styles.panelTitle}>{cat.label}</h3>
              <p className={styles.panelSub}>{cat.skills.length} technologies</p>
            </div>
          </div>

          <div className={styles.skillBars}>
            {cat.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className={styles.skillRow}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                <div className={styles.skillMeta}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillPercent} style={{ color: cat.color }}>
                    {skill.level}%
                  </span>
                </div>
                <div className={styles.barBg}>
                  <motion.div
                    className={styles.barFill}
                    style={{ background: `linear-gradient(90deg, ${cat.color}, ${cat.color}bb)` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech cloud */}
        <motion.div
          className={styles.cloudSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className={styles.cloudLabel}>All Technologies</p>
          <div className={styles.cloud}>
            {techCloud.map((tech, i) => (
              <motion.span
                key={tech}
                className={styles.cloudBadge}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
