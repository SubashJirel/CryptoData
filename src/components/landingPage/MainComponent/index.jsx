import React from 'react';
import Button from '../../Common/Button';
import gradient from '../../../assets/gradient.png';
import iphone from '../../../assets/iphone.png';
import { motion } from 'framer-motion';
import './styles.css';

function MainComponent() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-12 py-4">
      <div className="flex text-center sm:text-left flex-col items-center md:items-start">
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="heading1 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold m-0  "
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-blueClr m-0"
        >
          Real Time.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-gray-500 font-light mt-4 text-center md:text-left"
        >
          Track crypto through a public API in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75 }}
          className="flex gap-4 mt-6"
        >
          <Button text={'Dashboard'} />
          <Button text={'Share App'} outlined={true} />
        </motion.div>
      </div>
      <div className="relative  w-full md:w-1/2 mt-8 md:mt-0 md:ml-auto flex justify-center md:justify-end">
        <img
          src={gradient}
          alt="Gradient"
          className="absolute top-6  md:right-0 w-64 md:w-56 lg:w-64"
        />
        <motion.img
          src={iphone}
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: 'smooth',
            repeatType: 'mirror',
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute top-2  md:right-0 w-72 md:w-64 lg:w-72"
        />
      </div>
    </div>
  );
}

export default MainComponent;
