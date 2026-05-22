"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="pt-0 pb-0">
      <div>
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            Get in Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Feel free to reach out for opportunities or collaborations
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:toonmeraipao44@gmail.com"
              className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all duration-300 group"
            >
              <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 transition-colors">
                <Mail className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                <p className="text-slate-900 dark:text-slate-100 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  toonmeraipao44@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:0920943629"
              className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all duration-300 group"
            >
              <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 transition-colors">
                <Phone className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                <p className="text-slate-900 dark:text-slate-100 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  092-094-3629
                </p>
              </div>
            </a>

            <a
              href="https://github.com/ToonSupakit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all duration-300 group"
            >
              <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 transition-colors">
                <Github className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">GitHub</p>
                <p className="text-slate-900 dark:text-slate-100 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  ToonSupakit
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/supakit1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all duration-300 group"
            >
              <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 transition-colors">
                <Linkedin className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
                <p className="text-slate-900 dark:text-slate-100 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  supakitt
                </p>
              </div>
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Supakit Chusing. All rights reserved.
            </p>
            
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
