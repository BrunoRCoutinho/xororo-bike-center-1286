import { Link } from "wouter";
import { ArrowDown, ArrowUpRight, Bike, Gauge, Wrench } from "lucide-react";
import { useCatalog } from "../queries/catalog";
import { DemoNote, Loader, SectionLabel, TextArrow, whatsapp } from "../components/site";
import { ProductCard } from "../components/product-card";

export default function Index() {
  const catalog = useCatalog();
  return (
    <>
      <section className="hero">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="shell hero-inner">
          <div className="hero-top">
            <span>
              <i className="live-dot" /> BIKES PARA IR ALÉM
            </span>
            <span>MTB / ROAD / GRAVEL</span>
          </div>
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow">
              XORORÓ BIKE CENTER — SUA PRÓXIMA JORNADA COMEÇA AQUI
            </span>
            <h1>
              BORA VIVER
              <br />
              <span>
                DE BIKE<span className="hero-period">.</span>
              </span>
            </h1>
            <div className="hero-bottom">
              <p>
                Bicicletas de alta performance, peças de precisão e uma oficina que entende a sua
                paixão por pedalar.
              </p>
              <div className="hero-buttons">
                <Link href="/catalogo" className="button button-yellow">
                  EXPLORAR SHOWROOM <ArrowUpRight size={18} />
                </Link>
                <Link href="/servicos" className="button button-outline">
                  AGENDAR REVISÃO <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-scroll">
            <span>FEITO PARA QUEM NÃO PARA</span>
            <ArrowDown size={16} />
          </div>
        </div>
      </section>

      <section className="manifesto shell">
        <SectionLabel index="01">O QUE NOS MOVE</SectionLabel>
        <div className="manifesto-grid">
          <span className="eyebrow accent">NÃO É SÓ SOBRE BICICLETAS.</span>
          <h2>
            É SOBRE A SENSAÇÃO
            <br />
            DE <em>IR MAIS LONGE.</em>
          </h2>
          <p>
            Do primeiro ajuste ao próximo grande desafio, cada detalhe importa. A gente combina
            conhecimento técnico, curadoria e uma paixão genuína por estar em movimento.
          </p>
        </div>
      </section>

      <section className="pillars shell">
        <div className="pillar">
          <span className="pillar-number">01 / OFICINA</span>
          <Wrench size={28} strokeWidth={1.3} />
          <h3>
            PRECISÃO
            <br />
            EM CADA AJUSTE.
          </h3>
          <p>
            Revisões, suspensão e acertos de performance feitos com olhar técnico e atenção a cada
            componente.
          </p>
          <Link href="/servicos">
            <TextArrow>CONHECER SERVIÇOS</TextArrow>
          </Link>
        </div>
        <div className="pillar">
          <span className="pillar-number">02 / COMPONENTES</span>
          <Gauge size={28} strokeWidth={1.3} />
          <h3>
            PEÇAS PARA
            <br />
            SUPERAR LIMITES.
          </h3>
          <p>
            Transmissões, freios e componentes selecionados para responder quando você mais precisa.
          </p>
          <a
            href={whatsapp(
              "Olá, equipe Xororó Bike Center! Quero consultar peças e componentes de alta performance.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            <TextArrow>FALAR COM ESPECIALISTA</TextArrow>
          </a>
        </div>
        <div className="pillar">
          <span className="pillar-number">03 / EQUIPAMENTOS</span>
          <Bike size={28} strokeWidth={1.3} />
          <h3>
            PRONTO PARA
            <br />
            CADA NOVO ROLÊ.
          </h3>
          <p>
            Acessórios e vestuário que unem proteção, conforto e a liberdade de seguir pedalando.
          </p>
          <a
            href={whatsapp(
              "Olá, equipe Xororó Bike Center! Quero conhecer acessórios e vestuário.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            <TextArrow>CONSULTAR ACESSÓRIOS</TextArrow>
          </a>
        </div>
      </section>

      <section className="showroom-section shell">
        <SectionLabel index="02">SHOWROOM / CURADORIA XORORÓ</SectionLabel>
        <div className="section-heading">
          <h2>
            ENCONTRE SUA
            <br />
            <em>PRÓXIMA BIKE.</em>
          </h2>
          <div>
            <p>
              Escolhas para quem leva cada quilômetro a sério. Explore, compare e converse com quem
              entende.
            </p>
            <Link href="/catalogo" className="text-link">
              VER TODO O SHOWROOM <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        {catalog.isLoading ? (
          <Loader />
        ) : catalog.isError ? (
          <p>Não foi possível carregar o showroom.</p>
        ) : (
          <div className="featured-grid">
            {catalog.data?.slice(0, 3).map((item, i) => (
              <ProductCard key={item.slug} product={item} large={i === 0} />
            ))}
          </div>
        )}
        <DemoNote />
      </section>

      <section className="story-section">
        <div className="story-image">
          <img
            src="/images/workshop.webp"
            alt="Mecânico trabalhando em uma bicicleta na oficina"
            loading="lazy"
          />
          <div className="story-image-caption">
            A DIFERENÇA ESTÁ NOS DETALHES. <span>↗</span>
          </div>
        </div>
        <div className="story-content">
          <span className="eyebrow accent">03 / OFICINA ESPECIALIZADA</span>
          <h2>
            CONFIE EM QUEM
            <br />
            <em>VIVE CADA</em>
            <br />
            DETALHE.
          </h2>
          <p>
            Sua bike merece mais do que uma manutenção de rotina. Na oficina, o cuidado começa no
            diagnóstico e vai até o ajuste que você sente no primeiro pedal.
          </p>
          <ul>
            <li>
              <span>01</span> DIAGNÓSTICO COM ATENÇÃO REAL
            </li>
            <li>
              <span>02</span> AJUSTES DE PRECISÃO
            </li>
            <li>
              <span>03</span> CONVERSA DIRETA COM ESPECIALISTAS
            </li>
          </ul>
          <Link href="/servicos" className="button button-yellow">
            EXPLORAR SERVIÇOS <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section className="experience shell">
        <SectionLabel index="04">CULTURA DE PEDAL</SectionLabel>
        <div className="experience-grid">
          <div className="experience-copy">
            <span className="eyebrow accent">A ESTRADA NÃO ACABA AQUI</span>
            <h2>
              O MELHOR
              <br />
              DO PEDAL
              <br />
              <em>É VIVER.</em>
            </h2>
            <p>
              Na trilha, no asfalto ou descobrindo caminhos novos: existe uma bike, um ajuste e uma
              comunidade para cada vontade de ir além.
            </p>
            <Link href="/sobre" className="text-link">
              CONHEÇA A XORORÓ <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="experience-image">
            <img
              src="/images/road-riding.webp"
              alt="Ciclistas pedalando em grupo na estrada"
              loading="lazy"
            />
            <span>DE BIKE, A GENTE VAI MAIS LONGE.</span>
          </div>
        </div>
      </section>
    </>
  );
}
