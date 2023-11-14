import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import styles from "./Footer.module.scss";
import Logo from "./Logo_footer.png";
import Section from "../../components/Section/Section";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.footer}>
      <div className={styles.footer_box}>
        <div className={styles.footer_img}>
          <Image src={Logo} width={245} height={91} alt="caken_logo" />
        </div>
        <div className={styles.box}>
          <Link href="/about" className={styles.link}>
            {" "}
            {t("about")}
          </Link>
          <Link href="/projects" className={styles.link}>
            {t("projects")}
          </Link>
          <Link
            href="https://www.youtube.com/@CAKENPAKEN"
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
        <div className={styles.develop}>
          <Link href="https://linktr.ee/tsymbrivskaa">{t("design")}</Link>
          <Link href="https://linktr.ee/proidysvit7">{t("develop")}</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
