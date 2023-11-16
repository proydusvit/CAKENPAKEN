import Link from "next/link";

import Youtube from "@/assets/imgHome/svg/youtube.jsx";
import Inst from "@/assets/imgHome/svg/inst.jsx";
import Phone from "@/assets/imgHome/svg/phone.jsx";
import Gmail from "@/assets/imgHome/svg/mail.jsx";

import styles from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <div>
      <ul className={styles.list}>
        <li>
          <Link href="mailto:pakencaken@gmail.com">
            <Gmail />
          </Link>
        </li>
        {/* <li>
          <Link href="https://www.instagram.com/cakenpaken/">
            <Phone />
          </Link>
        </li> */}
        <li>
          <Link href="https://www.instagram.com/cakenpaken/">
            <Inst />
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/@CAKENPAKEN">
            <Youtube />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
