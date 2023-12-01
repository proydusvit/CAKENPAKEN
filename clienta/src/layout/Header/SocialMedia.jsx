import React from "react";
import Link from "next/link";
import Youtube from "../../assets/svg/youtube.svg";
import Inst from "../../assets/svg/inst.svg";
import Phone from "../../assets/svg/phone.svg";
import Gmail from "../../assets/svg/gmail.svg";
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
