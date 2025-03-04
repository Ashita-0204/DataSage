import axios from "axios";

export const fetchResults = async (query) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/search?q=${query}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching results:", error);
    throw error;
  }
};
