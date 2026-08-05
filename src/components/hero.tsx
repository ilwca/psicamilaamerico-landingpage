"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * The hero photo has no baked-in text/logo — those are real layers animated
 * here. As the user scrolls through this section's extra scroll-room, the
 * photo fades out, the brand mark scales up from a small accent into an
 * abstract full-bleed texture, and the copy fades early — mirroring the
 * zoom-into-the-logo storyboard in base/hero-1.jpg..hero-6.png.
 *
 * Every scroll-linked opacity keyframe list is written to explicitly reach
 * input `1`. framer-motion mishandles opacity `useTransform`s whose input
 * range stops short of 1 (e.g. `[0, 0.55, 0.85]`): past the last defined
 * breakpoint the computed opacity doesn't hold — it drifts back toward the
 * *first* keyframe's value, so by the end of the scroll range the photo and
 * headline silently reappear under the overlay. Transform-based values
 * (scale/rotate/y) aren't affected, only opacity. Adding an explicit `1`
 * breakpoint that repeats the intended end value avoids it.
 */
export function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const photoOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.85, 1],
    [1, 0.3, 0, 0],
  );

  const tintOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.32, 0.6, 0.96],
  );

  const logoScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 6, 32],
  );
  const logoOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 1],
    [0.6, 0.9, 1],
  );
  const logoRotate = useTransform(scrollYProgress, [0, 1], [0, 14]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -48]);

  const cueOpacity = useTransform(scrollYProgress, [0, 0.08, 1], [1, 0, 0]);

  return (
    <section ref={wrapperRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden isolate">
        {/* Photo layer */}
        <motion.div
          style={{ scale: photoScale, opacity: photoOpacity }}
          className="absolute inset-0"
        >
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="/images/hero-mobile.jpg"
            />
            <source
              media="(max-width: 1024px)"
              srcSet="/images/hero-square.jpg"
            />
            <Image
              src="/images/hero-desktop.jpg"
              alt="Camila Américo, psicóloga clínica, sentada em um ambiente sereno e iluminado"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[78%_center] sm:object-center"
            />
          </picture>
        </motion.div>

        {/* Warm tint that darkens the photo then becomes the dominant field
            the logo texture emerges from, bridging into the next section. */}
        <motion.div
          style={{ opacity: tintOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-on-surface via-tertiary/70 to-primary-container/40"
        />

        {/* Static scrim, independent of scroll: keeps the copy legible
            against the bright photo from the very first frame, mirroring
            the left-heavy overlay in base/hero-1.jpg. */}
        <div className="absolute inset-0 bg-gradient-to-r from-on-surface/60 via-on-surface/20 to-transparent" />

        {/* Brand mark — scales from a small accent into an abstract,
            frame-filling texture. Sits below the copy layer's z-10 so the
            text stays legible on top of it; scroll-linked transforms below
            are independent of paint order, so stacking it behind doesn't
            affect the scroll animation. */}
        <motion.div
          style={{
            scale: logoScale,
            opacity: logoOpacity,
            rotate: logoRotate,
          }}
          className="absolute left-[-0.84%] top-0 w-[50.24%] aspect-[926/937]"
        >
          <Image
            src="/images/logo-mark.svg"
            alt=""
            fill
            aria-hidden="true"
            className="object-contain drop-shadow-[0_0_60px_rgba(64,21,4,0.25)]"
          />
        </motion.div>

        {/* Copy layer */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-10 flex h-full w-full flex-col justify-center px-6 sm:px-10 lg:px-[calc((100vw-1140px)/2+24px)]"
        >
          <HeroCopy />
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-inverse-on-surface"
        >
          <span className="font-body text-label-md uppercase text-inverse-on-surface/80">
            Role para conhecer
          </span>
          <span className="h-8 w-px animate-pulse bg-inverse-on-surface/60" />
        </motion.div>
      </div>
    </section>
  );
}

function HeroCopy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="max-w-xl text-inverse-on-surface [text-shadow:0_2px_20px_rgba(41,24,13,0.55)]"
    >
      {/* <p className="font-body text-label-lg uppercase tracking-[0.05em] text-inverse-on-surface/85">
        Psicóloga Clínica · Mestra em Psicologia
      </p> */}
      <h1 className="mt-3 -ml-8 sm:-ml-16 lg:-ml-84 font-display text-headline-lg-mobile leading-[0.40] text-inverse-on-surface sm:text-display-xl">
        <span className="block">Camila</span>
        <span className="block pl-[40%]">Américo</span>
      </h1>
      <p className="mt-5 max-w-md lg:ml-95 font-body text-body-lg text-inverse-on-surface/90">
        PSICOLÓGA CLÍNICA.
      </p>
      
    </motion.div>
  );
}
