import { useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowUpRight, ChevronDown, Maximize2, X } from "lucide-react";
import { useProduct } from "../queries/catalog";
import { DemoNote, Loader, whatsapp } from "../components/site";

export default function Product() {
  const { slug } = useParams<{ slug: string }>();
  const product = useProduct(slug ?? "");
  const [imageIndex, setImageIndex] = useState(0);
  const [size, setSize] = useState("");
  const [zoom, setZoom] = useState(false);
  const [specOpen, setSpecOpen] = useState(true);
  if (product.isLoading) return <Loader label="Carregando detalhes técnicos" />;
  if (product.isError || !product.data)
    return (
      <div className="shell not-found">
        <h1>BIKE NÃO ENCONTRADA.</h1>
        <Link href="/catalogo" className="button button-yellow">
          VOLTAR AO SHOWROOM
        </Link>
      </div>
    );
  const p = product.data;
  const msg = `Olá equipe Xororó Bike Center! Tenho interesse na ${p.name} (SKU: ${p.sku})${size ? `, tamanho ${size}` : ""}. Poderiam me passar disponibilidade, especificações e condições?`;
  return (
    <div className="shell product-page">
      <div className="breadcrumb">
        <Link href="/catalogo">
          <ArrowLeft size={15} /> SHOWROOM
        </Link>
        <span>/</span>
        <span>{p.category}</span>
        <span>/</span>
        <strong>{p.name}</strong>
      </div>
      <div className="product-layout">
        <div className="product-gallery">
          <button className="main-photo" onClick={() => setZoom(true)} aria-label="Ampliar imagem">
            <img
              src={p.gallery[imageIndex]}
              alt={`Imagem ilustrativa ${imageIndex + 1} de ${p.name}`}
            />
            <span className="photo-zoom">
              <Maximize2 size={18} /> AMPLIAR IMAGEM
            </span>
          </button>
          <div className="thumbs">
            {p.gallery.map((img, i) => (
              <button
                key={img}
                className={imageIndex === i ? "active" : ""}
                onClick={() => setImageIndex(i)}
                aria-label={`Ver imagem ${i + 1}`}
              >
                <img src={img} alt="" />
              </button>
            ))}
          </div>
          <p className="image-note">IMAGENS ILUSTRATIVAS. CONFIGURAÇÃO REAL SOB CONFIRMAÇÃO.</p>
        </div>
        <div className="product-details">
          <div className="detail-meta">
            <span>{p.badge}</span>
            <span>{p.sku}</span>
          </div>
          <h1>{p.name}</h1>
          <p className="detail-tagline">{p.tagline}</p>
          <div className="detail-status">
            <i /> {p.availability.toUpperCase()} <span>•</span> {p.brand.toUpperCase()}
          </div>
          <p className="detail-description">{p.description}</p>
          <div className="detail-price">
            <span>CONDIÇÕES</span>
            <strong>{p.price}</strong>
            <small>Consulte preço, montagem e disponibilidade com a equipe.</small>
          </div>
          <div className="size-picker">
            <div>
              <span>TAMANHO DO QUADRO</span>
              <small>{size ? `SELECIONADO: ${size}` : "SELECIONE UMA OPÇÃO"}</small>
            </div>
            <div className="size-buttons">
              {p.sizes.map((s) => (
                <button key={s} className={size === s ? "selected" : ""} onClick={() => setSize(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>
          <a
            className="button button-yellow detail-cta"
            href={whatsapp(msg)}
            target="_blank"
            rel="noreferrer"
          >
            CONSULTAR ESPECIALISTA NO WHATSAPP <ArrowUpRight size={19} />
          </a>
          <p className="detail-help">Atendimento pessoal. Sem checkout automático.</p>
          <div className="specification">
            <button onClick={() => setSpecOpen(!specOpen)} aria-expanded={specOpen}>
              ESPECIFICAÇÕES TÉCNICAS <ChevronDown size={18} className={specOpen ? "rotate" : ""} />
            </button>
            {specOpen && (
              <dl>
                {Object.entries(p.specs).map(([key, value]) => (
                  <div key={key}>
                    <dt>{key}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
          <DemoNote />
        </div>
      </div>
      {zoom && (
        <dialog open className="zoom-modal" aria-modal="true" aria-label="Imagem ampliada">
          <button aria-label="Fechar imagem" onClick={() => setZoom(false)}>
            <X />
          </button>
          <img src={p.gallery[imageIndex]} alt={`Imagem ilustrativa ampliada de ${p.name}`} />
        </dialog>
      )}
    </div>
  );
}
