"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Journal.module.css";

const featured = {
  title:
    "How to Choose the Right Elevator for Your Building: A Complete Buyer's Guide",
  href: "/blog",
  image: "/Images/Tesc20/collection/optima-1.jpg",
};

const articles = [
  {
    number: "01",
    title:
      "Reliable Lift Suppliers in Bangalore: Complete Selection & Procurement Guide",
    href: "/blog",
  },
  {
    number: "02",
    title:
      "Home Elevators in Bangalore: The Definitive Guide for Villas & Duplex Homes",
    href: "/blog",
  },
  {
    number: "03",
    title:
      "Top Elevator Manufacturers in Bangalore: Complete Architectural & Buyer's Guide",
    href: "/blog",
  },
];

export default function Journal() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow} data-reveal="up">
            <span className={styles.eyebrowLine} />
            <span>JOURNAL</span>
          </div>

          <div className={styles.headerRow}>
            <h2 data-reveal-lines>
              <span data-reveal-line-mask>
                <span data-reveal-line>OUR BLOG</span>
              </span>
            </h2>

            <Link href="/blog" className={styles.allArticles} data-reveal="up">
              <span>ALL ARTICLES</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className={styles.featured}>
          <div className={styles.featuredCopy} data-reveal="left">
            <span className={styles.featuredLabel}>FEATURED</span>

            <h3>
              <Link href={featured.href}>{featured.title}</Link>
            </h3>

            <Link href={featured.href} className={styles.readLink}>
              <span>READ ARTICLE</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <Link
            href={featured.href}
            className={styles.featuredImage}
            data-reveal-image
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              className={styles.image}
            />
          </Link>
        </div>

        <div className={styles.grid}>
          {articles.map((article) => (
            <Link
              key={article.number}
              href={article.href}
              className={styles.card}
              data-reveal="up"
            >
              <span className={styles.number}>{article.number}</span>
              <h3>{article.title}</h3>
              <span className={styles.readLink}>
                <span>READ ARTICLE</span>
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
