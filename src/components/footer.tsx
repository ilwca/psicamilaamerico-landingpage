import Image from "next/image";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

/**
 * Dark `inverse-surface` bookend, mirroring the Hero's dark tone at the
 * other end of the page — Hero itself stays on its original flatter
 * treatment, so this section carries the Refined Organicism language
 * (pill chips, blob glow) instead.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-inverse-surface text-inverse-on-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary-fixed/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1140px] px-5 py-14 sm:px-10 lg:px-6 lg:py-16">
        <div className="flex flex-col items-center gap-10 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <div className="relative h-10 w-10 opacity-90">
              <Image
                src="/images/logo-mark.svg"
                alt=""
                fill
                aria-hidden="true"
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-display text-headline-sm text-inverse-on-surface">
                Camila Américo
              </p>
              <p className="mt-1 font-body text-label-md uppercase tracking-[0.05em] text-inverse-on-surface/70">
                Psicóloga Clínica
              </p>
            </div>
          </div>

          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="glass-card-dark rounded-full px-5 py-2 font-body text-label-lg uppercase tracking-[0.05em] text-inverse-on-surface/85 transition hover:text-inverse-on-surface"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-2 sm:items-end">
            <a
              href="https://wa.me/556384928550"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-label-lg uppercase tracking-[0.05em] text-inverse-on-surface/80 transition hover:text-inverse-on-surface"
            >
              WhatsApp
            </a>
            <a
              href="mailto:contato@psicamilaamerico.com.br"
              className="font-body text-label-lg uppercase tracking-[0.05em] text-inverse-on-surface/80 transition hover:text-inverse-on-surface"
            >
              E-mail
            </a>
            <a 
              href="https://www.instagram.com/camilaamericopsi/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-label-lg uppercase tracking-[0.05em] text-inverse-on-surface/80 transition hover:text-inverse-on-surface">
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-inverse-on-surface/15 pt-6 text-center">
          <p className="font-body text-body-sm text-inverse-on-surface/60">
            © {year} Camila Américo — Psicóloga Clínica · CRP 23/1313
          </p>
        </div>
      </div>
    </footer>
  );
}
