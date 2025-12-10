"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            Get <span className="text-primary">In Touch</span>
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto mb-8">
            Join us in making a difference. Contact us to learn more about our programs or to volunteer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-sand/50 p-6 rounded-xl text-center"
          >
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-ink mb-2">Phone</h3>
            <p className="text-slate">+91 9579076970</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-sand/50 p-6 rounded-xl text-center"
          >
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-ink mb-2">Email</h3>
            <p className="text-slate text-sm">unnati.foundation2011@gmail.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-sand/50 p-6 rounded-xl text-center"
          >
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-ink mb-2">Address</h3>
            <p className="text-slate text-sm">
              Dr. Ambedkar Ward, Behind Z.P. School<br />
              Ganeshpur, Bhandara<br />
              Maharashtra - 441904
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/contact">
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-orange-dark transition-colors font-medium">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
