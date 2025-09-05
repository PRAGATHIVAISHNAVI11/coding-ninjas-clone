import React from "react";
import { motion } from "framer-motion";

const courses = [
  { id: 1, title: "React JS", desc: "Master React with hooks & projects." },
  { id: 2, title: "Full Stack Bootcamp", desc: "MERN stack with career support." },
  { id: 3, title: "Data Structures & Algorithms", desc: "Crack interviews with DSA mastery." },
];

const Courses = () => (
  <section id="courses" className="py-16 px-6 bg-gray-50">
    <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">Top Programs</h2>
    <div className="grid gap-8 md:grid-cols-3">
      {courses.map((course, i) => (
        <motion.div
          key={course.id}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.2 }}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl"
        >
          <h3 className="text-xl font-semibold text-orange-600 mb-2">{course.title}</h3>
          <p className="text-gray-700">{course.desc}</p>
          <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700">
            Learn More
          </button>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Courses;
