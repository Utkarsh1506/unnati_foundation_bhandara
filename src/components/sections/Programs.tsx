"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Heart, Sprout } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: "Education Initiatives",
      description: "Providing quality education and learning resources to underprivileged children and youth",
      color: "primary"
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description: "Skill development, vocational training, and entrepreneurship programs for women",
      color: "secondary"
    },
    {
      icon: Heart,
      title: "Healthcare Services",
      description: "Free medical camps, health awareness, and preventive healthcare programs",
      color: "accent"
    },
    {
      icon: Sprout,
      title: "Rural Development",
      description: "Sustainable livelihood programs and infrastructure development in rural areas",
      color: "primary"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sand/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Comprehensive initiatives designed to create lasting positive change in communities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-slate/10"
            >
              <program.icon className={`w-12 h-12 text-${program.color} mb-4`} />
              <h3 className="text-xl font-bold text-ink mb-3">{program.title}</h3>
              <p className="text-slate">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
