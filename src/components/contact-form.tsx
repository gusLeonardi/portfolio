"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/context/language-context";
import { dictionary } from "@/data/content";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { locale } = useLanguage();
  const copy = dictionary.contact;
  const [values, setValues] = useState({ name: "", email: "", message: "", company: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const validate = () => {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = copy.errorRequired[locale];
    if (!values.email.trim()) next.email = copy.errorRequired[locale]; else if (!EMAIL_REGEX.test(values.email.trim())) next.email = copy.errorEmail[locale];
    if (!values.message.trim()) next.message = copy.errorRequired[locale]; else if (values.message.trim().length < 10) next.message = copy.errorMinLength[locale];
    return next;
  };
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validate(); setErrors(validation);
    if (Object.keys(validation).length) return;
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      if (!response.ok) throw new Error();
      setStatus("success"); setValues({ name: "", email: "", message: "", company: "" });
    } catch { setStatus("error"); }
  }
  return <form onSubmit={handleSubmit} noValidate className="contact-form">
    <input name="company" value={values.company} onChange={e => setValues(v => ({ ...v, company: e.target.value }))} className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden/>
    <label>{copy.formName[locale]}<input name="name" autoComplete="name" value={values.name} onChange={e => setValues(v => ({ ...v, name: e.target.value }))}/>{errors.name && <small>{errors.name}</small>}</label>
    <label>{copy.formEmail[locale]}<input name="email" type="email" autoComplete="email" value={values.email} onChange={e => setValues(v => ({ ...v, email: e.target.value }))}/>{errors.email && <small>{errors.email}</small>}</label>
    <label>{copy.formMessage[locale]}<textarea name="message" rows={6} value={values.message} onChange={e => setValues(v => ({ ...v, message: e.target.value }))}/>{errors.message && <small>{errors.message}</small>}</label>
    <button className="primary-action" disabled={status === "sending"}>{status === "sending" ? copy.formSending[locale] : copy.formSubmit[locale]} <span>↗</span></button>
    {status === "success" && <p className="form-success">{copy.formSuccess[locale]}</p>}{status === "error" && <p className="form-error">{copy.formError[locale]}</p>}
  </form>;
}
