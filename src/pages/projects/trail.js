import Layout from '../../layout/Layout';
import TrailRun from '../../blocks/Projects/Trail/Trail';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'projects'])),
      // Will be passed to the page component as props
    },
  };
};
const Trail = () => {
  return (
    <Layout title="Trail Rin">
      <TrailRun />
    </Layout>
  );
};

export default Trail;
