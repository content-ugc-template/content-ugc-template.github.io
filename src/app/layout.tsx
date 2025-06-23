import "./globals.css";
import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import Navbar from "@/components/Navbar";

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
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <MantineProvider>
          <main className="flex-1 flex flex-col">{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}
