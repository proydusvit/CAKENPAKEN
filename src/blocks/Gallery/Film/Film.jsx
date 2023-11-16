import SectionSecond from "components/Section/SectionSecond";
import { useTranslation } from "next-i18next";
import styles from "./Film.module.scss";

import Foto from "../Foto";
import { listFilm } from "./list";
import Link from "next/link";

export const GalleryFilm = () => {
  const { t } = useTranslation("gallery");

  return (
    <>
      <div className={styles.mainFoto}>
        <h1> {t("film")}</h1>
      </div>

      <SectionSecond>
        <div className={styles.goBackBox}>
          <Link className={styles.goBack} href={"/gallery"}>
            {t("gallery")} /
          </Link>
          <span className={styles.goBackName}>{t("film")}</span>{" "}
        </div>
        <Foto image={listFilm} />
      </SectionSecond>
    </>
  );
};
