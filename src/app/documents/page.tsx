"use client";

import { motion } from "framer-motion";
import { Download, FileText, Shield, Award } from "lucide-react";

export default function DocumentsPage() {
  const documents = [
    {
      category: "Registration Certificates",
      items: [
        {
          title: "Society Registration Certificate",
          description: "Registered under The Societies Registration Act, 1860",
          details: "Registration Number: 178/2011 (Bhandara)",
          icon: Award,
          file: "/documents/society-registration.pdf"
        },
        {
          title: "Public Trust Registration",
          description: "Registered under the Mumbai Public Trust Act, 1950",
          details: "Registration Number: F-14122 (BHANDARA)",
          icon: Shield,
          file: "/documents/public-trust.pdf"
        }
      ]
    },
    {
      category: "Tax Documents",
      items: [
        {
          title: "PAN Card",
          description: "Permanent Account Number",
          details: "PAN: AAATU5277F",
          icon: FileText,
          file: "/documents/pan-card.pdf"
        }
      ]
    },
    {
      category: "Organization Information",
      items: [
        {
          title: "Organization Profile",
          description: "Detailed information about Unnati Foundation",
          details: "Mission, Vision, and Programs",
          icon: FileText,
          file: "/documents/organization-profile.pdf"
        }
      ]
    }
  ];

  const registrationInfo = [
    {
      title: "Legal Name",
      value: "Unnati Bahuuddeshiya Kalyankari Samajik Sanstha"
    },
    {
      title: "Registration Act",
      value: "The Societies Registration Act, 1860"
    },
    {
      title: "Registration Number",
      value: "178/2011 (Bhandara)"
    },
    {
      title: "Public Trust Registration",
      value: "Mumbai Public Trust Act, 1950"
    },
    {
      title: "Trust Register Number",
      value: "F-14122 (BHANDARA)"
    },
    {
      title: "PAN Number",
      value: "AAATU5277F"
    },
    {
      title: "12A Certificate",
      value: "Application in Process"
    },
    {
      title: "80G Certificate",
      value: "Application in Process"
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
              Documents & <span className="text-primary">Certificates</span>
            </h1>
            <p className="text-lg text-sand/90">
              Official registration documents and certificates demonstrating our legal status and transparency
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
            className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 md:p-12 rounded-2xl mb-16"
          >
            <h2 className="text-3xl font-bold text-ink mb-8 text-center">Registration Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {registrationInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-4 rounded-lg"
                >
                  <p className="text-sm font-semibold text-slate mb-1">{info.title}</p>
                  <p className="text-base text-ink font-medium">{info.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-12">
            {documents.map((category, catIdx) => (
              <div key={catIdx}>
                <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6">{category.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-sand/50 p-6 rounded-xl hover:shadow-lg transition-all border border-slate/10"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-bold text-ink mb-1">{item.title}</h3>
                          <p className="text-sm text-slate mb-1">{item.description}</p>
                          <p className="text-xs text-primary font-semibold">{item.details}</p>
                        </div>
                      </div>
                      <button 
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-orange-dark transition-colors font-medium"
                        onClick={() => alert('Document will be available for download soon')}
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-sand/50 p-8 rounded-xl border border-primary/20"
          >
            <h2 className="text-xl font-bold text-ink mb-4">Transparency & Compliance</h2>
            <div className="space-y-3 text-slate">
              <p>
                <strong className="text-ink">12A Registration:</strong> Application under process. This certificate enables income tax exemption for the trust.
              </p>
              <p>
                <strong className="text-ink">80G Registration:</strong> Application under process. This certificate will allow donors to claim tax deductions on their contributions.
              </p>
              <p className="text-sm text-slate/70 pt-4 border-t border-slate/20">
                We are committed to maintaining complete transparency in our operations. All registration documents are available for verification. For any queries regarding our legal status or documentation, please contact us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
