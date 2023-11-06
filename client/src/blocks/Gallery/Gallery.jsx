import { useEffect, useState } from "react";
import api from "./services";
import { useRouter } from "next/router";
import Foto from "./Foto";
import Category from "./Category";
import Section from "components/Section/Section";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { locale } = useRouter();
  const router = useRouter();
  const { category } = router.query;

  const [pageSize, setpageSize] = useState(39);

  const fetchDataFromApi = async (pageSize) => {
    try {
      const fetchedData = await api.fetchGallery({
        locale,
        category,

        pageSize,
      });
      console.log(fetchedData);
      setData(fetchedData);

      if (category) {
        setSelectedCategory(category);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataFromApi(pageSize);
  }, [category, locale, pageSize]);

  const filteredData = data.filter(
    (item) => item.attributes.category === selectedCategory
  );

  const images = filteredData.map((item) => ({
    id: item.id,
    src: `http://localhost:1337${item.attributes.photo.data.attributes.url}`,
    name: item.attributes.name,
  }));

  return (
    <Section>
      <Category />

      <Foto image={images} />
    </Section>
  );
};
export default Gallery;
