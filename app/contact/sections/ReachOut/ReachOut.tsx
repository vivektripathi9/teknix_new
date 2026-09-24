"use client";

import styles from "./ReachOut.module.css";

type ContactLine = {
  label: string;
  value: string;
  href?: string;
};

type Office = {
  city: string;
  company?: string;
  address: string[];
  contacts: ContactLine[];
};

const headOffice: Office = {
  city: "Bengaluru",
  company: "Teknix Elevators Pvt Ltd.",
  address: [
    "3354, KR Road, Tata Silk Farm, Banashankari Stage II,",
    "Bengaluru, Karnataka 560070",
  ],
  contacts: [
    {
      label: "Email",
      value: "sales@teknixelevators.com",
      href: "mailto:sales@teknixelevators.com",
    },
    {
      label: "Toll Free",
      value: "1800-1200-903 | 0091-80-41253500",
      href: "tel:18001200903",
    },
  ],
};

const branches: Office[] = [
  {
    city: "Hyderabad",
    company: "Teknix Elevators Pvt Ltd.",
    address: [
      "#30, Indus Space Centre, 3rd Floor, 100 Feet Road",
      "Kavuri Hills, Madhapur Road, Hyderabad - 500 081",
    ],
    contacts: [
      {
        label: "Toll Free",
        value: "040-46012184",
        href: "tel:04046012184",
      },
    ],
  },
  {
    city: "Rajkot",
    company: "Teknix Elevators Pvt. Ltd.",
    address: [
      "Mo. 61, 3rd Floor, Samrudhi Bhavan",
      "Gondal Road, Rajkot - 360001 Gujarat",
    ],
    contacts: [],
  },
  {
    city: "Nepal",
    company: "Elevator Solutions Nepal Pvt Ltd.",
    address: ["Nagapokhari, Kathmandu, Nepal."],
    contacts: [
      {
        label: "Email",
        value: "info@elevatorsolutionsnepal.com.np",
        href: "mailto:info@elevatorsolutionsnepal.com.np",
      },
      {
        label: "Phone",
        value: "+977 1 4433280",
        href: "tel:+97714433280",
      },
    ],
  },
  {
    city: "Coimbatore",
    address: [
      "7,3, Sambandam Road East, R. S. Puram,",
      "Coimbatore, Tamil Nadu - 641002",
    ],
    contacts: [
      {
        label: "Landline",
        value: "0422 471 4472",
        href: "tel:04224714472",
      },
      {
        label: "Mobile Number",
        value: "+91 789 972 3060",
        href: "tel:+917899723060",
      },
    ],
  },
  {
    city: "Belgaum",
    company: "SR Bagewadi",
    address: [
      "Plot No. 71, 3rd Stage, Scheme No. 40",
      "Hanuman Nagar, Belgaum - 590019",
    ],
    contacts: [
      {
        label: "Mobile Number",
        value: "+91 636 028 7258",
        href: "tel:+916360287258",
      },
    ],
  },
  {
    city: "Visakhapatnam",
    address: [
      "#203, Sri Muktha Residency,",
      "Baba College Road, PM Palem 3rd Bus Stop",
      "Madhurwada, Visakhapatnam,",
      "Andhra Pradesh - 530 041",
    ],
    contacts: [
      {
        label: "Mobile Number",
        value: "+91 636 028 7035",
        href: "tel:+916360287035",
      },
    ],
  },
  {
    city: "Chennai",
    address: [
      '#S4, 2nd Floor, "Anna Vazham", No 82, Arcot Road,',
      "Kodambakkam, Next to Poorvika Mobiles,",
      "Chennai - 600024",
    ],
    contacts: [
      {
        label: "Mobile Number",
        value: "+91 789 972 3060",
        href: "tel:+917899723060",
      },
    ],
  },
  {
    city: "UAE",
    company: "TEKNIX PRIME LIFTS TRADING CO. LLC",
    address: [
      "Office No. 131, Vesla business center. Al quoz,",
      "Dubai- UAE",
    ],
    contacts: [
      {
        label: "Email",
        value: "sales.dxb@teknixelevators.com",
        href: "mailto:sales.dxb@teknixelevators.com",
      },
      {
        label: "Mobile Number",
        value: "+971-56 981 8705",
        href: "tel:+971569818705",
      },
    ],
  },
];

function OfficeBlock({
  office,
  featured = false,
}: {
  office: Office;
  featured?: boolean;
}) {
  return (
    <article
      className={featured ? styles.headOffice : styles.branch}
      data-reveal="up"
    >
      <h3>{office.city}</h3>

      {office.company ? <p className={styles.company}>{office.company}</p> : null}

      <div className={styles.address}>
        {office.address.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      {office.contacts.length > 0 ? (
        <div className={styles.contacts}>
          {office.contacts.map((contact) => (
            <p key={`${office.city}-${contact.label}`}>
              <span>{contact.label} :</span>{" "}
              {contact.href ? (
                <a href={contact.href}>{contact.value}</a>
              ) : (
                contact.value
              )}
            </p>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function ReachOut() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading} data-reveal="up">
          <h2>Reach out to us</h2>
        </div>

        <div className={styles.headBlock}>
          <div className={styles.groupLabel} data-reveal="up">
            <span className={styles.groupLine} />
            <span>HEAD OFFICE</span>
          </div>

          <OfficeBlock office={headOffice} featured />
        </div>

        <div className={styles.branchesBlock}>
          <div className={styles.groupLabel} data-reveal="up">
            <span className={styles.groupLine} />
            <span>BRANCHES</span>
          </div>

          <div className={styles.branchGrid}>
            {branches.map((branch) => (
              <OfficeBlock key={branch.city} office={branch} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
