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
  try {
    const response = await api.get(`/games/${search}`);
    return response.data;
  } catch (error) {
    console.error("Error searching games:", error);
    throw error;
  }
};

export const getGameById = async (id: number) => {
  try {
    const response = await api.get(`/games/gamedetails/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching game by id:", error);
    throw error;
  }
};
