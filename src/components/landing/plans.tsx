import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  { name: "Essencial", audience: "Para colocar a rotina em ordem", description: "O ponto de partida para centralizar o dia a dia da clínica.", items: ["Agenda e clientes", "Procedimentos e orçamentos", "Visão da rotina"] },
  { name: "Profissional", audience: "Para acompanhar cada etapa", description: "Mais contexto para conectar atendimento, operação e resultados.", items: ["Tudo do Essencial", "Pagamentos e estoque", "Acompanhamento de resultados"], highlight: true },
  { name: "Avançado", audience: "Para uma gestão mais completa", description: "Uma visão ampla da operação para apoiar o crescimento.", items: ["Tudo do Profissional", "Visão integrada da clínica", "Mais controle para a equipe"] },
];

export function Plans({ appLoginUrl }: { appLoginUrl: string }) {
  return <section className="section-space bg-section" id="planos">
    <div className="page-container">
      <div className="section-heading reveal"><p className="eyebrow">PLANOS</p><h2>Um caminho para cada<br />momento da sua clínica.</h2><p>Comece a conhecer o Harmonize+ e encontre a opção ideal para sua operação.</p></div>
      <div className="plans-grid">{plans.map(({ name, audience, description, items, highlight }) => <article className={`plan-card reveal ${highlight ? "plan-featured" : ""}`} key={name}>
        {highlight ? <span className="plan-badge">Em destaque</span> : null}
        <p className="plan-audience">{audience}</p><h3>{name}</h3><p className="plan-description">{description}</p>
        <div className="plan-price"><span>Valores sob consulta</span><small>Condições comerciais a confirmar</small></div>
        <Button asChild className="w-full" variant={highlight ? "default" : "outline"}><a href={appLoginUrl}>Experimentar grátis <ArrowRight /></a></Button>
        <ul>{items.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
      </article>)}</div>
      <p className="plan-note">Planos e recursos apresentados de forma ilustrativa. Valores, condições e disponibilidade serão confirmados na contratação. O teste grátis dura 3 dias.</p>
    </div>
  </section>;
}
