import Layout from "../layout/Layout";
import PhotoGallery from "../blocks/Gallery/Gallery";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "gallery"])),
      // Will be passed to the page component as props
    },
  };
};
const Gallery = () => {
  return (
    <Layout title="Gallery">
      <PhotoGallery />
    </Layout>
  );
};

export default Gallery;
