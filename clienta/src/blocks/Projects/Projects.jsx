import Link from "next/link";
import { useTranslation } from "next-i18next";
import styles from "./Projects.module.scss";

const Projects = () => {
  const { t } = useTranslation("projects");
  return (
    <section className={styles.section}>
      <h1 className={styles.name}>{t("projects")}</h1>
      <Link className={styles.category} href="/projects/film">
        {t("film")}
      </Link>
      <Link
        className={`${styles.category} ${styles.category_two}`}
        href="/projects/trail"
      >
        {t("trail")}
      </Link>
    </section>
  );
};

export default Projects;
