import axios from "axios";

async function fetchGallery() {
  try {
    const response = await axios.get(
      "http://localhost:1337/api/photo-colections?populate=*"
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

async function fetchCategory() {
  try {
    const response = await axios.get(
      "http://localhost:1337/api/link-photos?populate=*"
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

export default { fetchGallery, fetchCategory };
