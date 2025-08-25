// filepath: mon-template-vitrine/components/ContactForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { FiLoader, FiSend, FiCheckCircle, FiXCircle } from "react-icons/fi";

// Schéma de validation avec Zod
const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
  email: z.string().email("L'adresse e-mail n'est pas valide."),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères."),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type SubmissionStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    try {
      // Simule un appel API - Remplacez par votre logique d'envoi
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Formulaire soumis avec succès:", data);
      setStatus("success");
      reset(); // Réinitialise le formulaire
      setTimeout(() => setStatus("idle"), 5000); // Revient à l'état initial
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClasses = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-lg bg-card border ${
      hasError ? "border-destructive" : "border-input"
    } focus:outline-none focus:ring-2 ${
      hasError ? "focus:ring-destructive" : "focus:ring-ring"
    } text-foreground placeholder:text-muted-foreground transition-colors`;
    
  const labelClasses = "block text-sm font-medium text-foreground mb-1";
  const errorClasses = "mt-1 text-sm text-destructive";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-card/60 p-8 md:p-10 rounded-xl shadow-xl backdrop-blur-sm"
    >
      <div>
        <label htmlFor="name" className={labelClasses}>
          Nom complet
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className={inputClasses(!!errors.name)}
          placeholder="Votre nom"
        />
        {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className={labelClasses}>
          Adresse e-mail
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={inputClasses(!!errors.email)}
          placeholder="vous@exemple.com"
        />
        {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="subject" className={labelClasses}>
          Sujet
        </label>
        <input
          type="text"
          id="subject"
          {...register("subject")}
          className={inputClasses(!!errors.subject)}
          placeholder="Objet de votre message"
        />
        {errors.subject && <p className={errorClasses}>{errors.subject.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          className={inputClasses(!!errors.message)}
          placeholder="Écrivez votre message ici..."
        />
        {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-cta hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <FiLoader className="animate-spin w-5 h-5" />
              Envoi en cours...
            </>
          ) : (
            <>
              Envoyer le message
              <FiSend className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
      
      {status === 'success' && (
        <div className="flex items-center gap-2 text-green-500">
          <FiCheckCircle />
          <p>Message envoyé avec succès !</p>
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center gap-2 text-destructive">
          <FiXCircle />
          <p>Une erreur est survenue. Veuillez réessayer.</p>
        </div>
      )}
    </motion.form>
  );
}