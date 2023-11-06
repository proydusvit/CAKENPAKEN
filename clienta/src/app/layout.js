import Header from "@/layout/Header/Header";
import Meta from "@/seo/Meta";
import Footer from "@/layout/Footer/Footer";
import Support from "@/layout/SupportAndDonate/SupportAndDonate";

export default function RootLayout({ children, title, description }) {
  return (
    <Meta title={title} description={description}>
      <Header />
      <Support />
      <main>{children}</main>
      <Footer />
    </Meta>
  );
}
