import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import styles from "./Home.module.scss";
import SponsorAndHelp from "./SponsorAndHelp";

const Home = () => {
  const { t } = useTranslation("home");
  return (
    <section>
      <div className={styles.box}>
        <Link
          href="/about"
          className={`${styles.content} ${styles.content_img__about}`}
        >
          {t("about")}
        </Link>

        <Link
          href="/gallery"
          className={`${styles.content} ${styles.content_img__gallery}`}
        >
          {t("gallery")}
        </Link>
        <Link className={styles.projects} href="/projects">
          {t("projects")}
        </Link>

        <SponsorAndHelp />

        <Link
          href="/team"
          className={`${styles.content} ${styles.content_img__crew}`}
        >
          {t("crew")}
        </Link>

        <Link
          href="/shop"
          className={`${styles.content} ${styles.content_img}`}
        >
          {t("merch")}
        </Link>
      </div>
    </section>
  );
};

export default Home;
