import Link from "next/link";
import styles from "./Contact.module.scss";
import { listItems } from "./List";

const Contact = () => {
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <h3>Do you want to become our sponsor?</h3>
        <Link href="https://www.instagram.com/cakenpaken/">Donate</Link>
      </div>
      <div>
        <ul>
          {listItems.map(({ id, link, svg, text }) => (
            <li className={styles.contact} key={id}>
              <Link href={link}>
                {svg} <p>{text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
