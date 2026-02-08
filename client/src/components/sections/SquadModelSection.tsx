/*
 * Design: "Architectural Blueprint" — How the Squad Model Works.
 * Two-column: autonomous operation + unified integration, with diagram.
 */
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { Zap, Database, BarChart3, Users } from "lucide-react";

const autonomous = [
  { icon: <Users className="w-5 h-5" />, title: "Dedicated Specialist Team", desc: "5+ years platform expertise" },
  { icon: <BarChart3 className="w-5 h-5" />, title: "P&L Ownership", desc: "Entrepreneurial accountability" },
  { icon: <Zap className="w-5 h-5" />, title: "Own Processes & Tools", desc: "Optimized for their channel" },
  { icon: <Users className="w-5 h-5" />, title: "Direct Client Relationships", desc: "Fast decisions, no bureaucracy" },
];

const unified = [
  { icon: <Database className="w-5 h-5" />, title: "Shared CRM", desc: "All customer data in one place" },
  { icon: <Zap className="w-5 h-5" />, title: "Unified Marketing Automation", desc: "Cross-channel orchestration" },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Revenue Attribution System", desc: "First touch to closed/won" },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Centralized BI & Reporting", desc: "Single source of truth" },
];

export default function SquadModelSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8652A] mb-4 block" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            The Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0A1628] mb-6">
            How the Squad Model Works
          </h2>
          <p className="text-lg text-[#9B9590] leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Inspired by Spotify's squad model and Haier's entrepreneurial cell structure — decentralized
            execution with centralized intelligence.
          </p>
        </motion.div>

        {/* Squad Model Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#E8652A]/30" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#E8652A]/30" />
            <img
              src={IMAGES.cellModelDiagram}
              alt="Autonomous Squad Network Architecture"
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </motion.div>

        {/* Two-column details */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Autonomous Operation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl text-[#0A1628] mb-8 flex items-center gap-3" style={{ fontFamily: "'DM Serif Display', serif" }}>
              <span className="w-10 h-10 flex items-center justify-center bg-[#0A1628] text-white rounded-sm text-sm font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>01</span>
              Autonomous Operation
            </h3>
            <div className="space-y-5">
              {autonomous.map((item) => (
                <div key={item.title} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#0A1628]/5 text-[#0A1628] rounded-sm shrink-0 group-hover:bg-[#E8652A]/10 group-hover:text-[#E8652A] transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-[#0A1628] text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.title}</p>
                    <p className="text-sm text-[#9B9590]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Unified Integration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-2xl text-[#0A1628] mb-8 flex items-center gap-3" style={{ fontFamily: "'DM Serif Display', serif" }}>
              <span className="w-10 h-10 flex items-center justify-center bg-[#E8652A] text-white rounded-sm text-sm font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>02</span>
              Unified Integration
            </h3>
            <div className="space-y-5">
              {unified.map((item) => (
                <div key={item.title} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#E8652A]/5 text-[#E8652A] rounded-sm shrink-0 group-hover:bg-[#E8652A]/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-[#0A1628] text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.title}</p>
                    <p className="text-sm text-[#9B9590]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Result callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto text-center bg-white border border-[#E8E4DE] p-8 rounded-sm"
        >
          <p className="text-xl text-[#0A1628]" style={{ fontFamily: "'DM Serif Display', serif" }}>
            <span className="text-[#E8652A]">Result:</span> You get specialized execution + integrated intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
