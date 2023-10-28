import Link from "next/link";
import Image from "next/image";

import styles from "./Sponsor.module.scss";

import { useTranslation } from "next-i18next";
import { useMediaQuery } from "@react-hook/media-query";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { listItems } from "./SponsorList";

const SponsorAndHelp = () => {
  const { t } = useTranslation("home");
  const isMobile = useMediaQuery("(max-width: 767px)");

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Змінюємо конфігурацію для екранів до 767px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isMobile) {
    return (
      <div className={styles.sponsor}>
        <p className={styles.spon}>{t("sponsors")}</p>
        <Slider {...sliderSettings} className={styles.slider}>
          {listItems.map(({ id, img, alt, href, width, height }) => (
            <div key={id} className={styles.slide}>
              <Link
                href={href}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Image
                  className={styles.img}
                  src={img}
                  width={width}
                  height={height}
                  alt={alt}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  return (
    <>
      <div className={styles.sponsor}>
        <p className={styles.spon}>{t("sponsors")}</p>

        <ul className={styles.list}>
          {listItems.map(({ id, img, alt, href, width, height }) => (
            <li key={id}>
              <Link href={href}>
                <Image
                  className={styles.img}
                  src={img}
                  width={width}
                  height={height}
                  alt={alt}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SponsorAndHelp;
