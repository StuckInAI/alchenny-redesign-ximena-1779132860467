import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 0',
      }}
    >
      <div className="container" style={{ textAlign: 'center', maxWidth: 560 }}>
        <span
          style={{
            fontSize: 12,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'var(--color-terracotta)',
            fontWeight: 600,
          }}
        >
          404
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(40px, 6vw, 72px)',
            lineHeight: 1.05,
            color: 'var(--color-brown-dark)',
            margin: '16px 0 20px',
          }}
        >
          This page is out of the oven.
        </h1>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: 'var(--color-brown-soft)',
            marginBottom: 32,
          }}
        >
          The page you were looking for has wandered off. Let's get you back to something warm.
        </p>
        <div style={{ display: 'inline-flex', gap: 12 }}>
          <Link to="/">
            <Button>Back home</Button>
          </Link>
          <Link to="/recipes">
            <Button variant="ghost">Browse recipes</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
