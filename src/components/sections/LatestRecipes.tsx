import SectionHeading from '@/components/ui/SectionHeading';
import RecipeCard from '@/components/cards/RecipeCard';
import { recipes } from '@/lib/data';
import styles from './LatestRecipes.module.css';

export default function LatestRecipes() {
  const featured = recipes.find((r) => r.featured) ?? recipes[0];
  const rest = recipes.filter((r) => r.id !== featured.id).slice(0, 3);

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="From the kitchen"
          title="Latest recipes"
          linkLabel="All recipes"
          linkTo="/recipes"
        />

        <div className={styles.grid}>
          <div className={styles.featured}>
            <RecipeCard recipe={featured} size="lg" />
          </div>
          <div className={styles.stack}>
            {rest.map((r) => (
              <RecipeCard key={r.id} recipe={r} size="sm" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
