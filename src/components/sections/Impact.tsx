"use client";

import { motion } from "framer-motion";

export default function Impact() {
  const stats = [
    { value: "5,000+", label: "Lives Impacted", description: "Through our various programs" },
    { value: "50+", label: "Villages", description: "Across Maharashtra" },
    { value: "15+", label: "Active Programs", description: "Running simultaneously" },
    { value: "100+", label: "Volunteers", description: "Dedicated team members" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-dark to-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-primary">Impact</span>
          </h2>
          <p className="text-lg text-sand/90 max-w-2xl mx-auto">
            Making a real difference in communities across Maharashtra through dedicated service and impactful programs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-lg font-semibold text-white mb-1">{stat.label}</p>
              <p className="text-sm text-sand/70">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
