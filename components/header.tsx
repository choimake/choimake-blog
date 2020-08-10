import styles from './header.module.scss';

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
            <li className={styles.navItem}>Home</li>
            <li className={styles.navItem}>Profile</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
