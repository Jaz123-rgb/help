
import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface SlideWithImage {
  type: "image";
  url: string;
  alt: string;
  title: string | { text: string; image: string };
  text: string;
}

interface SlideWithText {
  type: "text";
  title: string | { text: string; image: string };
  text: string;
}

type Slide = SlideWithImage | SlideWithText;

const slides: Slide[] = [
  {
    type: "image",
    url: "/images/slide/slide-first.jpg",
    alt: "slide uno",
    title: "Título de la diapositiva 1",
    text: "Texto de la diapositiva 1",
  },
  {
    type: "image",
    url: "/images/logos/logo-uno.jpg",
    alt: "Imagen de prueba 2",
    title: { text: "", image: "/images/logos/loddos.png" },
    text: "Texto de la diapositiva 2",
  },
  {
    type: "image",
    url: "/images/slide/slide-uno-pruba.png",
    alt: "Imagen de prueba 3",
    title: { text: "Título de la diapositiva 3", image: "/images/icons/icon-3.png" },
    text: "Texto de la diapositiva 3",
  },
  {
    type: "text",
    title: "Título de la diapositiva 4",
    text: "Texto de la diapositiva 4",
  },
];

const Hero: React.FC = () => {
  return (
    <Carousel showThumbs={true} showStatus={false} infiniteLoop={true}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div className="relative w-full h-screen ">
            {slide.type === "image" && (
              <Image
                src={slide.url}
                alt={slide.alt}
                layout="fill"
                objectFit="cotain"
              />
            )}
            <div className="absolute inset-0
        flex items-center justify-center 
        text-white lg:text-4xl lg:leading-10  
        bg-black bg-opacity-40">

              <div className="text-center p-4">
                {typeof slide.title === "object" && slide.title.image && (
                  <div className="mb-4">
                    <Image
                      src={slide.title.image}
                      alt={slide.title.text}
                      width={50}
                      height={50}
                    />
                  </div>
                )}
                <h3 className="font-bold mb-2 text-6xl md:text-6xl lg:text-6xl">
                  {typeof slide.title === "object"
                    ? slide.title.text
                    : slide.title}
                </h3>
                <p className="text-xl md:text-2xl">{slide.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
