import Layout from "../layout/Layout";
import Crew from "../../src/blocks/Team/Team.jsx";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "team"])),
      // Will be passed to the page component as props
    },
  };
};

const Team = () => {
  return (
    <Layout title="Team">
      <Crew />
    </Layout>
  );
};

export default Team;
