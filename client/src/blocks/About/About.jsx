import styles from "./About.module.scss";
import Image from "next/image";
import Section from "../../components/Section/Section";
import { useTranslation } from "next-i18next";

import Slider from "react-slick"; // Імпортуємо бібліотеку слайдера
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useMediaQuery } from "@react-hook/media-query";
import { secondList, listItems } from "./imgList.js";

import foto from "./img/foto.jpg";

const About = () => {
  const { t } = useTranslation("about");

  const isMobile = useMediaQuery("(max-width: 767px)");

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className={styles.mainFoto}>
        <h1> {t("about")}</h1>
      </div>

      <Section className={styles.section}>
        <h2 className={styles.section__caken}> {t("caken")}</h2>
        {isMobile ? (
          <Slider {...sliderSettings} className={styles.slider}>
            {secondList.map(({ img, id, alt }) => (
              <div key={id} className={styles.slide}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image src={img} alt={alt} width={384} height={483} />
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className={styles.section__list}>
            {secondList.map(({ img, id, alt }) => (
              <div key={id}>
                <Image
                  className={styles.section__img}
                  src={img}
                  alt={alt}
                  width={413}
                  height={553}
                />
              </div>
            ))}
          </div>
        )}
        <div className={styles.team}>
          <h3 className={styles.team__name}> {t("team")}</h3>
          <p className={styles.team__text}>{t("weare")}</p>
        </div>

        <div className={styles.box}>
          <Image
            className={styles.box__foto}
            src={foto}
            alt="hiking"
            width={620}
            height={400}
          />
          <div className={styles.box__box}>
            <p className={styles.box__text}>{t("yes")}</p>
            <p className={styles.box__text}>{t("no")}</p>
          </div>
        </div>
        <div className={styles.minibox}>
          <h3 className={styles.minibox__text}>{t("style")}</h3>
        </div>
        {isMobile ? (
          <Slider {...sliderSettings} className={styles.slider}>
            {listItems.map(({ img, id, alt }) => (
              <div key={id} className={styles.slide}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image
                    className={styles.slidefoto}
                    src={img}
                    alt={alt}
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className={styles.list}>
            {listItems.map(({ img, id, alt }) => (
              <div key={id} className={styles.list__item}>
                <Image
                  className={styles.list__img}
                  src={img}
                  alt={alt}
                  width={413}
                  height={400}
                />
              </div>
            ))}
          </div>
        )}
        {/* <ul className={styles.list}>
          <li>
            <Image
              className={styles.img}
              src={foto1}
              alt="foto1"
              width={413}
              height={400}
            />
          </li>
          <li>
            <Image
              className={styles.img}
              src={foto2}
              alt="foto2"
              width={413}
              height={400}
            />
          </li>
          <li>
            <Image
              className={styles.img}
              src={foto3}
              alt="foto3"
              width={413}
              height={400}
            />
          </li>
        </ul> */}
      </Section>
    </div>
  );
};

export default About;
