"use client";

import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { MotionInView } from "@/components/motion-in-view";
import { SectionHeading } from "@/components/section-heading";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = { name: "", email: "", message: "" };

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string>("");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");

    if (!serviceId || !templateId || !publicKey) {
      setStatus("Email service is not configured yet. Add EmailJS env variables.");
      setSubmitting(false);
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, form, { publicKey });
      setStatus("Message sent successfully. I will get back to you soon.");
      setForm(initialForm);
    } catch {
      setStatus("Something went wrong while sending. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell pb-24 pt-20 md:pb-28 md:pt-24">
      <div className="section-wrap grid gap-8 lg:grid-cols-[1.06fr_1fr]">
        <MotionInView>
          <SectionHeading
            eyebrow="Contact"
            title="Let us build something impactful together."
            description="Open to full-time roles, internships, and collaboration opportunities in full-stack and intelligent systems."
          />
          <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300 md:text-base">
            <p>Email: <a className="underline-offset-4 hover:underline" href="mailto:sharmanidhi97083@gmail.com">sharmanidhi97083@gmail.com</a></p>
            <p>LinkedIn: <a className="underline-offset-4 hover:underline" href="https://www.linkedin.com/in/nidhi-sharma-40247b272/" target="_blank" rel="noreferrer">linkedin.com/in/nidhi-sharma</a></p>
            <p>GitHub: <a className="underline-offset-4 hover:underline" href="https://github.com/nidhiisharma07" target="_blank" rel="noreferrer">github.com/nidhi-sharma</a></p>
          </div>
        </MotionInView>

        <MotionInView delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="glass-card p-6 md:p-7"
          >
            <div className="space-y-4">
              <input
                required
                value={form.name}
                onChange={(event) => setForm((value) => ({ ...value, name: event.target.value }))}
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-zinc-300/70 bg-white/90 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-accent dark:border-zinc-700 dark:bg-zinc-900"
              />
              <input
                required
                value={form.email}
                onChange={(event) => setForm((value) => ({ ...value, email: event.target.value }))}
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-zinc-300/70 bg-white/90 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-accent dark:border-zinc-700 dark:bg-zinc-900"
              />
              <textarea
                required
                value={form.message}
                onChange={(event) =>
                  setForm((value) => ({ ...value, message: event.target.value }))
                }
                rows={5}
                placeholder="Your message"
                className="w-full rounded-xl border border-zinc-300/70 bg-white/90 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-accent dark:border-zinc-700 dark:bg-zinc-900"
              />
              <button
                disabled={submitting}
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-50 transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                {submitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>
              {status && (
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{status}</p>
              )}
            </div>
          </form>
        </MotionInView>
      </div>
    </section>
  );
}
