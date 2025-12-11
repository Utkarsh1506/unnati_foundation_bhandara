"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-sand border-t border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 mb-4">
              <Image 
                src="/static/unnati_NGO logo.jpg" 
                alt="Unnati Foundation Logo" 
                width={48} 
                height={48}
                className="object-contain"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">Unnati Foundation Bhandara</h3>
            <p className="text-lg text-sand/70 mb-4">
              UNNATI BAHUUDDESHIYA KALYANKARI SAMAJIK SANSHTA BHANDARA
            </p>
            <p className="text-sand/70 text-sm leading-relaxed mb-3">
              Empowering communities through education, women empowerment, and rural development programs across Maharashtra.
            </p>
            <p className="text-sand/60 text-xs">
              Registered under The Societies Registration Act, 1860<br />
              Registration No: 178/2011 (Bhandara) | PAN: AAATU5277F
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sand/70 hover:text-sand text-sm transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="text-sand/70 hover:text-sand text-sm transition-colors">Programs</Link></li>
              <li><Link href="/gallery" className="text-sand/70 hover:text-sand text-sm transition-colors">Gallery</Link></li>
              <li><Link href="/team" className="text-sand/70 hover:text-sand text-sm transition-colors">Our Team</Link></li>
              <li><Link href="/documents" className="text-sand/70 hover:text-sand text-sm transition-colors">Documents</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-sand/70">
              <li className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <span>+91 9579076970</span>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <span>unnati.foundation2011@gmail.com</span>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Dr. Ambedkar Ward, Behind Z.P. School<br />Ganeshpur, Bhandara<br />Maharashtra - 441904</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sand/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-sand/60">
            <p>&copy; {currentYear} Unnati Foundation Bhandara. All rights reserved.</p>
            <div className="flex flex-col md:flex-row md:justify-end gap-2">
              <p><span className="font-semibold">Registration:</span> 178/2011 (Bhandara)</p>
              <p><span className="font-semibold">PAN:</span> AAATU5277F</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
