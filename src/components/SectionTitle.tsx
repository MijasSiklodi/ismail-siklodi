import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

type Props = {
  kicker: string;
  title: string;
};

export default function SectionTitle({ kicker, title }: Props) {
  return (
    <div className="mb-10">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
      >
        <Sparkles className="h-4 w-4" /> {kicker}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-black text-white md:text-6xl"
      >
        {title}
      </motion.h1>
    </div>
  );
}