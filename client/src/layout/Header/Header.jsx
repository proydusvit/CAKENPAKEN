import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import styles from "./Header.module.scss";
import Logo from "../../assets/images/Logo_header.png";
import SocialMedia from "./SocialMedia";
import ButtonHeader from "./ButtonHeader";

const Header = () => {
  const { pathname } = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const { t } = useTranslation("common");
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ButtonHeader handleClick={handleClick} isClicked={isClicked} />
        <div className={`${styles.content} ${isClicked ? styles.visible : ""}`}>
          <nav>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link
                  href="/projects"
                  className={`${styles.link}  ${
                    pathname === "/projects" ? styles.active : ""
                  }`}
                >
                  {t("projects")}
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className={`${styles.link}  ${
                    pathname === "/shop" ? styles.active : ""
                  }`}
                >
                  {t("shop")}
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className={`${styles.link}  ${
                    pathname === "/events" ? styles.active : ""
                  }`}
                >
                  {t("events")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`${styles.link}  ${
                    pathname === "/about" ? styles.active : ""
                  }`}
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className={`${styles.link}  ${
                    pathname === "/team" ? styles.active : ""
                  }`}
                >
                  {t("crew")}
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className={`${styles.link}  ${
                    pathname === "/gallety" ? styles.active : ""
                  }`}
                >
                  {t("gallery")}
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
