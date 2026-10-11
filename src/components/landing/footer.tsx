import { Brand } from "@/components/brand";

export function Footer({ appLoginUrl }: { appLoginUrl: string }) {
  return <footer className="site-footer"><div className="page-container"><div className="footer-grid"><div className="footer-brand"><Brand /><p>Gestão para clínicas, com mais clareza em cada etapa.</p></div><div><h3>Explore</h3><a href="#beneficios">Benefícios</a><a href="#funcionalidades">Funcionalidades</a><a href="#sistema">O sistema</a></div><div><h3>Harmonize+</h3><a href="#planos">Planos</a><a href="#faq">Dúvidas frequentes</a><a href={appLoginUrl}>Teste grátis</a></div><div><h3>Sua conta</h3><a href={appLoginUrl}>Entrar no sistema</a><a href="#inicio">Voltar ao início</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Harmonize+. Todos os direitos reservados.</span><span>Feito para uma gestão mais leve.</span></div></div></footer>;
}
