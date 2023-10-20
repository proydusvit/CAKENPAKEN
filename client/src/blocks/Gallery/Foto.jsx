import { initLightboxJS, SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import api from "./services";
import styles from "./Foto.module.scss";

const Foto = ({ image }) => {
  const router = useRouter();
  const { t } = useTranslation("gallery");
  const [data, setData] = useState([]);
  const { locale } = useRouter();
  const { category } = router.query;

  useEffect(() => {
    initLightboxJS("Insert License key", "Insert plan type here");
  });

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const fetchedData = await api.fetchTitleCategory({ locale });

        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, [locale]);

  const filteredData = data.filter(
    (item) => item.attributes.category === category
  );

  const images = filteredData.map((item) => ({
    id: item.id,
    name: item.attributes.name,
    season: item.attributes.season,
    src: `http://localhost:1337${item.attributes.foto.data.attributes.url}`,
  }));

  return (
    <section className={styles.section}>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
      {images.map((item) => (
        <div
          key={item.id}
          className={styles.foto}
          style={{
            backgroundImage: `linear-gradient(to bottom, #00000033, #00000033), url(${item.src})`,
          }}
        >
          <h2 className={styles.name}>{item.name}</h2>
          <p className={styles.season}>{item.season}</p>
        </div>
      ))}
      <SlideshowLightbox
        lightboxIdentifier="uniqueLightboxId"
        framework="next"
        images={image}
      >
        {image?.map((item, index) => (
          <img
            key={index}
            alt={`Image ${index}`}
            className="w-full rounded"
            height={500}
            width={500}
            data-lightboxjs="uniqueLightboxId"
            quality={80}
            src={item.src}
          />
        ))}
      </SlideshowLightbox>
    </section>
  );
};

export default Foto;
