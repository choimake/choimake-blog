import styles from './header.module.scss';
import Link from 'next/link';

type Props = {
  title: string;
  subTitle: string;
};

const Header = ({ title, subTitle }: Props): JSX.Element => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.titles}>
          <h1 className={styles.titlesTitle}>{title}</h1>
          <p className={styles.titlesSubTitle}>{subTitle}</p>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">
                <a className={styles.navItemLink}>Home</a>
              </Link>
            </li>
            <li className={styles.navItem}>Profile</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
