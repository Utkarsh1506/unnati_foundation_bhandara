"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-ink via-purple-dark to-ink">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="px-4 py-2 bg-sand/10 border border-primary/30 rounded-full text-sm font-medium text-sand">
              ✓ Education • Women Empowerment • Rural Development
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Building a{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Brighter Future
            </span>
            {" "}for Every Community
          </h1>

          <p className="text-lg md:text-xl text-sand/90 mb-8 leading-relaxed max-w-2xl">
            Unnati Foundation Bhandara works tirelessly to empower communities through education, women's empowerment, healthcare, and sustainable rural development across Maharashtra.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/programs">
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-orange-dark transition-colors flex items-center gap-2 font-medium">
                Explore Programs
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors font-medium">
                Get Involved
              </button>
            </Link>
          </div>

          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 md:gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">5,000+</p>
              <p className="text-sm text-sand/70">Lives Impacted</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-sand/70">Villages Reached</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">15+</p>
              <p className="text-sm text-sand/70">Active Programs</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
