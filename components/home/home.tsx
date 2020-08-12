import styles from './home.module.scss';
import Article from './article';

const Home = (): JSX.Element => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.articles}>
          <Article title="title" snippet="snippet"></Article>
        </div>
      </main>
    </>
  );
};

export default Home;
