import Layout from "../../layout/Layout";
import Movie from "../../blocks/Projects/Film/Film";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "projects"])),
      // Will be passed to the page component as props
    },
  };
};
const Film = () => {
  return (
    <Layout title="Film">
      <Movie />
    </Layout>
  );
};

export default Film;
