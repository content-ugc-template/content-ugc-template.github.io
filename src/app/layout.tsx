import "./globals.css";
import "aos/dist/aos.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AOSProvider from "@/config/AOSProvider";
import { Anton, Inter } from "next/font/google";
import { MantineProvider } from "@mantine/core";

export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Contenido UGC",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className}`}>
        <Navbar />
        <MantineProvider>
          <AOSProvider>
            <main className="pt-15">{children}</main>
          </AOSProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
