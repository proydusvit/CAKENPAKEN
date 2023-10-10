import { useEffect, useState } from "react";
import api from "./services";

const Category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const fetchedData = await api.fetchCategory();
        console.log(fetchedData);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
      <h2>Links to Galleries</h2>
      <div className="gallery">
        \
        {data.map((item) => (
          <div key={item.id} className="gallery-item">
            <a href={`/gallery?category=${item.attributes.category}`}>
              <h2>{item.attributes.name}</h2>
              <p>Category: {item.attributes.category}</p>
              <p>Date: {item.attributes.data}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
