import Layout from "../layout/Layout";
import Main from "../blocks/Home/Home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
      // Will be passed to the page component as props
    },
  };
};
export default function Home() {
  return (
    <Layout title="☆">
      <Main />
    </Layout>
  );
}
