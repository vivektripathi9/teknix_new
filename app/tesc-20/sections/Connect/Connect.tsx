"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import styles from "./Connect.module.css";

const initialForm = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};

export default function Connect() {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setForm(initialForm);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.formColumn} data-reveal="left">
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>CONTACT</span>
          </div>

          <h2 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>LET US</span>
            </span>
            <span data-reveal-line-mask>
              <span data-reveal-line>CONNECT YOU</span>
            </span>
          </h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span>NAME</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(event) =>
                  setForm({ ...form, name: event.target.value })
                }
                required
              />
            </label>

            <label className={styles.field}>
              <span>EMAIL</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(event) =>
                  setForm({ ...form, email: event.target.value })
                }
                required
              />
            </label>

            <label className={styles.field}>
              <span>MOBILE</span>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={(event) =>
                  setForm({ ...form, mobile: event.target.value })
                }
                required
              />
            </label>

            <label className={styles.field}>
              <span>YOUR MESSAGE</span>
              <textarea
                name="message"
                rows={3}
                value={form.message}
                onChange={(event) =>
                  setForm({ ...form, message: event.target.value })
                }
                required
              />
            </label>

            <button type="submit" className={styles.submit}>
              <span>SEND</span>
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>

        <div className={styles.visual} data-reveal="right">
          <div className={styles.imageWrapper} data-reveal-image>
            <Image
              src="/Images/Tesc20/connect.jpg"
              alt="Speak with TekniX"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
