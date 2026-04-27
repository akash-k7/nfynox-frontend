"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async () => {
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Message sent!");
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <input
        className="w-full border p-2 mb-4"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="w-full border p-2 mb-4"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <textarea
        className="w-full border p-2 mb-4"
        placeholder="Message"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2"
      >
        Submit
      </button>
    </div>
  );
}
