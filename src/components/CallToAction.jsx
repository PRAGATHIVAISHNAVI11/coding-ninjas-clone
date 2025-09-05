import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => (
  <section className="py-20 bg-orange-600 text-white text-center">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-6"
    >
      Ready to Start Your Coding Journey?
    </motion.h2>

    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-full shadow-lg"
    >
      Book a Free Trial Class
    </motion.button>
  </section>
);

export default CallToAction;
