import { useTranslation } from "next-i18next";
import styles from "./Trail.module.scss";
import SectionSecond from "../../../components/Section/SectionSecond.jsx";

import Image from "next/image";

import SliderComponent from "components/slider/SliderComponent";
import { BackLink } from "components/BackLink/BackLink";
import { listItems, listSlider } from "./fotoList";
import VideoPlayer from "components/Video/Videoplayer";

const Trail = () => {
  const { t } = useTranslation("projects");
  const youtubeVideoId = "rTUaPPWdUgM?si=lEHMBiT71USE5uuS";
  return (
    <div>
      <div className={styles.mainFoto}>
        <h1> {t("trail")}</h1>
      </div>

      <SectionSecond>
        <BackLink
          link={"/projects"}
          back={t("projects")}
          current={t("trail")}
        />

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
        <VideoPlayer videoId={youtubeVideoId} />
      </SectionSecond>
    </div>
  );
};

export default Trail;
