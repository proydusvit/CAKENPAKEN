import Layout from '../../layout/Layout';
import { GalleryTrail } from 'blocks/Gallery/Trail/Trail';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'gallery'])),
      // Will be passed to the page component as props
    },
  };
};
const Film = () => {
  return (
    <Layout title="You won`t regret tomorrow">
      <GalleryTrail />
    </Layout>
  );
};

export default Film;
