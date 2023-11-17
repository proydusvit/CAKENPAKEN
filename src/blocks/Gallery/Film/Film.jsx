import SectionSecond from "components/Section/SectionSecond";
import { useTranslation } from "next-i18next";
import styles from "./Film.module.scss";

import Foto from "../Foto";
import { listFilm } from "./list";
import { BackLink } from "components/BackLink/BackLink";

export const GalleryFilm = () => {
  const { t } = useTranslation("gallery");

  return (
    <>
      <div className={styles.mainFoto}>
        <h1> {t("film")}</h1>
      </div>

      <SectionSecond>
        <BackLink link={"/gallery"} back={t("gallery")} current={t("film")} />

        <Foto image={listFilm} />
      </SectionSecond>
    </>
  );
};
