"use client"; // Nécessaire pour usePathname et useEffect/useState dans ThemeToggle

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle"; // Assurez-vous que l'import est correct

export function Header() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700/60"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary dark:text-primary-foreground hover:opacity-80 transition-opacity">
          TemplateSiteVitrine
        </Link>
        <nav className="flex items-center space-x-4 md:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${pathname === item.href
                  ? "bg-secondary text-primary dark:bg-secondary dark:text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary/50 dark:hover:bg-secondary/50 hover:text-foreground"
                }`}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </motion.header>
  );
}

// Create ThemeToggle.tsx if you don't have it:
// mon-template-vitrine/components/ThemeToggle.tsx
// "use client";
// import { useState, useEffect } from 'react';
// import { SunIcon, MoonIcon } from 'react-icons/fi'; // or any other icon library

// export function ThemeToggle() {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
//     setIsDark(currentTheme === 'dark');
//     document.documentElement.classList.toggle('dark', currentTheme === 'dark');
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = isDark ? 'light' : 'dark';
//     setIsDark(!isDark);
//     localStorage.setItem('theme', newTheme);
//     document.documentElement.classList.toggle('dark', !isDark);
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//       aria-label="Toggle theme"
//     >
//       {isDark ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-700" />}
//     </button>
//   );
// }