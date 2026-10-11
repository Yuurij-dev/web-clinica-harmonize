import { Brand } from "@/components/brand";

export function Footer({ appLoginUrl, appSignupUrl }: { appLoginUrl: string; appSignupUrl: string }) {
  const termsUrl = process.env.NEXT_PUBLIC_TERMS_URL;
  const privacyUrl = process.env.NEXT_PUBLIC_PRIVACY_URL;

  return <footer className="site-footer"><div className="page-container">
    <div className="footer-grid">
      <div className="footer-brand"><Brand /><p>Gestão para clínicas, com mais clareza em cada etapa.</p></div>
      <div><h3>Explore</h3><a href="#beneficios">Benefícios</a><a href="#funcionalidades">Funcionalidades</a><a href="#sistema">O sistema</a></div>
      <div><h3>Harmonize+</h3><a href="#planos">Planos</a><a href="#faq">Dúvidas frequentes</a><a href={appSignupUrl}>Teste grátis</a></div>
      <div><h3>Sua conta</h3><a href={appLoginUrl}>Entrar no sistema</a><a href="#inicio">Voltar ao início</a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Harmonize+. Todos os direitos reservados.</span>
      <nav aria-label="Documentos legais" className="footer-legal">
        {termsUrl ? <a href={termsUrl}>Termos de Uso</a> : <span>Termos de Uso <small>Em preparação</small></span>}
        {privacyUrl ? <a href={privacyUrl}>Política de Privacidade</a> : <span>Política de Privacidade <small>Em preparação</small></span>}
      </nav>
    </div>
  </div></footer>;
}
