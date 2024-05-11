'use client';

import { motion } from 'framer-motion';
import React from 'react';

const Divider = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="my-24 hidden h-16 w-1 rounded-full bg-gray-200 sm:block"
      initial={{ opacity: 0, y: 100 }}
      transition={{ delay: 0.3 }}
    />
  );
};

export default Divider;
