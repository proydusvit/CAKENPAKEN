// import cloudinary from "cloudinary";
// import { CldImage } from "next-cloudinary";

// export default function List({ images }) {
//   return (
//     <div>
//       {images.map((item) => (
//         <CldImage
//           key={item.public_id}
//           width={400}
//           height={300}
//           src={item.public_id}
//           alt="sas"
//           sizes="100vw"
//         />
//       ))}
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   try {
//     const result = await cloudinary.v2.search
//       .expression("resource_type:image")
//       .sort_by("created_at")
//       .max_results(21)
//       .execute();
//     console.log(result);
//     const images = result.resources;

//     return {
//       props: {
//         images,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching images:", error);
//     return {
//       props: {
//         images: [], // Return an empty array in case of an error
//       },
//     };
//   }
// }
