import { useTranslation } from "next-i18next";
import styles from "./Trail.module.scss";
import SectionSecond from "../../../components/Section/SectionSecond.jsx";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderSettings from "components/Slider/SliderSettings";

import { useMediaQuery } from "@react-hook/media-query";

import { listItems } from "./fotoList";

const Trail = () => {
  const { t } = useTranslation("projects");

  const isMobile = useMediaQuery("(max-width: 767px)");

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
        {isMobile ? (
          <Slider {...sliderSettings} className={styles.slider}>
            {listItems.map(({ img, id, alt }) => (
              <div key={id} className={styles.slide}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image src={img} alt={alt} width={346} height={200} />
                </div>
              </div>
            ))}
          </Slider>
        ) : (
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
        )}

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
