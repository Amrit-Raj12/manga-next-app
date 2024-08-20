import { MarqueeComponentProps } from "@/types/types";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent: React.FC<MarqueeComponentProps> = ({ images }) => (
  <Marquee className="bg-white dark:bg-primary" pauseOnHover={true} speed={80}>
   {images.map((image, index) => (
      <img
        key={index}
        src={image.src}
        width={image.width}
        height={image.height}
        alt={`Marquee image ${index + 1}`}
        className="ml-6"
        style={{aspectRatio: 3/2, objectFit: "contain"}}
      />
    ))}
  </Marquee>
);

export default MarqueeComponent;