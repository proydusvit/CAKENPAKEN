import Image from "next/image";
import Section from "components/Section/Section";
import styles from "./problem.module.scss";

export const Problem = ({ imge }) => {
  return (
    <Section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "50px 0",
        }}
      >
        <Image className={styles.img} src={imge} width={600} height={300} />
      </div>
    </Section>
  );
};
