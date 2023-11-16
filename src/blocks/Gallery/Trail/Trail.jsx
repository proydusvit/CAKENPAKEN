import SectionSecond from "components/Section/SectionSecond";
import { useTranslation } from "next-i18next";
import styles from "./Trail.module.scss";
import Link from "next/link";
import Foto from "../Foto";
import { listTrail } from "./list";
export const GalleryTrail = () => {
  const { t } = useTranslation("gallery");

  return (
    <>
      <div className={styles.mainFoto}>
        <h1> {t("trail")}</h1>
      </div>

      <SectionSecond>
        <div className={styles.goBackBox}>
          {" "}
          <Link className={styles.goBack} href={"/gallery"}>
            {t("gallery")} /
          </Link>{" "}
          <span className={styles.goBackName}>{t("trail")}</span>{" "}
        </div>
        <Foto image={listTrail} />
      </SectionSecond>
    </>
  );
};
