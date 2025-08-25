// components/Testimonial.tsx
"use client";

import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";
import Image from "next/image";
export function Testimonial() {
  return (
    <section className="relative bg-gray-100 dark:bg-gray-900 py-20 px-6 overflow-hidden">
      {/* Halo animé */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[70vw] h-[70vw] rounded-full bg-gradient-to-tr from-accent/20 via-indigo-400/10 to-transparent blur-3xl animate-pulse-slow" />
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white drop-shadow-[0_2px_8px_rgba(99,102,241,0.10)]">
          Ils nous font confiance
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          L&apos;avis de nos clients est notre meilleure publicité. Découvrez leurs
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
            className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-border p-8 rounded-2xl shadow-xl flex flex-col relative overflow-hidden"
          >
            <div className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-tr from-accent/20 via-indigo-400/10 to-transparent blur-2xl opacity-60 animate-pulse-slow" />
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
              <Image
                src={t.avatar}
                alt={t.name}
                width={56}
                height={56}
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
