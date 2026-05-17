import { motion } from "framer-motion";
import { useMemo } from "react";

export default function MatrixRain() {
  const columns = useMemo(() => Array.from({ length: 45 }, (_, i) => i), []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-25">
      {columns.map((col) => (
        <motion.div
          key={col}
          className="absolute top-[-20%] font-mono text-xs text-emerald-300/70"
          style={{ left: `${col * 2.3}%` }}
          animate={{ y: ["-20vh", "120vh"] }}
          transition={{
            duration: 7 + (col % 9),
            repeat: Infinity,
            ease: "linear",
            delay: (col % 12) * 0.22,
          }}
        >
          {"</> {} [] => npm run build".split(" ").map((token, i) => (
            <div key={i} className="mb-3 rotate-6">
              {token}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}