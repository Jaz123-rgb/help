
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.09,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.nav
      className=" text-white fixed z-50 w-full  bg-[#2c5b8c]"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center md:justify-center">
        <motion.div
          className="flex items-center justify-between"
          variants={linkVariants}
        >
          <Link href="/">
            <div className="flex items-center mr-4">
              <Image
                src="/images/logos/logoslideuno.svg"
                alt="imagen-logo"
                width={50}
                height={50}
                quality={100}
              />
            </div>
          </Link>
          <button
            className=" md:hidden focus:outline-none text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars />
          </button>
        </motion.div>
        <div className="flex justify-center">
          <motion.div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center`}
            variants={linkVariants}
          >
            <Link href="/">
              <div className="block mt-4 md:inline-block md:mt-0 mr-6 hover:text-white  hover:bg-blue-900">
                Inicio
              </div>
            </Link>
            <Link href="/proyectos">
              <div className="block mt-4 md:inline-block md:mt-0 mr-6 hover:text-white  hover:bg-blue-900">
                Proyectos
              </div>
            </Link>
            <Link href="/contacto">
              <div className="block mt-4 md:inline-block md:mt-0  hover:text-white  hover:bg-blue-900">
                Contacto
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

