import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, SectionLabel, whatsapp } from "../components/site";

export default function About() {
  return (
    <>
      <PageIntro
        number="03 / 04"
        kicker="A LOJA & A EQUIPE"
        title={
          <>
            BIKE É NOSSO
            <br />
            <em>JEITO DE VIVER.</em>
          </>
        }
        description="Uma loja feita para quem sabe que a melhor parte do caminho é estar em cima da bike. Aqui, conversa, técnica e paixão andam juntas."
      />
      <section className="about-photo shell">
        <img src="/images/road-riding.webp" alt="Ciclistas pedalando juntos na estrada" />
        <div>
          <span>MAIS DO QUE UMA LOJA.</span>
          <span>UMA CULTURA DE PEDAL.</span>
        </div>
      </section>
      <section className="about-story shell">
        <SectionLabel index="01">NOSSA ESSÊNCIA</SectionLabel>
        <div className="about-story-grid">
          <span className="eyebrow accent">BORA VIVER DE BIKE!</span>
          <div>
            <h2>
              A GENTE ACREDITA
              <br />
              EM <em>CADA PEDAL.</em>
            </h2>
            <p>
              Da escolha de uma nova bike à revisão antes de uma prova, o que importa é entender o
              seu objetivo. É por isso que nosso atendimento começa com uma boa conversa e continua
              nos detalhes.
            </p>
            <p>
              Somos apaixonados por MTB, estrada e gravel. Nossa proposta une uma curadoria de
              equipamentos, suporte técnico e o prazer de fazer parte da sua jornada.
            </p>
            <Link href="/catalogo" className="text-link">
              CONHECER O SHOWROOM <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="about-workshop">
        <div className="about-workshop-photo">
          <img src="/images/detail-workshop.webp" alt="Detalhe de uma bicicleta em manutenção" />
        </div>
        <div className="about-workshop-copy">
          <span className="eyebrow accent">02 / POR TRÁS DE CADA AJUSTE</span>
          <h2>
            UM OLHAR
            <br />
            <em>TÉCNICO.</em>
            <br />
            UMA PAIXÃO
            <br />
            REAL.
          </h2>
          <p>
            A oficina é onde nossa atenção aos detalhes ganha forma. A gente cuida da bike para você
            se concentrar no que interessa: o próximo rolê.
          </p>
          <Link href="/servicos" className="button button-yellow">
            CONHECER A OFICINA <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="about-connect shell">
        <SectionLabel index="03">VAMOS CONVERSAR</SectionLabel>
        <div>
          <h2>
            SUA PRÓXIMA HISTÓRIA
            <br />
            <em>COMEÇA COM UM OI.</em>
          </h2>
          <a
            href={whatsapp(
              "Olá, equipe Xororó Bike Center! Gostaria de conhecer a loja e conversar sobre bikes.",
            )}
            target="_blank"
            rel="noreferrer"
            className="button button-outline"
          >
            FALAR COM A EQUIPE <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
