import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/cards/ProductCard';
import { products } from '@/lib/data';
import styles from './NewArrivals.module.css';

export default function NewArrivals() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const featured = products.filter((p) => p.isNew).concat(products.filter((p) => !p.isNew)).slice(0, 6);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <SectionHeading
            eyebrow="The Shop"
            title="New arrivals"
            linkLabel="Shop all"
            linkTo="/shop"
          />
          <div className={styles.arrows}>
            <button onClick={() => scroll('left')} aria-label="Scroll left">
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button onClick={() => scroll('right')} aria-label="Scroll right">
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.scrollerWrap}>
        <div className={styles.scroller} ref={scrollerRef}>
          <div className={styles.spacer} aria-hidden />
          {featured.map((p) => (
            <div key={p.id} className={styles.item}>
              <ProductCard product={p} />
            </div>
          ))}
          <div className={styles.spacer} aria-hidden />
        </div>
      </div>
    </section>
  );
}
