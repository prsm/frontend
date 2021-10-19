import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { Typography } from '@pr1sm/refracted';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const variants = {
  enter: {
    opacity: 0,
    zIndex: 1,
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
  },
};

export const Slideshow = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage((prevState) => {
      const proposedPage = newDirection + prevState[0];
      let newPage = 0;
      if (proposedPage < 0) {
        newPage = images.length - 1;
      } else if (proposedPage > images.length - 1) {
        newPage = 0;
      } else {
        newPage = proposedPage;
      }

      return [newPage, newDirection];
    });
  };

  return (
    <div>
      <Typography text="Bildergalerie" variant="h6" component="h2" />
      <Typography text="Erhalte einen Einblick in unseren Verein" variant="body" component="p" />
      <div className="border border-custom rounded aspect-w-16 aspect-h-9 overflow-hidden">
        <AnimatePresence>
          <motion.div custom={direction} variants={variants} initial="enter" animate="center" exit="exit" key={page}>
            <Image src={images[page]} placeholder="blur" priority layout="responsive" />
          </motion.div>
        </AnimatePresence>
        <div className="z-10 flex flex-row items-center justify-between p-2">
          <ChevronLeftIcon
            className="h-8 w-8 text-brand-white border rounded navbar-blurred border-custom"
            onClick={() => paginate(-1)}
          />
          <ChevronRightIcon
            className="h-8 w-8 text-brand-white border rounded navbar-blurred border-custom"
            onClick={() => paginate(1)}
          />
        </div>
      </div>
    </div>
  );
};
