import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const footerColumns = [
  {
    title: "PRODUCTS",
    links: [
      { name: "EVO", href: "/elevators/evo" },
      { name: "Optima", href: "/elevators/optima" },
      { name: "Vertix", href: "/elevators/vertix" },
      { name: "Greentek", href: "/elevators/greentek" },
      { name: "Villa Matek", href: "/elevators/villa-matek" },
      { name: "Hydratek", href: "/elevators/hydratek" },
      { name: "Special Purpose", href: "/elevators/special-purpose" },
      { name: "TESC-20", href: "/tesc-20" },
      { name: "TESC-50", href: "/tesc-50" },
      { name: "TMW-15", href: "/tmw-15" },
    ],
  },

  {
    title: "APPLICATIONS",
    links: [
      { name: "Villas", href: "/applications/villas" },
      { name: "Apartments", href: "/applications/apartments" },
      { name: "Hotels", href: "/applications/hotels" },
      { name: "Offices", href: "/applications/offices" },
      { name: "Hospitals", href: "/applications/hospitals" },
      { name: "Data Centres", href: "/applications/data-centres" },
      { name: "Industry", href: "/applications/industry" },
    ],
  },

  {
    title: "TEKNIX",
    links: [
      { name: "Why TekniX", href: "/about" },
      { name: "Engineering", href: "/engineering" },
      { name: "Manufacturing", href: "/manufacturing" },
      { name: "Technology", href: "/technology" },
      { name: "Experience Centre", href: "/experience-centre" },
    ],
  },

  {
    title: "RESOURCES",
    links: [
      { name: "Blogs", href: "/blog" },
      { name: "FAQ", href: "/faq" },
      { name: "Brochures & Downloads", href: "/downloads" },
    ],
  },

  {
    title: "CONTACT",
    links: [
      { name: "Phone", href: "/contact" },
      { name: "Email", href: "/contact" },
      { name: "Office", href: "/contact" },
      { name: "Social Media", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <h2 className={styles.heading}>
          FOR EVERYTHING THAT MATTERS.
        </h2>

        <Link href="/" className={styles.logo}>
          <Image
            src="/Images/logo-black.png"
            alt="TekniX Elevators"
            width={160}
            height={60}
          />
        </Link>
      </div>

      {/* Links */}
      <div className={styles.linksSection}>
        {footerColumns.map((column) => (
          <div className={styles.column} key={column.title}>
            <h3>{column.title}</h3>

            <div className={styles.links}>
              {column.links.map((link) => (
                <Link key={link.name} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p>© 2026 TekniX Elevators. All rights reserved.</p>

        <div className={styles.legalLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
          <Link href="/sitemap">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}