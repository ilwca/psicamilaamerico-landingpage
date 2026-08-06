"use client";

import { motion, type Variants } from "framer-motion";

const STEPS = [
  {
    title: "Primeiro contato",
    description:
      "Você entra em contato e agendamos, juntas, um horário que funcione para você.",
    badgeClass: "bg-primary text-on-primary",
  },
  {
    title: "Sessão inicial",
    description:
      "Conversamos sobre sua história, suas questões e o que te trouxe até aqui.",
    badgeClass: "bg-tertiary text-on-tertiary",
  },
  {
    title: "Acompanhamento contínuo",
    description:
      "Seguimos juntas, no seu ritmo, construindo novos caminhos com calma.",
    badgeClass: "bg-secondary text-on-secondary",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Stands in for the "social proof" slot without fabricating patient
 * testimonials: CFP Resolution 11/2018 restricts psychologists from
 * publicizing client endorsements, so the pull-quote here is Camila's own
 * voice (a philosophy statement), not an invented review. Swap for real
 * testimonials only once cleared with her professional/ethics review.
 */
export function Process() {
  return (
    <section id="processo" className="relative overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-tertiary-fixed/20 blur-[120px]"
      />

      <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-10 lg:px-6 lg:py-32">
        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card relative mx-auto max-w-2xl rounded-[2rem] px-8 py-12 text-center shadow-soft sm:px-14 sm:py-16"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none block font-body text-display-lg leading-none text-primary-container/30"
          >
            &rdquo;
          </span>
          <p className="-mt-6 font-body text-body-lg italic text-on-surface">
            &ldquo;Não existe pressa nem fórmula pronta. Cada sessão é
            construída com respeito ao seu tempo e à sua história.&rdquo;
          </p>
          <footer className="mt-5 font-body text-label-lg uppercase tracking-[0.05em] text-primary">
            Camila Américo
          </footer>
        </motion.blockquote>

        <div className="mt-24 sm:mt-28">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center font-body text-label-lg uppercase tracking-[0.05em] text-primary"
          >
            Como funciona
          </motion.p>

          <ol className="relative mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-8 left-[15%] right-[15%] hidden h-px bg-outline-variant sm:block"
            />

            {STEPS.map((step, index) => (
              <motion.li
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                className="glass-card relative rounded-[2rem] p-8 pt-12 text-center shadow-soft transition-transform duration-500 hover:-translate-y-2"
              >
                <span
                  aria-hidden="true"
                  className={`absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full font-body text-label-lg shadow-soft ${step.badgeClass}`}
                >
                  {index + 1}
                </span>
                <h3 className="mt-2 font-display text-headline-sm text-on-surface">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-body-md text-on-surface-variant">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
