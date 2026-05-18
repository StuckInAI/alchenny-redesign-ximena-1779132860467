import { useParams, Link } from 'react-router-dom';
import { Clock, Users, ChefHat, Timer, ArrowLeft } from 'lucide-react';
import { getRecipeBySlug, recipes } from '@/lib/data';
import RecipeCard from '@/components/cards/RecipeCard';
import NotFound from '@/pages/NotFound';
import styles from './RecipeDetail.module.css';

export default function RecipeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const recipe = slug ? getRecipeBySlug(slug) : undefined;

  if (!recipe) return <NotFound />;

  const related = recipes.filter((r) => r.id !== recipe.id).slice(0, 3);

  return (
    <article className={styles.page}>
      <div className="container">
        <Link to="/recipes" className={styles.back}>
          <ArrowLeft size={16} strokeWidth={1.5} />
          All recipes
        </Link>
      </div>

      <header className={`container ${styles.header}`}>
        <span className={styles.category}>{recipe.category}</span>
        <h1 className={styles.title}><em>{recipe.title}</em></h1>
        <p className={styles.description}>{recipe.description}</p>
      </header>

      <div className={styles.imageWrap}>
        <img src={recipe.image} alt={recipe.title} className={styles.image} />
      </div>

      <div className={`container ${styles.body}`}>
        <aside className={styles.meta}>
          <div className={styles.metaItem}>
            <Clock size={18} strokeWidth={1.5} />
            <div>
              <span className={styles.metaLabel}>Prep</span>
              <span className={styles.metaValue}>{recipe.prepTime}</span>
            </div>
          </div>
          <div className={styles.metaItem}>
            <Timer size={18} strokeWidth={1.5} />
            <div>
              <span className={styles.metaLabel}>Cook</span>
              <span className={styles.metaValue}>{recipe.cookTime}</span>
            </div>
          </div>
          <div className={styles.metaItem}>
            <Users size={18} strokeWidth={1.5} />
            <div>
              <span className={styles.metaLabel}>Serves</span>
              <span className={styles.metaValue}>{recipe.servings}</span>
            </div>
          </div>
          <div className={styles.metaItem}>
            <ChefHat size={18} strokeWidth={1.5} />
            <div>
              <span className={styles.metaLabel}>Level</span>
              <span className={styles.metaValue}>{recipe.difficulty}</span>
            </div>
          </div>
        </aside>

        <div className={styles.content}>
          <section className={styles.ingredients}>
            <h2>Ingredients</h2>
            <ul>
              {recipe.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </section>

          <section className={styles.method}>
            <h2>Method</h2>
            <ol>
              {recipe.steps.map((step, i) => (
                <li key={i}>
                  <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>

      <section className={`container ${styles.related}`}>
        <h2 className={styles.relatedTitle}><em>More to bake</em></h2>
        <div className={styles.relatedGrid}>
          {related.map((r) => (
            <RecipeCard key={r.id} recipe={r} size="sm" />
          ))}
        </div>
      </section>
    </article>
  );
}
