import "./style.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title:"BookNest | Team 4 Bookstore",description:"Sprint 1: secure bookstore account management" };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}