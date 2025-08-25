"use client"; // Nécessaire pour usePathname et useEffect/useState dans ThemeToggle

import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_ITEMS = [
	{ href: "#hero", label: "Accueil" },
	{ href: "#a-propos", label: "À propos" },
	{ href: "#projets", label: "Projets" },
];

export function Header() {
	const [open, setOpen] = useState(false);

	// Scroll smooth vers l'ancre
	const handleNavClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		if (href.startsWith("#")) {
			e.preventDefault();
			setOpen(false);
			const el = document.querySelector(href);
			if (el) el.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700/60 transition-all">
			<div className="relative">
				<div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
					{/* Logo / Nom */}
					<a
						href="#hero"
						onClick={(e) => handleNavClick(e, "#hero")}
						className="text-2xl font-bold text-primary dark:text-primary-foreground hover:opacity-80 transition-opacity"
					>
						Aymeric Gelle
					</a>

					{/* Navigation et bouton Contact */}
					<nav className="hidden md:flex items-center gap-2 flex-1 justify-end">
						{NAV_ITEMS.map((item) => (
							<a
								key={item.href}
								href={item.href}
								onClick={(e) => handleNavClick(e, item.href)}
								className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
							>
								{item.label}
							</a>
						))}
						<a
							href="#contact"
							onClick={(e) => handleNavClick(e, "#contact")}
							className="ml-4 px-3 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground shadow hover:bg-primary/90 transition-colors"
						>
							Contact
						</a>
					</nav>

					{/* Mobile menu button */}
					<div className="flex items-center gap-2">
						<button
							className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
							onClick={() => setOpen(!open)}
							aria-label="Ouvrir le menu"
						>
							{open ? <FiX size={28} /> : <FiMenu size={28} />}
						</button>
					</div>
				</div>
				{/* ThemeToggle collé au bord droit */}
				<div className="hidden md:block">
					<div className="absolute top-1/2 -translate-y-1/2 right-4">
						<ThemeToggle />
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{open && (
				<nav className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg animate-fade-in-down">
					<ul className="flex flex-col items-center py-4 gap-2">
						{NAV_ITEMS.map((item) => (
							<li key={item.href}>
								<a
									href={item.href}
									onClick={(e) => handleNavClick(e, item.href)}
									className="block px-6 py-3 text-lg font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary rounded transition-colors"
								>
									{item.label}
								</a>
							</li>
						))}
						<li>
							<a
								href="#contact"
								onClick={(e) => handleNavClick(e, "#contact")}
								className="block mt-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition"
							>
								Contact
							</a>
						</li>
						<li className="mt-2">
							<ThemeToggle />
						</li>
					</ul>
				</nav>
			)}
		</header>
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