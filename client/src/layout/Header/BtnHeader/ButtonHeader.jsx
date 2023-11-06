import styles from "./ButtonHeader.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";

const ButtonHeader = ({ handleClick, isClicked }) => {
  const { asPath } = useRouter();
  const isMobile = useMediaQuery("(max-width: 767px)");

  const isWhiteBackgroundRoute = [
    "/projects/film",
    "/projects/trail",
    "/about",
    "/",
  ].includes(asPath);

  const backgroundColor =
    isWhiteBackgroundRoute && isMobile ? "white" : "black";

  return (
    <div className={styles.nav}>
      <button
        className={`${styles.button} ${isClicked ? styles.clicked : ""}`}
        onClick={handleClick}
      >
        <span
          style={{ backgroundColor: backgroundColor }}
          className={styles.line}
        ></span>
        <span
          style={{ backgroundColor: backgroundColor }}
          className={styles.line}
        ></span>
        <span
          style={{ backgroundColor: backgroundColor }}
          className={styles.line}
        ></span>
      </button>
    </div>
  );
};

export default ButtonHeader;
