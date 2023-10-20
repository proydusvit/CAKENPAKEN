import Header from "./Header/Header";
import Meta from "../seo/Meta";
import Footer from "./Footer/Footer";
import Support from "./SupportAndDonate/SupportAndDonate";
const Layout = ({ children, title, description }) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      <Support />
      <main>{children}</main>
      <Footer />
    </Meta>
  );
};

export default Layout;
