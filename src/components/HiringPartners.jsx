import React from "react";
import { motion } from "framer-motion";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
 "http://pluspng.com/img-png/google-logo-png-open-2000.png",
 "https://cdn.dribbble.com/userupload/6362921/file/original-36db1cd56963c3aac6ac2a28f2f9cb7c.png?resize=1024x1018",
  "https://companieslogo.com/img/orig/swiggy-893aaf3b.png?t=1699336580",
];

const HiringPartners = () => (
  <section id="partners" className="py-20 px-6 bg-gray-50 overflow-hidden">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
      Our Hiring Partners
    </h2>

    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "-100%" }}
      transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      className="flex gap-16 items-center"
    >
      {logos.map((logo, i) => (
        <img
          key={i}
          src={logo}
          alt="Partner Logo"
          className="h-12 md:h-16 object-contain"
        />
      ))}
    </motion.div>
  </section>
);

export default HiringPartners;
