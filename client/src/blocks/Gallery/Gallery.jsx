import { useEffect, useState } from "react";
import api from "./services";
import { useRouter } from "next/router";
import Foto from "./Foto";
import Category from "./Category";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(true); // Додаємо стейт для відстеження стану меню

  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const fetchedData = await api.fetchGallery();
        console.log(fetchedData);
        setData(fetchedData);

        if (category) {
          setSelectedCategory(category);
          setMenuOpen(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, [category]); // Тепер useEffect викликається тільки при зміні параметру `category` з роутера

  const filteredData = data.filter(
    (item) => item.attributes.category === selectedCategory
  );

  const images = filteredData.map((item) => ({
    id: item.id,
    src: `http://localhost:1337${item.attributes.photo.data.attributes.url}`,
  }));

  return (
    <>
      {menuOpen && <Category />}
      {!menuOpen && <Foto data={images} />}
    </>
  );
};

export default Gallery;
