import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { useCatalog } from "../queries/catalog";
import { DemoNote, Loader, PageIntro } from "../components/site";
import { ProductCard } from "../components/product-card";

const disciplines = ["Todas", "MTB Full", "MTB Hardtail", "Speed/Road", "Gravel"];
const sizes = ["Todos", "S", "M", "L", "XL"];

export default function Catalog() {
  const catalog = useCatalog();
  const [discipline, setDiscipline] = useState("Todas");
  const [brand, setBrand] = useState("Todas");
  const [size, setSize] = useState("Todos");
  const [availability, setAvailability] = useState("Todas");
  const [mobileFilters, setMobileFilters] = useState(false);
  const brands = useMemo(
    () => [...new Set(catalog.data?.map((p) => p.brand) ?? [])],
    [catalog.data],
  );
  const filtered = catalog.data?.filter(
    (p) =>
      (discipline === "Todas" || p.discipline === discipline) &&
      (brand === "Todas" || p.brand === brand) &&
      (size === "Todos" || (p.sizes as readonly string[]).includes(size)) &&
      (availability === "Todas" || p.availability === availability),
  );
  const clear = () => {
    setDiscipline("Todas");
    setBrand("Todas");
    setSize("Todos");
    setAvailability("Todas");
  };
  return (
    <>
      <PageIntro
        number="01 / 04"
        kicker="CURADORIA DE ALTA PERFORMANCE"
        title={
          <>
            ESCOLHA SEU
            <br />
            <em>PRÓXIMO CAMINHO.</em>
          </>
        }
        description="Bikes selecionadas para diferentes terrenos, objetivos e formas de viver o pedal. Encontre a sua e converse com um especialista."
      />
      <section className="catalog-layout shell">
        <aside className={`filters ${mobileFilters ? "filters-open" : ""}`}>
          <div className="filters-head">
            <span>FILTRAR SELEÇÃO</span>
            <button
              onClick={() => setMobileFilters(false)}
              className="filter-close"
              aria-label="Fechar filtros"
            >
              <X size={20} />
            </button>
          </div>
          <div className="filter-group">
            <h3>DISCIPLINA</h3>
            {disciplines.map((d) => (
              <button
                key={d}
                className={`filter-option ${discipline === d ? "selected" : ""}`}
                onClick={() => setDiscipline(d)}
              >
                <span className="check-box">{discipline === d && "✓"}</span>
                {d}
              </button>
            ))}
          </div>
          <div className="filter-group">
            <h3>MARCA</h3>
            {["Todas", ...brands].map((b) => (
              <button
                key={b}
                className={`filter-option ${brand === b ? "selected" : ""}`}
                onClick={() => setBrand(b)}
              >
                <span className="check-box">{brand === b && "✓"}</span>
                {b}
              </button>
            ))}
          </div>
          <div className="filter-group">
            <h3>TAMANHO DO QUADRO</h3>
            <div className="size-filter">
              {sizes.map((s) => (
                <button key={s} className={size === s ? "selected" : ""} onClick={() => setSize(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <h3>DISPONIBILIDADE</h3>
            {["Todas", "Pronta entrega", "Sob encomenda"].map((a) => (
              <button
                key={a}
                className={`filter-option ${availability === a ? "selected" : ""}`}
                onClick={() => setAvailability(a)}
              >
                <span className="check-box">{availability === a && "✓"}</span>
                {a}
              </button>
            ))}
          </div>
          <button className="clear-filter" onClick={clear}>
            LIMPAR FILTROS ↗
          </button>
        </aside>
        <div className="catalog-main">
          <div className="catalog-toolbar">
            <span>
              SHOWROOM / <strong>{filtered?.length ?? "—"} MODELOS</strong>
            </span>
            <button onClick={() => setMobileFilters(true)} className="mobile-filter-button">
              <SlidersHorizontal size={16} /> FILTRAR
            </button>
            <span className="toolbar-note">ENCONTRE SUA PRÓXIMA BIKE</span>
          </div>
          {catalog.isLoading ? (
            <Loader />
          ) : catalog.isError ? (
            <p>Não foi possível carregar o catálogo.</p>
          ) : filtered?.length ? (
            <div className="catalog-grid">
              {filtered.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>
                NENHUMA BIKE
                <br />
                NESSA SELEÇÃO.
              </h2>
              <p>
                Tente ajustar os filtros ou fale com nossa equipe para encontrar uma opção sob
                medida.
              </p>
              <button className="button button-yellow" onClick={clear}>
                VER TODAS AS BIKES
              </button>
            </div>
          )}
          <DemoNote />
        </div>
      </section>
    </>
  );
}
