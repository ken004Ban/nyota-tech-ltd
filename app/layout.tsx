import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LenisProvider } from "@/lib/lenis";
import { fontInstrument, fontMono, fontSans } from "@/lib/fonts";
import { COMPANY } from "@/lib/constants";

function siteMetadataBase(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    return new URL(explicit);
  }
  const vercel = process.env.VERCEL_URL;
  if (vercel) {
    return new URL(`https://${vercel}`);
  }
  return new URL("http://localhost:3000");
}

export const metadata: Metadata = {
  metadataBase: siteMetadataBase(),
  title: {
    default: `${COMPANY.brandName} — Calm, dependable software`,
    template: `%s — ${COMPANY.brandName}`,
  },
  description: `${COMPANY.legalName} is a newly registered technology company taking on early engagements—secure software, careful delivery, and operational clarity.`,
  openGraph: {
    title: `${COMPANY.brandName} — Calm, dependable software`,
    description:
      "Early-stage technology partner focused on reliability, clarity, and systems you can operate.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontInstrument.variable} ${fontMono.variable}`}
    >
      <body
        className={`${fontSans.className} min-h-screen bg-bg text-primary antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <LenisProvider>
          <CustomCursor />
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
