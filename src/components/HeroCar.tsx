

import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface SlideWithImage {
  type: "image";
  url: string;
  alt: string;
  title: string | { text?: string; image?: string };
  text: string;
}

interface SlideWithText {
  type: "text";
  title: string | { text?: string; image?: string };
  text: string;
}

type Slide = SlideWithImage | SlideWithText;

const slides: Slide[] = [
  {
    type: "image",
    url: "/images/slide/slide-on.png",
    alt: "slide uno",
    title: { text: "", image: "/images/logos/logoslideuno.svg" },
    text: "AGENCIA ",
  },
  {
    type: "image",
    url: "/images/slide/slide-tw.png",
    alt: "Slide dos",
    title: "Nunca fue tan facil pedir ayuda",
    text: "",
  },
  {
    type: "image",
    url: "/images/slide/slide-on.png",
    alt: "Imagen de prueba 3",
    title: { text: "", image: "/images/logos/logoslideuno.svg" },
    text: "",
  },
  {
    type: "image",
    url: "/images/slide/slide-on.png",
    alt: "",
    title: { text: "", image: "/images/logos/logoslideuno.svg" },
    text: "",
  },
];

const Hero: React.FC = () => {
  return (
    <Carousel showThumbs={true} showStatus={false} infiniteLoop={true}>
      {slides.map((slide, index) => (
        <div key={index} className="bg-blue-500">
          <div className="relative w-full h-screen">
            {slide.type === "image" && (
              <Image
                src={slide.url}
                alt={slide.alt}
                width={1920} // Ancho de la imagen
                height={1080} // Alto de la imagen
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center text-white lg:text-4xl lg:leading-10">
              <div className="text-center p-4" id="slide">
                {typeof slide.title === "object" && slide.title.image && (
                  <div className="mb-4">
                    <Image
                      src={slide.title.image}
                      alt={slide.title.text || ""}
                      width={50}
                      height={50}
                      quality={100}
                    />
                  </div>
                )}
                <h3 className="font-bold mb-2 text-6xl md:text-6xl lg:text-6xl">
                  {typeof slide.title === "object"
                    ? slide.title.text
                    : slide.title}
                </h3>
                <h1 className="text-xl md:text-3xl">{slide.text}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
