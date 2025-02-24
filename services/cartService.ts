import api from "./api";

export const fetchCart = async (id: number) => {
  try {
    const response = await api.get(`/cart/getcart/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

export const addToCart = async (
  userId: number,
  gameId: number,
  physical: boolean
) => {
  try {
    const response = await api.post("/cart/addtocart", {
      userId,
      gameId,
      physical,
    });

    return {
      success: true,
      message: response.data?.message || "Item added to cart!",
    };
  } catch (error: any) {
    console.error("Error Add to Cart", error);

    return {
      success: false,
      message: error?.response?.data?.message || "Failed to add item to cart",
    };
  }
};

export const removeFromCart = async (cartItemId: number) => {
  try {
    const response = await api.post("/cart/removefromcart", { cartItemId });

    return {
      success: true,
      message: response.data?.message || "Item removed !",
    };
  } catch (error: any) {
    console.error("Error Remove from Cart", error);

    return {
      success: false,
      message: error?.response?.data?.message || "Failed to remove item",
    };
  }
};

export const totalCart = async(userId: number) => {
  try {
    const response = await api.get(`cart/totalcart/${userId}`)
    return response.data
  } catch (error) {
    console.error("Error calculation cart:", error);
    throw error;
  }
}