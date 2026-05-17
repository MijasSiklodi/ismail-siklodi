import { motion } from "framer-motion";
import { Download, Mail, Rocket, Code2 } from "lucide-react";

export default function About() {
  return (
    <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200"
        >
          <Rocket className="h-4 w-4" />
          Available for Senior / Lead Full-Stack Roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black leading-tight md:text-7xl"
        >
          Hi, I’m
          <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
            Ismail Siklodi
          </span>
        </motion.h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
          Senior Full-Stack & Mobile Engineer with 8+ years of experience
          building high-performance fintech, banking, and enterprise
          applications for UK-based financial institutions. Specialized in React
          Native, Ionic, Angular, TypeScript, and Node.js with strong expertise
          in scalable architecture, secure authentication systems, mobile
          banking platforms, net banking portals, configurable admin dashboards,
          CI/CD pipelines, and production-grade app delivery.
        </p>

        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400 md:text-lg">
          Delivered multiple live banking applications serving thousands of real
          users across iOS, Android, and Web platforms. Experienced in leading
          frontend teams, mentoring developers, collaborating directly with
          international clients, and transforming complex business requirements
          into scalable digital products with modern UI/UX and secure
          engineering practices.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/Ismail_Siklodi_Resume_2026.pdf"
            className="rounded-2xl bg-cyan-300 px-6 py-3 font-bold text-slate-950"
          >
            <Download className="mr-2 inline h-4 w-4" />
            Download Resume
          </a>

          <a
            href="mailto:siklodiismail1@gmail.com"
            className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-bold"
          >
            <Mail className="mr-2 inline h-4 w-4" />
            Hire Me
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative mx-auto max-w-md rounded-[2rem] border border-white/15 bg-slate-900/80 p-4 shadow-[0_0_70px_rgba(34,211,238,0.25)]"
      >
        <img
          src="/profile.jpg"
          alt="Ismail Siklodi"
          className="h-[430px] w-full rounded-[1.5rem] object-cover"
        />

        <div className="absolute -right-5 top-12 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
          <Code2 className="h-7 w-7 text-cyan-300" />
        </div>
      </motion.div>
    </section>
  );
}
