import Layout from '../../layout/Layout';
import Movie from '../../blocks/Projects/Film/Film.jsx';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'projects'])),
      // Will be passed to the page component as props
    },
  };
};
const Film = () => {
  return (
    <Layout
      title="Mountain
    Instant"
    >
      <Movie />
    </Layout>
  );
};

export default Film;
