import styles from "./BackLink.module.scss";
import Link from "next/link";

export const BackLink = ({ current, link, back }) => {
  return (
    <div className={styles.goBackBox}>
      <Link className={styles.goBack} href={link}>
        {back} /
      </Link>{" "}
      <span className={styles.goBackName}>{current}</span>{" "}
    </div>
  );
};
