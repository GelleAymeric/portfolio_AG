"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function HeroPortfolio() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-sky-100 via-slate-50 to-gray-100 dark:from-slate-900 dark:via-gray-800/95 dark:to-neutral-900 px-6">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-center">
        Aymeric Gelle <span className="block text-primary">Développeur Web &amp; Mobile</span>
      </h1>
      <p className="text-lg text-muted-foreground mb-10 max-w-xl text-center">
        Je conçois des applications et sites modernes, performants et accessibles.<br />Passionné par la tech, j&apos;aime relever des défis et apprendre chaque jour.
      </p>
      <div className="flex gap-6 mb-8">
        <a href="https://github.com/GelleAymeric" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-3xl text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/aymeric-gelle-a9696232b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-3xl text-blue-700 dark:text-blue-400 hover:text-primary dark:hover:text-primary transition-colors">
          <FaLinkedin />
        </a>
      </div>
      <button
        onClick={() => {
          const el = document.getElementById('projets');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-cta hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background transition-all duration-300 ease-out"
      >
        Voir mes projets
      </button>
    </section>
  );
}
