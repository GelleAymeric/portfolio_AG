import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm"; // Assurez-vous que ContactForm est bien exporté depuis ce chemin

export const metadata: Metadata = {
  title: "Contactez-Nous - MonSiteVitrine",
  description: "Envoyez-nous un message pour discuter de votre projet ou pour toute question.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto pt-32 pb-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contactez-Nous
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Nous sommes là pour répondre à toutes vos questions. Remplissez le formulaire ci-dessous.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}