"use client";

import { motion } from "framer-motion";
import { Heart, Users, Lightbulb, Target } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Working with empathy and dedication for community welfare"
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "Enabling individuals and communities to achieve their potential"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Creative solutions for sustainable social development"
    },
    {
      icon: Target,
      title: "Impact",
      description: "Measurable outcomes that transform lives"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            About <span className="text-primary">Unnati Foundation</span>
          </h2>
          <p className="text-lg text-slate max-w-3xl mx-auto">
            Unnati Bahuuddeshiya Kalyankari Samajik Sanstha Bhandara is dedicated to uplifting communities through comprehensive social welfare programs focused on education, women empowerment, healthcare, and rural development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-sand/50 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <value.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">{value.title}</h3>
              <p className="text-slate">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
