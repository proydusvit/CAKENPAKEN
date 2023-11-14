import { useTranslation } from "next-i18next";
import styles from "./Trail.module.scss";
import SectionSecond from "../../../components/Section/SectionSecond.jsx";

import Image from "next/image";

import SliderComponent from "components/slider/SliderComponent";

import { listItems, listSlider } from "./fotoList";

const Trail = () => {
  const { t } = useTranslation("projects");

  return (
    <div>
      <div className={styles.mainFoto}>
        <h1> {t("trail")}</h1>
      </div>

      <SectionSecond>
        <div className={styles.conception}>
          <h3 className={styles.conception__name}>{t("conception")}</h3>
          <p className={styles.conception__text}>{t("textT")}</p>
        </div>

        <SliderComponent list={listSlider} />

        <div className={styles.parent}>
          <ul className={styles.list}>
            {listItems.map(({ id, img, alt, width, height }, index) => (
              <li
                key={id}
                className={
                  index === 0
                    ? styles.div1
                    : index === 1
                    ? styles.div2
                    : styles.div3
                }
              >
                <Image
                  className={styles.img}
                  src={img}
                  alt={alt}
                  width={width}
                  height={height}
                />
              </li>
            ))}
          </ul>
        </div>

        <h4 className={styles.title}>{t("titleT")}</h4>
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

export default Trail;
