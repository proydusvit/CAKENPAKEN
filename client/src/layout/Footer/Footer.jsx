import Link from "next/link";
import { useTranslation } from "next-i18next";
import styles from "./Footer.module.scss";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.footer}>
      <div className={styles.box}>
        <Link href="/about" className={styles.link}>
          {" "}
          {t("about")}
        </Link>
        <Link href="/projects" className={styles.link}>
          {t("projects")}
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
