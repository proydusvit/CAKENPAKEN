import Link from "next/link";
import Image from "next/image";

import styles from "./Sponsor.module.scss";

import { useTranslation } from "next-i18next";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderSettings from "components/Slider/SliderSettings.js";

import { listItems } from "./SponsorList";

const SponsorAndHelp = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <div className={styles.sponsor}>
        <h3 className={styles.spon}>{t("sponsors")}</h3>
        <div className={styles.slidernone}>
          <Slider {...sliderSettings} className={styles.slider}>
            {listItems.map(({ id, img, alt, href, width, height }) => (
              <div key={id}>
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
