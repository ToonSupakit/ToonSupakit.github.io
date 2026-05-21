"use client";

import { AnimatedSection } from "@/components/animated-section";
import { GraduationCap, MapPin, Award } from "lucide-react";

export default function Education() {
  return (
    <section className="pt-0 pb-0">
      <div>
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Education
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg">
                <GraduationCap className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-1">
                  Mae Fah Luang University
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  Applied Digital Technology (ADT) - Computer Engineering
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Chiang Rai, Thailand
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    GPA: 3.27/4.00
                  </span>
                </div>
                {/* <p className="mt-4 text-slate-600 dark:text-slate-400">
                  Major in Computer Engineering with focus on network systems, 
                  automation, and software development.
                </p> */}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
