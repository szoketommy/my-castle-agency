/*
 * Design: "Architectural Blueprint" — Asymmetric 55/45 split hero.
 * Left: headline + sub + CTA. Right: isometric fortress illustration.
 * Palette: Off-white #F5F3EF, Navy #0A1628, Burnt Orange #E8652A, Stone #9B9590
 */
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(#0A1628 1px, transparent 1px), linear-gradient(90deg, #0A1628 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0A1628]/5 border border-[#0A1628]/10 rounded-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-[#E8652A] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0A1628]/60" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                A CASTEL.SOLUTIONS Division
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-[#0A1628] mb-6">
              RevOps-Powered{" "}
              <span className="relative">
                Marketing
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#E8652A]" />
              </span>{" "}
              Infrastructure
            </h1>

            <p className="text-lg lg:text-xl text-[#9B9590] max-w-xl mb-10 leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              We build marketing infrastructure on revenue operations foundations.
              Specialized cells, unified revenue engine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E8652A] text-white font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-[#D05520] transition-all duration-200 shadow-lg hover:shadow-xl group"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Schedule a Strategy Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#0A1628]/15 text-[#0A1628] font-bold text-sm uppercase tracking-wider rounded-sm hover:border-[#0A1628]/30 hover:bg-[#0A1628]/5 transition-all duration-200"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Explore Our Cells
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-[#0A1628]/10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#9B9590] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Integrated with
              </p>
              <div className="flex flex-wrap gap-6 items-center text-[#0A1628]/30">
                {["HubSpot", "Salesforce", "Pipedrive", "Scoreapp"].map((name) => (
                  <span key={name} className="text-sm font-bold tracking-wide" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Fortress Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative">
              {/* Blueprint annotation lines */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#0A1628]/10" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#0A1628]/10" />

              <img
                src={IMAGES.heroFortress}
                alt="Digital Fortress - RevOps Infrastructure"
                className="w-full h-auto rounded-sm"
              />

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-sm shadow-xl border-l-4 border-[#E8652A]"
              >
                <p className="text-3xl font-bold text-[#0A1628]" style={{ fontFamily: "'DM Serif Display', serif" }}>$2.3M+</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#9B9590]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Avg. Pipeline Generated
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
