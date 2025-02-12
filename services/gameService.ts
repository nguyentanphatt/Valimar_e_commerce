import api from "./api";

export const fetchGames = async () => {
  try {
    const response = await api.get("/games");
    return response.data;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};

export const searchGames = async (search: string) => {
  try{
    const response = await api.get(`/games/${search}`);
    return response.data;
  } catch (error) {
    console.error("Error searching games:", error);
    throw error;
  }
}