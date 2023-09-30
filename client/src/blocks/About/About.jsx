import styles from "./About.module.scss";
import Image from "next/image";
import Contact from "../../components/Contact/Contact";
import LearnMore from "../../components/Learn/LearnMore";
import foto from "./img/foto.jpg";
import foto2 from "./img/foto2.jpg";
import foto1 from "./img/foto1.jpg";
import foto3 from "./img/foto3.jpg";
const About = () => {
  return (
    <div>
      <div className={styles.mainFoto}>
        <h1>About us</h1>
      </div>
      <section className={styles.section}>
        <div className={styles.box}>
          <div>
            <h3>Team</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nunc rhoncus lectus nisl
              commodo morbi amet amet. Lacus est quis leo consectetur.
              Suspendisse id dictumst eu quis mattis risus morbi sed id. Et
              sociis quam laoreet penatibus facilisi accumsan id at nulla.
              Iaculis tristique at ut turpis nibh. Odio posuere id ultrices
              phasellus neque est id vestibulum et. Sed semper varius id gravida
              blandit sed auctor velit integer. Mattis ut dignissim tempor erat
              dui. Quis elit faucibus ultricies pretium mauris nunc non. Quis
              nulla sem tortor sed. Tellus adipiscing sem odio ac ornare ut.
              Maecenas vulputate vel sapien aliquet pellentesque morbi nibh
              venenatis pharetra. Volutpat urna volutpat nisl augue morbi
              natoque.
            </p>
          </div>
          <h3>Lorem ipsum dolor sit.</h3>
          <div>
            <p className={styles.box__text}>
              Lorem ipsum dolor sit amet consectetur. Nunc rhoncus lectus nisl
              commodo morbi amet amet. Lacus est quis leo consectetur.
              Suspendisse id dictumst eu quis mattis risus morbi sed id. Et
              sociis quam laoreet penatibus facilisi accumsan id at nulla.
              Iaculis tristique at ut turpis nibh. Odio posuere id ultrices
              phasellus neque est id vestibulum et. Sed semper varius id gravida
              blandit sed auctor velit integer. Mattis ut dignissim tempor erat
              dui. Quis elit faucibus ultricies pretium mauris nunc non. Quis
              nulla sem tortor sed. Tellus adipiscing sem odio ac ornare ut.
              Maecenas vulputate vel sapien aliquet pellentesque morbi nibh
              venenatis pharetra. Volutpat urna volutpat nisl augue morbi
              natoque.
            </p>
            <Image src={foto} alt="hiking" width={620} height={400} />
          </div>
        </div>
        <ul>
          <li>
            <Image
              className={styles.img}
              src={foto1}
              alt="foto1"
              width={400}
              height={400}
            />
          </li>
          <li>
            <Image
              className={styles.img}
              src={foto2}
              alt="foto2"
              width={400}
              height={400}
            />
          </li>
          <li>
            <Image
              className={styles.img}
              src={foto3}
              alt="foto3"
              width={400}
              height={400}
            />
          </li>
        </ul>
        <Contact />
      </section>
    </div>
  );
};

export default About;
