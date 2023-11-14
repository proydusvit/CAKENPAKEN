import { initLightboxJS, SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { CldImage } from "next-cloudinary";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import styles from "./Foto.module.scss";

const Foto = ({ image }) => {
  const { t } = useTranslation("gallery");

  // useEffect(() => {
  //   initLightboxJS("Insert License key", "Insert plan type here");
  // });

  return (
    <>
      <SlideshowLightbox
        lightboxIdentifier="uniqueLightboxId"
        framework="next"
        images={image}
      >
        <ul className={styles.list}>
          {image?.map(
            (item) => (
              console.log(item.src),
              (
                <li
                  style={{
                    position: "relative",
                    backgroundColor: "white",
                  }}
                  className={styles.item}
                  key={item.id}
                >
                  <CldImage
                    alt={`Image ${item.name}`}
                    className={styles.foto}
                    data-lightboxjs="uniqueLightboxId"
                    quality={80}
                    fill={true}
                    src={item.src}
                    style={{
                      backgroundPosition: " 50% 50%", // cover, contain, none
                    }}
                  />
                </li>
              )
            )
          )}
        </ul>
      </SlideshowLightbox>
    </>
  );
};

export default Foto;

{
  /* <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
      {images.map((item) => (
        <div
          key={item.id}
          className={styles.foto}
          style={{
            backgroundImage: `linear-gradient(to bottom, #00000033, #00000033), url(${item.src})`,
          }}
        >
          <h2 className={styles.name}>{item.name}</h2>
          <p className={styles.season}>{item.season}</p>
        </div>
      ))} */
}

// const router = useRouter();
// const [data, setData] = useState([]);
// const { locale } = useRouter();
// const { category } = router.query;

// useEffect(() => {
//   const fetchDataFromApi = async () => {
//     try {
//       const fetchedData = await api.fetchTitleCategory({ locale });

//       setData(fetchedData);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   fetchDataFromApi();
// }, [locale]);

// const filteredData = data.filter(
//   (item) => item.attributes.category === category
// );

// const images = filteredData.map((item) => ({
//   id: item.id,
//   name: item.attributes.name,
//   season: item.attributes.season,
//   src: `http://localhost:1337${item.attributes.foto.data.attributes.url}`,
// }));
