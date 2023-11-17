import SectionSecond from "components/Section/SectionSecond";
import { useTranslation } from "next-i18next";
import styles from "./Trail.module.scss";
import Foto from "../Foto";
import { listTrail } from "./list";
import { BackLink } from "components/BackLink/BackLink";

export const GalleryTrail = () => {
  const { t } = useTranslation("gallery");

  return (
    <>
      <div className={styles.mainFoto}>
        <h1> {t("trail")}</h1>
      </div>

      <SectionSecond>
        <BackLink link={"/gallery"} back={t("gallery")} current={t("trail")} />

        <Foto image={listTrail} />
      </SectionSecond>
    </>
  );
};
