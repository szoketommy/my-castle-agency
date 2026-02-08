/*
 * Design: "Architectural Blueprint" — CASTEL.SOLUTIONS Ecosystem.
 * Fortress ecosystem illustration + benefit cards.
 */
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { Building2, Users, Eye, Puzzle, Award } from "lucide-react";

const benefits = [
  { icon: <Building2 className="w-5 h-5" />, title: "Enterprise RevOps Infrastructure", desc: "Fortune 500-level revenue operations without building it yourself." },
  { icon: <Users className="w-5 h-5" />, title: "Specialist Execution", desc: "Each channel handled by dedicated expert cell, not generalists." },
  { icon: <Eye className="w-5 h-5" />, title: "Unified Revenue View", desc: "Marketing, sales, CS data in one platform. First touch → renewal." },
  { icon: <Puzzle className="w-5 h-5" />, title: "Modular Scaling", desc: "Start with marketing, add sales ops, add CS — same RevOps backbone." },
  { icon: <Award className="w-5 h-5" />, title: "Proven Methodology", desc: "Spotify squad model + Haier cell structure + modern RevOps best practices." },
];

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-24 lg:py-32 bg-[#EDEAE5] relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#E8652A]/30" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#E8652A]/30" />
              <img
                src={IMAGES.ecosystemFortress}
                alt="CASTEL.SOLUTIONS Ecosystem"
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8652A] mb-4 block" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              The Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl text-[#0A1628] mb-6">
              Part of CASTEL.SOLUTIONS
            </h2>
            <p className="text-base text-[#9B9590] leading-relaxed mb-10" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              my-castle.agency operates within CASTEL.SOLUTIONS — a RevOps-as-a-Service holding company
              building specialized service brands on shared revenue operations infrastructure.
            </p>

            <div className="space-y-5">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-[#E8652A]/10 text-[#E8652A] rounded-sm shrink-0 group-hover:bg-[#E8652A] group-hover:text-white transition-colors">
                    {b.icon}
                  </div>
                  <div>
                    <p className="font-bold text-[#0A1628] text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{b.title}</p>
                    <p className="text-sm text-[#9B9590]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
