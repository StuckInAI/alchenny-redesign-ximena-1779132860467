import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import clsx from 'clsx';
import styles from './Header.module.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={clsx(styles.header, scrolled && styles.scrolled)}>
      <div className={clsx('container', styles.inner)}>
        <button
          className={styles.menuBtn}
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>

        <nav className={styles.navLeft} aria-label="Primary">
          <NavLink to="/recipes" className={({ isActive }) => clsx(styles.link, isActive && styles.active)}>
            Recipes
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => clsx(styles.link, isActive && styles.active)}>
            Shop
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => clsx(styles.link, isActive && styles.active)}>
            About
          </NavLink>
        </nav>

        <Link to="/" className={styles.logo} aria-label="Alchenny home">
          Alchenny
        </Link>

        <div className={styles.navRight}>
          <button className={styles.iconBtn} aria-label="Cart">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className={styles.cartCount}>0</span>
          </button>
        </div>
      </div>

      <div className={clsx(styles.mobileMenu, open && styles.mobileMenuOpen)} aria-hidden={!open}>
        <div className={styles.mobileTop}>
          <Link to="/" className={styles.logo}>Alchenny</Link>
          <button className={styles.menuBtn} aria-label="Close menu" onClick={() => setOpen(false)}>
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>
        <nav className={styles.mobileNav}>
          <Link to="/recipes">Recipes</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
