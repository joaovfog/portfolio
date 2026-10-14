import { Container } from "./ui";

const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#stack", label: "Stack" },
  { href: "#sobre", label: "Sobre" },
];

export function Header() {
  return (
    <header>
      <Container className="flex flex-wrap items-center justify-between gap-4 py-7">
        <a href="#topo" className="font-display text-xl font-bold tracking-[-0.02em]">
          joão vitor<span className="text-accent">.</span>
        </a>
        <nav aria-label="Seções">
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[15px]">
            {links.map((link) => (
              <li key={link.href} className="hidden sm:block">
                <a href={link.href} className="text-muted hover:text-text">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-[18px] hover:border-subtle"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
