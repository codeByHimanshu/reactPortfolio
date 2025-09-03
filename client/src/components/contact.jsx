import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus(" Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("❌ Failed to send message. Try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="w-full max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4 tracking-tight">
          Get In Touch
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-500 mb-10">
          Have a project or just want to say hi? Drop your message below 
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="w-full px-5 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-5 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              required
              placeholder="Write your message here..."
              rows="6"
              className="w-full px-5 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl text-xl font-bold bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>

        {status && (
          <p className="mt-8 text-center text-lg font-medium text-gray-700">
            {status}
          </p>
        )}
      </div>
    </section>
  );
}
