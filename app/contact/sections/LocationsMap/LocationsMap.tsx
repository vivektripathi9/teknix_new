"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import styles from "./LocationsMap.module.css";

type Location = {
  id: string;
  city: string;
  role: "head" | "branch";
  image: string;
  mapsUrl: string;
  x: number;
  y: number;
};

const locations: Location[] = [
  {
    id: "bengaluru",
    city: "Bengaluru",
    role: "head",
    image: "/Images/Contact/bengaluru.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Teknix+Elevators+3354+KR+Road+Tata+Silk+Farm+Bengaluru",
    x: 50,
    y: 50,
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    role: "branch",
    image: "/Images/Contact/hyderabad.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Indus+Space+Centre+Kavuri+Hills+Madhapur+Hyderabad",
    x: 50,
    y: 14,
  },
  {
    id: "coimbatore",
    city: "Coimbatore",
    role: "branch",
    image: "/Images/Contact/coimbatore.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sambandam+Road+East+RS+Puram+Coimbatore",
    x: 76,
    y: 24,
  },
  {
    id: "chennai",
    city: "Chennai",
    role: "branch",
    image: "/Images/Contact/chennai.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Anna+Vazham+82+Arcot+Road+Kodambakkam+Chennai",
    x: 86,
    y: 50,
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam",
    role: "branch",
    image: "/Images/Contact/visakhapatnam.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sri+Muktha+Residency+PM+Palem+Madhurwada+Visakhapatnam",
    x: 76,
    y: 76,
  },
  {
    id: "uae",
    city: "UAE",
    role: "branch",
    image: "/Images/Contact/uae.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Vesla+Business+Center+Al+Quoz+Dubai",
    x: 50,
    y: 86,
  },
  {
    id: "nepal",
    city: "Nepal",
    role: "branch",
    image: "/Images/Contact/nepal.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Nagapokhari+Kathmandu+Nepal",
    x: 24,
    y: 76,
  },
  {
    id: "rajkot",
    city: "Rajkot",
    role: "branch",
    image: "/Images/Contact/rajkot.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Samrudhi+Bhavan+Gondal+Road+Rajkot",
    x: 14,
    y: 50,
  },
  {
    id: "belgaum",
    city: "Belgaum",
    role: "branch",
    image: "/Images/Contact/belgaum.png",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hanuman+Nagar+Scheme+No+40+Belgaum",
    x: 24,
    y: 24,
  },
];

const meshLinks: [string, string][] = [
  ["bengaluru", "hyderabad"],
  ["bengaluru", "coimbatore"],
  ["bengaluru", "chennai"],
  ["bengaluru", "visakhapatnam"],
  ["bengaluru", "uae"],
  ["bengaluru", "nepal"],
  ["bengaluru", "rajkot"],
  ["bengaluru", "belgaum"],
  ["hyderabad", "coimbatore"],
  ["coimbatore", "chennai"],
  ["chennai", "visakhapatnam"],
  ["visakhapatnam", "uae"],
  ["uae", "nepal"],
  ["nepal", "rajkot"],
  ["rajkot", "belgaum"],
  ["belgaum", "hyderabad"],
  ["hyderabad", "chennai"],
  ["belgaum", "nepal"],
  ["coimbatore", "visakhapatnam"],
  ["rajkot", "uae"],
];

function popupPlacement(x: number, y: number) {
  const horizontal = x >= 68 ? "left" : x <= 32 ? "right" : "center";
  const vertical = y <= 28 ? "below" : "above";
  return `${vertical}-${horizontal}` as
    | "above-center"
    | "above-left"
    | "above-right"
    | "below-center"
    | "below-left"
    | "below-right";
}

const popupPositionClass = {
  "above-center": styles.popupAboveCenter,
  "above-left": styles.popupAboveLeft,
  "above-right": styles.popupAboveRight,
  "below-center": styles.popupBelowCenter,
  "below-left": styles.popupBelowLeft,
  "below-right": styles.popupBelowRight,
};

export default function LocationsMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const gradientId = useId().replace(/:/g, "");

  const active = locations.find((location) => location.id === activeId) ?? null;
  const byId = Object.fromEntries(locations.map((location) => [location.id, location]));

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!stageRef.current?.contains(event.target as Node)) {
        setActiveId(null);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.mapStage} ref={stageRef} data-reveal="up">
          <svg
            className={styles.mesh}
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c9aa7c" stopOpacity="0.28" />
                <stop offset="50%" stopColor="#c9aa7c" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#c9aa7c" stopOpacity="0.28" />
              </linearGradient>
            </defs>

            {meshLinks.map(([fromId, toId]) => {
              const from = byId[fromId];
              const to = byId[toId];
              if (!from || !to) return null;

              const isLit =
                activeId !== null &&
                (activeId === fromId || activeId === toId);

              return (
                <line
                  key={`${fromId}-${toId}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  className={isLit ? styles.linkActive : styles.link}
                  stroke={`url(#${gradientId})`}
                />
              );
            })}

            {meshLinks.map(([fromId, toId]) => {
              const from = byId[fromId];
              const to = byId[toId];
              if (!from || !to) return null;

              return (
                <circle
                  key={`dot-${fromId}-${toId}`}
                  cx={(from.x + to.x) / 2}
                  cy={(from.y + to.y) / 2}
                  r={0.4}
                  className={styles.linkDot}
                />
              );
            })}
          </svg>

          {locations.map((location) => {
            const isActive = location.id === activeId;
            const isHead = location.role === "head";

            return (
              <div
                key={location.id}
                className={styles.nodeWrap}
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
              >
                <button
                  type="button"
                  className={[
                    styles.node,
                    isHead ? styles.nodeHead : styles.nodeBranch,
                    isActive ? styles.nodeActive : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={(event) => {
                    event.stopPropagation();
                    setActiveId((current) =>
                      current === location.id ? null : location.id,
                    );
                  }}
                  aria-expanded={isActive}
                  aria-label={`${location.city}${isHead ? " head office" : " branch"}`}
                >
                  <span className={styles.nodeRing} aria-hidden="true" />
                  <span className={styles.nodeIcon}>
                    <Image
                      src={location.image}
                      alt=""
                      fill
                      sizes="72px"
                      className={styles.nodeImage}
                    />
                  </span>
                  <span className={styles.nodeLabel}>{location.city}</span>
                </button>

                {isActive && active ? (
                  <div
                    className={`${styles.popup} ${popupPositionClass[popupPlacement(location.x, location.y)]}`}
                    role="dialog"
                    aria-label={`${active.city} location`}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <div className={styles.popupImage}>
                      <Image
                        src={active.image}
                        alt={`${active.city} office`}
                        fill
                        sizes="220px"
                        className={styles.popupPhoto}
                      />
                    </div>
                    <div className={styles.popupBody}>
                      <span className={styles.popupRole}>
                        {active.role === "head" ? "HEAD OFFICE" : "BRANCH"}
                      </span>
                      <strong>{active.city}</strong>
                      <a
                        href={active.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.popupButton}
                      >
                        <span>Google Maps</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
