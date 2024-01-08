import Layout from '../layout/Layout';
import Event from '../blocks/Events/Events';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'team'])),
    },
  };
};

const Events = () => {
  return (
    <Layout title="Events">
      <Event />
    </Layout>
  );
};

export default Events;
