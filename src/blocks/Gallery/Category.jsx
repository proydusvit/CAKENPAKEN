import styles from "./Category.module.scss";
import { listCategory } from "./galleryList";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Loading from "pages/loading";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const Category = () => {
  const { t } = useTranslation("gallery");
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true); // Встановлюємо стан "loading" на true перед початком затримки
    setTimeout(() => {
      router.push(e.target.href);
      setLoading(false); // Встановлюємо стан "loading" на false після завершення затримки
    }, 3000); // Затримка в 4000 мс (4 секунди)
  };

  useEffect(() => {
    const handleComplete = () => {
      setLoading(false); // Встановлюємо стан "loading" на false, якщо перехід відбувся поза допомогою затримки
    };

    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, []);

  return (
    <>
      {loading && <Loading />}
      <section className={styles.section}>
        <h1 className={styles.title}> {t("gallery")}</h1>

        <div className={styles.section__link}>
          {listCategory.map((item) => {
            const imgCatg = item.img;
            return (
              <Link
                onClick={handleClick}
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
