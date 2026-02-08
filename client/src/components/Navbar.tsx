import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X, Castle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5F3EF]/95 backdrop-blur-md shadow-sm border-b border-[#E8E4DE]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-18">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Castle className="w-7 h-7 text-[#E8652A] transition-transform group-hover:scale-105" />
          <span className="text-xl font-bold tracking-tight text-[#0A1628]" style={{ fontFamily: "'DM Serif Display', serif" }}>
            my-castle<span className="text-[#E8652A]">.agency</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-widest text-[#0A1628]/70 hover:text-[#E8652A] transition-colors duration-200"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-6 py-2.5 bg-[#E8652A] text-white text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-[#D05520] transition-colors duration-200 shadow-md hover:shadow-lg"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Strategy Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-[#0A1628]"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#F5F3EF] border-t border-[#E8E4DE] overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-widest text-[#0A1628]/70 hover:text-[#E8652A] transition-colors py-2"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 px-6 py-3 bg-[#E8652A] text-white text-sm font-bold uppercase tracking-wider rounded-sm text-center"
                onClick={() => setIsMobileOpen(false)}
              >
                Strategy Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
