"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Eye, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services",
    submenu: [
      { name: "ATCC", href: "/services#atcc" },
      { name: "Turning Movement Count", href: "/services#tmc" },
      { name: "Roundabout Counts", href: "/services#roundabout" },
      { name: "ANPR Count", href: "/services#anpr" },
      { name: "View All Services", href: "/services" },
    ]
   },
  { name: "Projects", href: "/projects" },
  { name: "News", href: "/news" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [pathname]);

  return (
    <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut"}}
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled?
      "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
      : "bg-transparent"
    }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 bg-gradient-to-br from-accent to-cyan rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <Eye className="w-5 h-5 text-white" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-cyan rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
            </div>
            <div>
              <span className="text-xl font-bold font-[family-name:var(--font-heading)]">
                <span className={scrolled ? "text-primary" : "text-white"}>Road</span>
                <span className="text-accent">Lens</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative"
              onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
              onMouseLeave={() => setActiveSubmenu(null)}>
                <Link
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                  pathname === link.href
                    ? "text-accent"
                    :scrolled
                    ? "text-primary-light hover:text-accent hover:bg-accent/5"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                >{link.name}
                {link.submenu && <ChevronDown className="w-3 h-3" />}
              </Link>

              {/* Submenu */}
                <AnimatePresence>
                  {link.submenu && activeSubmenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-60 bg-white rounded-2xl shadow-black/10 border border-gray-100 overflow-hidden"
                    >
                      <div className="p-2">
                      {link.submenu.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-accent hover:bg-accent/5 rounded-lx transition-colors"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                </div>
            ))}
          </nav>
          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/contact"
            className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-accent to-accent-dark text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-accent/25 transform hover:-translate-y-0.5 transition-all duration-300"
            >Get a quote </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled ? "text-primary hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        pathname === link.href
                          ? "text-accent bg-accent/5"
                          : "text-gray-700 hover:text-accent hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </Link>
              </div>
            ))}
            <div className="pt-3">
              <Link href="/contact"
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-accent to-accent-dark text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-accent/25 transform hover:-translate-y-0.5 transition-all duration-300"
              >Get a quote </Link>
            </div>
            </div>
            </motion.div>
        )}
        </AnimatePresence>
    </motion.header>
  );
}