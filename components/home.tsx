import styles from './home.module.scss';

const Home = (): JSX.Element => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.articles}></div>
      </main>
    </>
  );
};

export default Home;
