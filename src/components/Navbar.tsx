 import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NextLink from "next/link";

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.nav
      className="bg-white shadow"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <motion.div
          className="flex items-center justify-between"
          variants={linkVariants}
        >
          <NextLink href="#slide" passHref>
            <motion.a
              className="font-bold text-xl tracking-tight text-gray-800 uppercase"
              whileHover={{ scale: 1.05 }}
            >
              Logo
            </motion.a>
          </NextLink>
          <motion.button
            className="border border-gray-800 px-3 py-2 rounded text-gray-800 opacity-50 hover:opacity-75 md:hidden"
            type="button"
            whileHover={{ scale: 1.05 }}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path
                fillRule="evenodd"
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              />
            </svg>
          </motion.button>
        </motion.div>
        <motion.div
          className="md:flex items-center"
          variants={linkVariants}
        >
          <NextLink href="/" passHref>
            <motion.a
              className="block mt-4 md:inline-block md:mt-0 mr-6 font-semibold text-gray-800 hover:text-gray-900"
              whileHover={{ scale: 1.05 }}
            >
              Home
            </motion.a>
          </NextLink>
          <NextLink href="/projects" passHref>
            <motion.a
              className="block mt-4 md:inline-block md:mt-0 mr-6 font-semibold text-gray-800 hover:text-gray-900"
              whileHover={{ scale: 1.05 }}
            >
              Projects
            </motion.a>
          </NextLink>
          <NextLink href="/contact" passHref>
            <motion.a
              className="block mt-4 md:inline-block md:mt-0 font-semibold text-gray-800 hover:text-gray-900"
              whileHover={{ scale: 1.05 }}
            >
              Contact


            </motion.a>
          </NextLink>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
