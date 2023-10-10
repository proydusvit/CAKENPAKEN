import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.scss";

import ComeBack from "./img/Comeback.png";
import Prutyla from "./img/Prutyka.png";

import Idlo from "./img/sponsor/IDLO.png";
import Gorgany from "./img/sponsor/Gorgany.png";
import Objerky from "./img/sponsor/Objerky.png";
import Snow from "./img/sponsor/logo_white.png";

const Home = () => {
  return (
    <section>
      <div className={styles.box}>
        <Link
          href="/shop"
          className={`${styles.content} ${styles.content_img}`}
        >
          MERCH
        </Link>

        <Link
          href="/gallery"
          className={`${styles.content} ${styles.content_img__gallery}`}
        >
          GALLERY
        </Link>
        <Link className={styles.projects} href="/projects">
          PROJECTS
        </Link>
        <div className={styles.sponsor}>
          <p className={styles.spon}>Our sponsor:</p>
          <ul className={styles.list}>
            <li>
              <Link href="https://iidlo.com/">
                <Image src={Idlo} width={115} height={36} />
              </Link>
            </li>
            <li>
              <Link href="https://www.gorgany.com/">
                <Image src={Gorgany} width={115} height={36} />
              </Link>
            </li>
            <li>
              <Link href="https://objerky.com/en">
                <Image src={Objerky} width={115} height={36} />
              </Link>
            </li>
            <li>
              <Link href="https://www.snowstuff.com.ua/">
                <Image src={Snow} width={115} height={36} />
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.donate}>
          <p>
            Donate to the Armed Forces and support Ukrainians during the war
            here
          </p>
          <div>
            <Link
              href="https://savelife.in.ua/"
              className={styles.donate__fond}
            >
              <Image src={ComeBack} width={91} height={45} alt="Comback" />
            </Link>
            <Link href="https://prytulafoundation.org">
              <Image src={Prutyla} width={45} height={45} alt="Prutyla" />
            </Link>
          </div>
        </div>
        <Link
          href="/team"
          className={`${styles.content} ${styles.content_img__crew}`}
        >
          Crew
        </Link>

        <Link
          href="/about"
          className={`${styles.content} ${styles.content_img__about}`}
        >
          About us
        </Link>
      </div>
    </section>
  );
};

export default Home;
