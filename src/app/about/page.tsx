"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Heart, Users, Shield, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-ink via-purple-dark to-ink text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-primary">Unnati Foundation</span>
            </h1>
            <p className="text-lg md:text-xl text-sand/90 leading-relaxed">
              UNNATI BAHUUDDESHIYA KALYANKARI SAMAJIK SANSHTA BHANDARA - A dedicated organization working towards comprehensive community development and social welfare across Maharashtra.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sand/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary"
            >
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-ink mb-4">Our Mission</h3>
              <p className="text-slate leading-relaxed">
                To empower communities through comprehensive social welfare programs, focusing on education, healthcare, women empowerment, and sustainable rural development across Maharashtra.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-secondary"
            >
              <Eye className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold text-ink mb-4">Our Vision</h3>
              <p className="text-slate leading-relaxed">
                A society where every individual has access to quality education, healthcare, and opportunities for growth, leading to sustainable and inclusive development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent"
            >
              <Heart className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-ink mb-4">Our Values</h3>
              <ul className="space-y-3 text-slate">
                <li className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                  Integrity & Transparency
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary flex-shrink-0" />
                  Community First
                </li>
                <li className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary flex-shrink-0" />
                  Innovation & Impact
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-sand/50 p-8 rounded-xl"
            >
              <h2 className="text-3xl font-bold text-ink mb-6">Who We Are</h2>
              <p className="text-lg text-slate mb-6 leading-relaxed">
                Unnati Bahuuddeshiya Kalyankari Samajik Sanstha Bhandara is a registered non-governmental organization dedicated to creating lasting positive change in communities across Maharashtra. Since our inception, we have been working tirelessly on various social development initiatives.
              </p>
              <p className="text-lg text-slate mb-6 leading-relaxed">
                Our work spans across multiple sectors including education, healthcare, women empowerment, environmental conservation, and rural development. We believe in a holistic approach to community development that addresses the root causes of social issues.
              </p>
              <p className="text-lg text-slate leading-relaxed">
                Through partnerships with local communities, government agencies, and other stakeholders, we have successfully implemented numerous programs that have positively impacted thousands of lives across Maharashtra.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-12 text-center">
            Why Choose <span className="text-primary">Unnati Foundation</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Comprehensive Approach",
                description: "We address multiple aspects of community development - education, health, empowerment, and environment - in an integrated manner."
              },
              {
                title: "Grassroots Presence",
                description: "Strong connections with local communities ensure our programs are relevant, effective, and sustainable."
              },
              {
                title: "Proven Track Record",
                description: "Years of successful program implementation with measurable outcomes and positive community impact."
              },
              {
                title: "Transparent Operations",
                description: "Complete accountability and transparency in all our operations, funding, and program implementation."
              },
              {
                title: "Dedicated Team",
                description: "Passionate volunteers and professionals committed to creating meaningful social change."
              },
              {
                title: "Community Participation",
                description: "Programs designed with active community involvement to ensure ownership and sustainability."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-sand/50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-slate">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
