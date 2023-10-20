import { initLightboxJS, SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import styles from "./Foto.module.scss";

const Foto = ({ data, info }) => {
  const router = useRouter();
  const { t } = useTranslation("gallery");

  useEffect(() => {
    initLightboxJS("Insert License key", "Insert plan type here");
  });

  const filteredData = info.filter(
    (item) => item.attributes.title_foto === true
  );
  console.log(filteredData);
  // const ImageTitle = filteredData.map((item) => ({
  //   src: `http://localhost:1337${item.attributes.photo.data.attributes.url}`,
  // }));

  // if (!imageWithId) {
  //   // Якщо об'єкт з ID: 2 не знайдений, можна відобразити повідомлення про помилку або щось інше.
  //   return <div>Image not found</div>;
  // }

  return (
    <section className={styles.section}>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
      <div
        className={styles.foto}
        style={{
          backgroundImage: `linear-gradient(to bottom, #00000033, #00000033), url(${imageUrl})`,
        }}
      >
        {info.map((item) => (
          <div key={item.id}>
            <h2 className={styles.name}>{item.attributes.name}</h2>
            <p className={styles.season}>{item.attributes.season}</p>
          </div>
        ))}
      </div>

      <SlideshowLightbox
        lightboxIdentifier="uniqueLightboxId"
        framework="next"
        images={data}
      >
        {data?.map((item, index) => (
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
