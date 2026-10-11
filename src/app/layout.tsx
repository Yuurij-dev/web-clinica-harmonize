import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Harmonize+ | Gestão para clínicas",
  description: "Agenda, clientes, procedimentos, orçamentos, pagamentos, estoque e resultados em um só lugar. Conheça o Harmonize+ e comece seu teste grátis.",
  openGraph: {
    title: "Harmonize+ | Gestão para clínicas",
    description: "Mais clareza para a gestão. Mais tempo para cuidar.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={geist.variable}><body>{children}</body></html>;
}
