import Image from "next/image";
import { ArrowIcon, ButtonLink, Container } from "./ui";

export function Hero() {
  return (
    <section id="topo">
      <Container className="flex flex-wrap items-center gap-14 pt-14 pb-24 sm:pt-22">
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-7">
          <p className="font-mono text-sm text-accent">Desenvolvedor Front-end Pleno · Disponível para remoto</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
            Interfaces web e mobile com React, Next.js e TypeScript.
          </h1>
          <p className="max-w-[620px] text-[19px] text-muted">
            Sou o João, desenvolvedor front-end há 5 anos. Hoje construo um sistema de gestão de haras, com
            aplicação web em Next.js e app em React Native. Antes, desenvolvi módulos de ERP web e mobile na
            Cigam.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="#projetos">
              Ver projetos
              <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="#contato" variant="outline">
              Entrar em contato
            </ButtonLink>
          </div>
        </div>
        <div className="flex flex-[1_1_300px] justify-center">
          <Image
            src="/profile-picture.jpeg"
            alt="Retrato de João Vitor Fogaça"
            width={800}
            height={800}
            priority
            sizes="340px"
            className="aspect-[4/5] w-full max-w-[340px] rounded-3xl border border-line object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
