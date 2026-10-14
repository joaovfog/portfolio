import { existsSync } from "node:fs";
import path from "node:path";
import { contact, site } from "@/data/content";
import { ButtonLink, Container } from "./ui";

export function Contact() {
  // O botão de currículo só aparece quando o PDF existir em /public.
  const hasResume = existsSync(path.join(process.cwd(), "public", site.resumePath));

  return (
    <section id="contato">
      <Container className="pt-24 pb-28">
        <div className="flex flex-col gap-7 rounded-[28px] border border-line bg-surface px-6 py-12 sm:px-12 sm:py-14">
          <p className="font-mono text-sm text-accent">05 — Contato</p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] font-semibold tracking-[-0.035em]">
            Procurando um dev front-end? Vamos conversar.
          </h2>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${contact.email}`}>{contact.email}</ButtonLink>
            <ButtonLink href={contact.whatsapp} variant="outline" external>
              WhatsApp
            </ButtonLink>
            <ButtonLink href={contact.linkedin} variant="outline" external>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={contact.github} variant="outline" external>
              GitHub
            </ButtonLink>
            {hasResume && (
              <ButtonLink href={site.resumePath} variant="outline" download>
                Baixar currículo
              </ButtonLink>
            )}
          </div>
        </div>
        <footer className="mt-10 text-sm text-subtle">© {new Date().getFullYear()} {site.name}</footer>
      </Container>
    </section>
  );
}
