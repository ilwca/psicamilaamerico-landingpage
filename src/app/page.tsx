import { Hero } from "@/components/hero";
import { Sobre } from "@/components/about";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
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
