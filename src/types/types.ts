
export interface LatestMangaType  {
    mangaID: string;
    img: string;
    title: string;
    latestChapter: string;
    chapterID: string;
    view: string;
    description: string;
  }

export interface MangaType {
    id: number;
    title: string;
    poster: string;
    description: string;
    year: number;
    rating: number;
    language: string;
}

export interface MarqueeComponentProps {
    images: { src: string; width: number; height: number }[];
}

export interface HeaderProps {
    toggleSidebar: () => void;
  }

  export interface FeatureProps {
      href: string;
      title: string;
      mangaList: MangaType[]
  }

  export interface MangaDetailProps {
    author: string;
    chaprterList: any[];
    imageUrl: string;
    name: string;
    status: string;
    updated: string;
    view: string;
    genres: string[];
  }

  export interface Chapter{
    createdAt: string;
    id: string;
    name: string;
    path: string;
    view: string;
  };