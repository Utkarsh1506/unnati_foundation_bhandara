"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, Download } from "lucide-react";

const galleryImages = [
  { 
    src: "/static/1.jpg", 
    title: "Tree Plantation Drive", 
    category: "Environment",
    description: "उन्नति ग्रुप भंडारा की तरफ से पूर्व प्रेसिडेंट डॉ. ए. पी. जे. अब्दुल कलाम के जन्मदिन के मौके पर गणेशपुर गांव में पेड़ लगाने का प्रोग्राम"
  },
  { src: "/static/2.jpg", title: "Tree Plantation Program", category: "Environment" },
  { src: "/static/3.jpg", title: "Tree Plantation Event", category: "Environment" },
  { src: "/static/4.jpg", title: "Environmental Activity", category: "Environment" },
  { src: "/static/5.jpg", title: "Green Initiative", category: "Environment" },
  { src: "/static/6.jpg", title: "Plantation Drive", category: "Environment" },
  { src: "/static/7.jpg", title: "Tree Planting Campaign", category: "Environment" },
  { 
    src: "/static/8.jpg", 
    title: "Drug-Free Awareness Campaign", 
    category: "Social Awareness",
    description: "नशा मुक्ति विषय पर सामाजिक गतिविधि - उन्नती संस्था, अनुलोम और जिला पुलिस प्रशासन भंडारा के सहयोग से"
  },
  { src: "/static/9.jpg", title: "Social Awareness Program", category: "Social Awareness" },
  { src: "/static/10.jpg", title: "Community Awareness", category: "Social Awareness" },
  { src: "/static/11.jpg", title: "Drug-Free Initiative", category: "Social Awareness" },
  { src: "/static/12.jpg", title: "Police Collaboration Event", category: "Social Awareness" },
  { src: "/static/13.jpg", title: "Social Development Activity", category: "Social Awareness" },
  { src: "/static/14.jpg", title: "Awareness Rally", category: "Social Awareness" },
  { src: "/static/15.jpg", title: "Community Engagement", category: "Social Awareness" },
  { src: "/static/16.jpg", title: "Social Campaign", category: "Social Awareness" },
  { src: "/static/17.jpg", title: "Public Awareness Drive", category: "Social Awareness" },
  { src: "/static/18.jpg", title: "Community Program", category: "Social Awareness" },
  { 
    src: "/static/19.jpg", 
    title: "Rural Development & Women Empowerment", 
    category: "Women Development" 
  },
  { src: "/static/20.jpg", title: "Women Empowerment Program", category: "Women Development" },
  { src: "/static/21.jpg", title: "Rural Development Initiative", category: "Women Development" },
  { src: "/static/22.jpg", title: "Women Skill Development", category: "Women Development" },
  { 
    src: "/static/23.jpg", 
    title: "Health Program Rally", 
    category: "Healthcare" 
  },
  { src: "/static/24.jpg", title: "Health Awareness Campaign", category: "Healthcare" },
  { src: "/static/25.jpg", title: "Medical Rally", category: "Healthcare" },
  { src: "/static/26.jpg", title: "Health Initiative", category: "Healthcare" },
  { 
    src: "/static/27.jpg", 
    title: "Labour Welfare Programme", 
    category: "Community Service" 
  },
  { src: "/static/28.jpg", title: "Worker Welfare Program", category: "Community Service" },
  { src: "/static/29.jpg", title: "Labour Support Initiative", category: "Community Service" },
  { src: "/static/30.jpg", title: "Community Welfare", category: "Community Service" },
  { src: "/static/31.jpg", title: "Labour Rights Awareness", category: "Community Service" },
  { src: "/static/32.jpg", title: "Worker Support Program", category: "Community Service" },
  { src: "/static/Blood Donation Camp.jpg", title: "Blood Donation Camp", category: "Healthcare" },
  { src: "/static/Book Donation.jpg", title: "Book Donation Drive", category: "Education" },
  { src: "/static/eye_checkup_camp.jpg", title: "Eye Checkup Camp", category: "Healthcare" },
  { src: "/static/Unnati Team & Volunteer.JPG", title: "Unnati Team & Volunteers", category: "Team" },
];

const categories = ["All", "Environment", "Social Awareness", "Women Development", "Healthcare", "Community Service", "Education", "Team"];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      <section className="bg-gradient-to-br from-purple-dark to-ink text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-lg text-sand/90">
              Witness our journey of creating positive change through community service, environmental conservation, and social development
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-md scale-105"
                    : "bg-white text-ink hover:bg-primary/10 border border-primary/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-sand/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="relative aspect-square cursor-pointer group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm mb-1">{image.title}</p>
                    <span className="inline-block px-2 py-1 bg-primary text-white text-xs font-semibold rounded">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-ink/50 hover:bg-ink/70 rounded-full p-3 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={24} />
          </button>

          <div className="relative max-w-7xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
            <div className="absolute bottom-4 left-4 right-4 bg-ink/80 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-white font-bold text-lg mb-1">{filteredImages[selectedImage].title}</h3>
              {filteredImages[selectedImage].description && (
                <p className="text-sand/90 text-sm">{filteredImages[selectedImage].description}</p>
              )}
            </div>
          </div>

          <a
            href={filteredImages[selectedImage].src}
            download
            className="absolute bottom-4 right-4 text-white bg-primary hover:bg-orange-dark rounded-full p-3 transition-colors z-10 flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <Download size={20} />
          </a>
        </motion.div>
      )}
    </>
  );
}
