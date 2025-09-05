import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-20 px-6 text-center">
    <motion.h1
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="text-4xl md:text-6xl font-bold mb-6"
    >
      Get the tech career you deserve. Faster.
    </motion.h1>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="flex flex-col md:flex-row justify-center gap-8 text-lg md:text-xl"
    >
      <div><strong>128%</strong><br />average hike via our placement cell</div>
      <div><strong>1.5L+ learners</strong><br />cracked top tech companies</div>
      <div><strong>1,400+</strong><br />alumni in MAANG & unicorns</div>
    </motion.div>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-8 bg-white text-orange-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100"
    >
      Explore Courses
    </motion.button>
  </section>
);

export default Hero;
