import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Team.module.scss";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Team = () => {
  const [data, setData] = useState([]);
  const { locale } = useRouter();
  const { t } = useTranslation("team");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/teams?populate=*&locale=${locale}`
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
    <section className={styles.App}>
      <h1>Team</h1>
      <h2>{t("hi")}</h2>
      <div>
        <ul className={styles.list}>
          {data?.map((item) => (
            <li key={item.id}>
              <p>{item.attributes.name}</p>
              <img
                src={`http://localhost:1337${item.attributes.foto.data[0].attributes.url}`}
                alt={item.attributes.name}
                width={500}
                height={500}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
