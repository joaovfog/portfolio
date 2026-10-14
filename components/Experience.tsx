import { experience } from "@/data/content";
import { Container, SectionHeading } from "./ui";

export function Experience() {
  return (
    <section id="experiencia">
      <Container className="flex flex-col gap-10 pt-24 pb-12">
        <SectionHeading index="02" eyebrow="Experiência" title="Onde eu trabalhei" />
        <ol className="border-b border-line">
          {experience.map((job) => (
            <li key={job.title} className="flex flex-wrap gap-x-10 gap-y-2 border-t border-line py-7">
              <p className="flex-[0_0_200px] font-mono text-sm text-subtle">{job.period}</p>
              <div className="min-w-0 flex-[1_1_480px]">
                <h3 className="mb-1.5 font-display text-[22px] font-semibold">{job.title}</h3>
                <p className="text-muted">{job.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
