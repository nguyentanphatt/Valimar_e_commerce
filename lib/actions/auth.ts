"use server"

import { signIn, signOut } from "../auth"

export const login = async() => {
    await signIn("github", {redirectTo: "/"})
}

export const logout = async() => {
    await signOut({redirectTo: "/"})
}

export const userLogin = async(email:string, password:string) => {
    console.log(email);
    console.log(password);
    await signIn("credentials", {
        redirectTo:"/userinfo",
        email,
        password,
    })
    
    
}