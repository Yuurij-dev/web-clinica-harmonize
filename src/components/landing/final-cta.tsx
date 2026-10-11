import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA({ appLoginUrl }: { appLoginUrl: string }) {
  return <section className="final-cta"><div className="page-container final-cta-inner reveal"><div><p className="eyebrow">COMECE AGORA</p><h2>Sua clínica merece<br />uma rotina mais leve.</h2><p>Descubra uma forma mais clara de cuidar da gestão.</p></div><div className="final-cta-action"><Button asChild size="lg" variant="white"><a href={appLoginUrl}>Começar teste grátis <ArrowRight /></a></Button><span>Explore por 3 dias.</span></div></div></section>;
}
