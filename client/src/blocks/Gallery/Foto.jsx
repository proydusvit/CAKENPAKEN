import { initLightboxJS, SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Foto = ({ data }) => {
  const router = useRouter();

  useEffect(() => {
    initLightboxJS("Insert License key", "Insert plan type here");
  });

  const imageWithId = data.find((item) => item.id === 2 || item.id === 4);

  if (!imageWithId) {
    // Якщо об'єкт з ID: 2 не знайдений, можна відобразити повідомлення про помилку або щось інше.
    return <div>Image not found</div>;
  }

  const imageUrl = imageWithId.src;

  return (
    <>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>

      <img src={imageUrl} />

      <SlideshowLightbox
        lightboxIdentifier="uniqueLightboxId"
        framework="next"
        images={data}
      >
        {data?.map((item, index) => (
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

export default Foto;
