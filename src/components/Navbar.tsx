import { NavLink } from "react-router-dom";
import { Terminal, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-black"
        >
          <Terminal className="h-6 w-6 text-cyan-300" />
          ISMAIL.DEV
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-300"
                  : "text-slate-300 transition hover:text-cyan-300"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="border-t border-white/10 bg-slate-950/95 px-5 py-5 md:hidden"
          >
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg font-semibold text-cyan-300"
                      : "text-lg text-slate-300 transition hover:text-cyan-300"
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}