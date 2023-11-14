import Link from "next/link";

import { useTranslation } from "next-i18next";

import styles from "./Home.module.scss";

import Sponsor from "./Sponsor/Sponsor";
import Help from "./Help/Help";

import Soon from "@/assets/imgHome/soon.svg";

const Home = () => {
  const { t } = useTranslation("home");
  return (
    <section>
      <div className={styles.box}>
        <Link
          href="/projects"
          className={`${styles.content} ${styles.content_img__gallery}`}
        >
          {t("projects")}
        </Link>
        <div className={`${styles.content} ${styles.content_img}`}>
          <div>
            <p> {t("merch")}</p>

            <p className={styles.soon}>{/* <Soon /> */}</p>
          </div>
        </div>

        <Link className={styles.projects} href="/gallery">
          {t("gallery")}
        </Link>
        <Help />
        <Link
          href="/team"
          className={`${styles.content} ${styles.content_img__crew}`}
        >
          {t("crew")}
        </Link>
        <Link
          href="/about"
          className={`${styles.content} ${styles.content_img__about}`}
        >
          {t("about")}
        </Link>

        <Sponsor />
      </div>
    </section>
  );
};

export default Home;
