import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.scss";

import ComeBack from "./img/Comeback.png";
import Prutyla from "./img/Prutyka.png";
const Home = () => {
  return (
    <div>
      <div className={styles.support}>
        <a className={styles.support__btn}>Donate</a>
        <p className={styles.support__text}>Support Ukraine</p>
      </div>
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
        <Link href="/projects" className={styles.projects}>
          PROJECTS
        </Link>

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
    </div>
  );
};

export default Home;
