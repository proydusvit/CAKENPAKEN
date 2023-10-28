import Layout from "../layout/Layout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SupportUkraine from "blocks/BtnDonate/SupportUkraine/SupportUkraine";
export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "support"])),
    },
  };
};
const Support = () => {
  return (
    <Layout title="Support Ukraine">
      <SupportUkraine />{" "}
    </Layout>
  );
};

export default Support;
