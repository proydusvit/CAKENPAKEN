import SectionSecond from 'components/Section/SectionSecond';
import { useTranslation } from 'next-i18next';
import styles from './Trail.module.scss';
import Foto from '../Foto';
import { listTrail } from './list';
import { BackLink } from 'components/BackLink/BackLink';
import { BreadCrumbs } from 'components/BreadCrumbs/BreadCrumbs';
export const GalleryTrail = () => {
  const { t } = useTranslation('gallery');
  const breadCrumbsJsonLD = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: '1',
        item: {
          '@id': `cakenpaken`,
          name: t('home'),
        },
      },
      {
        '@type': 'ListItem',
        position: '2',
        item: {
          '@id': `cakenpaken/gallery`,
          name: t('gallery'),
        },
      },
      {
        '@type': 'ListItem',
        position: '3',
        item: {
          '@id': `cakenpaken/gallery/trail`,
          name: t('trail'),
        },
      },
    ],
  };
  const breadCrumbsList = [
    {
      link: '/',
      text: t('home'),
    },
    {
      link: '/gallery',
      text: t('gallery'),
    },
    {
      link: '/gallery/trail',
      text: t('trail'),
    },
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbsJsonLD) }}
        key="breadcrumbs-jsonld"
      />
      <div className={styles.mainFoto}>
        <h1> {t('trail')}</h1>
      </div>

      <SectionSecond>
        {/* <BackLink link={'/gallery'} back={t('gallery')} current={t('trail')} /> */}
        <BreadCrumbs list={breadCrumbsList} />
        <Foto image={listTrail} />
      </SectionSecond>
    </>
  );
};
