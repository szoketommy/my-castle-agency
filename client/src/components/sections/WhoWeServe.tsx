/*
 * Design: "Architectural Blueprint" — Industries served.
 * Horizontal cards with icons.
 */
import { motion } from "framer-motion";
import { INDUSTRIES } from "@/lib/constants";
import { Monitor, ShoppingCart, Layers, Briefcase, TrendingUp } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-6 h-6" />,
  ShoppingCart: <ShoppingCart className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
};

export default function WhoWeServe() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8652A] mb-4 block" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Who We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0A1628] mb-6">
            Built for Revenue-Focused Organizations
          </h2>
          <p className="text-lg text-[#9B9590] leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Whether you're a B2B SaaS company, an e-commerce brand, or a PE portfolio — our cell model
            adapts to your revenue architecture.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-white border border-[#E8E4DE] p-7 rounded-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#E8652A]/5 text-[#E8652A] rounded-sm mb-5 group-hover:bg-[#E8652A] group-hover:text-white transition-colors">
                {iconMap[ind.icon]}
              </div>
              <h4 className="text-xl text-[#0A1628] mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>
                {ind.title}
              </h4>
              <p className="text-sm text-[#9B9590] leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {ind.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
