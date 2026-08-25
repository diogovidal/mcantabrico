import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { FloatingWhatsAppButton } from "@/components/layout/FloatingWhatsAppButton";
import { CookieConsentBanner } from "@/components/legal/CookieConsentBanner";
import { siteConfig } from "@/lib/config";
import { getLocalBusinessSchema, jsonLdScript } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.legalName} | Taller de Electromecánica en Asturias`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: siteConfig.name,
    title: `${siteConfig.legalName} | Taller de Electromecánica en Asturias`,
    description: siteConfig.description,
    images: [{ url: "/images/taller-hero.jpg", width: 1024, height: 400 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar />
        <FloatingWhatsAppButton />
        <CookieConsentBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(getLocalBusinessSchema())}
        />
      </body>
    </html>
  );
}
