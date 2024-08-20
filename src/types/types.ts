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