import Navbar from "@/components/common/Navbar";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Account from '@/public/assets/icon/account.svg'

export default function Home() {
  return (
    <div>
      <div className="md:flex md:items-center md:justify-center md:gap-14 lg:gap-24 md:py-5">
        <Header />
        <Navbar />
        <Image src={Account} alt="acc" className="sm:hidden md:flex lg:size-10"/>
      </div>
    </div>
  );
}
