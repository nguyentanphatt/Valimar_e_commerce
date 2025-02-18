import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Wrapper from "@/components/common/Wrapper";
import AccountSection from "@/components/ui/AccountSection";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valimar E Commerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark`}
      >
        <div className="md:flex md:items-center md:justify-center md:gap-14 lg:gap-24">
          <Wrapper>
            <Header />
          </Wrapper>
          <Wrapper>
            <Navbar />
          </Wrapper>
          <Wrapper>
            {/* <Link href={"/signin"}>
              <Account className="hidden md:flex lg:size-10" />
            </Link> */}
            <AccountSection />
          </Wrapper>
        </div>
        {children}
        <Wrapper>
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
