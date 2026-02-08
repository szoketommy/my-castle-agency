/*
 * Design: "Architectural Blueprint" — Split comparison with illustration.
 * Traditional vs Castel approach side-by-side.
 */
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { X, Check } from "lucide-react";

const traditional = [
  "Marketing operates in isolation",
  '"We drove 500 leads!" (no revenue visibility)',
  "Data scattered across tools",
  "No attribution to actual revenue",
  "Can't forecast pipeline accurately",
];

const castel = [
  "Marketing integrated with sales & CS (unified RevOps)",
  '"We generated $2.3M in attributed pipeline"',
  "All data in one platform (HubSpot, Salesforce, etc.)",
  "Complete multi-touch attribution (first touch → revenue)",
  "Predictable revenue forecasting (data-driven projections)",
];

export default function RevOpsDifference() {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-[#0A1628] relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
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
            The RevOps Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Revenue Metrics, Not Vanity Metrics
          </h2>
          <p className="text-lg text-white/50 leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Most companies outgrow their marketing agencies because agencies aren't built on revenue operations.
          </p>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <img
            src={IMAGES.revopsDifference}
            alt="Traditional agencies vs The Castel Approach"
            className="w-full h-auto rounded-sm"
          />
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 p-8 rounded-sm"
          >
            <h3 className="text-xl text-white/40 mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Traditional Agencies
            </h3>
            <ul className="space-y-4">
              {traditional.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <span className="text-sm text-white/50" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Castel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#E8652A]/10 border border-[#E8652A]/20 p-8 rounded-sm"
          >
            <h3 className="text-xl text-[#E8652A] mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
              The Castel Approach
            </h3>
            <ul className="space-y-4">
              {castel.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8652A]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#E8652A]" />
                  </div>
                  <span className="text-sm text-white/80" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
