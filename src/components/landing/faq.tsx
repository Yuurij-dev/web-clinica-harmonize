import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  { question: "O que é o Harmonize+?", answer: "É um sistema de gestão para clínicas que reúne agenda, clientes, procedimentos, orçamentos, pagamentos, estoque e relatórios em uma só plataforma." },
  { question: "Posso testar antes de contratar?", answer: "Sim. Você pode criar uma conta e explorar o Harmonize+ gratuitamente por 3 dias." },
  { question: "Preciso instalar algum programa?", answer: "Não. O Harmonize+ funciona no navegador, em computadores, tablets e celulares com acesso à internet." },
  { question: "Consigo acompanhar orçamentos e pagamentos?", answer: "Sim. O sistema permite criar e acompanhar orçamentos, registrar pagamentos e consultar informações financeiras da clínica." },
  { question: "O sistema também controla estoque?", answer: "Sim. Você pode acompanhar materiais, movimentações e saldos para planejar reposições com mais clareza." },
  { question: "Como funciona o suporte?", answer: "Os canais e horários de suporte ainda não estão descritos nesta página. Confirme essas condições antes da contratação." },
  { question: "Como os dados da clínica são tratados?", answer: "Consulte os documentos oficiais de privacidade e segurança antes de inserir informações reais. Esta página não define práticas de tratamento ou armazenamento de dados." },
  { question: "Quais são os valores e as condições de contratação?", answer: "Os preços, recursos por plano e condições comerciais ainda não foram publicados. As opções apresentadas nesta página são uma estrutura visual e não representam direitos de acesso." },
  { question: "O que acontece ao final do teste grátis?", answer: "O período de teste disponível no sistema é de 3 dias. A continuidade do acesso e as condições após esse período precisam ser confirmadas antes da contratação." },
];

export function FAQ() {
  return <section className="section-space bg-white" id="faq"><div className="page-container faq-layout"><div className="faq-intro reveal"><p className="eyebrow">DÚVIDAS FREQUENTES</p><h2>Tudo claro para<br />começar bem.</h2><p>Respostas rápidas sobre o Harmonize+ e como ele pode fazer parte da sua rotina.</p></div><Accordion className="faq-accordion reveal" collapsible type="single">{questions.map(({ question, answer }, index) => <AccordionItem key={question} value={`item-${index}`}><AccordionTrigger>{question}</AccordionTrigger><AccordionContent>{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>;
}
