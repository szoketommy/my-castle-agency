/*
 * Design: "Architectural Blueprint" — Modular Engagement steps.
 * Horizontal stepped process with fortress metaphor.
 */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Start with One Squad",
    description: "Example: LinkedIn Ads for B2B lead generation. Prove ROI with a single, focused engagement.",
    color: "bg-[#0A1628]",
  },
  {
    number: "02",
    title: "Add Squads Strategically",
    description: "Prove ROI, then add: TikTok (awareness) + Reddit (community) + X (thought leadership).",
    color: "bg-[#0A1628]",
  },
  {
    number: "03",
    title: "Integrate Seamlessly",
    description: "Every channel feeds unified RevOps. One customer view. Complete attribution.",
    color: "bg-[#E8652A]",
  },
  {
    number: "04",
    title: "Bundle & Save",
    description: "Engage 2+ cells: 15-20% savings + coordinated campaigns across channels.",
    color: "bg-[#E8652A]",
  },
];

export default function ModularEngagement() {
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
            Modular Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0A1628] mb-6">
            Build Your Fortress, One Tower at a Time
          </h2>
          <p className="text-lg text-[#9B9590] leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            No forced bundles. No generic proposals. Start small, prove value, then scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-white border border-[#E8E4DE] p-7 rounded-sm h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 ${step.color} text-white flex items-center justify-center rounded-sm mb-5 text-sm font-bold`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {step.number}
                </div>
                <h4 className="text-xl text-[#0A1628] mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>
                  {step.title}
                </h4>
                <p className="text-sm text-[#9B9590] leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {step.description}
                </p>
              </div>

              {/* Arrow connector (hidden on last item and mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-[#E8E4DE]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
