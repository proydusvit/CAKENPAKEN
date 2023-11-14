import React, { useEffect, useState } from "react";
import cloudinary from "cloudinary";
import { CldImage } from "next-cloudinary";

export default function List() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const results = await cloudinary.v2.search
          .expression("resource_type:image")
          .sort_by("public_id", "desc")
          .max_results(10)
          .execute();

        setImages(results.resources);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []); // Empty dependency array ensures useEffect runs once after the initial render

  return (
    <div>
      {images.map((item) => (
        <CldImage
          key={item.public_id}
          width={400}
          height={300}
          src={item.public_id}
          alt="sas"
        />
      ))}
    </div>
  );
}
