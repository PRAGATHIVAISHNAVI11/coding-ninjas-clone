import React from "react";
import { motion } from "framer-motion";

const CTA = () => (
  <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-red-600 text-white text-center">
    <motion.h2
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold mb-6"
    >
      Ready to Transform Your Career?
    </motion.h2>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white text-orange-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100"
    >
      Book a Free Trial Class
    </motion.button>
  </section>
);

export default CTA;
