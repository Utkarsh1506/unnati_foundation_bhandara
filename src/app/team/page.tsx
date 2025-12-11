"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Heart, Award, Mail, Phone } from "lucide-react";

const teamMembers = [
  {
    name: "Balkrushna Suratane",
    position: "President",
    image: "/static/Balkrushna_Suratane_President.jpg",
    email: "contact@unnati.org",
    phone: "+91 9665241122"
  },
  {
    name: "Jitendra Raghorte",
    position: "Vice President",
    image: "/static/Jitendra Raghorte - Joint Secretary.jpg",
    email: "contact@unnati.org",
    phone: "+91 XXXXXXXXXX"
  },
  {
    name: "Suhas Khobragade",
    position: "Secretary",
    image: "/static/Suhas_Khobragade_Secretary.jpg",
    email: "contact@unnati.org",
    phone: "+91 9049338626"
  },
  {
    name: "Kapil Ramteke",
    position: "Joint Secretary",
    image: "/static/Kapil Ramteke - Vice President.jpeg.jpg",
    email: "contact@unnati.org",
    phone: "+91 XXXXXXXXXX"
  },
  {
    name: "Radheshyam Kesalkar",
    position: "Treasurer",
    image: "/static/Radheshyam Kesalkar - Treasurer.jpg",
    email: "contact@unnati.org",
    phone: "+91 XXXXXXXXXX"
  },
  {
    name: "Hemantkumar Bramhankar",
    position: "Member",
    image: "/static/hemant kumar bramhankar - member.jpg",
    email: "contact@unnati.org",
    phone: "+91 XXXXXXXXXX"
  },
  {
    name: "Vijay Khangar",
    position: "Member",
    image: "/static/Vijay Khangar - member.jpg",
    email: "contact@unnati.org",
    phone: "+91 XXXXXXXXXX"
  }
];

export default function TeamPage() {
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
              Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-lg text-sand/90">
              Dedicated individuals working together to create positive change in communities across Maharashtra
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/static/Unnati Team & Volunteer.JPG"
                alt="Unnati Foundation Team and Volunteers"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <p className="text-center text-slate mt-6 text-lg">
              Our dedicated team of volunteers and professionals working towards community welfare
            </p>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-12 text-center">
            Leadership <span className="text-primary">Team</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-sand/50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[3/4] bg-slate/20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ink mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.position}</p>
                  <div className="space-y-2 text-sm text-slate">
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-primary flex-shrink-0" />
                      <span className="break-all">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-primary flex-shrink-0" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-ink mb-2">100+</h3>
              <p className="text-slate">Active Volunteers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Heart className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-ink mb-2">5,000+</h3>
              <p className="text-slate">Lives Impacted</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <Award className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-ink mb-2">50+</h3>
              <p className="text-slate">Successful Programs</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-sand/50 p-8 md:p-12 rounded-2xl max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-ink mb-6 text-center">Join Our Team</h2>
            <p className="text-lg text-slate text-center mb-8 leading-relaxed">
              We are always looking for passionate individuals who want to make a difference in their community. Whether you can volunteer regularly or contribute occasionally, your support matters.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-ink mb-2">Volunteers</h4>
                <p className="text-sm text-slate">Help us organize and execute programs</p>
              </div>
              <div>
                <h4 className="font-bold text-ink mb-2">Professionals</h4>
                <p className="text-sm text-slate">Share your expertise with communities</p>
              </div>
              <div>
                <h4 className="font-bold text-ink mb-2">Partners</h4>
                <p className="text-sm text-slate">Collaborate on social impact initiatives</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="/contact">
                <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-orange-dark transition-colors font-medium">
                  Get Involved
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
