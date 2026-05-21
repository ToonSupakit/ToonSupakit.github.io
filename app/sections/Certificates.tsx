"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ExternalLink, Calendar, Building2 } from "lucide-react";

interface Certificate {
  id: string;
  name: string;
  organization: string;
  date: string;
  description: string;
  image: string;
  link?: string;
}

interface CertificateCategory {
  category: string;
  certificates: Certificate[];
}

const certificateData: CertificateCategory[] = [
  {
    category: "Cisco & Networking",
    certificates: [
      {
        id: "ccna",
        name: "CCNA (Cisco Certified Network Associate) Training udemy",
        organization: "Udemy / Cisco",
        date: "2026",
        description: "Comprehensive CCNA course covering network fundamentals, routing, switching, and network automation.",
        image: "/certificates/Udemy_ccna by jodoi.jpg",
      },
      {
        id: "networking-basics",
        name: "Networking Basics",
        organization: "Cisco Networking Academy",
        date: "2026",
        description: "Introduction to networking concepts, OSI model, TCP/IP, and basic network configuration.",
        image: "/certificates/Networking_Basics_certificate.jpg",
      },
      {
        id: "network-architecture",
        name: "Network Architecture Fundamentals",
        organization: "Cisco Networking Academy",
        date: "2026",
        description: "Understanding network design principles, topologies, and architecture best practices.",
        image: "/certificates/Network Architecture Fundamentals.jpeg",
      },
      {
        id: "bits-bytes",
        name: "The Bits and Bytes of Computer Networking",
        organization: "Google / Coursera",
        date: "2026",
        description: "Deep dive into how computer networks function, from physical layer to application layer.",
        image: "/certificates/The Bits and Bytes of computer networking.jpeg",
      },
    ],
  },
  {
    category: "Cloud & Security",
    certificates: [
      {
        id: "sc900",
        name: "Microsoft SC-900 Exam Preparation",
        organization: "Microsoft",
        date: "2026",
        description: "Security, Compliance, and Identity fundamentals across cloud-based Microsoft services.",
        image: "/certificates/Microsoft SC-900 Exam Preparation and Practice.jpeg",
      },
      {
        id: "Ethical Hacker",
        name: "Ethical Hacker",
        organization: "Cisco Networking Academy",
        date: "2026",
        description: "It teaches you to identify network vulnerabilities and apply security measures to defend against cyber attacks.",
        image: "/certificates/Ethical_Hacker_certificate (2)_page-0001.jpg",
      },
    ],
  },
];

function CertificateCard({ 
  certificate, 
  onClick 
}: { 
  certificate: Certificate; 
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group cursor-pointer rounded-xl overflow-hidden border border-slate-200/60 dark:border-slate-800/60 hover:border-blue-400/50 dark:hover:border-blue-600/40 transition-all duration-300"
    >
      {/* Certificate Image */}
      <div className="relative h-56 bg-slate-100 dark:bg-slate-700 overflow-hidden">
        <img
          src={certificate.image}
          alt={certificate.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).parentElement?.querySelector('.fallback')?.classList.remove('hidden');
          }}
        />
        <div className="fallback hidden absolute inset-0 flex items-center justify-center text-slate-400">
          <div className="text-center px-4">
            <Award className="w-20 h-20 mx-auto mb-3 opacity-50" />
            <p className="text-base font-medium">{certificate.name}</p>
          </div>
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300" />
      </div>
      
      {/* Certificate Info */}
      <div className="p-5">
        <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200 mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {certificate.name}
        </h4>
        <div className="flex items-center gap-4 text-base text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            {certificate.organization}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {certificate.date}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function CertificateModal({ 
  certificate, 
  onClose 
}: { 
  certificate: Certificate; 
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      />
      {/* Modal Container - Full screen flex center */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-lg pointer-events-auto"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700 sticky top-0 bg-white dark:bg-slate-800">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200">Certificate Details</h3>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6">
            {/* Certificate Image */}
            <div className="relative h-56 bg-slate-100 dark:bg-slate-700 rounded-xl overflow-hidden mb-6">
              <img
                src={certificate.image}
                alt={certificate.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const fallback = (e.target as HTMLImageElement).parentElement?.querySelector('.fallback');
                  fallback?.classList.remove('hidden');
                }}
              />
              <div className="fallback hidden absolute inset-0 flex items-center justify-center text-slate-400">
                <div className="text-center px-4">
                  <Award className="w-20 h-20 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">{certificate.name}</p>
                </div>
              </div>
            </div>
            
            {/* Details */}
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
              {certificate.name}
            </h2>
            
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4" />
                {certificate.organization}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {certificate.date}
              </span>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {certificate.description}
            </p>
            
            {/* Action Button */}
            {certificate.link && (
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Certificate
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  </>
  );
}

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="pt-0 pb-0 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-4">
          
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Certificates
          </h2>
        </div>

        <div className="space-y-10">
          {certificateData.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-slate-300 dark:bg-slate-600" />
                {category.category}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {category.certificates.map((cert) => (
                  <CertificateCard 
                    key={cert.id} 
                    certificate={cert} 
                    onClick={() => setSelectedCert(cert)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <CertificateModal 
            certificate={selectedCert} 
            onClose={() => setSelectedCert(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

