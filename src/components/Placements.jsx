import React from "react";

const placements = [
  { category: "Avg. Hike", value: "128%" },
  { category: "Hiring Companies", value: "1,200+" },
  { category: "Placement Rate", value: "95%" },
];

const Placements = () => (
  <section id="placements" className="py-16 px-6 bg-white">
    <h2 className="text-3xl font-bold text-center mb-12">Placements You Can Trust</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {placements.map((p, idx) => (
        <div key={idx} className="text-center">
          <h3 className="text-4xl font-bold text-blue-600">{p.value}</h3>
          <p className="mt-2 text-gray-700">{p.category}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Placements;
