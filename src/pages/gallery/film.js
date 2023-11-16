import Layout from "../../layout/Layout";
import { GalleryFilm } from "blocks/Gallery/Film/Film";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "gallery"])),
      // Will be passed to the page component as props
    },
  };
};
const Film = () => {
  return (
    <Layout
      title="Mountain
    Instant"
    >
      <GalleryFilm />
    </Layout>
  );
};

export default Film;
