import { NavLink } from "react-router-dom";
import { Terminal } from "lucide-react";

const links = [
  { name: "About", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <NavLink to="/" className="flex items-center gap-2 font-black">
          <Terminal className="h-6 w-6 text-cyan-300" />
          ISMAIL.DEV
        </NavLink>

        <div className="flex gap-4 text-sm md:gap-7">
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
      </div>
    </nav>
  );
}