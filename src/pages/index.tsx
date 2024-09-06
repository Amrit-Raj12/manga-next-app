import CrauselLoader from "@/components/content-loaders/CarauselLoader";
import MultiCarauselLoader from "@/components/content-loaders/MultiCarauselLoader";
import Feature from "@/components/Feature";
import Filters from "@/components/Filters";
import Hero from "@/components/Hero";
import MarqueeComponent from "@/components/MarqueeComponent";
import Sidebar from "@/components/Sidebar";
import { imageList } from "@/data/data";
import { setMangaList } from "@/redux/mangaSlice";
import { getLatestMangaList, getLatestReleaseList } from "@/services/mangaService";
import { LatestMangaType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [top10Mangas, setTop10Mangas] = useState<LatestMangaType[]>([]);
  const [carauselMangas, setCarauselMangas] = useState<LatestMangaType[]>([]);

  const dispatch = useDispatch();

  const { data: mangaList, error: mangaError, isLoading: isMangaLoading } = useQuery({
    queryKey: ['mangaList', 1],
    queryFn: () => getLatestMangaList(1),
  });

  const { data: releaseList, error: releaseError, isLoading: isReleaseLoading } = useQuery({
    queryKey: ['releaseList', 1],
    queryFn: () => getLatestReleaseList(1),
  }); 

  // Function to convert the view count to a number
  const convertViewCount = (viewString: string) => {
    if (viewString?.endsWith("M")) {
      return parseFloat(viewString) * 1_000_000;
    } else if (viewString?.endsWith("K")) {
      return parseFloat(viewString) * 1_000;
    }
    return parseFloat(viewString); // If it's a plain number
  };

  useEffect(() => {
    if (mangaList?.results?.length > 0) {
      const top10 = mangaList.results
        .sort(
          (a: LatestMangaType, b: LatestMangaType) =>
            convertViewCount(b.view) - convertViewCount(a.view)
        ) // Sort in descending order
        .slice(0, 10);

      setTop10Mangas(top10);
      dispatch(setMangaList(top10));
      setCarauselMangas(top10.slice(0, 3));
    }
  }, [mangaList]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // if (isLoading) return <p>Loading...</p>;
  if (mangaError) return <p>Error fetching data</p>;

  return (
    <main className={`${inter.className} bg-white dark:bg-darkBg`}>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      {isMangaLoading ? <CrauselLoader />:<Hero carauselMangas={carauselMangas} isLoading={isMangaLoading} />}
      <MarqueeComponent images={imageList} />
      <Filters toggleSidebar={toggleSidebar} />
      {/* Latest Release Multi-Carausel */}
      {isMangaLoading ? <MultiCarauselLoader /> :<Feature title="Latest Release" href="/" mangaList={releaseList?.results} />}
      {/* Latest Manga Multi-Carausel */}
      {isMangaLoading ? <MultiCarauselLoader /> :<Feature title="Latest Manga" href="/" mangaList={mangaList?.results} />}
    </main>
  );
}
