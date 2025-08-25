import type { Metadata } from "next";
import { Geist } from "next/font/google";
// import { Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Mon site vitrine – Agence Exemple",
  description: "Création de site vitrine moderne et responsive.",
  openGraph: { images: "/og-image.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable}`}>
      <body className="bg-gray-50 dark:bg-gray-950">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
