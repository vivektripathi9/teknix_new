"use client";

import styles from "./Welcome.module.css";

const values = [
  {
    title: "Quality Excellence",
    description:
      "Quality is the foundation of our business and we strive to achieve market leadership through superior products and exceptional service.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3.2L20.4 10.8L28.8 12.2L22.8 18.2L24.2 26.6L16 22.6L7.8 26.6L9.2 18.2L3.2 12.2L11.6 10.8L16 3.2Z" stroke="currentColor" strokeWidth="0.8" />
        <path d="M16 11.6V19.2" stroke="currentColor" strokeWidth="0.8" />
        <path d="M12.8 15.4H19.2" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    title: "Safety & Reliability",
    description:
      "Using the latest technology, each product undergoes vigorous testing in order to reach all the safety norms which has been our prime goal.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3.6L26.4 7.2V16.4C26.4 22.2 22 26.8 16 28.4C10 26.8 5.6 22.2 5.6 16.4V7.2L16 3.6Z" stroke="currentColor" strokeWidth="0.8" />
        <path d="M11.6 16.2L14.6 19.2L20.8 13" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    title: "Innovative Thinking",
    description:
      "Our handpicked team of qualified, technically competent and talented engineers with vast knowledge bring out latest innovations.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="13.6" r="6.4" stroke="currentColor" strokeWidth="0.8" />
        <path d="M13.2 21.2H18.8" stroke="currentColor" strokeWidth="0.8" />
        <path d="M13.8 23.6H18.2" stroke="currentColor" strokeWidth="0.8" />
        <path d="M16 3.2V5.2" stroke="currentColor" strokeWidth="0.8" />
        <path d="M7.2 13.6H5.2" stroke="currentColor" strokeWidth="0.8" />
        <path d="M26.8 13.6H24.8" stroke="currentColor" strokeWidth="0.8" />
        <path d="M9.2 6.8L7.8 5.4" stroke="currentColor" strokeWidth="0.8" />
        <path d="M22.8 6.8L24.2 5.4" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
  },
];

export default function Welcome() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <div className={styles.eyebrow} data-reveal="up">
            <span className={styles.eyebrowLine} />
            <span>WELCOME TO TEKNIX ELEVATORS</span>
            <span className={styles.eyebrowLine} />
          </div>

          <h2 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>UNPARALLELED LUXURY</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>THROUGH A SEAMLESS BLEND</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>OF INNOVATION AND ENGINEERING</span>
            </span>
          </h2>
        </div>

        <div className={styles.grid}>
          {values.map((value) => (
            <article key={value.title} className={styles.card} data-reveal="up">
              <div className={styles.icon} aria-hidden="true">
                {value.icon}
              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
