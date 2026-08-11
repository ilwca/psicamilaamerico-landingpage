"use client";

import { useRef } from "react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/**
 * WhatsApp/e-mail values below are placeholders (obviously-fake number,
 * unverified domain) — wire up the real contact channels before launch.
 * CTA-only, no <form>: there's no backend/API route in this app to receive
 * submissions, so a form would silently do nothing.
 */
export function Contact() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
    card.style.setProperty("--glow-opacity", "1");
  };

  const handlePointerLeave = () => {
    cardRef.current?.style.setProperty("--glow-opacity", "0");
  };

  return (
    <section id="contato" className="bg-surface px-5 py-16 sm:px-10 lg:px-6 lg:py-32">
      <motion.div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto max-w-[1000px] overflow-hidden rounded-[3rem] bg-primary px-8 py-16 text-center shadow-soft sm:px-16 sm:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[var(--glow-opacity,0)]"
          style={{
            background:
              "radial-gradient(400px circle at var(--glow-x, 50%) var(--glow-y, 50%), color-mix(in oklab, var(--color-primary-fixed) 35%, transparent), transparent 70%)",
            transition:
              "opacity 500ms ease, --glow-x 700ms cubic-bezier(0.16, 1, 0.3, 1), --glow-y 700ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary-fixed/20 blur-[80px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-tertiary-fixed/20 blur-[80px]"
        />

        <div className="relative mx-auto max-w-xl">
          <p className="font-body text-label-lg uppercase tracking-[0.05em] text-primary-fixed">
            Vamos conversar
          </p>
          <h2 className="mt-3 font-display text-headline-lg-mobile-secundary leading-[1.2] text-on-primary sm:text-headline-lg">
            Dar o primeiro passo também é coragem
          </h2>
          <p className="mt-5 font-body text-body-lg text-primary-fixed-dim">
            Se você sente que chegou a hora de cuidar de você, escreva.
            Vamos entender juntas o melhor caminho para começar.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/556384928550"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-surface px-9 py-4 font-body text-label-lg uppercase tracking-[0.05em] text-primary shadow-soft transition hover:-translate-y-1 hover:bg-surface-container-low sm:w-auto"
            >
              Conversar no WhatsApp
            </a>
            <a
              href="mailto:contato@camilaamerico.com.br"
              className="glass-card-dark w-full rounded-full px-9 py-4 font-body text-label-lg uppercase tracking-[0.05em] text-on-primary transition hover:-translate-y-1 sm:w-auto"
            >
              Enviar um e-mail
            </a>
          </div>

          <p className="mt-8 font-body text-body-sm text-primary-fixed-dim">
            Atendimento presencial e online · Segunda a sexta, 9h às 18h
          </p>
        </div>
      </motion.div>
    </section>
  );
}
