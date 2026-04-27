"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = async () => {
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });
    alert("Submitted!");
  };

  return (
    <div className="p-6">
      <h1>Contact</h1>

      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
