import { useParams, Link } from 'react-router-dom';
import { products } from '@/lib/data';
import Button from '@/components/ui/Button';
import NotFound from '@/pages/NotFound';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <NotFound />;

  return (
    <section style={{ padding: '64px 0 0' }}>
      <div className="container">
        <Link
          to="/shop"
          style={{
            fontSize: 13,
            color: 'var(--color-brown-soft)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          ← Back to shop
        </Link>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 64,
            marginTop: 32,
            alignItems: 'start',
          }}
        >
          <div
            style={{
              aspectRatio: '4 / 5',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              background: 'var(--color-cream-warm)',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 16 }}>
            <span
              style={{
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-terracotta)',
                fontWeight: 600,
              }}
            >
              {product.category}
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(32px, 4vw, 48px)',
                lineHeight: 1.1,
                color: 'var(--color-brown-dark)',
              }}
            >
              {product.name}
            </h1>
            <p style={{ fontSize: 20, color: 'var(--color-brown)' }}>${product.price}</p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: 'var(--color-brown-soft)',
                maxWidth: 480,
              }}
            >
              {product.description}
            </p>

            <div style={{ marginTop: 16 }}>
              <Button size="lg">Add to cart — ${product.price}</Button>
            </div>

            <ul
              style={{
                marginTop: 24,
                paddingTop: 24,
                borderTop: '1px solid var(--color-line)',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                fontSize: 13,
                color: 'var(--color-brown-soft)',
                listStyle: 'none',
              }}
            >
              <li>— Free shipping on orders over $80</li>
              <li>— Crafted in small batches</li>
              <li>— 30-day returns</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
