import Hero from '@/components/sections/Hero';
import NewArrivals from '@/components/sections/NewArrivals';
import LatestRecipes from '@/components/sections/LatestRecipes';
import Subscribe from '@/components/sections/Subscribe';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <NewArrivals />
      <LatestRecipes />
      <Subscribe />
    </div>
  );
}
