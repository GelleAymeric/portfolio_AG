// components/ServicesSection.tsx
"use client";

import React from "react";
import { services } from "@/data/services";
import { motion } from "framer-motion";

export function ServicesSection() {
  return (
    <section className="bg-white dark:bg-gray-950 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Nos Services</h2>
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
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-out flex flex-col items-center text-center"
          >
            <div className="text-4xl mb-4 text-accent">
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
