import Image from "next/image";
import Layout from "layout/Layout";
import Fail from "../../public/404.png";
import Section from "components/Section/Section";
const NotFound = () => {
  return (
    <Layout>
      <Section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "50px 0",
          }}
        >
          <Image src={Fail} width={600} height={300} />
        </div>
      </Section>
    </Layout>
  );
};

export default NotFound;
