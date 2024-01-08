import styles from './Team.module.scss';
import Image from 'next/image';
import Linktre from '../../assets/imgTeam/linkSvg.jsx';

import { useTranslation } from 'next-i18next';

const FofoBox = ({ list }) => {
  const { t } = useTranslation('team');
  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {list.map(item => (
          <li key={item.id} className={styles.teamMember}>
            <Image
              src={item.img}
              alt={item.name}
              className={styles.img}
              width={403}
              height={403}
            />
            <p className={styles.memberName}>{t(item.name)}</p>
            <a className={styles.memberLink} href={item.social}>
              <Linktre />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FofoBox;
