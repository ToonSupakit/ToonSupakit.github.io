"use client";

import { AnimatedSection } from "@/components/animated-section";

export default function TechStack() {
  return (
    <section id="skills" className="pt-0 pb-0">
      <div>
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Skills
          </h2>
        </AnimatedSection>

        <div>
          <ul className="space-y-4 text-slate-500 dark:text-slate-400 list-disc list-outside pl-5 marker:text-black dark:marker:text-white">
            <li>
              <span className="font-bold text-black dark:text-white mr-1">Networking:</span> OSI Model, TCP/IP, IPv4/IPv6 Subnetting, VLSM, VLAN, Trunking, STP, EtherChannel, Port Security
            </li>
            <li>
              <span className="font-bold text-black dark:text-white mr-1">Routing Protocols:</span> Static Route, Default Route, EIGRP, OSPF, BGP
            </li>
            <li>
              <span className="font-bold text-black dark:text-white mr-1">Network Services & Security:</span> DHCP, NAT/PAT, ACLs, VPN, Network Security
            </li>
            <li>
              <span className="font-bold text-black dark:text-white mr-1">Network Tools:</span> Cisco Packet Tracer, GNS3, Wireshark, TFTP Server,
            </li>
            <li>
              <span className="font-bold text-black dark:text-white mr-1">Programming & Automation:</span> Python, JavaScript, HTML, NodeJS, MySQL
            </li>
            <li>
              <span className="font-bold text-black dark:text-white mr-1">Other:</span> Linux (Ubuntu), Windows
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
