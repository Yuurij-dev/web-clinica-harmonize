import { ArrowUpRight, Focus, HeartHandshake, Workflow } from "lucide-react";

const benefits = [
  { icon: Workflow, number: "01", title: "Tudo conectado", description: "Da agenda ao pagamento, acompanhe a jornada do cliente sem perder o contexto." },
  { icon: Focus, number: "02", title: "Clareza para decidir", description: "Visualize a operação e os resultados com informações reunidas em um só lugar." },
  { icon: HeartHandshake, number: "03", title: "Mais tempo para cuidar", description: "Organize os processos da clínica e dedique sua atenção ao atendimento." },
];

export function Benefits() {
  return <section className="section-space bg-white" id="beneficios">
    <div className="page-container">
      <div className="section-heading"><p className="eyebrow">POR QUE HARMONIZE+</p><h2>Menos trabalho disperso.<br />Mais fluidez na rotina.</h2><p>Uma visão simples da clínica, com o que você precisa para organizar cada etapa do dia.</p></div>
      <div className="benefits-grid">{benefits.map(({ icon: Icon, number, title, description }) => <article className="benefit reveal" key={number}><div className="benefit-top"><span className="benefit-icon"><Icon size={23} strokeWidth={1.7} /></span><span className="benefit-number">{number}</span></div><h3>{title}</h3><p>{description}</p><ArrowUpRight className="benefit-arrow" size={18} strokeWidth={1.7} /></article>)}</div>
    </div>
  </section>;
}
