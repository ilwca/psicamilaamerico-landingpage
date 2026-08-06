"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const SPECIALTIES = [
  "Ansiedade",
  "Autoestima",
  "Relacionamentos",
  "Luto e perdas",
  "Desenvolvimento pessoal",
];

const HIGHLIGHTS = [
  {
    title: "Formação sólida",
    description:
      "Graduação em Psicologia e mestrado concluído, com formação continuada em abordagens terapêuticas contemporâneas.",
  },
  {
    // Sentence case is deliberate here, not just a style choice: Frunchy
    // (font-display) has no glyph for capital "É" — it renders as a broken
    // tofu-like shape — so a leading "Ética" must stay lowercase to render
    // correctly. Matches Process's existing sentence-case heading style too.
    title: "Abordagem ética",
    description:
      "Sigilo profissional absoluto, escuta ativa e respeito incondicional à sua história.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/**
 * `secondary-container` is the flat tone the Hero now fades down to (see
 * hero.tsx's resting base layer), so opening this section on that same
 * token — then easing into the plain `surface` canvas over a short band —
 * reads as one continuous surface instead of a visible seam. Everything
 * below that seam follows style/DESIGN.md's "Refined Organicism" language
 * (glass cards, blob accents, pill chips); Hero itself is untouched.
 */
export function Sobre() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-gradient-to-b from-secondary-container from-0% to-surface to-[15%]"
    >
      {/* Ambient blob glow, tinted with the brand's warm tones rather than neutral gray. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-tertiary-container/15 blur-[110px]"
      />

      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-14 px-5 py-16 sm:px-10 lg:grid-cols-12 lg:gap-8 lg:px-6 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-1 lg:order-2 lg:col-span-5"
        >
          {/* Organic blob accent bleeding behind the portrait. */}
          <div
            aria-hidden="true"
            className="blob-shape pointer-events-none absolute -inset-10 -z-10 bg-primary-fixed/50 sm:-inset-14"
          />

          {/* Brand-mark echo, tying back to the Hero's brand-mark motif. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-14 -right-10 -z-10 h-64 w-64 opacity-[0.07] sm:h-80 sm:w-80"
          >
            <Image
              src="/images/logo-mark.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src="/images/hero-square.jpg"
              alt="Camila Américo, psicóloga clínica"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/20 via-transparent to-transparent" />
          </div>

          {/* Floating glass badge */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="glass-card absolute -bottom-6 -left-6 z-10 flex items-center gap-4 rounded-2xl p-6 sm:-bottom-8 sm:-left-8"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tertiary-container font-display text-headline-sm text-on-tertiary-container">
              M.
            </div>
            <div>
              <p className="font-body text-label-md uppercase tracking-[0.05em] text-on-surface-variant/70">
                Mestra em
              </p>
              <p className="font-display text-headline-sm leading-none text-primary">
                Psicologia
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 mt-6 lg:order-1 lg:col-span-7 lg:mt-0"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-primary" />
            <p className="font-body text-label-lg uppercase tracking-[0.05em] text-primary">
              Sobre mim
            </p>
          </div>
          <h2 className="mt-6 max-w-lg font-display text-headline-lg-mobile leading-[1.2] text-on-surface sm:text-headline-lg">
            Cuidar da mente é um ato de coragem — e você não precisa fazer
            isso sozinha.
          </h2>

          <div className="mt-6 max-w-xl space-y-4 font-body text-body-lg text-on-surface-variant">
            <p>
              Sou Camila Américo, psicóloga clínica e mestra em Psicologia.
              Acredito que a terapia é, antes de tudo, um encontro: um
              espaço seguro para olhar para dentro, entender suas histórias
              e construir, com calma, novos caminhos.
            </p>
            <p>
              Minha escuta é próxima, ética e livre de julgamentos. Cada
              processo é único — por isso, aqui, a escuta vem sempre antes
              da técnica.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {SPECIALTIES.map((item) => (
              <li
                key={item}
                className="glass-card rounded-full px-5 py-2 font-body text-label-lg text-on-surface"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 transition-shadow duration-300 hover:shadow-soft"
              >
                <h3 className="font-display text-headline-sm text-on-surface">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-body-md text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 font-body text-label-md uppercase tracking-[0.05em] text-on-surface-variant/60">
            CRP 00/00000
          </p>
        </motion.div>
      </div>
    </section>
  );
}
