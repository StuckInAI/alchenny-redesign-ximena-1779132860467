import { useMemo, useState } from 'react';
import ProductCard from '@/components/cards/ProductCard';
import { products } from '@/lib/data';

export default function Shop() {
  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return ['All', ...Array.from(set)];
  }, []);
  const [active, setActive] = useState<string>('All');

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <section style={{ padding: '80px 0 0' }}>
      <div className="container">
        <header style={{ marginBottom: 48 }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-terracotta)',
              fontWeight: 600,
            }}
          >
            The Shop
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(40px, 6vw, 72px)',
              color: 'var(--color-brown-dark)',
              lineHeight: 1.05,
              marginTop: 12,
              maxWidth: 720,
            }}
          >
            Objects for the considered kitchen.
          </h1>
        </header>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 48 }}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              style={{
                padding: '8px 18px',
                borderRadius: 999,
                border: '1px solid var(--color-line)',
                background: active === c ? 'var(--color-brown-dark)' : 'transparent',
                color: active === c ? 'var(--color-cream)' : 'var(--color-brown)',
                fontSize: 13,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 200ms var(--ease)',
              }}
            >
              {c}
            </button>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 40,
          }}
        >
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
