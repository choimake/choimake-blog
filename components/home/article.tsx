import classNames from 'classnames';
import styles from './article.module.scss';

type Props = {
  title: string;
  snippet: string;
};

const Article = ({ title, snippet }: Props): JSX.Element => {
  const articleClass = classNames(styles.article, styles.layoutArticle);
  return (
    <>
      <article className={articleClass}>
        <figure className={styles.figure}>
          <img width="320" height="180" src="images/key-320x180.jpg" alt="key-image" />
        </figure>
        <div className={styles.contents}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.snippet}>{snippet}</p>
        </div>
      </article>
    </>
  );
};

export default Article;
