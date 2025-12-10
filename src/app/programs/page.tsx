"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Users, Heart, Sprout, Eye, Shield, Droplet, Award } from "lucide-react";

export default function ProgramsPage() {
  const programs = [
    {
      icon: BookOpen,
      title: "Education Initiatives",
      description: "Providing quality education and learning resources to underprivileged children through book donations, scholarship programs, and learning centers.",
      features: [
        "Free book distribution programs",
        "Scholarship support for meritorious students",
        "After-school tutoring and mentoring",
        "Digital literacy programs"
      ],
      color: "primary"
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description: "Comprehensive programs to empower women through skill development, vocational training, and entrepreneurship opportunities.",
      features: [
        "Vocational training workshops",
        "Self-help group formation",
        "Microfinance support",
        "Leadership development programs"
      ],
      color: "secondary"
    },
    {
      icon: Heart,
      title: "Healthcare Services",
      description: "Free medical camps, health awareness programs, and preventive healthcare initiatives for underserved communities.",
      features: [
        "Regular medical check-up camps",
        "Eye check-up and treatment camps",
        "Blood donation drives",
        "Health awareness campaigns"
      ],
      color: "accent"
    },
    {
      icon: Sprout,
      title: "Environmental Conservation",
      description: "Tree plantation drives and environmental awareness programs to promote sustainable living and ecological balance.",
      features: [
        "Annual tree plantation drives",
        "Environmental awareness workshops",
        "Waste management initiatives",
        "Green community campaigns"
      ],
      color: "primary"
    },
    {
      icon: Shield,
      title: "Social Awareness Campaigns",
      description: "Programs addressing critical social issues including drug abuse prevention, women safety, and community health.",
      features: [
        "Drug-free awareness campaigns",
        "Women safety workshops",
        "Community health education",
        "Youth engagement programs"
      ],
      color: "secondary"
    },
    {
      icon: Award,
      title: "Labour Welfare",
      description: "Supporting workers' rights and welfare through awareness programs and support services.",
      features: [
        "Labour rights awareness",
        "Worker welfare programs",
        "Safety training workshops",
        "Support for marginalized workers"
      ],
      color: "accent"
    },
    {
      icon: Sprout,
      title: "Rural Development",
      description: "Infrastructure development and livelihood programs to improve quality of life in rural areas.",
      features: [
        "Livelihood skill development",
        "Agricultural support programs",
        "Infrastructure improvement",
        "Community resource centers"
      ],
      color: "primary"
    },
    {
      icon: Droplet,
      title: "Blood Donation Drives",
      description: "Regular blood donation camps to address critical blood supply needs in the region.",
      features: [
        "Quarterly blood donation camps",
        "Voluntary donor registration",
        "Emergency blood support",
        "Awareness about blood donation"
      ],
      color: "secondary"
    }
  ];

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
              Our <span className="text-primary">Programs</span>
            </h1>
            <p className="text-lg text-sand/90">
              Comprehensive initiatives designed to create lasting positive change through education, healthcare, empowerment, and community development
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sand/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <h3 className="text-2xl font-bold text-ink mb-3">{program.title}</h3>
                <p className="text-slate mb-6">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate">
                      <span className={`text-${program.color} mt-1`}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <p className="text-lg text-sand/90 mb-8 max-w-2xl mx-auto">
              Join us in making a difference. Volunteer, donate, or partner with us to create lasting positive change in communities.
            </p>
            <a href="/contact">
              <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-orange-dark transition-colors font-medium">
                Contact Us
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
