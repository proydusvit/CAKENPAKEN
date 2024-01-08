import { Problem } from 'components/Fail/problem';
import fail from '../../public/404.png';
import Layout from 'layout/Layout';
import Link from 'next/link';
const NotFound = () => {
  return (
    <Layout>
      <Problem imge={fail} />
      <Link href="/">Return Home</Link>
    </Layout>
  );
};

export default NotFound;
