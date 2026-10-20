import { ArrowUpRight } from "lucide-react";
import { PageIntro, SectionLabel, whatsapp } from "../components/site";

const categories = [
  {
    number: "01",
    eyebrow: "CONTROLE EM CADA PEDAL",
    name: "Transmissão & freios",
    description:
      "Componentes para uma resposta precisa, da primeira troca de marcha à última curva.",
    query: "transmissões e freios de alta performance",
    image: "/images/detail-workshop.webp",
  },
  {
    number: "02",
    eyebrow: "LEVEZA COM PROPÓSITO",
    name: "Rodas & carbono",
    description: "Para quem procura eficiência, rigidez e confiança em todo tipo de terreno.",
    query: "rodas e componentes de carbono",
    image: "/images/road.webp",
  },
  {
    number: "03",
    eyebrow: "PEDALE EQUIPADO",
    name: "Acessórios & vestuário",
    description:
      "Proteção, conforto e equipamentos que acompanham o seu ritmo dentro e fora da trilha.",
    query: "acessórios e vestuário para ciclismo",
    image: "/images/gravel.webp",
  },
];

export default function Parts() {
  return (
    <>
      <PageIntro
        number="04 / 04"
        kicker="PEÇAS & ACESSÓRIOS"
        title={
          <>
            O DETALHE QUE
            <br />
            <em>MUDA TUDO.</em>
          </>
        }
        description="Da escolha do componente certo ao equipamento para o próximo pedal. Nossa curadoria começa entendendo sua bike e onde você quer chegar."
      />
      <section className="parts-section shell">
        <SectionLabel index="01">EXPLORAR CATEGORIAS</SectionLabel>
        <div className="parts-list">
          {categories.map((item) => (
            <article className="parts-item" key={item.number}>
              <div className="parts-image">
                <img src={item.image} alt={`Imagem ilustrativa de ${item.name.toLowerCase()}`} />
              </div>
              <div className="parts-info">
                <span className="eyebrow accent">
                  {item.number} / {item.eyebrow}
                </span>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <a
                  href={whatsapp(
                    `Olá, equipe Xororó Bike Center! Quero consultar ${item.query}. Podem me ajudar a escolher a opção ideal para minha bike?`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  CONSULTAR ESPECIALISTA <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="demo-note">
          CATEGORIAS E IMAGENS ILUSTRATIVAS. MARCAS, MODELOS, PREÇOS E DISPONIBILIDADE SOB CONSULTA
          COM A EQUIPE.
        </p>
      </section>
    </>
  );
}
