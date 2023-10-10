import styles from "./Support.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const Support = () => {
  const { locale, locales, replace, pathname } = useRouter();

  const handleClick = (l) => () => {
    replace(pathname, undefined, { locale: l });
  };
  return (
    <div>
      <div className={styles.support}>
        <Link href="/donate" className={styles.support__btn}>
          Donate
        </Link>
        <Link href="/support" className={styles.support__text}>
          Support Ukraine
        </Link>

        <p>{locale}</p>

        {locales.map((l) => (
          <button key={l} onClick={handleClick(l)}>
            {l}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Support;
