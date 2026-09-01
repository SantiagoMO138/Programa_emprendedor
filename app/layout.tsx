import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aurea Analytics | Lanza tu web",
  description: "Crea y publica la web de tu negocio en minutos."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
