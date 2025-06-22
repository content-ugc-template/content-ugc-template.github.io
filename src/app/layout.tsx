import "./globals.css";
import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";

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
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
