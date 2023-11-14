import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Team.module.scss";
import { CldImage } from "next-cloudinary";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import Section from "../../components/Section/Section";
import Linktre from "../../assets/imgTeam/linkSvg.jsx";

const Team = () => {
  const [data, setData] = useState([]);
  const { locale } = useRouter();
  const { t } = useTranslation("team");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://cakenpaken.onrender.com/api/teams?populate=*&locale=${locale}`
        );
        const data = response.data.data;
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [locale]);

  return (
    <Section className={styles.section}>
      <h1 className={styles.title}>{t("team")}</h1>
      <div className={styles.box}>
        <ul className={styles.list}>
          {data?.map((item) => (
            <li key={item.id} className={styles.teamMember}>
              <CldImage
                src={`${item.attributes.foto.data[0].attributes.url}`}
                alt={item.attributes.name}
                className={styles.img}
                width={400}
                height={400}
              />
              <p className={styles.memberName}>{item.attributes.name}</p>
              <a className={styles.memberLink} href={item.attributes.social}>
                <Linktre />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Team;
