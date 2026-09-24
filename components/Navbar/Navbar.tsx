"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

type NavChild = {
  name: string;
  href: string;
};

type NavItem = {
  name: string;
  href?: string;
  children?: NavChild[];
};

const leftLinks: NavItem[] = [
  { name: "ABOUT", href: "/about" },
  { name: "ELEVATORS", href: "/elevators" },
  {
    name: "ESCALATORS",
    children: [
      { name: "TESC-20", href: "/tesc-20" },
      { name: "TESC-50", href: "/tesc-50" },
      { name: "TMW-15", href: "/tmw-15" },
    ],
  },
  { name: "SERVICES", href: "/services" },
];

const rightLinks: NavItem[] = [
  { name: "EXPERIENCE CENTRE", href: "/experience-centre" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

function DesktopLink({ item }: { item: NavItem }) {
  if (item.children?.length) {
    return (
      <div className={styles.dropdown}>
        <button type="button" className={styles.navLink} aria-haspopup="true">
          {item.name}
        </button>

        <div className={styles.dropdownPanel}>
          {item.children.map((child) => (
            <Link key={child.href} href={child.href} className={styles.dropdownItem}>
              {child.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link href={item.href || "/"} className={styles.navLink}>
      {item.name}
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenMobileGroup(null);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.leftNav}>
          {leftLinks.map((link) => (
            <DesktopLink key={link.name} item={link} />
          ))}
        </div>

        <Link
          href="/"
          className={styles.logo}
          onClick={closeMenu}
        >
          <Image
            src="/Images/logo.png"
            alt="TekniX Elevators"
            width={130}
            height={50}
            priority
          />
        </Link>

        <div className={styles.rightNav}>
          {rightLinks.map((link) => (
            <DesktopLink key={link.name} item={link} />
          ))}
        </div>

        <button
          type="button"
          className={`${styles.menuButton} ${
            menuOpen ? styles.menuButtonOpen : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.mobileMenuContent}>
          {[...leftLinks, ...rightLinks].map((link) => {
            if (link.children?.length) {
              const isOpen = openMobileGroup === link.name;

              return (
                <div key={link.name} className={styles.mobileGroup}>
                  <button
                    type="button"
                    className={styles.mobileLink}
                    onClick={() =>
                      setOpenMobileGroup(isOpen ? null : link.name)
                    }
                    aria-expanded={isOpen}
                  >
                    <span>{link.name}</span>
                    <span className={styles.arrow}>{isOpen ? "–" : "→"}</span>
                  </button>

                  <div
                    className={`${styles.mobileSubmenu} ${
                      isOpen ? styles.mobileSubmenuOpen : ""
                    }`}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={styles.mobileSubLink}
                        onClick={closeMenu}
                      >
                        <span>{child.name}</span>
                        <span className={styles.arrow}>→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href || "/"}
                className={styles.mobileLink}
                onClick={closeMenu}
              >
                <span>{link.name}</span>
                <span className={styles.arrow}>→</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
