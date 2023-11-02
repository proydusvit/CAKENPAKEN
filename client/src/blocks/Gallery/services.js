import axios from "axios";

async function fetchGallery({ locale, page }) {
  try {
    const response = await axios.get(
      `http://localhost:1337/api/foto-colections?populate=*&locale=${locale}&pagination[page]=${page}`
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

async function fetchCategory({ locale }) {
  try {
    const response = await axios.get(
      `http://localhost:1337/api/link-photos?populate=*&locale=${locale}`
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

// async function fetchTitleCategory({ locale }) {
//   try {
//     const response = await axios.get(
//       `http://localhost:1337/api/title-category-fotos?populate=*&locale=${locale}`
//     );
//     return response.data.data;
//   } catch (error) {
//     throw error;
//   }
// }
export default { fetchGallery, fetchCategory };
