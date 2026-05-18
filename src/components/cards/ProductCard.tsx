import { Link } from 'react-router-dom';
import type { Product } from '@/types';
import styles from './ProductCard.module.css';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/shop/${product.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        {product.isNew && <span className={styles.badge}>New</span>}
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className={styles.meta}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.name}>{product.name}</h3>
        <span className={styles.price}>${product.price}</span>
      </div>
    </Link>
  );
}
