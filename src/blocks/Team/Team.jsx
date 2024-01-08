// import axios from "axios";
// import { useEffect, useState } from "react";
import styles from './Team.module.scss';

import { useTranslation } from 'next-i18next';
// import { useRouter } from "next/router";
import { listTeam, listTeamTwo } from './listTeam';
import FofoBox from './FofoBox';
import Section from '../../components/Section/Section';

const Team = () => {
  // const [data, setData] = useState([]);
  // const { locale } = useRouter();
  const { t } = useTranslation('team');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://cakenpaken.onrender.com/api/teams?populate=*&locale=${locale}`
  //       );
  //       const data = response.data.data;
  //       console.log(data);
  //       setData(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [locale]);

  return (
    <Section className={styles.section}>
      <h1 className={styles.title}>{t('team')}</h1>
      <FofoBox list={listTeam} />
      <h2 className={styles.join}>{t('joined')}</h2>
      <FofoBox list={listTeamTwo} />
    </Section>
  );
};

export default Team;
