// components/Footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiFacebook, FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi"; // Using react-icons

export function Footer() {
  const socialLinks = [
    { href: "https://facebook.com", icon: <FiFacebook size={20} /> },
    { href: "https://twitter.com", icon: <FiTwitter size={20} /> },
    { href: "https://linkedin.com", icon: <FiLinkedin size={20} /> },
    { href: "https://github.com", icon: <FiGithub size={20} /> }, // Example
  ];

  const footerNavLinks = [
    { href: "/about", label: "À propos" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/legal", label: "Mentions Légales" }, // Example
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 py-12 px-6 border-t border-slate-200 dark:border-slate-700/50" // Couleurs plus douces et cohérentes
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10"> {/* Ajustement des colonnes pour plus de flexibilité */}
          {/* Logo & Slogan */}
          <div className="md:col-span-2"> {/* Le logo prend plus de place */}
            <Link href="/" className="text-2xl font-bold text-brand dark:text-brand-light mb-2 inline-block hover:opacity-80 transition-opacity">
              TemplateSiteVitrine
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs">
              Votre partenaire digital pour une présence en ligne réussie et impactante.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-white mb-4 text-sm uppercase tracking-wider"> {/* Style de titre de section */}
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerNavLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-brand dark:hover:text-brand-light transition-colors pb-1 hover:border-b hover:border-brand/50">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Contact Info */}
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-white mb-4 text-sm uppercase tracking-wider"> {/* Style de titre de section */}
              Suivez-nous
            </h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 dark:text-slate-400 hover:text-brand dark:hover:text-brand-light transition-colors"
                  aria-label={`Follow us on ${social.href.split('.')[1]}`} // Amélioration de l'aria-label
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a href="mailto:contact@monsitevitrine.com" className="text-sm block hover:text-brand dark:hover:text-brand-light">contact@monsitevitrine.com</a>
            <a href="tel:+33123456789" className="text-sm block hover:text-brand dark:hover:text-brand-light">+33 1 23 45 67 89</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-slate-200 dark:border-slate-700/50">
          <p className="text-xs text-slate-500 dark:text-slate-400"> {/* Taille de texte plus petite pour le copyright */}
            © {new Date().getFullYear()} MonSiteVitrine. Tous droits réservés. Conçu avec <span className="text-red-500">❤</span>.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
