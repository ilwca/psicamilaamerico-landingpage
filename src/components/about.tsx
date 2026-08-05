"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const SPECIALTIES = [
  "Ansiedade",
  "Autoestima",
  "Relacionamentos",
  "Luto e perdas",
  "Desenvolvimento pessoal",
];

/**
 * The hero's pinned zoom finishes with the tint at ~96% opacity, so the tone
 * that "wins" the screen right before this section starts is on-surface
 * (the tint's own from-color). Anchoring this gradient there — instead of a
 * lighter mid-tone — means the seam between the two sections is a color
 * match, not a cut. The extra scroll room below (padding-bottom) is spent
 * sticking this content at the top of the viewport while it fades in, so
 * the section reads as appearing in place rather than rolling up from
 * under the hero.
 */
export function About() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="sobre" ref={wrapperRef} className="relative pb-[30vh] sm:pb-[35vh]">
      <div className="sticky top-0 bg-gradient-to-b from-on-surface from-0% via-tertiary/45 via-[14%] to-surface to-[55%]">
        <motion.div
          style={{ opacity: contentOpacity }}
          className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-12 px-5 py-16 sm:px-10 lg:grid-cols-12 lg:gap-8 lg:px-6 lg:py-24">
          <div className="relative order-1 lg:order-2 lg:col-span-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-[8px] shadow-[0_20px_40px_-8px_rgba(64,21,4,0.18)]">
              <Image
                src="/images/hero-square.jpg"
                alt="Camila Américo em seu espaço de atendimento"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-[8px] bg-secondary-container sm:h-40 sm:w-40"
            />
          </div>

          <div className="order-2 lg:order-1 lg:col-span-7">
            <p className="font-body text-label-lg uppercase tracking-[0.05em] text-primary">
              Sobre mim
            </p>
            <h2 className="mt-3 max-w-lg font-display text-headline-lg-mobile leading-[1.2] text-on-surface sm:text-headline-lg">
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

            <ul className="mt-8 flex flex-wrap gap-2">
              {SPECIALTIES.map((item) => (
                <li
                  key={item}
                  className="rounded-[4px] bg-secondary-container px-4 py-2 font-body text-label-md text-on-secondary-container"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
