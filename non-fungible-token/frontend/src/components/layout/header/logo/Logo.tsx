import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <Link to="/">
      <h1 className={styles.logo}> Nifty Rewards </h1>
    </Link>
  );
}

export { Logo };
