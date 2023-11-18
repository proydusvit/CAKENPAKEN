import { useTranslation } from "next-i18next";
import styles from "./Film.module.scss";

import SectionSecond from "components/Section/SectionSecond";
import { listItems } from "./fotoList";
import Image from "next/image";
import { BackLink } from "components/BackLink/BackLink";
import SliderComponent from "components/slider/SliderComponent";
import VideoPlayer from "components/Video/Videoplayer";

const Film = () => {
  const { t } = useTranslation("projects");
  const youtubeVideoId = "ElKO3_Ovxgw?si=4i7EY7ezUIERFOHK";
  return (
    <div>
      <div className={styles.mainFoto}>
        <h1> {t("film")}</h1>
      </div>
      <SectionSecond>
        <BackLink link={"/projects"} back={t("projects")} current={t("film")} />
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
        <VideoPlayer videoId={youtubeVideoId} />
      </SectionSecond>
    </div>
  );
};

export default Film;
