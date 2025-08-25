// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi"; // Add an icon

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 md:py-32 px-6 overflow-hidden bg-gradient-to-br from-sky-100 via-slate-50 to-gray-100 dark:from-slate-900 dark:via-gray-800/95 dark:to-neutral-900">
      {/* Dégradé animé et halo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -z-10 w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-accent/30 via-indigo-400/20 to-transparent blur-3xl animate-pulse-slow" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.03]" />
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 rounded-3xl shadow-2xl border border-border p-10 md:p-14"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-foreground drop-shadow-[0_2px_8px_rgba(99,102,241,0.10)]">
            Salut, moi c&apos;est <span className="text-primary">Aymeric Gelle</span>.<br />
            <span className="animate-gradient-x bg-gradient-to-r from-accent via-indigo-500 to-primary bg-clip-text text-transparent">Développeur web & mobile</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl tracking-wide">
            Fraîchement diplômé, je transforme des idées en applications et sites web fonctionnels et élégants.<br />
            J’aime relever des défis techniques, explorer de nouvelles technologies et créer des expériences utilisateurs simples et engageantes.
          </p>
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-background transition-all duration-300 ease-out backdrop-blur-md"
            >
              Me contacter
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-12 md:mt-0 flex justify-center"
        >
          <div className="relative">
            <Image
              src="/hero-illustration.svg"
              alt="Illustration d'un site web moderne et interactif"
              width={512}
              height={512}
              className="w-full max-w-lg drop-shadow-[0_8px_32px_rgba(99,102,241,0.15)] rounded-2xl border border-border bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl"
              priority
            />
            {/* Halo animé */}
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-tr from-accent/30 via-indigo-400/20 to-transparent blur-2xl opacity-70 animate-pulse-slow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
