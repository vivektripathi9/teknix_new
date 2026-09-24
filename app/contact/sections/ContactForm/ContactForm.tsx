"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.css";

const initialForm = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setForm(initialForm);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container} data-reveal="up">
        <div className={styles.heading}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>CONTACT</span>
            <span className={styles.eyebrowLine} />
          </div>

          <h2 data-reveal-lines>
            <span data-reveal-line-mask>
              <span data-reveal-line>LET US CONNECT YOU</span>
            </span>
          </h2>

          <p>Share a few details and our team will get back to you.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
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
          </div>

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
              rows={4}
              value={form.message}
              onChange={(event) =>
                setForm({ ...form, message: event.target.value })
              }
              required
            />
          </label>

          <button type="submit" className={styles.submit}>
            <span>SEND MESSAGE</span>
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
