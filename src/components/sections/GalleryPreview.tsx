"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GalleryPreview() {
  const featuredImages = [
    { src: "/static/1.jpg", title: "Tree Plantation Drive" },
    { src: "/static/8.jpg", title: "Anti-Addiction Campaign" },
    { src: "/static/19.jpg", title: "Women Empowerment" },
    { src: "/static/23.jpg", title: "Health Program Rally" },
    { src: "/static/27.jpg", title: "Labour Welfare" },
    { src: "/static/Blood Donation Camp.jpg", title: "Blood Donation Camp" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Our <span className="text-primary">Activities</span>
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Glimpses of our community welfare initiatives and social development programs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {featuredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/gallery">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-orange-dark transition-colors font-medium">
              View Full Gallery
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
