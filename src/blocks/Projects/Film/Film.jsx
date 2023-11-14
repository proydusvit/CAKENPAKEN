import { useTranslation } from "next-i18next";

import styles from "./Film.module.scss";

import SectionSecond from "components/Section/SectionSecond";
import { listItems } from "./fotoList";
import Image from "next/image";

import SliderComponent from "components/slider/SliderComponent";

import { useMediaQuery } from "@react-hook/media-query";

const Film = () => {
  const { t } = useTranslation("projects");

  return (
    <div>
      <div className={styles.mainFoto}>
        <h1> {t("film")}</h1>
      </div>
      <SectionSecond>
        <div className={styles.conception}>
          <h3 className={styles.conception__name}>{t("conception")}</h3>
          <p className={styles.conception__text}>{t("textF")}</p>
        </div>

        <SliderComponent list={listItems} />

        <ul className={styles.list}>
          {listItems.map(({ id, img, alt }) => (
            <li key={id}>
              <Image
                className={styles.img}
                src={img}
                alt={alt}
                width={390}
                height={380}
              />
            </li>
          ))}
        </ul>

        <h4 className={styles.title}>{t("title")}</h4>
        <div className={styles.video}>
          <iframe
            className={styles.frame}
            width="1065"
            height="550"
            src="https://www.youtube.com/embed/rTUaPPWdUgM?si=lEHMBiT71USE5uuS"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            frameBorder={0}
            allowFullScreen
          ></iframe>
        </div>
      </SectionSecond>
    </div>
  );
};

export default Film;
