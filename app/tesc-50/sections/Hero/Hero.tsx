"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./Hero.module.css";
import { revealLines } from "@/components/Animations/Animations";

export default function Hero() {
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const wrapper = imageWrapperRef.current;
    const eyebrow = eyebrowRef.current;
    const title = titleRef.current;
    const description = descRef.current;

    if (!wrapper) return;

    const titleLines =
      title?.querySelectorAll<HTMLElement>("[data-reveal-line]");

    const descriptionLines =
      description?.querySelectorAll<HTMLElement>("[data-reveal-line]");

    if (titleLines?.length) {
      gsap.set(titleLines, {
        yPercent: 100,
        opacity: 0,
      });
    }

    if (descriptionLines?.length) {
      gsap.set(descriptionLines, {
        yPercent: 100,
        opacity: 0,
      });
    }

    if (eyebrow) {
      gsap.set(eyebrow, {
        y: 30,
        opacity: 0,
      });
    }

    const onImageDone = () => {
      if (eyebrow) {
        gsap.to(eyebrow, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      revealLines(title, {
        stagger: 0.12,
      });

      revealLines(description, {
        delay: 0.15,
        stagger: 0.1,
      });
    };

    wrapper.addEventListener("reveal-image-complete", onImageDone);

    return () => {
      wrapper.removeEventListener("reveal-image-complete", onImageDone);

      gsap.killTweensOf([
        titleLines,
        descriptionLines,
        eyebrow,
      ]);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div
        ref={imageWrapperRef}
        className={styles.heroImageWrapper}
        data-reveal-image
        data-parallax="40"
      >
        <Image
          src="/Images/Tesc50/Escalator-2-banner.webp"
          alt="TESC-50 escalator in a premium retail space"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
      </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.eyebrow} ref={eyebrowRef}>
          <span className={styles.eyebrowLine} />
          <span>ESCALATORS</span>
        </div>

        <h1 className={styles.heroTitle} ref={titleRef}>
          <span className={styles.lineMask}>
            <span className={styles.line} data-reveal-line>
              TESC-50
            </span>
          </span>
        </h1>

        <p className={styles.description} ref={descRef}>
          <span className={styles.lineMask}>
            <span className={styles.line} data-reveal-line>
              An escalator engineered for high-traffic
            </span>
          </span>
          <span className={styles.lineMask}>
            <span className={styles.line} data-reveal-line>
              retail spaces and the movement of many.
            </span>
          </span>
        </p>
      </div>
    </section>
  );
}
