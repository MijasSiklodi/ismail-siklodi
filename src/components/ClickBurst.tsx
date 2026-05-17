import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2 } from "lucide-react";

type BurstType = {
  id: string;
  x: number;
  y: number;
};

export default function ClickBurst() {
  const [bursts, setBursts] = useState<BurstType[]>([]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const id = `${Date.now()}-${Math.random()}`;

      setBursts((old) => [
        ...old.slice(-12),
        { id, x: event.clientX, y: event.clientY },
      ]);

      setTimeout(() => {
        setBursts((old) => old.filter((b) => b.id !== id));
      }, 850);
    };

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <AnimatePresence>
      {bursts.map((burst) => (
        <motion.div
          key={burst.id}
          className="pointer-events-none fixed z-[9999]"
          style={{ left: burst.x, top: burst.y }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1.8, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative -left-5 -top-5 h-10 w-10 rounded-full border border-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.9)]" />
          <Code2 className="absolute -left-3 -top-3 h-6 w-6 text-cyan-200" />
        </motion.div>
      ))}
    </AnimatePresence>
  );
}