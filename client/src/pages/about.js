import Layout from "../layout/Layout";
import AboutUs from "../blocks/About/About";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about"])),
    },
  };
};
const About = () => {
  return (
    <Layout title="About">
      <AboutUs />
    </Layout>
  );
};

export default About;
