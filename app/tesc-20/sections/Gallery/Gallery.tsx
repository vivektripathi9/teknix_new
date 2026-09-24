"use client";

import Image from "next/image";
import Button from "@/components/UI/Button/Button";
import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <section className={styles.section}>
      <div
        className={styles.imageWrapper}
        data-reveal-image
        data-parallax="40"
      >
        <Image
          src="/Images/Tesc20/gallery.jpg"
          alt="Experience curated TekniX elevators"
          fill
          sizes="100vw"
          className={styles.image}
        />
      </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <h2 className={styles.title} data-reveal-lines>
          <span data-reveal-line-mask>
            <span data-reveal-line>EXPERIENCE OUR</span>
          </span>
          <span data-reveal-line-mask>
            <span data-reveal-line>CURATED ELEVATORS</span>
          </span>
        </h2>

        <div data-reveal="up">
          <Button
            name="EXPLORE OUR GALLERY"
            href="/experience-centre"
            variant="white"
          />
        </div>
      </div>
    </section>
  );
}
