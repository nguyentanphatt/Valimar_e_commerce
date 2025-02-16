"use client"

import { usePathname } from "next/navigation"

export default function Wrapper({children}: {children: React.ReactNode}) {
    const pathname = usePathname()
    const route = ["/signin", "/signup"]
    const isRoute = route.includes(pathname)
    return !isRoute ?   children : null
}