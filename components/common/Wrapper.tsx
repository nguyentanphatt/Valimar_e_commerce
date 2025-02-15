"use client"

import { usePathname } from "next/navigation"
import Header from "../layout/Header"

export default function Wrapper({children}: {children: React.ReactNode}) {
    const pathname = usePathname()
    const route = ["/signin"]
    const isRoute = route.includes(pathname)
    return !isRoute ?   children : null
}