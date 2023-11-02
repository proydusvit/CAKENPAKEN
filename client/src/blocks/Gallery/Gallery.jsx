import { useEffect, useState } from "react";
import api from "./services";
import { useRouter } from "next/router";
import Foto from "./Foto";
import Category from "./Category";
import Section from "components/Section/Section";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(true);
  const { locale } = useRouter();
  const router = useRouter();
  const { category } = router.query;
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const fetchedData = await api.fetchGallery({ locale, category, page });
        setData([...data, ...fetchedData]);
        setPage(page + 1);

        if (category) {
          setSelectedCategory(category);
          setMenuOpen(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, [category, locale, page]);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      fetchMoreData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data]);

  const filteredData = data.filter(
    (item) => item.attributes.category === selectedCategory
  );

  const images = filteredData.map((item) => ({
    id: item.id,
    src: `http://localhost:1337${item.attributes.photo.data.attributes.url}`,
  }));

  return (
    <Section>
      <Category />
      <Foto image={images} />
      {/* {isLoading && <div>Loading...</div>} */}
    </Section>
  );
};

export default Gallery;
