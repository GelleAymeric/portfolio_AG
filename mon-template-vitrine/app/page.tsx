// app/page.tsx
import { Metadata } from "next";
import { Hero } from "@/components/Hero";
// import { ServicesSection } from "@/components/ServicesSection"; // Décommentez si créé
// import { TestimonialsSection } from "@/components/TestimonialsSection"; // Décommentez si créé

export const metadata: Metadata = {
  title: "Accueil - MonSiteVitrine",
  description: "Bienvenue sur MonSiteVitrine. Nous créons des sites web modernes et performants.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <ServicesSection /> */}
      {/* <TestimonialsSection /> */}
      {/* Ajoutez d'autres sections de la page d'accueil ici */}
    </>
  );
}