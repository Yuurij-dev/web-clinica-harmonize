"use client";

import { useState } from "react";
import { BarChart3, CalendarDays, Package } from "lucide-react";
import { ProductPreview, type PreviewView } from "@/components/product-preview";

const views: { key: PreviewView; label: string; icon: typeof CalendarDays; title: string; description: string }[] = [
  { key: "agenda", label: "Agenda", icon: CalendarDays, title: "Seu dia, à primeira vista.", description: "Compromissos e atendimentos apresentados com clareza para você seguir o ritmo da clínica." },
  { key: "financeiro", label: "Resultados", icon: BarChart3, title: "Números que fazem sentido.", description: "Acompanhe recebimentos, orçamentos e os resultados que ajudam a orientar suas decisões." },
  { key: "estoque", label: "Estoque", icon: Package, title: "Materiais sob controle.", description: "Consulte saldos e identifique itens que precisam de atenção antes do próximo atendimento." },
];

export function Inside() {
  const [active, setActive] = useState<PreviewView>("agenda");
  const current = views.find((view) => view.key === active)!;

  function handleTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const nextIndex = event.key === "ArrowRight" ? (index + 1) % views.length : event.key === "ArrowLeft" ? (index - 1 + views.length) % views.length : event.key === "Home" ? 0 : event.key === "End" ? views.length - 1 : null;
    if (nextIndex === null) return;
    event.preventDefault();
    setActive(views[nextIndex].key);
    document.getElementById(`tab-${views[nextIndex].key}`)?.focus();
  }

  return <section className="section-space overflow-hidden bg-white" id="sistema">
    <div className="page-container">
      <div className="section-heading reveal"><p className="eyebrow">VEJA O SISTEMA POR DENTRO</p><h2>Um espaço de trabalho<br />feito para a sua rotina.</h2><p>Navegue por algumas áreas do Harmonize+.</p></div>
      <div aria-label="Áreas do sistema" className="inside-tabs" role="tablist">{views.map(({ key, label, icon: Icon }, index) => <button aria-controls="preview-panel" aria-selected={active === key} className={active === key ? "active" : ""} id={`tab-${key}`} key={key} onClick={() => setActive(key)} onKeyDown={(event) => handleTabKeyDown(event, index)} role="tab" tabIndex={active === key ? 0 : -1} type="button"><Icon size={17} />{label}</button>)}</div>
      <div aria-labelledby={`tab-${active}`} className="inside-layout" id="preview-panel" role="tabpanel">
        <div className="inside-preview"><ProductPreview view={active} /></div>
        <div className="inside-copy" key={active}><span className="inside-index">0{views.findIndex((view) => view.key === active) + 1} / 03</span><h3>{current.title}</h3><p>{current.description}</p><span className="inside-rule" /><span className="inside-tag">Harmonize+ em ação</span></div>
      </div>
      <p className="inside-disclaimer">Telas demonstrativas com dados fictícios.</p>
    </div>
  </section>;
}
