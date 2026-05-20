"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { Github, Network, Bot, Wind, Play, X } from "lucide-react";

const projects = [
  {
    title: "Enterprise Network Design",
    description:
      "Designed and deployed a dual-site enterprise network (HQ + Branch) spanning 12 departments and 13 VLANs across Layer 2 and Layer 3 infrastructure.",
    icon: Network,
    achievements: [
      "Configured OSPF Area 0 on routers and Layer 3 switches with route summarization, reducing routing table size and improving convergence.",
      "Implemented a site-to-site IPSec VPN tunnel (AES-256, DH Group 5) over serial links between HQ and Branch routers; verified encrypted traffic with 0% packet loss.",
      "Deployed Inter-VLAN routing via SVIs on dual multilayer switches (3560) with DHCP relay (ip helper-address) forwarding requests to a centralized server.",
      "Configured PAT (NAT Overload) with dual ISP failover (floating static route AD=70) to ensure internet connectivity redundancy."
    ],
    technologies: ["OSPF", "IPSec VPN", "VLAN", "DHCP Relay", "NAT", "Layer 3 Switch", "Cisco IOS"],
    githubUrl: "https://github.com/ToonSupakit/Enterprise-Hospital-Network",
    videoUrl: "/videos/cild-cisco.mp4",
  },
  {
    title: "Network AI Monitor",
    description:
      "Developed a network anomaly monitoring system that collects real-time interface metrics (load, error rates, uptime) using SNMPv2c/v3.",
    icon: Bot,
    achievements: [
      "Implemented an anomaly classification engine combining rule-based checks and a Machine Learning model (Isolation Forest) trained on historical network baselines.",
      "Built a real-time admin dashboard using Flask and Socket.IO for traffic visualization, user access control, and dynamic system configuration.",
      "Integrated an automated remediation loop via a Discord Bot, generating vendor-specific CLI commands (Cisco, MikroTik, Arista) via Netmiko to resolve network issues directly from alert buttons."
    ],
    technologies: ["Python", "Flask", "Scikit-Learn", "MySQL", "SQLAlchemy", "Netmiko", "SNMP", "Socket.IO"],
    githubUrl: "https://github.com/ToonSupakit/AI_Network",
    videoUrl: "/videos/clip-ai-network.mp4",
  },
  {
    title: "Smart Air & Automated System",
    description:
      "IoT system collecting real-time PM2.5, CO2, and temperature/humidity data via ESP32 sensors, with automated dual-fan ventilation control and a live web dashboard for air quality visualization.",
    icon: Wind,
    achievements: [
      "Developed firmware for ESP32 utilizing C++/Arduino to collect environmental telemetry data including PM2.5, CO2, temperature, and humidity.",
      "Implemented dynamic dual-fan ventilation automation logic based on real-time sensor readings and health safety thresholds.",
      "Built a high-performance Express & Node.js backend using Socket.IO to stream telemetry data instantly to a web dashboard.",
      "Integrated a MySQL database layer to log environmental data for historical visualization and analysis."
    ],
    technologies: ["ESP32", "C++", "Arduino", "Node.js", "Express", "Socket.IO", "MySQL", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/ToonSupakit/iot-project",
    videoUrl: "/videos/iot.mp4",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const techUrls: Record<string, string> = {
  "Python": "https://www.python.org/",
  "Netmiko": "https://github.com/ktbyers/netmiko",
  "MySQL": "https://www.mysql.com/",
  "SQLAlchemy": "https://www.sqlalchemy.org/",
  "YAML": "https://yaml.org/",
  "GNS3": "https://www.gns3.com/",
  "Cisco IOS": "https://www.cisco.com/c/en/us/products/ios-nx-os-software/index.html",
  "OSPF": "https://en.wikipedia.org/wiki/Open_Shortest_Path_First",
  "VLAN": "https://en.wikipedia.org/wiki/Virtual_LAN",
  "NAT": "https://en.wikipedia.org/wiki/Network_address_translation",
  "DHCP Relay": "https://en.wikipedia.org/wiki/DHCP_helper_address",
  "IPSec VPN": "https://en.wikipedia.org/wiki/IPsec",
  "Layer 3 Switch": "https://en.wikipedia.org/wiki/Layer_3_switch",
  "Flask": "https://flask.palletsprojects.com/",
  "Scikit-Learn": "https://scikit-learn.org/",
  "SNMP": "https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol",
  "Socket.IO": "https://socket.io/",
  "ESP32": "https://www.espressif.com/en/products/socs/esp32",
  "C++": "https://en.cppreference.com/",
  "Arduino": "https://www.arduino.cc/",
  "Node.js": "https://nodejs.org/",
  "Express": "https://expressjs.com/",
  "HTML": "https://developer.mozilla.org/en-US/docs/Web/HTML",
  "CSS": "https://developer.mozilla.org/en-US/docs/Web/CSS",
  "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
};

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [videoTitle, setVideoTitle] = useState<string>("");

  return (
    <section id="projects" className="pt-0 pb-0">
      <div>
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Selected projects showcasing my expertise in networking and automation
          </p>
        </AnimatedSection>
 
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 dark:bg-blue-950/40 rounded-lg">
                    <project.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2.5">
                  {project.videoUrl && (
                    <button
                      onClick={() => {
                        setActiveVideo(project.videoUrl);
                        setVideoTitle(project.title);
                      }}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-all duration-200 shadow-sm shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-95"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>Watch Demo</span>
                    </button>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 active:scale-95"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
 
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {project.description}
              </p>
 
              <div className="space-y-3 mb-6">
                {project.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-400 dark:bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
 
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <a
                    key={tech}
                    href={techUrls[tech] || `https://en.wikipedia.org/wiki/${encodeURIComponent(tech)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-xs font-semibold bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/40 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 hover:scale-105 transition-all duration-200"
                  >
                    {tech}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">
                  Demo: {videoTitle}
                </h3>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1 rounded-full text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Container */}
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <video
                  src={activeVideo}
                  controls
                  autoPlay
                  className="w-full h-full max-h-[70vh] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
