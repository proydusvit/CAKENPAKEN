import { Problem } from "components/Fail/problem";
import fail from "../../public/404.png";
import Layout from "layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <Problem imge={fail} />
    </Layout>
  );
};

export default NotFound;
