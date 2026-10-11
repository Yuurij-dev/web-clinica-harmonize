"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";

const navigation = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#sistema", label: "O sistema" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "Dúvidas" },
];

export function SiteHeader({ appLoginUrl }: { appLoginUrl: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-white/95 backdrop-blur-xl">
    <div className="page-container flex h-[72px] items-center justify-between gap-5">
      <Brand />
      <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
        {navigation.map((item) => <a className="text-[13px] font-medium text-muted transition-colors hover:text-primary" href={item.href} key={item.href}>{item.label}</a>)}
      </nav>
      <div className="hidden items-center gap-4 lg:flex">
        <a className="text-[13px] font-semibold text-foreground transition-colors hover:text-primary" href={appLoginUrl}>Entrar</a>
        <Button asChild size="sm"><a href={appLoginUrl}>Teste grátis <ArrowUpRight /></a></Button>
      </div>
      <button aria-controls="mobile-menu" aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} className="grid size-10 place-items-center rounded-md text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden" onClick={() => setMenuOpen((open) => !open)} type="button">
        {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>
    </div>
    {menuOpen ? <nav aria-label="Navegação móvel" className="border-t border-border bg-white px-6 pb-6 pt-2 lg:hidden" id="mobile-menu">
      {navigation.map((item) => <a className="block border-b border-border py-3 text-sm font-medium text-foreground" href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
      <div className="mt-5 flex items-center gap-3"><Button asChild className="flex-1 px-3 text-xs" variant="outline"><a href={appLoginUrl}>Entrar</a></Button><Button asChild className="flex-1 px-3 text-xs"><a href={appLoginUrl}>Teste grátis</a></Button></div>
    </nav> : null}
  </header>;
}
