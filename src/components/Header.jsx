import React from "react";
import { motion } from "framer-motion";

const Header = () => (
  <motion.header
    initial={{ y: -80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="bg-orange-600 shadow-md py-4 px-6 flex justify-between items-center text-white"
  >
    <div className="text-2xl font-bold">Coding Ninjas</div>
    <nav className="hidden md:flex gap-6 font-medium">
      <a href="#courses" className="hover:text-gray-100">Courses</a>
      <a href="#placements" className="hover:text-gray-100">Placements</a>
      <a href="#learning" className="hover:text-gray-100">Learning Model</a>
      <button className="bg-white text-orange-600 py-1 px-4 rounded hover:bg-gray-200">Login</button>
    </nav>
  </motion.header>
);

export default Header;
