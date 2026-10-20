import { base } from "../__core/app";

const packages = [
  {
    id: "revisao",
    number: "01",
    name: "Revisão High-Performance",
    eyebrow: "MANUTENÇÃO COMPLETA",
    duration: "2–3 dias úteis*",
    price: "Valor sob avaliação",
    description:
      "Uma revisão técnica de ponta a ponta para manter sua bike pronta para o próximo desafio.",
    inclusions: [
      "Inspeção de quadro e componentes",
      "Ajuste de transmissão e freios",
      "Checagem de torque e segurança",
      "Limpeza e lubrificação técnica",
    ],
  },
  {
    id: "bikefit",
    number: "02",
    name: "Bike Fit 3D",
    eyebrow: "POSICIONAMENTO",
    duration: "Até 2 horas*",
    price: "Valor sob avaliação",
    description:
      "Mais conforto, mais eficiência. O ajuste fino entre você, sua bike e seus objetivos.",
    inclusions: [
      "Avaliação inicial de postura",
      "Análise de pontos de contato",
      "Ajustes de posição",
      "Orientações para pedalar melhor",
    ],
  },
  {
    id: "suspensao",
    number: "03",
    name: "Suspensão & Hidráulica",
    eyebrow: "AJUSTE DE PRECISÃO",
    duration: "Conforme diagnóstico*",
    price: "Valor sob avaliação",
    description: "Atenção técnica aos sistemas que fazem diferença quando o terreno exige mais.",
    inclusions: [
      "Diagnóstico de suspensão",
      "Inspeção do sistema hidráulico",
      "Ajuste de pressão e retorno",
      "Teste funcional e orientações",
    ],
  },
] as const;

export const services = { list: base.handler(() => packages) };
