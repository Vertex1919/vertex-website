import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import ExpertisePreview from "@/components/expertise-preview/ExpertisePreview";
import CTA from "@/components/cta/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ExpertisePreview />
      <CTA />
    </>
  );
}