import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Learn",
    desc: "Master programming with expert-led courses and structured roadmaps.",
  },
  {
    id: 2,
    title: "Excel",
    desc: "Sharpen your coding skills through real-world projects and challenges.",
  },
  {
    id: 3,
    title: "Stand Out",
    desc: "Crack top company interviews with placement assistance and mentorship.",
  },
];

const LearningModel = () => {
  return (
    <section id="learning" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
        The Coding Ninjas Learning Model
      </h2>

      <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3, duration: 0.6 }}
            className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition"
          >
            <div className="text-5xl font-extrabold text-orange-600 mb-4">
              {step.id}
            </div>
            <h3 className="text-xl font-semibold text-orange-600 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-700">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LearningModel;
