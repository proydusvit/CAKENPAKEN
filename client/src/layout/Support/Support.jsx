import styles from "./Support.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";
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
    <div>
      <div className={styles.support}>
        <Link
          href="/donate"
          style={{ backgroundColor: backgroundColor, color: color }}
          className={styles.support__btn}
        >
          {t("donate")}
        </Link>
        <Link
          href="/support"
          style={{ color: secondColor, border: `1px solid ${border}` }}
          className={styles.support__text}
        >
          {t("support")}
        </Link>

        <button
          style={{ color: secondColor }}
          className={styles.btn}
          onClick={toggleLanguage}
        >
          {currentLanguage === "en" ? "EN" : "UA"}
        </button>
      </div>
    </div>
  );
};

export default Support;
