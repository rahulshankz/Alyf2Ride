"use client";

import { useState } from "react";
import site from "@/data/site.json";

// No Formspree account needed: posting directly to /{email} auto-creates
// the form. The first real submission sends a one-time confirmation email
// to that address — click it once and the endpoint goes live.
const FORMSPREE_ENDPOINT = `https://formspree.io/f/mnjejppn`;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card p-6">
        <p className="text-cream">
          Thanks for reaching out — we'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-cream-dim">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border border-cream/20 bg-charcoal-light px-4 py-3 text-base text-cream placeholder:text-cream-dim/60 focus:border-rust focus:outline-none"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-cream-dim">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-cream/20 bg-charcoal-light px-4 py-3 text-base text-cream placeholder:text-cream-dim/60 focus:border-rust focus:outline-none"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm text-cream-dim"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-cream/20 bg-charcoal-light px-4 py-3 text-base text-cream placeholder:text-cream-dim/60 focus:border-rust focus:outline-none"
          placeholder="Questions, ride ideas, feedback..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-rust-light">
          Something went wrong — please try again or reach us directly on
          WhatsApp.
        </p>
      )}
    </form>
  );
}
