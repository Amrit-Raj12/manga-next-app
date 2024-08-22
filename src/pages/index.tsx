import Feature from "@/components/Feature";
import Filters from "@/components/Filters";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeComponent from "@/components/MarqueeComponent";
import Sidebar from "@/components/Sidebar";
import { imageList, mangaList } from "@/data/data";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <main
      className={`${inter.className} bg-white dark:bg-darkBg`}
    >
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <Hero />
      <MarqueeComponent images={imageList} />
      <Filters toggleSidebar={toggleSidebar} />
      {/* Latest Release Multi-Carausel */}
      <Feature title="Latest Release" href="/" mangaList={mangaList} />
      {/* Latest Manga Multi-Carausel */}
      <Feature title="Latest Manga" href="/" mangaList={mangaList} />
    </main>
  );
}
