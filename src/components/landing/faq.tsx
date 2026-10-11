import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  { question: "O que é o Harmonize+?", answer: "É um sistema de gestão para clínicas que reúne agenda, clientes, procedimentos, orçamentos, pagamentos, estoque e relatórios em uma só plataforma." },
  { question: "Posso testar antes de contratar?", answer: "Sim. Você pode criar uma conta e explorar o Harmonize+ gratuitamente por 3 dias." },
  { question: "Preciso instalar algum programa?", answer: "Não. O Harmonize+ funciona no navegador, em computadores, tablets e celulares com acesso à internet." },
  { question: "Consigo acompanhar orçamentos e pagamentos?", answer: "Sim. O sistema permite criar e acompanhar orçamentos, registrar pagamentos e consultar informações financeiras da clínica." },
  { question: "O sistema também controla estoque?", answer: "Sim. Você pode acompanhar materiais, movimentações e saldos para planejar reposições com mais clareza." },
  { question: "Como descubro qual plano é o ideal?", answer: "Os detalhes comerciais de cada plano são definidos na contratação. Comece pelo teste gratuito para conhecer a plataforma e avaliar o que sua clínica precisa." },
];

export function FAQ() {
  return <section className="section-space bg-white" id="faq"><div className="page-container faq-layout"><div className="faq-intro reveal"><p className="eyebrow">DÚVIDAS FREQUENTES</p><h2>Tudo claro para<br />começar bem.</h2><p>Respostas rápidas sobre o Harmonize+ e como ele pode fazer parte da sua rotina.</p></div><Accordion className="faq-accordion reveal" collapsible type="single">{questions.map(({ question, answer }, index) => <AccordionItem key={question} value={`item-${index}`}><AccordionTrigger>{question}</AccordionTrigger><AccordionContent>{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>;
}
