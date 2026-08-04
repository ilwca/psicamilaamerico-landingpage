import Image from "next/image";

const SPECIALTIES = [
  "Ansiedade",
  "Autoestima",
  "Relacionamentos",
  "Luto e perdas",
  "Desenvolvimento pessoal",
];

export function About() {
  return (
    <section
      id="sobre"
      className="relative bg-gradient-to-b from-tertiary via-primary-container/25 to-surface"
    >
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-12 px-5 py-16 sm:px-10 lg:grid-cols-12 lg:gap-8 lg:px-6 lg:py-24">
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
              Acredito que a terapia é, antes de tudo, um encontro: um espaço
              seguro para olhar para dentro, entender suas histórias e
              construir, com calma, novos caminhos.
            </p>
            <p>
              Minha escuta é próxima, ética e livre de julgamentos. Cada
              processo é único — por isso, aqui, a escuta vem sempre antes da
              técnica.
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
      </div>
    </section>
  );
}
