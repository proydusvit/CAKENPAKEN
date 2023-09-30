import axios from "axios";
import { useEffect, useState } from "react";
import { initLightboxJS } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    initLightboxJS("Insert License key", "Insert plan type here");
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/photo-colections?populate=*"
        );
        const data = response.data.data;
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const images = data.map((item) => ({
    src: `http://localhost:1337${item.attributes.photo.data.attributes.url}`
  }));
  console.log(data);
  return (
    <>
      <SlideshowLightbox
        lightboxIdentifier="uniqueLightboxId"
        framework="next"
        images={images}
      >
        {images?.map((item, index) => (
          <img
            key={index}
            alt={`Image ${index}`}
            className="w-full rounded"
            height={500}
            width={500}
            data-lightboxjs="uniqueLightboxId"
            quality={80}
            src={item.src}
          />
        ))}
      </SlideshowLightbox>
    </>
  );
};

export default Gallery;
