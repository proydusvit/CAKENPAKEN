import Layout from "../layout/Layout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "support"])),
    },
  };
};
const Support = () => {
  return <Layout title="Support Ukraine"> </Layout>;
};

export default Support;
