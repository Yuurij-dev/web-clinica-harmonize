import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  { name: "Essencial" },
  { name: "Profissional", highlight: true },
  { name: "Avançado" },
];

export function Plans({ appSignupUrl }: { appSignupUrl: string }) {
  return <section className="section-space bg-section" id="planos">
    <div className="page-container">
      <div className="section-heading reveal"><p className="eyebrow">PLANOS</p><h2>Uma opção para cada<br />momento da clínica.</h2><p>Conheça a estrutura inicial dos planos e explore a plataforma por 3 dias.</p></div>
      <div className="plans-grid">{plans.map(({ name, highlight }) => <article className={`plan-card reveal ${highlight ? "plan-featured" : ""}`} key={name}>
        {highlight ? <span className="plan-badge">Plano em destaque</span> : null}
        <p className="plan-kicker">HARMONIZE+</p><h3>{name}</h3><p className="plan-description">Recursos e condições deste plano serão confirmados.</p>
        <div className="plan-price"><span>Preço sob consulta</span><small>Valores e condições ainda não publicados</small></div>
        <Button asChild className="w-full" variant={highlight ? "default" : "outline"}><a href={appSignupUrl}>Iniciar teste grátis <ArrowRight /></a></Button>
        <div className="plan-detail"><span><Check aria-hidden="true" size={16} />Recursos incluídos</span><strong>A confirmar</strong></div>
      </article>)}</div>
      <div className="plan-note"><p>A plataforma reúne agenda, clientes, procedimentos, orçamentos, pagamentos, estoque, relatórios e financeiro.</p><p>A distribuição de recursos entre os planos ainda precisa de confirmação. O teste grátis disponível hoje dura 3 dias.</p></div>
    </div>
  </section>;
}
