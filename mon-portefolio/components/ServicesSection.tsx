// components/ServicesSection.tsx
"use client";

import React from "react";
import { services } from "@/data/services";
import { motion } from "framer-motion";

export function ServicesSection() {
  return (
    <section className="relative bg-white dark:bg-gray-950 py-20 px-6 overflow-hidden">
      {/* Halo animé */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[70vw] h-[70vw] rounded-full bg-gradient-to-tr from-accent/20 via-indigo-400/10 to-transparent blur-3xl animate-pulse-slow" />
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white drop-shadow-[0_2px_8px_rgba(99,102,241,0.10)]">Nos Services</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Découvrez comment nous pouvons vous aider à construire une présence en ligne forte et efficace.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-border p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-out flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-tr from-accent/20 via-indigo-400/10 to-transparent blur-2xl opacity-60 animate-pulse-slow" />
            <div className="text-4xl mb-4 text-accent drop-shadow-[0_2px_8px_rgba(99,102,241,0.15)]">
              <service.icon />
            </div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
