import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './SectionHeading.module.css';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  linkLabel?: string;
  linkTo?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  eyebrow,
  title,
  linkLabel,
  linkTo,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`${styles.wrap} ${align === 'center' ? styles.center : ''}`}>
      <div>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h2 className={styles.title}>{title}</h2>
      </div>
      {linkLabel && linkTo && (
        <Link to={linkTo} className={styles.link}>
          {linkLabel}
          <ArrowRight size={16} strokeWidth={1.5} />
        </Link>
      )}
    </div>
  );
}
