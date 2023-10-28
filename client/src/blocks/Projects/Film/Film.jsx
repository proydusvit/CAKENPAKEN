import { useTranslation } from "next-i18next";

import styles from "./Film.module.scss";

import SectionSecond from "components/Section/SectionSecond";
import { listItems } from "./fotoList";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderSettings from "components/Slider/SliderSettings";

import { useMediaQuery } from "@react-hook/media-query";

const Film = () => {
  const { t } = useTranslation("projects");

  const isMobile = useMediaQuery("(max-width: 767px)");

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

        {isMobile ? (
          <Slider {...sliderSettings} className={styles.slider}>
            {listItems.map(({ img, id, alt }) => (
              <div key={id} className={styles.slide}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image src={img} alt={alt} width={330} height={330} />
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <ul className={styles.list}>
            {listItems.map(({ id, img, alt }) => (
              <li key={id}>
                <Image
                  className={styles.img}
                  src={img}
                  alt={alt}
                  width={413}
                  height={400}
                />
              </li>
            ))}
          </ul>
        )}
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
