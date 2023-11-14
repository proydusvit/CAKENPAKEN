import Layout from "../layout/Layout"
import Event from "../blocks/Events/Events";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'



export const getStaticProps  = async({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale  ,['common', 'team',])),
      // Will be passed to the page component as props
    },
  }
}

const Events = () => {
  return <Layout title="Events">
    <Event/>
  </Layout>;
};

export default Events;
