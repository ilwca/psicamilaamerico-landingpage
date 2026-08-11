"use client";

import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STEPS = [
  {
    title: "Primeiro contato",
    description:
      "Você entra em contato pelo WhatsApp ou e-mail e conta, em poucas palavras, o que te motivou a buscar esse cuidado. A partir daí, encontramos juntas um horário que caiba na sua rotina — sem pressa e sem burocracia.",
    details: ["Resposta rápida", "Sem compromisso"],
    badgeClass: "bg-primary text-on-primary",
  },
  {
    title: "Sessão inicial",
    description:
      "No primeiro encontro, o objetivo é te conhecer: sua história, o que te trouxe até aqui e o que você espera desse processo. É um espaço de escuta genuína, sem julgamentos — você define o ritmo da conversa.",
    details: ["Online ou presencial", "Você define o ritmo"],
    badgeClass: "bg-tertiary text-on-tertiary",
  },
  {
    title: "Acompanhamento contínuo",
    description:
      "A partir daí, seguimos com sessões regulares, revisitando objetivos sempre que fizer sentido. O cuidado se adapta a cada fase da sua jornada, com calma e consistência, no seu tempo.",
    details: ["No seu tempo", "Cuidado contínuo"],
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
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;

      // Pin + horizontal scrub now runs at every breakpoint, including
      // mobile — the only thing that opts it out is prefers-reduced-motion,
      // in which case it falls back to the plain vertical grid below. Every
      // gsap.set()/tween created inside the callback below is automatically
      // reverted the moment the condition stops matching, which restores
      // the grid layout exactly as it was.
      gsap.matchMedia().add(
        {
          noMotionPreference: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { noMotionPreference } = context.conditions ?? {};
          if (!noMotionPreference) return;

          // Touch browsers drive scroll natively (compositor-threaded) and
          // resize the viewport as the address bar shows/hides mid-scroll,
          // both of which make GSAP's pin (which repositions the track on
          // the main thread in response to scroll events) fall behind or
          // lose its lock — the page keeps scrolling underneath instead of
          // staying pinned. normalizeScroll funnels touch/wheel input
          // through GSAP's own ticker instead, which is what makes the pin
          // actually hold on mobile. Only enabled in this branch (and
          // reverted below) since it's unnecessary overhead otherwise.
          const normalizer = ScrollTrigger.normalizeScroll(true);

          // The flex/w-screen/overflow-hidden layout switch is handled by
          // the `motion-safe:*` classes below (same condition this
          // matchMedia checks), so each card is already a real 100vw slide
          // and `track` is already a `w-max` row by the time this runs —
          // GSAP only owns the scroll-scrubbed transform, not the layout.
          const getScrollAmount = () =>
            track.scrollWidth - viewport.clientWidth;

          gsap.to(track, {
            x: () => -getScrollAmount(),
            ease: "none",
            scrollTrigger: {
              trigger: viewport,
              start: "top top",
              end: () => `+=${getScrollAmount()}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          return () => normalizer?.kill();
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="processo"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-surface"
    >
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

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-24 text-center font-body text-label-lg uppercase tracking-[0.05em] text-primary sm:mt-28"
        >
          Como funciona
        </motion.p>
      </div>

      {/* Deliberately outside the mx-auto max-w-[1140px] wrapper above: the
          pin/scrub math needs `viewport` and each slide to measure the real
          viewport width (100vw), not the width of that centered, padded
          container. `pb-16 lg:pb-32` stands in for the section padding this
          part opted out of, so the overall vertical rhythm is unchanged. */}
      <div ref={viewportRef} className="relative mt-12 w-full pb-16 motion-safe:overflow-hidden lg:pb-32">
        <ol
          ref={trackRef}
          className="grid grid-cols-1 gap-16 motion-safe:flex motion-safe:w-max motion-safe:flex-nowrap motion-safe:gap-0"
        >
          {STEPS.map((step, index) => (
            <motion.li
              key={step.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="flex min-h-[80dvh] w-full shrink-0 items-center justify-center motion-safe:w-screen motion-safe:px-5 sm:motion-safe:px-12 lg:motion-safe:px-56"
            >
              {/* Split from the <li> "slide": GSAP stretches the slide to
                  the full pinned viewport width at every breakpoint (only
                  reduced-motion opts out), but the visible card should stay
                  capped and centered inside it — same reason min-h-[80dvh]
                  lives here and not on the card itself, so a short card
                  still centers inside a tall slide instead of stretching to
                  fill it. `max-w-5xl` caps the card when the pin is inactive
                  (reduced motion), where the slide isn't full-width anyway;
                  when `motion-safe`, the slide's own responsive `px-*` is
                  what controls the gap around the card, so the cap is
                  lifted there to let the card fill that padded width —
                  otherwise the two constraints would compound into a much
                  wider empty margin than intended. */}
              <div className="glass-card relative flex min-h-[55vh] w-full max-w-5xl flex-col items-center justify-center rounded-[3rem] p-10 pt-16 text-center shadow-soft transition-transform duration-500 hover:-translate-y-2 sm:min-h-[60vh] sm:p-14 sm:pt-20 lg:min-h-[65vh] lg:p-16 lg:pt-24 motion-safe:max-w-none">
                <span
                  aria-hidden="true"
                  className={`absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full font-body text-label-lg shadow-soft sm:-top-8 sm:h-16 sm:w-16 sm:text-headline-sm lg:-top-10 lg:h-20 lg:w-20 lg:text-headline-md ${step.badgeClass}`}
                >
                  {index + 1}
                </span>
                <h3 className="mt-2 font-display text-headline-sm text-on-surface sm:text-headline-md lg:text-headline-lg">
                  {step.title}
                </h3>
                <p className="mx-auto mt-4 max-w-2xl font-body text-body-md text-on-surface-variant sm:text-body-lg">
                  {step.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
                  {step.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full bg-surface-container-high px-4 py-1.5 font-body text-label-md text-on-surface-variant sm:px-5 sm:py-2"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
          {/* Trailing spacer, not a step: extends the pinned track past the
              last card so the scrub has extra vertical scroll distance to
              consume after step 3 is fully in frame, before the pin
              releases into the next section — without it, reaching the
              last card and un-pinning happen in the same instant, which
              reads as an abrupt cut. `hidden` outside `motion-safe` keeps
              it out of the plain vertical stack entirely (no stray blank
              block), since it only makes sense as extra horizontal scroll
              distance in the pinned mode. */}
          <li
            aria-hidden="true"
            className="hidden shrink-0 motion-safe:block motion-safe:w-[50vw]"
          />
        </ol>
      </div>
    </section>
  );
}
