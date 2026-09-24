"use client";

import styles from "./Specifications.module.css";

const columns = [
  { key: "label", label: "APPLICATION" },
  { key: "a", label: "INDOOR / OUTDOOR 16HR DAILY" },
  { key: "b", label: "INDOOR / OUTDOOR 16HR DAILY" },
];

const rows = [
  { label: "Rise", a: "<6m", b: "<10m" },
  { label: "Angle of Inclination", a: "35°", b: "30°" },
  { label: "Step Width", a: "600 / 800 / 1000", b: "600 / 800 / 1000" },
  { label: "Horizontal Steps", a: "2 / 2", b: "2 / 2 or 3 / 3*" },
  { label: "Speed", a: "0.5 m/s", b: "0.5 m/s" },
  { label: "Main Power", a: "380V / 50Hz / 3Ph", b: "380V / 50Hz / 3Ph" },
  { label: "Balustrade", a: "Tempered Glass", b: "Tempered Glass" },
  { label: "Handrail Bracket", a: "Stainless Steel", b: "Stainless Steel" },
  { label: "Handrail", a: "Black", b: "Black" },
  { label: "Balustrade Height", a: "900mm", b: "900mm" },
  {
    label: "Illumination",
    a: "Lighting Under Upper & Lower Landing Steps",
    b: "Lighting Under Upper & Lower Landing Steps",
  },
  {
    label: "Inner & Outer Decking",
    a: "Stainless Steel HL / Aluminium#",
    b: "Stainless Steel HL / Aluminium#*",
  },
];

export default function Specifications() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>SPECIFICATIONS</span>
            </span>
          </h2>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr data-reveal="up">
                {columns.map((column) => (
                  <th key={column.key}>{column.label}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr key={row.label} data-reveal="up">
                  <td>{row.label}</td>
                  <td>{row.a}</td>
                  <td>{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.note} data-reveal="up">
          * Only above the specified rise. # Available as per project
          requirement.
        </p>
      </div>
    </section>
  );
}
