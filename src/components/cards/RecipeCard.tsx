import { Link } from 'react-router-dom';
import clsx from 'clsx';
import type { Recipe } from '@/types';
import styles from './RecipeCard.module.css';

type RecipeCardProps = {
  recipe: Recipe;
  size?: 'sm' | 'md' | 'lg';
};

export default function RecipeCard({ recipe, size = 'md' }: RecipeCardProps) {
  return (
    <Link to={`/recipes/${recipe.slug}`} className={clsx(styles.card, styles[size])}>
      <div className={styles.imageWrap}>
        <img src={recipe.image} alt={recipe.title} loading="lazy" />
      </div>
      <div className={styles.meta}>
        <span className={styles.category}>{recipe.category}</span>
        <h3 className={styles.title}>{recipe.title}</h3>
        {size === 'lg' && (
          <p className={styles.description}>{recipe.description}</p>
        )}
      </div>
    </Link>
  );
}
