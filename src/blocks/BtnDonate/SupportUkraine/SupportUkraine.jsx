import style from './SupportUkraine.module.scss';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { listItems } from './List.js';
import Section from 'components/Section/Section';

const SupportUkraine = () => {
  const { t } = useTranslation('support');

  return (
    <Section>
      <h1 className={style.title}>{t('title')}</h1>
      <div className={style.donate}>
        <h2 className={style.donate_title}>{t('donation')}</h2>
        <p className={style.donate_text}>{t('textdonat')}</p>
      </div>

      <ul className={style.fund}>
        {listItems.map(item => (
          <li key={item.id} className={style.fund_item}>
            <div className={style.fund_box}>
              <Image
                className={style.fund_img}
                src={item.logo}
                width={item.width}
                height={item.height}
                alt={t(item.title)}
              />
            </div>
            <div className={style.found}>
              <h3 className={style.found_title}>{t(item.title)}</h3>

              <p className={style.found_text}>{t('textFund')}</p>

              <Link className={style.found_link} href={item.link}>
                {t('donate')}
              </Link>
            </div>
            <div className={style.qr}>
              <Image
                className={style.fund_qr}
                src={item.qr}
                width={300}
                height={300}
                alt={t(item.title)}
              />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default SupportUkraine;
