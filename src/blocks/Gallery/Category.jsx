import styles from "./Category.module.scss";
import { listCategory } from "./galleryList";
import Link from "next/link";
import { useTranslation } from "next-i18next";
const Category = () => {
  const { t } = useTranslation("gallery");

  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.title}> {t("gallery")}</h1>

        <div className={styles.section__link}>
          {listCategory.map((item) => {
            const imgCatg = item.img;
            return (
              <Link
                key={item.id}
                href={item.link}
                className={styles.links}
                style={{
                  backgroundImage: `linear-gradient(to bottom, #00000033, #00000033), url("${imgCatg}")`,
                }}
              >
                <h3 className={styles.name}>{t(item.name)}</h3>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Category;
