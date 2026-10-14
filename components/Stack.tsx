import { stack } from "@/data/content";
import { Container, SectionHeading } from "./ui";

export function Stack() {
  return (
    <section id="stack">
      <Container className="flex flex-col gap-10 pt-24 pb-12">
        <SectionHeading index="03" eyebrow="Stack" title="Ferramentas do dia a dia" />
        <div className="flex flex-wrap gap-5">
          {stack.map((group) => (
            <div key={group.group} className="flex flex-[1_1_260px] flex-col gap-3 rounded-[20px] border border-line p-7">
              <h3 className="font-display text-xl font-semibold">{group.group}</h3>
              <p className="text-muted">{group.items}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
