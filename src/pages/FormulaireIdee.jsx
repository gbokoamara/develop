
// pages/FormulaireIdee.jsx
import React, { useState } from "react";

export const FormulaireIdee = () => {
  const [form, setForm] = useState({ name: "", email: "", projet: "", description: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux connecter à ton backend pour stocker l'idée
    alert("Merci pour votre idée ! Nous reviendrons vers vous rapidement.");
    setForm({ name: "", email: "", projet: "", description: "" });
  };

  return (
    <section className="py-20 bg-gray-100 text-gray-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Partagez votre idée
        </h1>
        <p className="mb-6">
          Décrivez votre projet et vos besoins, nous reviendrons vers vous avec une proposition adaptée.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full"
            required
          />
          <input
            type="text"
            name="projet"
            placeholder="Nom de votre projet"
            value={form.projet}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full"
            required
          />
          <textarea
            name="description"
            placeholder="Décrivez votre idée"
            value={form.description}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full h-40"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Envoyer mon idée
          </button>
        </form>
      </div>
    </section>
  );
};
