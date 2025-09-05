import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ananya Gupta",
    role: "Software Engineer @ Amazon",
    text: "Coding Ninjas helped me build strong fundamentals in DSA and crack my dream job.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Sharma",
    role: "SDE @ Microsoft",
    text: "The structured courses and mock interviews boosted my confidence.",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Priya Verma",
    role: "Frontend Developer @ Swiggy",
    text: "Projects and assignments gave me real-world exposure. Highly recommend!",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 px-6 bg-white">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
      Student Success Stories
    </h2>
    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl"
        >
          <img
            src={t.img}
            alt={t.name}
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-orange-500"
          />
          <p className="text-gray-700 italic mb-4">"{t.text}"</p>
          <h4 className="text-lg font-semibold text-orange-600">{t.name}</h4>
          <p className="text-gray-500">{t.role}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Testimonials;
