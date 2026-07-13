import React from 'react';
import { motion } from 'framer-motion';
import WordLoader from './WordLoader';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 w-screen h-screen flex items-center justify-center z-[9999]"
      style={{ backgroundColor: '#e4ded7' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.8, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <WordLoader
          words={['Loading', 'Crafting', 'Creating', 'Building']}
          color="#0a0a0a"
        />
        <p
          className="text-gray-600 text-sm tracking-widest"
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          Preparing something amazing...
        </p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
