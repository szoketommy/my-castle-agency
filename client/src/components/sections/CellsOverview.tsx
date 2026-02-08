/*
 * Design: "Architectural Blueprint" — Stone block cards with thick left borders.
 * Foundation Cells (larger) + Growth Cells (compact grid).
 */
import { motion } from "framer-motion";
import { FOUNDATION_CELLS, GROWTH_CELLS } from "@/lib/constants";
import {
  Shield, MessageSquare, MapPin,
  Linkedin, Video, Image, Users, Twitter,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-6 h-6" />,
  MessageSquare: <MessageSquare className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
  Linkedin: <Linkedin className="w-6 h-6" />,
  Video: <Video className="w-6 h-6" />,
  Image: <Image className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Twitter: <Twitter className="w-6 h-6" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function CellsOverview() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8652A] mb-4 block" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            The Armory
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0A1628] mb-6">
            Specialized Cells, Unified Revenue Engine
          </h2>
          <p className="text-lg text-[#9B9590] leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Unlike traditional agencies that operate in silos, we've architected autonomous specialist
            cells that integrate directly with your revenue operations. Each cell is a self-contained
            team with deep platform expertise.
          </p>
        </motion.div>

        {/* Foundation Cells */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A1628]/40 mb-8 flex items-center gap-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span className="w-8 h-px bg-[#0A1628]/20" />
            Foundation Cells — Revenue Infrastructure
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {FOUNDATION_CELLS.map((cell, i) => (
              <motion.div
                key={cell.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-white border border-[#E8E4DE] border-l-4 border-l-[#0A1628] p-7 rounded-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#0A1628]/5 text-[#0A1628] rounded-sm mb-5 group-hover:bg-[#E8652A]/10 group-hover:text-[#E8652A] transition-colors">
                  {iconMap[cell.icon]}
                </div>
                <h4 className="text-xl text-[#0A1628] mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>
                  {cell.title}
                </h4>
                <p className="text-sm text-[#9B9590] mb-5 leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {cell.description}
                </p>
                <ul className="space-y-2 mb-5">
                  {cell.features.map((f) => (
                    <li key={f} className="text-sm text-[#0A1628]/70 flex items-start gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8652A] mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-[#E8E4DE]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#E8652A]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Integration
                  </p>
                  <p className="text-sm text-[#0A1628]/60 mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {cell.integration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Growth Cells */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A1628]/40 mb-8 flex items-center gap-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span className="w-8 h-px bg-[#0A1628]/20" />
            Growth Cells — Channel Specialists
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {GROWTH_CELLS.map((cell, i) => (
              <motion.div
                key={cell.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-white border border-[#E8E4DE] border-l-4 border-l-[#E8652A] p-6 rounded-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#E8652A]/5 text-[#E8652A] rounded-sm mb-4 group-hover:bg-[#E8652A] group-hover:text-white transition-colors">
                  {iconMap[cell.icon]}
                </div>
                <h4 className="text-lg text-[#0A1628] mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>
                  {cell.title}
                </h4>
                <p className="text-sm text-[#9B9590] mb-4 leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {cell.description}
                </p>
                <div className="pt-3 border-t border-[#E8E4DE]">
                  <p className="text-xs font-bold text-[#E8652A] flex items-center gap-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Attribution <ArrowRight className="w-3 h-3" />
                  </p>
                  <p className="text-xs text-[#0A1628]/50 mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {cell.attribution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
