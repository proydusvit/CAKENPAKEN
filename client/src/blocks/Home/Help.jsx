import styles from "./Help.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import ComeBack from "./img/Comeback.png";
import Prutyla from "./img/Prutyka.png";

const Help = () => {
  const { t } = useTranslation("home");
  return (
    <div className={styles.donate}>
      <p>{t("donateU")}</p>
      <div>
        <Link href="https://savelife.in.ua/" className={styles.donate__fond}>
          <Image src={ComeBack} width={91} height={45} alt="Comback" />
        </Link>
        <Link href="https://prytulafoundation.org">
          <Image src={Prutyla} width={266} height={41} alt="Prutyla" />
        </Link>
      </div>
    </div>
  );
};

export default Help;
