import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrap}>
        <img
          src="https://images.unsplash.com/photo-1568376794508-ae52c6ab3929?w=2400&q=85&auto=format&fit=crop"
          alt="Freshly baked pastries on a linen-lined counter"
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <span className={styles.eyebrow}>Est. with love</span>
        <h1 className={styles.title}>
          Bake<br /><em>beautifully.</em>
        </h1>
        <p className={styles.lede}>
          Heirloom recipes and considered objects for the home baker.
          Made slowly, served warmly.
        </p>
        <div className={styles.actions}>
          <Button to="/shop" size="lg">Shop the collection</Button>
          <Button to="/recipes" size="lg" variant="ghost">Browse recipes</Button>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <span className={styles.line} />
      </div>
    </section>
  );
}
