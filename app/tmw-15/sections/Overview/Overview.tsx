"use client";

import Image from "next/image";
import styles from "./Overview.module.css";

const features = [
  {
    title: "Precision Trust",
    description: "Rectangle tube truss with precision welding.",
    icon: "/Images/Tmw15/icons/truss.png",
  },
  {
    title: "Chosen Steps",
    description:
      "Stainless steel or aluminium steps as per the client's choice.",
    icon: "/Images/Tmw15/icons/steps.png",
  },
  {
    title: "Ensure Safety",
    description: "Safety protection standards as laid out by the EN Codes.",
    icon: "/Images/Tmw15/icons/safety.png",
  },
  {
    title: "Auto Lubrication",
    description:
      "Automatic lubrication system lubricates all kinds of driving components.",
    icon: "/Images/Tmw15/icons/lubrication.png",
  },
];

export default function Overview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <div className={styles.eyebrow} data-reveal="up">
            <span className={styles.eyebrowLine} />
            <span>TMW-15</span>
            <span className={styles.eyebrowLine} />
          </div>

          <h2 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>MOVING MADE SIMPLE AND EASY.</span>
            </span>
          </h2>

          <p data-reveal="up">
            These escalators are designed for heavy usage like malls, airports,
            subway stations and railway stations where public flow is very high.
            They have a maximum operation capability of 20 hours daily and can
            go up to 27 metres rise height.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <article key={feature.title} className={styles.card} data-reveal="up">
              <div className={styles.icon}>
                <Image
                  src={feature.icon}
                  alt=""
                  width={56}
                  height={56}
                />
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
