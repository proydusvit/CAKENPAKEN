import Link from "next/link";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.box}>
        <Link href="/about" className={styles.link}>
          {" "}
          About Us
        </Link>
        <Link href="/projects" className={styles.link}>
          Film
        </Link>
        <Link
          href="https://www.instagram.com/cakenpaken/"
          className={styles.link}
        >
          YouTube
        </Link>
        <Link
          href="https://www.instagram.com/cakenpaken/"
          className={styles.link}
        >
          Instagram
        </Link>
      </div>
      <div>
        <p className={styles.caken}>CAKENPAKEN 2023</p>
      </div>
    </div>
  );
};

export default Footer;
