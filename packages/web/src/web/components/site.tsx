import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

export const phone = "5517992736060";
export const whatsapp = (message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  useEffect(() => setOpen(false), [location]);
  return (
    <>
      <div className="topline">
        <span>BIKES • PERFORMANCE • CULTURA</span>
        <span>ATENDIMENTO PERSONALIZADO / 17 99273-6060</span>
      </div>
      <header className="header shell">
        <Link href="/" className="brand" aria-label="Xororó Bike Center, início">
          <span className="brand-icon">
            X<span>/</span>
          </span>
          <span className="brand-name">
            XORORÓ <small>BIKE CENTER</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <Link href="/catalogo" className={location.startsWith("/catalogo") ? "active" : ""}>
            SHOWROOM
          </Link>
          <Link href="/servicos" className={location === "/servicos" ? "active" : ""}>
            OFICINA & SERVIÇOS
          </Link>
          <Link
            href="/pecas"
            className={location === "/pecas" ? "active" : ""}
          >
            PEÇAS & ACESSÓRIOS
          </Link>
          <Link href="/sobre" className={location === "/sobre" ? "active" : ""}>
            A LOJA & EQUIPE
          </Link>
        </nav>
        <div className="header-actions">
          <a
            className="consult-link"
            href={whatsapp("Olá, equipe Xororó Bike Center! Gostaria de falar com um consultor.")}
            target="_blank"
            rel="noreferrer"
          >
            FALAR COM CONSULTOR <ArrowUpRight size={15} />
          </a>
          <Link href="/servicos" className="header-cta">
            AGENDAR SERVIÇO <ArrowUpRight size={15} />
          </Link>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
      {open && (
        <nav className="mobile-menu" aria-label="Menu mobile">
          <Link href="/catalogo">
            SHOWROOM <ArrowUpRight />
          </Link>
          <Link href="/servicos">
            OFICINA & SERVIÇOS <ArrowUpRight />
          </Link>
          <Link href="/pecas">
            PEÇAS & ACESSÓRIOS <ArrowUpRight />
          </Link>
          <Link href="/sobre">
            A LOJA & EQUIPE <ArrowUpRight />
          </Link>
          <a
            href={whatsapp("Olá, equipe Xororó Bike Center! Gostaria de falar com um consultor.")}
            target="_blank"
            rel="noreferrer"
          >
            FALAR COM CONSULTOR <ArrowUpRight />
          </a>
        </nav>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-top">
        <div>
          <span className="eyebrow accent">PEDALE MAIS LONGE</span>
          <h2>
            O PRÓXIMO
            <br />
            <em>ROLÊ</em> COMEÇA AQUI.
          </h2>
          <Link href="/catalogo" className="button button-yellow">
            EXPLORAR SHOWROOM <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="footer-contact">
          <p>
            Mais do que uma bike.
            <br />
            Uma experiência para viver sobre duas rodas.
          </p>
          <a
            href={whatsapp(
              "Olá, equipe Xororó Bike Center! Quero conversar sobre bikes e serviços.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            FALE COM A GENTE <ArrowUpRight size={16} />
          </a>
          <span>WHATSAPP / (17) 99273-6060</span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <Link href="/" className="footer-logo">
          XORORÓ<span>®</span>
        </Link>
        <span>BIKE CENTER — BORA VIVER DE BIKE!</span>
        <span>CATÁLOGO E IMAGENS ILUSTRATIVOS</span>
        <a href="#top" aria-label="Voltar ao topo">
          VOLTAR AO TOPO ↑
        </a>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div id="top">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>
        {index} / {children}
      </span>
      <ArrowDownRight size={17} />
    </div>
  );
}

export function PageIntro({
  number,
  kicker,
  title,
  description,
}: {
  number: string;
  kicker: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <section className="page-intro shell">
      <div className="intro-kicker">
        <span className="accent">{number}</span>
        <span>{kicker}</span>
      </div>
      <h1>{title}</h1>
      <div className="intro-bottom">
        <p>{description}</p>
        <span>DESÇA PARA EXPLORAR ↓</span>
      </div>
    </section>
  );
}

export function Loader({ label = "Carregando seleção" }: { label?: string }) {
  return (
    <output className="loader shell">
      <div className="loader-line" />
      <div className="loader-line short" />
      <span>{label}...</span>
    </output>
  );
}

export function DemoNote() {
  return (
    <p className="demo-note">
      CONTEÚDO DEMONSTRATIVO — MODELOS, DISPONIBILIDADE, ESPECIFICAÇÕES E IMAGENS ILUSTRATIVOS.
      CONFIRME TODOS OS DETALHES COM UM CONSULTOR.
    </p>
  );
}

export function TextArrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-arrow">
      {children}
      <ArrowRight size={16} />
    </span>
  );
}
