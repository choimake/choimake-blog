import styles from './footer.module.scss';

type Props = {
  title: string;
};

const Footer = ({ title }: Props): JSX.Element => {
  return (
    <>
      <footer className={styles.footer}>
        <small className={styles.copyright}>copyright {title}, 2020 All right reserved.</small>
      </footer>
    </>
  );
};

export default Footer;
