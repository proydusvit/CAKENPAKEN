import { useRouter } from "next/router";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { useTranslation } from "next-i18next";

import styles from "./Header.module.scss";
import Logo from "../../assets/images/Logo_header.png";

import SocialMedia from "./SocialMedia/SocialMedia";
import ButtonHeader from "./BtnHeader/ButtonHeader";

import { listItems } from "./linkList";

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
          <div className={styles.donate_link}>
            <Link href="/donate" className={styles.donate}>
              {t("donate")}
            </Link>

            <Link href="/support" className={styles.support}>
              {t("support")}
            </Link>
          </div>

          <nav>
            <ul className={styles.list}>
              {listItems.map(({ id, href, text }) => (
                <li className={styles.item} key={id}>
                  {id === 3 || id === 2 ? (
                    <span className={styles.linkDisabled}>{t(text)}</span>
                  ) : (
                    <Link
                      href={href}
                      className={`${styles.link} ${
                        pathname === href ? styles.active : ""
                      }`}
                    >
                      {t(text)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <SocialMedia />
        </div>
      </div>
      <div>
        <Link href="/">
          <Image
            className={styles.img}
            src={Logo}
            alt="Logo"
            width={175}
            height={65}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
