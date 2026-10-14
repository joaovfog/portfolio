import { highlights } from "@/data/content";
import { Container } from "./ui";

export function Highlights() {
  return (
    <section aria-label="Resumo" className="border-y border-[#1f252e]">
      <Container className="py-9">
        <dl className="flex flex-wrap gap-x-16 gap-y-6">
          {highlights.map((item) => (
            <div key={item.value} className="flex flex-col-reverse gap-0.5">
              <dt className="text-[15px] text-subtle">{item.label}</dt>
              <dd className="font-display text-4xl font-semibold">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
