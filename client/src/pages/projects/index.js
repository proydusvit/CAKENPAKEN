import Layout from "../../layout/Layout";
import Project from "../../blocks/Projects/Projects";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "projects"])),
      // Will be passed to the page component as props
    },
  };
};
const Projects = () => {
  return (
    <Layout title="Projects">
      <Project />
    </Layout>
  );
};

export default Projects;
