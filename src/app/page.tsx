import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/landing/hero";
import { Benefits } from "@/components/landing/benefits";
import { Features } from "@/components/landing/features";
import { Inside } from "@/components/landing/inside";
import { Plans } from "@/components/landing/plans";
import { FAQ } from "@/components/landing/faq";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { appLoginUrl, appSignupUrl } from "@/lib/links";

export default function Home() {
  return <><SiteHeader appLoginUrl={appLoginUrl} appSignupUrl={appSignupUrl} /><main><Hero appSignupUrl={appSignupUrl} /><Benefits /><Features /><Inside /><Plans appSignupUrl={appSignupUrl} /><FAQ /><FinalCTA appSignupUrl={appSignupUrl} /></main><Footer appLoginUrl={appLoginUrl} appSignupUrl={appSignupUrl} /></>;
}
