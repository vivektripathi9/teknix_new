"use client";

import styles from "./Specifications.module.css";

const specs = [
  { label: "Horizontal Span", value: "<6m" },
  { label: "Angle of Inclination", value: "35°" },
  { label: "Pallet Width", value: "600 / 800 / 1000" },
  { label: "Speed", value: "0.5 m/s" },
  { label: "Main Power", value: "380V / 50Hz / 3Ph" },
  { label: "Balustrade", value: "Tempered Glass / SS Balustrade#" },
  { label: "Handrail Bracket", value: "Stainless Steel" },
  { label: "Handrail", value: "Black" },
  { label: "Balustrade Height", value: "1000mm" },
  {
    label: "Illumination",
    value: "Lighting Under Upper & Lower Landing Steps",
  },
  { label: "Inner & Outer Decking", value: "Stainless Steel HL" },
];

export default function Specifications() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.eyebrow} data-reveal="up">
            <span className={styles.eyebrowLine} />
            <span>APPLICATION · INDOOR / OUTDOOR 16HR DAILY</span>
            <span className={styles.eyebrowLine} />
          </div>

          <h2 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>SPECIFICATIONS</span>
            </span>
          </h2>
        </div>

        <div className={styles.grid}>
          {specs.map((spec) => (
            <article key={spec.label} className={styles.item} data-reveal="up">
              <span className={styles.label}>{spec.label}</span>
              <strong className={styles.value}>{spec.value}</strong>
            </article>
          ))}
        </div>

        <p className={styles.note} data-reveal="up">
          # Available as per project requirement.
        </p>
      </div>
    </section>
  );
}
