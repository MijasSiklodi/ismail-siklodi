import { Outlet } from "react-router-dom";
import { useEffect, useState, Suspense } from "react";
import Navbar from "../components/Navbar";
import MatrixRain from "../components/MatrixRain";
import ClickBurst from "../components/ClickBurst";

export default function MainLayout() {
  const [enableAnimations, setEnableAnimations] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEnableAnimations(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      {enableAnimations && <MatrixRain />}
      {enableAnimations && <ClickBurst />}

      <Navbar />

      <div className="relative z-10">
        <Suspense
          fallback={
            <div className="grid min-h-screen place-items-center text-cyan-300">
              Loading...
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        Built with React, TypeScript, Tailwind CSS & Framer Motion ©{" "}
        {new Date().getFullYear()} Ismail Siklodi
      </footer>
    </main>
  );
}