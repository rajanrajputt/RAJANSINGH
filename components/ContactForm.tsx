// components/ContactForm.tsx

"use client";

import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("xanpvjpv"); // Aapka Formspree ID

  if (state.succeeded) {
    return (
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-slate-800">Thank you!</h3>
        {/* Apostrophe theek kiya gaya */}
        <p className="text-slate-600 mt-2">Your message has been sent successfully. I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="mt-2 text-sm text-red-600"
        />
      </div>

      {/* NAYA FIELD: Contact Number (Optional) */}
      <div>
        <label htmlFor="contactNumber" className="block text-sm font-medium text-slate-700">
          Contact Number (Optional)
        </label>
        <input
          id="contactNumber"
          type="tel" // 'tel' type mobile par numeric keypad kholta hai
          name="contactNumber"
          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
        />
      </div>

      {/* NAYA FIELD: WhatsApp Number (Optional) */}
      <div>
        <label htmlFor="whatsappNumber" className="block text-sm font-medium text-slate-700">
          WhatsApp Number (Optional)
        </label>
        <input
          id="whatsappNumber"
          type="tel"
          name="whatsappNumber"
          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="mt-2 text-sm text-red-600"
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full cursor-pointer rounded-lg bg-slate-900 px-8 py-3 font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 disabled:opacity-50"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}