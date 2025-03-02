"use client"

import { logout } from "@/lib/actions/auth"

export const SignOutButton = () => {
    return (
        <button onClick={()=> logout()}>Signout GitHub</button>
    )
}