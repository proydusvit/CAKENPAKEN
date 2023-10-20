import { useTranslation } from "next-i18next";
import styles from "./Film.module.scss";
import Section from "../../../components/Section/Section";

import Image from "next/image";

import im1 from "../img/Imag.jpg";
import im2 from "../img/Imag1.jpg";
import im3 from "../img/Imag2.jpg";

const Film = () => {
  const { t } = useTranslation("projects");

  return (
    <div>
      <div className={styles.mainFoto}>
        <h1> {t("film")}</h1>
      </div>
      <Section>
        <div className={styles.conception}>
          <h3 className={styles.conception__name}>{t("conception")}</h3>
          <p className={styles.conception__text}>{t("textF")}</p>
        </div>
        <ul className={styles.list}>
          <li>
            <Image
              className={styles.section__img}
              src={im1}
              alt="main-foto"
              width={413}
              height={400}
            />
          </li>
          <li>
            <Image
              className={styles.section__img}
              src={im2}
              alt="main-foto"
              width={413}
              height={400}
            />
          </li>
          <li>
            <Image
              className={styles.section__img}
              src={im3}
              alt="main-foto"
              width={413}
              height={400}
            />
          </li>
        </ul>
        <h4 className={styles.title}>{t("title")}</h4>
        <div className={styles.video}>
          <iframe
            width="1065"
            height="550"
            src="https://www.youtube.com/embed/rTUaPPWdUgM?si=lEHMBiT71USE5uuS"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            frameBorder={0}
            allowFullScreen
          ></iframe>
        </div>
      </Section>
    </div>
  );
};

export default Film;
