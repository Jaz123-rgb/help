
import React from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import useOnScreen from "./useOnScreen";


const images = [
  {
    src: "/images/projectos/BRAND.jpg",
    title: "Project Title 1",
    description: "Project Description 1",
  },
{
    src: "/images/projectos/BRAND.jpg",
    title: "Project Title 1",
    description: "Project Description 1",
  },
{
    src: "/images/projectos/BRAND.jpg",
    title: "Project Title 1",
    description: "Project Description 1",
  },
{
    src: "/images/projectos/BRAND.jpg",
    title: "Project Title 1",
    description: "Project Description 1",
  },


{
    src: "/images/projectos/BRAND.jpg",
    title: "Project Title 1",
    description: "Project Description 1",
  },


{
    src: "/images/projectos/BRAND.jpg",
    title: "Project Title 1",
    description: "Project Description 1",
  },



];


const SecPrj = () => {
  
 const ref = useRef<HTMLDivElement>(null);
  const animation = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [onScreen]);

  useEffect(() => {
    if (isVisible) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      });
    } else {
      animation.start({
        opacity: 0,
        y: 30,
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [isVisible, animation]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-4 md:grid-cols-3">
        {images.map((image) => (
		  //contenido de cada hove
		  
		  <motion.div
			 key={image.src} 
			ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={animation}
		  >
		  <motion.div
			 key={image.src} 
			 className="relative overflow-hidden"
				initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
			 >
            <Image
              src={image.src}
              alt={image.title}
              width={400}
              height={400}
              className="transform hover:scale-110 transition-all duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-0 hover:opacity-75 transition-all duration-300 flex justify-center items-center">
              <div className="text-center text-white">
                <h2 className="text-lg font-bold">{image.title}</h2>
                <p className="text-sm">{image.description}</p>
              </div>
            </div>
          </motion.div>
			  </motion.div>
		  //contenido de cada hove
        ))}
      </div>
    </div>
  );
};

export default SecPrj;
