import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import MatrixRain from "../components/MatrixRain";
import ClickBurst from "../components/ClickBurst";

export default function MainLayout() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <MatrixRain />
      <ClickBurst />
      <Navbar />

      <div className="relative z-10">
        <Outlet />
      </div>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        Built with React, TypeScript, Tailwind CSS & Framer Motion ©{" "}
        {new Date().getFullYear()} Ismail Siklodi
      </footer>
    </main>
  );
}