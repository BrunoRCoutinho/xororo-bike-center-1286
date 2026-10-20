import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  badge: string;
  image: string;
  availability: string;
  sku: string;
  tagline: string;
};

export function ProductCard({ product, large = false }: { product: Product; large?: boolean }) {
  return (
    <Link
      href={`/catalogo/${product.slug}`}
      className={`product-card ${large ? "product-card-large" : ""}`}
    >
      <div className="product-image">
        <img
          src={product.image}
          alt={`Imagem ilustrativa de bicicleta ${product.category}`}
          loading="lazy"
        />
        <span className="product-type">{product.badge}</span>
        <span className="product-expand">
          <ArrowUpRight size={20} />
        </span>
      </div>
      <div className="product-info">
        <div>
          <span className="eyebrow">
            {product.brand} / {product.sku}
          </span>
          <h3>{product.name}</h3>
          <p>{product.tagline}</p>
        </div>
        <span className="product-availability">
          <i />
          {product.availability}
        </span>
      </div>
    </Link>
  );
}
