import { BarChart3, CalendarDays, ChevronDown, CircleHelp, CreditCard, FileText, LayoutDashboard, MoreHorizontal, Package, Plus, Search, Settings2, Sparkles, Users } from "lucide-react";

export type PreviewView = "agenda" | "financeiro" | "estoque";

const menu = [
  { label: "Visão geral", icon: LayoutDashboard },
  { label: "Agenda", icon: CalendarDays },
  { label: "Clientes", icon: Users },
  { label: "Procedimentos", icon: Sparkles },
  { label: "Orçamentos", icon: FileText },
  { label: "Pagamentos", icon: CreditCard },
  { label: "Estoque", icon: Package },
  { label: "Relatórios", icon: BarChart3 },
];

export function ProductPreview({ view = "agenda", compact = false }: { view?: PreviewView; compact?: boolean }) {
  const active = view === "agenda" ? "Agenda" : view === "financeiro" ? "Relatórios" : "Estoque";

  return <div aria-label={`Prévia ilustrativa da área ${active} do Harmonize+`} className={`product-preview ${compact ? "product-preview-compact" : ""}`} role="img">
    <aside className="preview-sidebar">
      <div className="preview-brand"><span>H+</span><strong>Harmonize+</strong></div>
      <div className="preview-side-label">ESPAÇO DE TRABALHO</div>
      <div className="preview-menu">{menu.map(({ label, icon: Icon }) => <div className={label === active ? "active" : ""} key={label}><Icon size={14} strokeWidth={1.8} /><span>{label}</span></div>)}</div>
      <div className="preview-sidebar-bottom"><Settings2 size={14} /> Configurações</div>
    </aside>
    <div className="preview-main">
      <div className="preview-topbar"><span className="preview-crumb">Clínica demonstrativa <ChevronDown size={12} /></span><span className="preview-search"><Search size={13} /> Buscar no Harmonize+</span><span aria-hidden="true" className="preview-avatar">CD</span></div>
      {view === "agenda" ? <AgendaPreview /> : view === "financeiro" ? <FinancePreview /> : <StockPreview />}
    </div>
  </div>;
}

function PreviewHeading({ label, title, action }: { label: string; title: string; action: string }) {
  return <div className="preview-heading"><div><span>{label}</span><h3>{title}</h3></div><span className="preview-action"><Plus size={13} />{action}</span></div>;
}

function AgendaPreview() {
  const days = [
    { day: "SEG", date: "18", items: [{ time: "09:00", title: "Avaliação inicial", name: "Cliente 01", kind: "purple" }, { time: "14:30", title: "Retorno", name: "Cliente 02", kind: "mint" }] },
    { day: "TER", date: "19", items: [{ time: "10:30", title: "Procedimento", name: "Cliente 03", kind: "mint" }] },
    { day: "QUA", date: "20", items: [{ time: "08:30", title: "Consulta", name: "Cliente 04", kind: "peach" }, { time: "15:00", title: "Avaliação inicial", name: "Cliente 05", kind: "purple" }] },
    { day: "QUI", date: "21", items: [{ time: "11:00", title: "Procedimento", name: "Cliente 06", kind: "mint" }] },
    { day: "SEX", date: "22", items: [{ time: "09:30", title: "Retorno", name: "Cliente 07", kind: "peach" }] },
  ];

  return <div className="preview-content">
    <PreviewHeading action="Novo agendamento" label="ROTINA" title="Agenda" />
    <div className="preview-agenda-toolbar"><strong>Semana de atendimentos</strong><span>Semana <ChevronDown size={12} /></span></div>
    <div className="preview-calendar">
      <div className="preview-times"><div className="preview-day-head" />{["08:00", "10:00", "12:00", "14:00", "16:00"].map((time) => <span key={time}>{time}</span>)}</div>
      {days.map(({ day, date, items }, index) => <div className={`preview-day preview-day-${index}`} key={day}>
        <div className="preview-day-head"><span>{day}</span><strong>{date}</strong></div>
        <div className="preview-day-body">{items.map((item, itemIndex) => <div className={`preview-event ${item.kind} preview-event-${itemIndex}`} key={item.name}><small>{item.time}</small><strong>{item.title}</strong><span>{item.name}</span></div>)}</div>
      </div>)}
    </div>
  </div>;
}

function FinancePreview() {
  const bars = [38, 64, 51, 76, 58, 88, 71];
  return <div className="preview-content">
    <PreviewHeading action="Exportar" label="RESULTADOS" title="Relatórios" />
    <div className="preview-agenda-toolbar"><strong>Visão financeira</strong><span>Últimos 7 meses <ChevronDown size={12} /></span></div>
    <div className="preview-metrics"><div><span>Recebimentos</span><strong>R$ 24.850</strong><small>Valores ilustrativos</small></div><div><span>Orçamentos aprovados</span><strong>32</strong><small>No período</small></div><div><span>Pagamentos pendentes</span><strong>04</strong><small>Para acompanhar</small></div></div>
    <div className="preview-chart"><div className="preview-chart-title"><strong>Evolução de recebimentos</strong><MoreHorizontal size={16} /></div><div className="preview-bars">{bars.map((height, index) => <div key={index}><span style={{ height: `${height}%` }} /><small>{["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL"][index]}</small></div>)}</div></div>
  </div>;
}

function StockPreview() {
  const rows = [
    ["Ácido hialurônico", "Injetáveis", "12 un.", "Em dia"],
    ["Luvas de procedimento", "Descartáveis", "08 cx.", "Atenção"],
    ["Soro fisiológico", "Insumos", "24 un.", "Em dia"],
    ["Seringas 1 ml", "Descartáveis", "06 cx.", "Em dia"],
  ];
  return <div className="preview-content">
    <PreviewHeading action="Novo item" label="CONTROLE" title="Estoque" />
    <div className="preview-agenda-toolbar"><strong>Materiais e produtos</strong><span><Search size={12} /> Buscar item</span></div>
    <div className="preview-stock"><div className="preview-stock-head"><span>PRODUTO</span><span>CATEGORIA</span><span>SALDO</span><span>STATUS</span></div>{rows.map(([name, category, quantity, status]) => <div className="preview-stock-row" key={name}><strong>{name}</strong><span>{category}</span><span>{quantity}</span><em className={status === "Atenção" ? "warning" : ""}>{status}</em></div>)}</div>
    <div className="preview-stock-note"><CircleHelp size={15} /> Acompanhe o saldo antes de cada atendimento.</div>
  </div>;
}
