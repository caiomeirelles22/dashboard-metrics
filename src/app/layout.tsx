import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "B2B Dashboard | Métricas de Campanhas",
  description: "Desafio Técnico - Dashboard de Métricas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body className={cn(inter.className, "antialiased")}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}