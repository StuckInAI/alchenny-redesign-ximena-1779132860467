import { useState, useMemo } from 'react';
import clsx from 'clsx';
import RecipeCard from '@/components/cards/RecipeCard';
import { recipes } from '@/lib/data';
import styles from './Recipes.module.css';

export default function Recipes() {
  const [active, setActive] = useState<string>('All');

  const categories = useMemo(() => {
    const set = new Set(recipes.map((r) => r.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filtered = active === 'All' ? recipes : recipes.filter((r) => r.category === active);

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>The Journal</span>
          <h1 className={styles.title}><em>Recipes</em></h1>
          <p className={styles.lede}>
            A growing library of tested, photographed, and quietly obsessed-over recipes from our kitchen to yours.
          </p>
        </header>

        <div className={styles.filters}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={clsx(styles.chip, active === c && styles.chipActive)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((r) => (
            <RecipeCard key={r.id} recipe={r} size="md" />
          ))}
        </div>
      </div>
    </div>
  );
}
