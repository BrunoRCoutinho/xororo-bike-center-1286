import { z } from "zod";
import { ORPCError } from "@orpc/server";
import { base } from "../__core/app";

const products = [
  {
    slug: "apex-xc-carbon",
    sku: "XBC-MTB-001",
    name: "Apex XC Carbon",
    brand: "Apex",
    discipline: "MTB Full",
    category: "MTB",
    availability: "Pronta entrega",
    sizes: ["M", "L"],
    image: "/images/mtb.webp",
    gallery: ["/images/mtb.webp", "/images/hero.webp", "/images/detail-workshop.webp"],
    tagline: "Leve na subida. Absoluta na descida.",
    description:
      "Uma configuração de referência para quem quer transformar cada trilha em terreno de evolução.",
    price: "Consultar condições",
    badge: "TRILHA / XC",
    specs: {
      Quadro: "Carbono, geometria XC",
      "Suspensão / Garfo": "Full suspension, curso 120 mm",
      Transmissão: "1x12 velocidades",
      Freios: "Disco hidráulico",
      Rodas: "29 polegadas",
      Peso: "Sob consulta",
    },
  },
  {
    slug: "veloce-aero-r",
    sku: "XBC-RD-002",
    name: "Veloce Aero R",
    brand: "Veloce",
    discipline: "Speed/Road",
    category: "ROAD",
    availability: "Sob encomenda",
    sizes: ["S", "M", "L"],
    image: "/images/road.webp",
    gallery: ["/images/road.webp", "/images/road-riding.webp", "/images/detail-workshop.webp"],
    tagline: "Cada watt encontra seu caminho.",
    description:
      "Uma silhueta de estrada feita para velocidade, eficiência e longas horas no selim.",
    price: "Consultar condições",
    badge: "ASFALTO / AERO",
    specs: {
      Quadro: "Carbono, perfil aerodinâmico",
      "Suspensão / Garfo": "Garfo rígido em carbono",
      Transmissão: "2x12 velocidades",
      Freios: "Disco hidráulico",
      Rodas: "700c, perfil alto",
      Peso: "Sob consulta",
    },
  },
  {
    slug: "terra-gravel-gt",
    sku: "XBC-GRV-003",
    name: "Terra Gravel GT",
    brand: "Terra",
    discipline: "Gravel",
    category: "GRAVEL",
    availability: "Pronta entrega",
    sizes: ["S", "M", "L", "XL"],
    image: "/images/gravel.webp",
    gallery: ["/images/gravel.webp", "/images/road-riding.webp", "/images/workshop.webp"],
    tagline: "O melhor caminho é o próximo.",
    description: "Versatilidade para sair do asfalto sem deixar performance para trás.",
    price: "Consultar condições",
    badge: "TERRA / EXPLORAÇÃO",
    specs: {
      Quadro: "Carbono, passagem interna",
      "Suspensão / Garfo": "Garfo rígido em carbono",
      Transmissão: "1x12 velocidades",
      Freios: "Disco hidráulico",
      Rodas: "700c, pneus gravel",
      Peso: "Sob consulta",
    },
  },
  {
    slug: "apex-trail-29",
    sku: "XBC-MTB-004",
    name: "Apex Trail 29",
    brand: "Apex",
    discipline: "MTB Hardtail",
    category: "MTB",
    availability: "Sob encomenda",
    sizes: ["M", "L", "XL"],
    image: "/images/hero.webp",
    gallery: ["/images/hero.webp", "/images/mtb.webp", "/images/detail-workshop.webp"],
    tagline: "Precisão que acompanha seu ritmo.",
    description: "Resposta direta e controle para descobrir mais em cada quilômetro de trilha.",
    price: "Consultar condições",
    badge: "TRILHA / HARDTAIL",
    specs: {
      Quadro: "Carbono, hardtail",
      "Suspensão / Garfo": "Garfo dianteiro, curso 100 mm",
      Transmissão: "1x12 velocidades",
      Freios: "Disco hidráulico",
      Rodas: "29 polegadas",
      Peso: "Sob consulta",
    },
  },
] as const;

export const catalog = {
  list: base.handler(() => products),
  get: base.input(z.object({ slug: z.string() })).handler(({ input }) => {
    const product = products.find((item) => item.slug === input.slug);
    if (!product) throw new ORPCError("NOT_FOUND", { message: "Bicicleta não encontrada" });
    return product;
  }),
};
