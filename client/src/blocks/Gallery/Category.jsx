import { useEffect, useState } from "react";
import api from "./services";
import styles from "./Category.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Category = () => {
  const [data, setData] = useState([]);
  const { locale } = useRouter();
  const { t } = useTranslation("gallery");

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const fetchedData = await api.fetchCategory({ locale });
        console.log(fetchedData);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, [locale]);

  return (
    <section className={styles.section}>
      <div className={styles.section__title}>
        <h1 className={styles.title}> {t("gallery")}</h1>
      </div>
      <div className={styles.section__link}>
        {data.map((item) => {
          const firstImageData = item.attributes.foto.data[0];
          const imageUrl = `http://localhost:1337${firstImageData.attributes.url}`;

          return (
            <a
              key={item.id}
              href={`/gallery?category=${item.attributes.category}`}
              className={styles.links}
              style={{
                backgroundImage: `linear-gradient(to bottom, #00000033, #00000033), url(${imageUrl})`,
              }}
            >
              <h3 className={styles.name}>{item.attributes.name}</h3>

              <p className={styles.date}>{item.attributes.data}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
