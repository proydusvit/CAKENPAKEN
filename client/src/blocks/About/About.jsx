import styles from "./About.module.scss";
import Image from "next/image";

import { useTranslation } from "next-i18next";

import foto from "./img/foto.jpg";
import foto2 from "./img/foto2.jpg";
import foto1 from "./img/foto1.jpg";
import foto3 from "./img/foto3.jpg";

import main3 from "./img/main3.jpg";
import main1 from "./img/main1.jpg";
import main2 from "./img/main2.jpg";

const About = () => {
  const { t } = useTranslation("about");
  return (
    <div>
      <div className={styles.mainFoto}>
        <h1> {t("about")}</h1>
      </div>

      <section className={styles.section}>
        <h2 className={styles.section__caken}> {t("caken")}</h2>
        <ul className={styles.section__list}>
          <li>
            {" "}
            <Image
              className={styles.section__img}
              src={main3}
              alt="main-foto"
              width={413}
              height={553}
            />
          </li>
          <li>
            <Image
              className={styles.section__img}
              src={main2}
              alt="main-foto"
              width={413}
              height={553}
            />
          </li>
          <li>
            <Image
              className={styles.section__img}
              src={main1}
              alt="main-foto"
              width={413}
              height={553}
            />
          </li>
        </ul>
        <div className={styles.team}>
          <h3 className={styles.team__name}> {t("team")}</h3>
          <p className={styles.team__text}>{t("weare")}</p>
        </div>
        <div className={styles.box}>
          <Image src={foto} alt="hiking" width={620} height={400} />
          <div className={styles.box__box}>
            <p className={styles.box__text}>{t("yes")}</p>
            <p className={styles.box__text}>{t("no")}</p>
          </div>
        </div>
        <div className={styles.minibox}>
          <div>
            <h3 className={styles.minibox__text}>{t("style")}</h3>
          </div>
        </div>
        <ul className={styles.list}>
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
        </ul>
      </section>
    </div>
  );
};

export default About;
