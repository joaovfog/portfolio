import { about } from "@/data/content";
import { Container, SectionHeading } from "./ui";

export function About() {
  return (
    <section id="sobre">
      <Container className="flex flex-wrap gap-x-20 gap-y-10 pt-24 pb-12">
        <div className="flex-[1_1_320px]">
          <SectionHeading index="04" eyebrow="Sobre" title="Um pouco sobre mim" />
        </div>
        <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-[18px] text-muted">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
