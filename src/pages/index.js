import Layout from '../layout/Layout';
import Main from '../blocks/Home/Home';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Suspense } from 'react';
import Loading from './loading';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
};
export default function Home() {
  return (
    <Layout title={'CakenPaken'}>
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    </Layout>
  );
}
