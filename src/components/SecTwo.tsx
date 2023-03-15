import { useEffect, useRef, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import useOnScreen from "./useOnScreen";
import Image from "next/image";

interface SecOneProps {}

const SecTwo: React.FC<SecOneProps> = () => {
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

  const title = "¿Quiénes somos?";
  const description = "Somos una empresa con una perspectiva del marketing disruptiva ";
  const imgSrc = "/images/projectos/BRAND.jpg";
  const altText = "";

  return (
    <Flex flexWrap="wrap" w="full">
      
      <Box className="w-full lg:w-1/2 h-auto flex flex-col p-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={animation}
          className="text-4xl lg:text-5xl font-bold mb-5"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={animation}
          className="text-lg lg:text-xl mb-10"
        >
          {description}

        </motion.p>
      </Box>
			<motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={animation}
        className="w-full lg:w-1/2 h-auto flex items-center justify-center lg:justify-end p-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={imgSrc}
            alt={altText}
            width={500} // Ancho de la imagen en píxeles
            height={500} // Alto de la imagen en píxeles
          />
        </motion.div>
      </motion.div>
    </Flex>
  );
};

export default SecTwo;
