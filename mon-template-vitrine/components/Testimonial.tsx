// components/Testimonial.tsx
"use client";

import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";

export function Testimonial() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
          Ils nous font confiance
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          L'avis de nos clients est notre meilleure publicité. Découvrez leurs
          expériences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col"
          >
            <p className="text-gray-700 dark:text-gray-300 italic mb-6 text-lg relative">
              <span className="absolute -top-2 -left-4 text-6xl text-brand opacity-20">
                “
              </span>
              {t.quote}
              <span className="absolute -bottom-5 -right-0 text-6xl text-brand opacity-20">
                ”
              </span>
            </p>
            <div className="mt-auto flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <img
                src={t.avatar} // Assurez-vous que ces chemins sont corrects (public/avatars/...)
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-brand"
              />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  {t.name}
                </p>
                <p className="text-sm text-brand dark:text-brand-light">
                  {t.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
