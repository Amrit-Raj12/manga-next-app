import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MangaType } from "@/types/types";
import MangaCard from "./MangaCard";

interface MangaProps {
    mangaData: MangaType[];
  }


const MultiCarausel: React.FC<MangaProps> = ({mangaData}) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      return (
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} 
        infinite={true}
        autoPlay={true}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px ml-2"
      >
        {mangaData?.length > 0 && mangaData.map((item, index) => (
          <MangaCard key={index} manga={item} />
        ))}
      </Carousel>

)}

export default MultiCarausel;

