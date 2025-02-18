import { UserLoginProps } from "@/constant/type";
import api from "./api";

export const userLogin = async (credentials: UserLoginProps) => {
    try {
        const response = await api.post("/user/login", credentials);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}

export const userSignUp = async (name: string, email: string, password: string) => {
    try{
        const response = await api.post("/user/signup", {
            name,
            email,
            password
        })
        return response.data;
    } catch (error) {
        
        throw error;
    }
}