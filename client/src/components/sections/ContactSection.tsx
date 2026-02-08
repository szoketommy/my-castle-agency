/*
 * Design: "Architectural Blueprint" — The Gatehouse CTA.
 * Strategy call form + assessment details.
 */
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const assessments = [
  "Current revenue operations maturity",
  "Marketing infrastructure gaps",
  "Attribution & forecasting capabilities",
  "Recommended cell engagement strategy",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours to schedule your strategy call.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8652A] mb-4 block" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              The Gatehouse
            </span>
            <h2 className="text-3xl sm:text-4xl text-white mb-6">
              Ready to Build Marketing on RevOps Foundations?
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-10" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Most companies outgrow their marketing agencies because agencies aren't built on revenue
              operations. We're different — we're a division of a RevOps holding company.
            </p>

            <p className="text-sm font-bold uppercase tracking-wider text-white/70 mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              We'll assess your:
            </p>
            <div className="space-y-4 mb-10">
              {assessments.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E8652A] shrink-0" />
                  <span className="text-sm text-white/70" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
              <p className="text-sm text-white/50 italic" style={{ fontFamily: "'DM Serif Display', serif" }}>
                "No generic proposals. No forced bundles. Just honest RevOps architecture for predictable revenue growth."
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 rounded-sm">
              <h3 className="text-xl text-white mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
                Schedule a Strategy Call
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#E8652A] transition-colors placeholder:text-white/20"
                    placeholder="Your name"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#E8652A] transition-colors placeholder:text-white/20"
                    placeholder="you@company.com"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#E8652A] transition-colors placeholder:text-white/20"
                    placeholder="Company name"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Tell us about your goals
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#E8652A] transition-colors placeholder:text-white/20 resize-none"
                    placeholder="What are your current marketing challenges?"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#E8652A] text-white font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-[#D05520] transition-colors shadow-lg group"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Let's Build Your Revenue Engine
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
