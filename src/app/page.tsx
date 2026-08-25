import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { SymptomsFinder } from "@/components/home/SymptomsFinder";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { DiagnosisSpotlight } from "@/components/home/DiagnosisSpotlight";
import { WhyUs } from "@/components/home/WhyUs";
import { WorkshopLocation } from "@/components/home/WorkshopLocation";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { FinalCta } from "@/components/home/FinalCta";
import { LatestTips } from "@/components/home/LatestTips";

export const metadata: Metadata = {
  title: "Taller Electromecánico en Asturias",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <SymptomsFinder />
      <FeaturedServices />
      <DiagnosisSpotlight />
      <WhyUs />
      <WorkshopLocation />
      <HowItWorks />
      <ReviewsSection />
      <FinalCta />
      <LatestTips />
    </>
  );
}
