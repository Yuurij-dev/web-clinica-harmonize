import { BarChart3, CalendarDays, ClipboardList, CreditCard, FileText, PackageCheck, Users } from "lucide-react";

const features = [
  { icon: CalendarDays, title: "Agenda organizada", description: "Visualize compromissos, retornos e a disponibilidade da equipe." },
  { icon: Users, title: "Clientes em contexto", description: "Acesse cadastros, histórico e informações importantes para cada atendimento." },
  { icon: ClipboardList, title: "Procedimentos", description: "Mantenha os serviços e registros de atendimento bem estruturados." },
  { icon: FileText, title: "Orçamentos", description: "Crie propostas e acompanhe cada orçamento ao longo da jornada." },
  { icon: CreditCard, title: "Pagamentos", description: "Registre recebimentos e acompanhe o que ainda precisa de atenção." },
  { icon: PackageCheck, title: "Estoque", description: "Saiba o que entrou, o que saiu e quais materiais pedem reposição." },
  { icon: BarChart3, title: "Relatórios", description: "Enxergue resultados e acompanhe a evolução da clínica." },
];

export function Features() {
  return <section className="section-space bg-section" id="funcionalidades">
    <div className="page-container">
      <div className="section-heading reveal"><p className="eyebrow">FUNCIONALIDADES</p><h2>Uma operação mais simples,<br />do começo ao fim.</h2><p>Ferramentas que acompanham o atendimento e a gestão sem complicar a rotina.</p></div>
      <div className="feature-grid">{features.map(({ icon: Icon, title, description }) => <article className="feature-card reveal" key={title}><span className="feature-icon"><Icon size={23} strokeWidth={1.8} /></span><h3>{title}</h3><p>{description}</p></article>)}</div>
    </div>
  </section>;
}
