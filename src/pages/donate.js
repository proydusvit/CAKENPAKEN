import Layout from "../layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DonateCaken from "../blocks/BtnDonate/Donate/Donate";
export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "support"])),
    },
  };
};
const Donate = () => {
  return (
    <Layout title="Donate">
      {" "}
      <DonateCaken />
    </Layout>
  );
};

export default Donate;
