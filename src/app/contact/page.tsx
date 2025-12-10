"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email using EmailJS or similar service
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "unnati.foundation2011@gmail.com",
          subject: `New Inquiry: ${formData.subject}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setMessage("Thank you! Your message has been sent successfully. We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setMessage(""), 5000);
      } else {
        setMessage("Error sending message. Please try again or contact us directly.");
      }
    } catch (error) {
      setMessage("Error sending message. Please contact us directly at unnati.foundation2011@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello, I want to donate for your foundation");
    window.open(`https://wa.me/919579076970?text=${message}`, "_blank");
  };

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
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-sand/90">
              We'd love to hear from you. Reach out to learn more about our programs or to get involved.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-ink mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink mb-1">Phone</h3>
                    <p className="text-slate">+91 9579076970</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink mb-1">Email</h3>
                    <p className="text-slate break-all">unnati.foundation2011@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink mb-1">Address</h3>
                    <p className="text-slate">
                      Dr. Ambedkar Ward, Behind Z.P. School<br />
                      Ganeshpur, Bhandara<br />
                      Po-Bhandara, Tahsil-Bhandara<br />
                      District-Bhandara, Maharashtra - 441904
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-sand/50 p-6 rounded-xl">
                <h3 className="font-bold text-ink mb-3">Office Hours</h3>
                <p className="text-slate text-sm mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-slate text-sm mb-2">Saturday: 9:00 AM - 2:00 PM</p>
                <p className="text-slate text-sm">Sunday: Closed</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-sand/50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-ink mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-ink mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-orange-dark disabled:bg-slate/50 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                  {message && (
                    <div className={`p-4 rounded-lg text-sm ${message.includes("successfully") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                      {message}
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-dark to-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Support Our Cause</h2>
            <p className="text-lg text-sand/90 mb-8 max-w-2xl mx-auto">
              Your contributions help us continue our mission of empowering communities and creating lasting positive change.
            </p>
            <button 
              onClick={openWhatsApp}
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-orange-dark transition-colors font-medium flex items-center justify-center gap-2 mx-auto"
            >
              💚 Donate via WhatsApp
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
