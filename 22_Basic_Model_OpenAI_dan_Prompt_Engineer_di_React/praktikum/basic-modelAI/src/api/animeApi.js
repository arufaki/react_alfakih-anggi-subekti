import axios from "axios";

export const fetchAnimeData = async (BASE_URL, page) => {
    try {
        const response = await axios.get(`${BASE_URL}&page=${page}`);
        return response.data.data;
    } catch (error) {
        console.error("Error", error.message);
        return [];
    }
};
