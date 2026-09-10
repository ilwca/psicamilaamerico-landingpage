import { Hero } from "@/components/hero";
import { Sobre } from "@/components/about";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site-config";

// Only fields already present elsewhere in the project (name, CRP number,
// WhatsApp number, Instagram — see about.tsx/footer.tsx) are encoded here.
// No address is included since none exists in the project; adding one would
// mean inventing it. @id references tie the three nodes together instead of
// duplicating data. SITE_URL is a TODO placeholder — see site-config.ts.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Camila Américo",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo-mark.svg`,
      image: `${SITE_URL}/images/hero-desktop.webp`,
      description: SITE_DESCRIPTION,
      telephone: "+55 63 8449-2226",
      sameAs: ["https://www.instagram.com/camilaamericopsi/"],
      identifier: {
        "@type": "PropertyValue",
        propertyID: "CRP",
        value: "23/1313",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "pt-BR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Sobre />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
