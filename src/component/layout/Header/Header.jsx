import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./Header.module.scss";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../images/Logo_header.jpg";
import SocialMedia from "./SocialMedia";
const Header = () => {
  const { pathname } = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <button
            className={`${styles.button} ${isClicked ? styles.clicked : ""}`}
            onClick={handleClick}
          >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </button>
        </div>
        <div className={`${styles.content} ${isClicked ? styles.visible : ""}`}>
          <nav>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link
                  href="/projects"
                  className={`${styles.link}  ${
                    pathname === "/" ? styles.active : ""
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className={`${styles.link}  ${
                    pathname === "/" ? styles.active : ""
                  }`}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className={`${styles.link}  ${
                    pathname === "/" ? styles.active : ""
                  }`}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`${styles.link}  ${
                    pathname === "/" ? styles.active : ""
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className={`${styles.link}  ${
                    pathname === "/" ? styles.active : ""
                  }`}
                >
                  Crew
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className={`${styles.link}  ${
                    pathname === "/" ? styles.active : ""
                  }`}
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </nav>
          <SocialMedia />
        </div>
      </div>
      <div>
        <Link href="/">
          <Image src={Logo} alt="Logo" width={175} height={65} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
