/*
 * Design: "Architectural Blueprint" — Watchtower Metrics.
 * Tall vertical stat cards + RevOps impact list.
 */
import { motion } from "framer-motion";
import { PIPELINE_METRICS } from "@/lib/constants";
import { Target, Database, TrendingUp, UserCheck } from "lucide-react";

const revopsImpact = [
  { icon: <Target className="w-5 h-5" />, text: "Complete multi-touch attribution (every touchpoint → revenue)" },
  { icon: <Database className="w-5 h-5" />, text: "Unified customer data (marketing, sales, CS in one system)" },
  { icon: <TrendingUp className="w-5 h-5" />, text: "Predictable pipeline forecasting (historical data + lead scoring)" },
  { icon: <UserCheck className="w-5 h-5" />, text: "95%+ client retention (transparent results, clear ROI)" },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-24 lg:py-32 bg-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8652A] mb-4 block" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            The War Room
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Results That Matter
          </h2>
          <p className="text-lg text-white/50 leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Revenue metrics, not vanity metrics. Here's what our RevOps-powered approach delivers.
          </p>
        </motion.div>

        {/* Pipeline Metrics — Watchtower Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {PIPELINE_METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-6 rounded-sm text-center hover:bg-white/10 transition-colors group"
            >
              <p className="text-3xl lg:text-4xl font-bold text-[#E8652A] mb-3 group-hover:scale-105 transition-transform" style={{ fontFamily: "'DM Serif Display', serif" }}>
                {metric.value}
              </p>
              <p className="text-sm font-bold text-white/80 mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {metric.label}
              </p>
              <p className="text-xs text-white/40" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {metric.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

        {/* RevOps Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl text-white mb-8 text-center" style={{ fontFamily: "'DM Serif Display', serif" }}>
            RevOps Impact
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {revopsImpact.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-sm"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#E8652A]/20 text-[#E8652A] rounded-sm shrink-0">
                  {item.icon}
                </div>
                <p className="text-sm text-white/70 leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
