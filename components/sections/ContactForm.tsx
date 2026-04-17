"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PAGE_EASE } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

function validate(
  name: string,
  email: string,
  message: string,
): FieldErrors {
  const e: FieldErrors = {};
  if (!name.trim()) e.name = "Please add your name.";
  if (!email.trim()) e.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    e.email = "Enter a valid email.";
  if (!message.trim()) e.message = "Tell us a little about the project.";
  return e;
}

type ApiErrorResponse = {
  error?: string;
};

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    setFormError(null);
    const next = validate(name, email, message);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setPending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      let data: ApiErrorResponse = {};
      try {
        data = (await res.json()) as ApiErrorResponse;
      } catch {
        /* ignore */
      }

      if (!res.ok) {
        setFormError(
          typeof data.error === "string"
            ? data.error
            : "Something went wrong. Please try again or email us directly.",
        );
        return;
      }

      setSent(true);
    } catch {
      setFormError("Network error. Check your connection and try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="relative min-h-[420px]">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: reducedMotion ? 0 : 0.5, ease: PAGE_EASE }}
            className="rounded-lg border border-border bg-surface/40 p-8"
            role="status"
            aria-live="polite"
          >
            <p className="font-serif text-2xl italic text-primary">
              Thank you. We&apos;ll reply within two business days.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-secondary">
              If your request is urgent, note it in a follow-up email and
              we&apos;ll prioritize.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: reducedMotion ? 0 : 0.45, ease: PAGE_EASE }}
            onSubmit={onSubmit}
            className="space-y-10"
            noValidate
          >
            <div className="group relative">
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={pending}
                className="peer w-full border-0 border-b border-border bg-transparent pb-2 pt-6 text-primary outline-none transition-colors focus:border-accent disabled:opacity-50"
                placeholder=" "
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? "err-name" : undefined}
              />
              <label
                htmlFor="contact-name"
                className="pointer-events-none absolute left-0 top-2 origin-left text-[13px] text-secondary transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-[13px] peer-focus:text-accent"
              >
                Name
              </label>
              {errors.name ? (
                <p id="err-name" className="mt-2 text-sm text-highlight">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="group relative">
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={pending}
                className="peer w-full border-0 border-b border-border bg-transparent pb-2 pt-6 text-primary outline-none transition-colors focus:border-accent disabled:opacity-50"
                placeholder=" "
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "err-email" : undefined}
              />
              <label
                htmlFor="contact-email"
                className="pointer-events-none absolute left-0 top-2 origin-left text-[13px] text-secondary transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-[13px] peer-focus:text-accent"
              >
                Email
              </label>
              {errors.email ? (
                <p id="err-email" className="mt-2 text-sm text-highlight">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="group relative">
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={pending}
                className="peer w-full resize-none border-0 border-b border-border bg-transparent pb-2 pt-8 text-primary outline-none transition-colors focus:border-accent disabled:opacity-50"
                placeholder=" "
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={
                  errors.message
                    ? "err-msg"
                    : formError
                      ? "err-form"
                      : undefined
                }
              />
              <label
                htmlFor="contact-message"
                className="pointer-events-none absolute left-0 top-3 origin-left text-[13px] text-secondary transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-[13px] peer-focus:text-accent"
              >
                Message
              </label>
              {errors.message ? (
                <p id="err-msg" className="mt-2 text-sm text-highlight">
                  {errors.message}
                </p>
              ) : null}
            </div>

            {formError ? (
              <p
                id="err-form"
                className="text-sm leading-relaxed text-highlight"
                role="alert"
              >
                {formError}
              </p>
            ) : null}

            <MagneticButton
              type="submit"
              variant="primary"
              fullWidth
              disabled={pending}
            >
              {pending ? "Sending…" : "Send message"}
            </MagneticButton>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
