import styles from "./Help.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import Logo from "./img/help.png";

const Help = () => {
  const { t } = useTranslation("home");
  return (
    <div className={styles.donate}>
      <p>{t("donateU")}</p>
      <div>
        <Link href="https://savelife.in.ua/" className={styles.donate__fond}>
          <Image
            className={styles.img}
            src={Logo}
            width={70}
            height={70}
            alt="help Ukraine"
          />
        </Link>
      </div>
    </div>
  );
};

export default Help;
