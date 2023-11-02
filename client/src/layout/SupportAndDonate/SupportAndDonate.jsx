import styles from "./SupportAndDonate.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { useTranslation } from "next-i18next";

const Support = () => {
  const { locale, locales, replace, pathname, asPath } = useRouter();

  const { t } = useTranslation("common");
  const [currentLanguage, setCurrentLanguage] = useState(locale);

  const [backgroundColor, setBackgroundColor] = useState("black");
  const [color, setColor] = useState("white");
  const [secondColor, setSecondColor] = useState("black");
  const [border, setNorder] = useState("black");

  useEffect(() => {
    // Определіть список роутів, на яких потрібно встановити білий фон
    const whiteBackgroundRoutes = ["/shop", "/projects/film"];

    // Перевірте, чи поточний роут є одним із списку білих фонів
    if (whiteBackgroundRoutes.includes(asPath)) {
      setBackgroundColor("white");
      setColor("black");
      setSecondColor("white");
      setNorder("white");
    } else {
      setBackgroundColor("black");
      setColor("white"); // Встановіть чорний фон за замовчуванням
    }
  }, [asPath]);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "uk" : "en";
    setCurrentLanguage(newLanguage);
    replace(pathname, undefined, { locale: newLanguage });
  };

  return (
    <div className={styles.box}>
      <div className={styles.support}>
        <Link
          href="/support"
          style={{ color: secondColor, border: `1px solid ${border}` }}
          className={styles.support__ukraine}
        >
          {t("support")}
        </Link>
        <Link
          href="/donate"
          style={{ backgroundColor: backgroundColor, color: color }}
          className={styles.support__donate}
        >
          {t("donate")}
        </Link>

        <button
          style={{ color: secondColor }}
          className={styles.lang}
          onClick={toggleLanguage}
        >
          {currentLanguage === "en" ? "EN" : "UA"}
        </button>
      </div>
    </div>
  );
};

export default Support;
