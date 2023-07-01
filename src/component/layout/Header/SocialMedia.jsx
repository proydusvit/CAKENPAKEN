import React from "react";
import Link from "next/link";
import Youtube from "../../images/svg/youtube.svg";
import Inst from "../../images/svg/inst.svg";
import Phone from "../../images/svg/phone.svg";
import Gmail from "../../images/svg/gmail.svg";
import styles from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <div>
      <ul className={styles.list}>
        <li>
          <Link href="https://www.instagram.com/cakenpaken/">
            <Inst />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/cakenpaken/">
            <Phone />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/cakenpaken/">
            <Gmail />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/cakenpaken/">
            <Youtube />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
