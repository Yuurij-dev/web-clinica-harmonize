import { ArrowUpRight, BarChart3, CalendarCheck, ClipboardCheck } from "lucide-react";

const benefits = [
  { icon: CalendarCheck, number: "01", title: "Agenda sem desencontros", description: "Veja horários e retornos do dia numa agenda só, com a disponibilidade da equipe à vista." },
  { icon: ClipboardCheck, number: "02", title: "Atendimento com contexto", description: "Encontre cadastro, procedimentos e histórico no mesmo percurso do cliente." },
  { icon: BarChart3, number: "03", title: "Gestão acompanhada", description: "Acompanhe orçamentos, pagamentos e estoque para saber o que pede atenção." },
];

export function Benefits() {
  return <section className="section-space bg-white" id="beneficios">
    <div className="page-container">
      <div className="section-heading"><p className="eyebrow">POR QUE HARMONIZE+</p><h2>Menos trabalho disperso.<br />Mais fluidez na rotina.</h2><p>Uma visão simples da clínica, com o que você precisa para organizar cada etapa do dia.</p></div>
      <div className="benefits-grid">{benefits.map(({ icon: Icon, number, title, description }) => <article className="benefit reveal" key={number}><div className="benefit-top"><span className="benefit-icon"><Icon size={23} strokeWidth={1.7} /></span><span className="benefit-number">{number}</span></div><h3>{title}</h3><p>{description}</p><ArrowUpRight className="benefit-arrow" size={18} strokeWidth={1.7} /></article>)}</div>
    </div>
  </section>;
}
