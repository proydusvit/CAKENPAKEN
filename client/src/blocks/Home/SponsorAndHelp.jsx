import Link from "next/link";
import styles from "./SponsorAndHelp.module.scss";
import { useTranslation } from "next-i18next";
import ComeBack from "./img/Comeback.png";
import Prutyla from "./img/Prutyka.png";

import Idlo from "./img/sponsor/IDLO.png";
import Gorgany from "./img/sponsor/Gorgany.png";
import Objerky from "./img/sponsor/Objerky.png";
import Snow from "./img/sponsor/logo_white.png";
import Image from "next/image";

const SponsorAndHelp = () => {
  const { t } = useTranslation("home");
  return (
    <>
      <div className={styles.sponsor}>
        <p className={styles.spon}>{t("sponsors")}</p>
        <ul className={styles.list}>
          <li>
            <Link href="https://iidlo.com/">
              <Image src={Idlo} width={115} height={36} alt="Iidlo" />
            </Link>
          </li>
          <li>
            <Link href="https://www.gorgany.com/">
              <Image src={Gorgany} width={115} height={36} alt="Gorgany" />
            </Link>
          </li>
          <li>
            <Link href="https://objerky.com/en">
              <Image src={Objerky} width={115} height={36} alt="Objerky" />
            </Link>
          </li>
          <li>
            <Link href="https://www.snowstuff.com.ua/">
              <Image src={Snow} width={115} height={36} alt="SnowStuff" />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.donate}>
        <p>{t("donateU")}</p>
        <div>
          <Link href="https://savelife.in.ua/" className={styles.donate__fond}>
            <Image src={ComeBack} width={91} height={45} alt="Comback" />
          </Link>
          <Link href="https://prytulafoundation.org">
            <Image src={Prutyla} width={45} height={45} alt="Prutyla" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SponsorAndHelp;
