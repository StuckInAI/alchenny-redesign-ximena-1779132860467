import { useState } from 'react';
import { Check } from 'lucide-react';
import styles from './Subscribe.module.css';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.eyebrow}>The Letter</span>
          <h2 className={styles.title}>
            <em>Stay in the kitchen with us.</em>
          </h2>
          <p className={styles.lede}>
            Get the latest recipes and exclusive drops delivered to your inbox. No noise — just the good stuff, monthly.
          </p>

          {submitted ? (
            <div className={styles.thanks}>
              <Check size={18} strokeWidth={2} />
              <span>You're in. Watch your inbox for our next letter.</span>
            </div>
          ) : (
            <form className={styles.form} onSubmit={onSubmit}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <button type="submit">Subscribe</button>
            </form>
          )}

          <p className={styles.fineprint}>
            By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
