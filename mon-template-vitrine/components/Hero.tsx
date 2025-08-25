// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi"; // Add an icon

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-sky-100 via-slate-50 to-gray-100 dark:from-slate-900 dark:via-gray-800/95 dark:to-neutral-900 py-24 md:py-32 px-6 min-h-screen flex items-center overflow-hidden">
      {/* Vous pourriez ajouter des formes décoratives en fond ici si vous le souhaitez */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.03]"></div> {/* Ajout d'un motif de grille subtil */}

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-foreground">
            Votre présence en ligne, <br />
            <span className="text-primary">professionnelle</span> &{" "}
            <span className="text-accent">impactante</span>.
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl tracking-wide">
            Nous concevons des sites vitrines modernes, performants et sur mesure pour vous aider à vous démarquer et atteindre vos objectifs.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-cta hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background transition-all duration-300 ease-out"
            >
              Demander un devis
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
          <Image
            src="/hero-illustration.svg"
            alt="Illustration d'un site web moderne et interactif"
            width={512}
            height={512}
            className="w-full max-w-lg" // Adjusted max-width
            priority // Charger l'image en priorité car elle est visible immédiatement
          />
        </motion.div>
      </div>
    </section>
  );
}
