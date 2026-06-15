import { AiGuideSection } from "@/components/ai-guide-section";
import { CalendarSection } from "@/components/calendar-section";
import { CollectionSection } from "@/components/collection-section";
import { EducationSection } from "@/components/education-section";
import { HeroSection } from "@/components/hero-section";
import { IntroSection } from "@/components/intro-section";
import { MapSection } from "@/components/map-section";
import { RoutesSection } from "@/components/routes-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VisionSection } from "@/components/vision-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <IntroSection />
        <MapSection />
        <RoutesSection />
        <CalendarSection />
        <EducationSection />
        <AiGuideSection />
        <CollectionSection />
        <VisionSection />
      </main>
      <SiteFooter />
    </>
  );
}
