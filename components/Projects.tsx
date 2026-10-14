import Image from "next/image";
import { projects, type Project } from "@/data/content";
import { Container, ImagePlaceholder, SectionHeading, Tag } from "./ui";

function ProjectMedia({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.imageAlt}
        width={project.imageWidth ?? 1200}
        height={project.imageHeight ?? 800}
        sizes="(max-width: 900px) 100vw, 560px"
        className="h-auto w-full flex-[1_1_420px] self-start rounded-2xl border border-line"
      />
    );
  }
  return <ImagePlaceholder label={project.imagePlaceholder} className="min-h-[300px] flex-[1_1_420px]" />;
}

function ProjectCard({ project, reverse }: { project: Project; reverse: boolean }) {
  return (
    <article
      className={`flex flex-wrap gap-10 rounded-3xl border border-line bg-surface p-6 sm:p-10 ${reverse ? "flex-row-reverse" : ""}`}
    >
      <ProjectMedia project={project} />
      <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-[18px]">
        <p className="font-mono text-[13px] text-subtle">{project.context}</p>
        <h3 className="font-display text-3xl leading-[1.15] font-semibold tracking-[-0.02em]">{project.title}</h3>
        <p className="text-muted">{project.summary}</p>
        {project.decision && (
          <p className="text-muted">
            <strong className="font-semibold text-text">Decisão técnica:</strong> {project.decision}
          </p>
        )}
        {project.bullets && (
          <ul className="flex list-disc flex-col gap-1.5 pl-5 text-muted">
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
        <ul aria-label="Tecnologias" className="mt-1 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projetos">
      <Container className="flex flex-col gap-14 pt-28 pb-12">
        <SectionHeading index="01" eyebrow="Projetos" title="O que eu construí e por quê" />
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} reverse={i % 2 === 1} />
        ))}
      </Container>
    </section>
  );
}
