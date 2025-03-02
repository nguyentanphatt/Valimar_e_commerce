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

export const getGameWithDiscount = async()=>{
  try {
    const response = await api.get("/games/discount")
    return response.data
  } catch (error) {
    console.error("Error fetch game with discount", error)
    throw error
  }
}

export const getGameNewrelease = async() => {
  try {
    const response = await api.get("/games/newrelease")
    return response.data
  } catch (error) {
    console.error("Error fetch game new realease: ", error)
    throw error
  }
}

export const getGameRelevantByGenre = async(firstGenre: string)=>{
  try {
    const response = await api.get(`/games/relevant/${firstGenre}`)
    return response.data
  } catch (error) {
    console.error("Error fetch relevant game: ", error)
    throw error
  }
}

export const generateGameKey = async(id: number) => {
  try {
    const response = await api.post('/games/generatekey',{
      id
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export const checkPromocode = async(promo:string) => {
  try {
    const response = await api.post('/promocode', {
      promo
    })
    return response.data
  } catch (error) {
    throw error
  }
}
