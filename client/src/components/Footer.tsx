/*
 * Design: "Architectural Blueprint" — Minimal fortress-themed footer.
 */
import { Castle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-white/5 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Castle className="w-6 h-6 text-[#E8652A]" />
            <span className="text-lg font-bold text-white" style={{ fontFamily: "'DM Serif Display', serif" }}>
              my-castle<span className="text-[#E8652A]">.agency</span>
            </span>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="text-sm text-white/40" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Marketing & Digital Services Division
            </p>
            <p className="text-xs text-white/25 mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              A CASTEL.SOLUTIONS Company
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-end gap-6">
            <a href="#services" className="text-xs font-semibold uppercase tracking-widest text-white/30 hover:text-[#E8652A] transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Services
            </a>
            <a href="#approach" className="text-xs font-semibold uppercase tracking-widest text-white/30 hover:text-[#E8652A] transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Approach
            </a>
            <a href="#contact" className="text-xs font-semibold uppercase tracking-widest text-white/30 hover:text-[#E8652A] transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-white/20" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            &copy; {new Date().getFullYear()} my-castle.agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
