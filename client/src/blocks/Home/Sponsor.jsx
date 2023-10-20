import Link from "next/link";
import styles from "./Sponsor.module.scss";
import { useTranslation } from "next-i18next";

import Image from "next/image";
import { listItems } from "./SponsorList";

const SponsorAndHelp = () => {
  const { t } = useTranslation("home");
  return (
    <>
      <div className={styles.sponsor}>
        <p className={styles.spon}>{t("sponsors")}</p>
        <ul className={styles.list}>
          {listItems.map(({ id, img, alt, href, width, height }) => (
            <li key={id}>
              <Link href={href}>
                <Image src={img} width={width} height={height} alt={alt} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SponsorAndHelp;
