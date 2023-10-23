import { useTranslation } from "next-i18next";
import styles from "./Trail.module.scss";
import Section from "../../../components/Section/Section";

import Image from "next/image";

import trail1 from "../img/trail1.jpg";
import trail2 from "../img/trail2.jpg";
import trail3 from "../img/trail3.jpg";

const Trail = () => {
  const { t } = useTranslation("projects");

  return (
    <div>
      <div className={styles.mainFoto}>
        <h1> {t("trail")}</h1>
      </div>
      <Section>
        <div className={styles.conception}>
          <h3 className={styles.conception__name}>{t("conception")}</h3>
          <p className={styles.conception__text}>{t("textT")}</p>
        </div>
        <ul className={styles.list}>
          <div>
            <li className={styles.img1}>
              <Image
                className={styles.img}
                src={trail2}
                alt="main-foto"
                width={738}
                height={490}
              />
            </li>
          </div>
          <div>
            <li className={styles.img2}>
              <Image
                className={styles.img}
                src={trail1}
                alt="main-foto"
                width={522}
                height={229}
              />
            </li>
            <li className={styles.img3}>
              <Image
                className={styles.img}
                src={trail3}
                alt="main-foto"
                width={522}
                height={243}
              />
            </li>
          </div>
        </ul>
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
      </Section>
    </div>
  );
};

export default Trail;
