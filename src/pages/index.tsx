import Header from "@/components/header";
import Hero from "@/components/hero";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} bg-white dark:bg-darkBg`}
    >
     <Header />
     <Hero />

     
    </main>
  );
}
