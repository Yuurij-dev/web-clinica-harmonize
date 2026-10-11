import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductPreview } from "@/components/product-preview";

export function Hero({ appSignupUrl }: { appSignupUrl: string }) {
  return <section className="hero-section relative overflow-hidden" id="inicio">
    <div className="page-container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow hero-enter">GESTÃO PARA CLÍNICAS</p>
        <h1 className="hero-enter hero-enter-2">Harmonize<span>+</span></h1>
        <p className="hero-statement hero-enter hero-enter-3">Sua clínica em ordem.<br />Você no seu melhor.</p>
        <p className="hero-description hero-enter hero-enter-4">Agenda, clientes e gestão no mesmo lugar para uma rotina mais leve e decisões mais claras.</p>
        <div className="hero-actions hero-enter hero-enter-5">
          <Button asChild size="lg"><a href={appSignupUrl}><span className="hero-button-long">Começar teste grátis</span><span className="hero-button-short">Teste grátis</span><ArrowRight /></a></Button>
          <Button asChild size="lg" variant="outline"><a href="#sistema"><Play className="size-4 fill-current" /><span className="hero-button-long">Conhecer o sistema</span><span className="hero-button-short">Ver o sistema</span></a></Button>
        </div>
        <p className="hero-note hero-enter hero-enter-5">3 dias para explorar o Harmonize+.</p>
      </div>
      <div className="hero-visual hero-enter hero-enter-3"><ProductPreview compact view="agenda" /><span className="preview-caption">Prévia ilustrativa do sistema</span></div>
    </div>
  </section>;
}
