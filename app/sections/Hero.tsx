"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-4 flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full shadow-2xl ring-8 ring-slate-200 dark:ring-slate-700 overflow-hidden bg-slate-200 dark:bg-slate-700">
                <img
                  src="/Portfolio/profile.jpg"
                  alt="Supakit Chusing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-8 text-center lg:text-left"
          >
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                Available for Internship
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Supakit Chusing
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-6">
              Network Engineering & Automation
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Seeking a Network Internship position to apply fundamental networking knowledge 
              including IP addressing, subnetting, routing, and network troubleshooting. 
              Highly motivated to learn real-world network operations and support tasks, 
              with a passion for automation and AI-driven solutions.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>Chiang Rai, Thailand</span>
              </div>
              <a 
                href="tel:0920943629"
                className="flex items-center gap-2 px-4 py-2 bg-blue-50/70 dark:bg-blue-900/10 border border-blue-100/60 dark:border-blue-800/30 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-100/80 dark:hover:bg-blue-900/25 hover:text-blue-700 dark:hover:text-blue-300 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>092-094-3629</span>
              </a>
              <a 
                href="mailto:toonmeraipao44@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-blue-50/70 dark:bg-blue-900/10 border border-blue-100/60 dark:border-blue-800/30 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-100/80 dark:hover:bg-blue-900/25 hover:text-blue-700 dark:hover:text-blue-300 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>toonmeraipao44@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
