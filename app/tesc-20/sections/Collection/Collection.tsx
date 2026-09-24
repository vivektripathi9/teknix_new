"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./Collection.module.css";

const items = [
  {
    name: "OPTIMA",
    description:
      "The all-new OPTIMA redefines simplicity, giving you a vertical mobility solution with a range of technologically advanced features with German craftsmanship at its heart.",
    images: [
      "/Images/Tesc20/collection/optima-1.jpg",
      "/Images/Tesc20/collection/optima-2.jpg",
      "/Images/Tesc20/collection/optima-3.jpg",
    ],
  },
  {
    name: "VERTIX",
    description:
      "The all-new, next-generation VERTIX range of elevators from Teknix, in collaboration with SRH Aufzüge GmbH, brings you the pinnacle of German engineering and craftsmanship. Designed with cutting-edge, eco-friendly technology, the VERTIX elevators offer an unparalleled combination of essential features and unrivaled comfort, ensuring a smooth and luxurious ride every time.",
    images: [
      "/Images/Tesc20/collection/vertix-1.jpg",
      "/Images/Tesc20/collection/vertix-2.jpg",
      "/Images/Tesc20/collection/vertix-3.jpg",
    ],
  },
  {
    name: "GREENTEK",
    description:
      "Teknix GREENTEK exemplifies the pinnacle of German engineering, blending precision craftsmanship with years of innovation. With cutting-edge features like the VVVF drive with DTI, Direct Landing Technology, and sleek interface devices, it delivers an unparalleled, ultra-smooth ride—setting a new benchmark in luxury elevators.",
    images: [
      "/Images/Tesc20/collection/greentek-1.jpg",
      "/Images/Tesc20/collection/greentek-2.jpg",
      "/Images/Tesc20/collection/greentek-3.jpg",
    ],
  },
  {
    name: "HYDRATEK",
    description:
      "Teknix Hydratek is an advanced vertical transportation system, crafted with precision using cutting-edge German technology and Italian craftsmanship, based on progressive fluid dynamics.",
    images: [
      "/Images/Tesc20/collection/hydratek-1.png",
      "/Images/Tesc20/collection/hydratek-2.png",
    ],
  },
  {
    name: "VILLA MATEK",
    description:
      "TEKNIX VILLAMATEK, designed exclusively for residential use, combines technology, aesthetics, and craftsmanship to enhance accessibility for residents with mobility challenges. Available in gearless models and a variety of cabin styles to suit diverse preferences.",
    images: [
      "/Images/Tesc20/collection/villa-matek-1.jpg",
      "/Images/Tesc20/collection/villa-matek-2.jpg",
      "/Images/Tesc20/collection/villa-matek-3.jpg",
    ],
  },
];

export default function Collection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const isFirstRender = useRef(true);
  const active = items[activeIndex];

  useEffect(() => {
    if (active.images.length < 2) return;

    const interval = setInterval(() => {
      setImageIndex((current) => (current + 1) % active.images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [active.images.length, activeIndex]);

  useEffect(() => {
    const description = descriptionRef.current;
    if (!description) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    gsap.fromTo(
      description,
      { y: 16, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      },
    );

    return () => {
      gsap.killTweensOf(description);
    };
  }, [activeIndex]);

  const goTo = (index: number) => {
    const next = Math.max(0, Math.min(index, items.length - 1));

    if (next === activeIndex) return;

    const description = descriptionRef.current;

    if (!description) {
      setActiveIndex(next);
      setImageIndex(0);
      return;
    }

    gsap.to(description, {
      y: -10,
      opacity: 0,
      duration: 0.28,
      ease: "power2.in",
      onComplete: () => {
        setActiveIndex(next);
        setImageIndex(0);
      },
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow} data-reveal="up">
            THE RANGE
          </div>

          <div className={styles.controls} data-reveal="up">
            <button
              type="button"
              className={styles.controlButton}
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous"
            >
              ←
            </button>

            <button
              type="button"
              className={styles.controlButton}
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === items.length - 1}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.sidebar} data-reveal="left">
            <ul className={styles.list}>
              {items.map((item, index) => (
                <li key={item.name}>
                  <button
                    type="button"
                    className={`${styles.item} ${
                      index === activeIndex ? styles.itemActive : ""
                    }`}
                    onClick={() => goTo(index)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            <p className={styles.description} ref={descriptionRef}>
              {active.description}
            </p>
          </div>

          <div className={styles.visual} data-reveal="right">
            {items.flatMap((item, itemIndex) =>
              item.images.map((image, itemImageIndex) => (
                <Image
                  key={image}
                  src={image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 900px) 100vw, 62vw"
                  className={`${styles.image} ${
                    itemIndex === activeIndex && itemImageIndex === imageIndex
                      ? styles.imageActive
                      : ""
                  }`}
                />
              )),
            )}

            {active.images.length > 1 && (
              <div className={styles.dots}>
                {active.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    className={`${styles.dot} ${
                      index === imageIndex ? styles.dotActive : ""
                    }`}
                    onClick={() => setImageIndex(index)}
                    aria-label={`Show ${active.name} image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
