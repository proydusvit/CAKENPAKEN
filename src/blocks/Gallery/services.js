import axios from "axios";

async function fetchGallery({ locale, pageSize }) {
  try {
    const response = await axios.get(
      `https://cakenpaken.onrender.com/api/foto-colections?populate=*&locale=${locale}}&pagination[pageSize]=${pageSize}`
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

async function fetchCategory({ locale }) {
  try {
    const response = await axios.get(
      `https://cakenpaken.onrender.com/api/link-photos?populate=*&locale=${locale}`
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

export default { fetchGallery, fetchCategory };
