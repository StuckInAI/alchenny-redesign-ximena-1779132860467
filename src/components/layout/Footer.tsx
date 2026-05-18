import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>Alchenny</Link>
          <p className={styles.tagline}>
            Recipes &amp; objects for those who bake with intention.
          </p>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h4>Shop</h4>
            <Link to="/shop">All Products</Link>
            <Link to="/shop">Aprons</Link>
            <Link to="/shop">Tools</Link>
            <Link to="/shop">Linens</Link>
          </div>
          <div className={styles.col}>
            <h4>Explore</h4>
            <Link to="/recipes">Recipes</Link>
            <Link to="/about">Our Story</Link>
            <Link to="/about">Journal</Link>
            <Link to="/about">Contact</Link>
          </div>
          <div className={styles.col}>
            <h4>Help</h4>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">FAQ</a>
            <a href="#">Wholesale</a>
          </div>
        </div>

        <div className={styles.social}>
          <a href="#" aria-label="Instagram"><Instagram size={18} strokeWidth={1.5} /></a>
          <a href="#" aria-label="YouTube"><Youtube size={18} strokeWidth={1.5} /></a>
          <a href="#" aria-label="Email"><Mail size={18} strokeWidth={1.5} /></a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} Alchenny. Made with butter and patience.</span>
        <div className={styles.policies}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
