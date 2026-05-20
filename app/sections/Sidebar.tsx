"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="lg:fixed lg:w-[320px] xl:w-[360px] lg:top-24 space-y-4">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="space-y-4"
      >
      {/* Profile Image */}
      <div className="relative mx-auto sm:mx-0 w-fit">
        <div className="w-40 h-40 sm:w-44 sm:h-44 xl:w-48 xl:h-48 rounded-full shadow-2xl ring-8 ring-slate-200 dark:ring-slate-700 overflow-hidden bg-slate-200 dark:bg-slate-700">
          <img
            src="/profile.jpg"
            alt="Supakit Chusing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-xl -z-10" />
      </div>

    
      <div className="text-center sm:text-left space-y-3">
        
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 py-3">
          Supakit Chusing
        </h1>
        
        
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm pr-12">
          I am a Computer Engineering student focusing on networking, security, and automation. 
          I love turning complex network problems into working systems that are actually reliable 
          and secure. I’m passionate about learning new technologies and applying them to real-world challenges. :)
        </p>
        {/* Contact Badges */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-2">
          <a 
            href="https://github.com/ToonSupakit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-blue-50/70 dark:bg-blue-900/10 border border-blue-100/60 dark:border-blue-800/30 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-100/80 dark:hover:bg-blue-900/25 hover:text-blue-700 dark:hover:text-blue-300 transition-all text-sm"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a 
            href="https://linkedin.com/in/supakitt/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-blue-50/70 dark:bg-blue-900/10 border border-blue-100/60 dark:border-blue-800/30 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-100/80 dark:hover:bg-blue-900/25 hover:text-blue-700 dark:hover:text-blue-300 transition-all text-sm"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:toonmeraipao44@gmail.com"
            className="flex items-center gap-2 px-3 py-2 bg-blue-50/70 dark:bg-blue-900/10 border border-blue-100/60 dark:border-blue-800/30 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-100/80 dark:hover:bg-blue-900/25 hover:text-blue-700 dark:hover:text-blue-300 transition-all text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>toonmeraipao44@gmail.com</span>
          </a>
        </div>
      </div>
      </motion.div>
    </aside>
  );
}
