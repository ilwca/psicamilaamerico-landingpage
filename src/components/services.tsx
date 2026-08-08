"use client";

import { motion, type Variants } from "framer-motion";

const SERVICES = [
  {
    number: "01",
    title: "Psicoterapia Individual",
    description:
      "Sessões semanais para elaborar ansiedade, autoestima e questões de relacionamento, no seu tempo e sem julgamentos.",
    badgeClass: "bg-primary-container text-on-primary-container",
  },
  {
    number: "02",
    title: "Atendimento Online",
    description:
      "O mesmo cuidado e sigilo de um consultório, em um encontro por videochamada — de onde você estiver.",
    badgeClass: "bg-tertiary-container text-on-tertiary-container",
  },
  {
    number: "03",
    title: "Primeira Consulta",
    description:
      "Um encontro inicial para nos conhecermos, entender sua história e alinhar como podemos caminhar juntas.",
    badgeClass: "bg-secondary-container text-on-secondary-container",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-surface-container-low">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-secondary-container/50 blur-[100px]"
      />

      <div className="mx-auto max-w-[1140px] px-5 py-16 sm:px-10 lg:px-6 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="font-body text-label-lg uppercase tracking-[0.05em] text-primary">
            Atendimento
          </p>
          <h2 className="mt-3 font-display text-headline-lg-mobile-secundary leading-[1.2] text-on-surface sm:text-headline-lg">
            Um espaço para cada momento da sua jornada
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-10 sm:mt-24 sm:grid-cols-3 sm:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="glass-card relative rounded-[2rem] p-8 pt-12 shadow-soft transition-transform duration-500 hover:-translate-y-2 sm:p-10 sm:pt-14"
            >
              <div
                className={`absolute -top-8 left-8 flex h-16 w-16 items-center justify-center rounded-2xl font-display text-headline-sm shadow-soft sm:left-10 ${service.badgeClass}`}
              >
                {service.number}
              </div>
              <h3 className="font-display text-headline-sm text-on-surface">
                {service.title}
              </h3>
              <p className="mt-3 font-body text-body-md text-on-surface-variant">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
