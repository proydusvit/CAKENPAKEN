import Link from 'next/link';
import Image from 'next/image';

import styles from './Sponsor.module.scss';

import { useTranslation } from 'next-i18next';

import SliderComponent from 'components/slider/SliderComponent';

import { listItems } from './SponsorList';

const SponsorAndHelp = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <div className={styles.sponsor}>
        <h3 className={styles.spon}>{t('sponsors')}</h3>

        <SliderComponent list={listItems} />

        <ul className={styles.list}>
          {listItems.map(({ id, img, alt, href, width, height }) => (
            <li key={id}>
              <Link href={href}>
                <Image
                  className={styles.img}
                  src={img}
                  width={width}
                  height={height}
                  alt={alt}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SponsorAndHelp;
