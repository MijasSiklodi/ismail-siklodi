import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LinkedIn,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  ShieldCheck,
  Code2,
  Rocket,
  Sparkles,
  Zap,
  Trophy,
  Cpu,
  Layers,
  Terminal,
  MousePointerClick,
} from "lucide-react";

const profile = {
  name: "Ismail Siklodi",
  title: "Senior Full-Stack & Mobile Engineer",
  location: "Thane, Maharashtra, India",
  phone: "+91 8689852249",
  email: "siklodiismail1@gmail.com",
  linkedin: "https://linkedin.com/in/ismail-siklodi",
  photo: "/public/profile.jpeg", 
  resume: "/public/Ismail_Siklodi_Resume_2026.pdf",
};

const stats = [
  { label: "Years Experience", value: "8+" },
  { label: "Live Banking Apps", value: "4" },
  { label: "Customers Served", value: "50K+" },
  { label: "Delivery Time Cut", value: "40%" },
];

const skills = [
  "React Native",
  "Ionic",
  "Capacitor",
  "Cordova",
  "Angular",
  "React.js",
  "TypeScript",
  "JavaScript ES6+",
  "Node.js",
  "Express.js",
  "REST APIs",
  "JWT Auth",
  "Firebase",
  "AWS",
  "CI/CD",
  "Jest",
  "SikuliX RPA",
  "App Store Deployment",
];

const projects = [
  {
    title: "Bath Building Society Net Banking Portal",
    type: "Internet Banking Platform",
    website: "https://www.bathbuildingsociety.co.uk/",
    appUrl: "#",
    netBankingUrl: "#",
    icon: <Layers className="h-6 w-6" />,
    description:
      "Developed and maintained the Bath Building Society Net Banking portal with secure banking workflows, account management modules, and responsive Angular frontend architecture.",
    tech: ["Angular", "TypeScript", "Node.js", "Banking APIs"],
  },
  {
    title: "Multi-Brand Mobile Banking Platform",
    type: "Fintech Architecture",
    website: "https://www.tipton.co.uk/",
    appUrl: "#",
    netBankingUrl: "#",
    icon: <Layers className="h-6 w-6" />,
    description:
      "Designed a shared codebase powering 4 branded mobile banking products for UK Building Societies, reducing per-client delivery time by around 40%.",
    tech: ["Ionic", "Capacitor", "React Native", "Angular", "Node.js"],
  },
  {
    title: "Configurable Angular Admin Dashboard",
    type: "Bank Staff Portal",
    website: "https://www.monbs.com/",
    appUrl: "#",
    netBankingUrl: "#",
    icon: <Cpu className="h-6 w-6" />,
    description:
      "Built a real-time configurable dashboard allowing bank staff to control app screens, text, alerts, side menu items, and page visibility without code changes.",
    tech: ["Angular", "TypeScript", "REST APIs", "Admin UX"],
  },
  {
    title: "SikuliX Banking Workflow Bots",
    type: "RPA Automation",
    website: "https://www.steponefinance.co.uk/",
    appUrl: "#",
    netBankingUrl: "#",
    icon: <Zap className="h-6 w-6" />,
    description:
      "Automated repetitive back-office banking workflows, saving 25+ manual staff hours per week across multiple client accounts.",
    tech: ["SikuliX", "Automation", "Workflow Bots"],
  },
];

const experience = [
  {
    role: "Lead Frontend and Mobile Developer",
    company: "Consectus India Pvt Ltd / Payohima Services",
    period: "Nov 2021 - Present",
    points: [
      "Architected and delivered mobile banking apps for Tipton, Bath, Monmouth, and StepOne Finance.",
      "Led 10+ developers, handled code reviews, mentoring, Agile delivery, and UK client demos.",
      "Managed Google Play Store and Apple App Store release lifecycle with CI/CD pipelines.",
    ],
  },
  {
    role: "Software Developer",
    company: "Citiustech Healthcare Technology Pvt. Ltd",
    period: "Apr 2021 - Oct 2021",
    points: [
      "Built Member 360 Web Portal and Analytics Dashboard with Angular, Ionic, charts, and backend APIs.",
      "Delivered offline-capable GapFinder demo app for Android and iOS using Ionic 5.",
    ],
  },
  {
    role: "Software Developer",
    company: "Payohima Services India Pvt Ltd",
    period: "Oct 2019 - Mar 2021",
    points: [
      "Built Tipton Digital Banking Hub and customer-facing cross-platform mobile banking app.",
      "Delivered customized demo apps and end-to-end technical documentation.",
    ],
  },
];

const achievements = [
  "Delivered 4 live production mobile banking apps from zero to App Store.",
  "Created 1 shared codebase powering 4 branded financial products.",
  "Implemented critical mobile and API security fixes for UK financial standards.",
  "Saved 25+ manual staff hours per week through RPA automation.",
  "Led and mentored a frontend team of 10+ developers.",
];

function MatrixRain() {
  const columns = useMemo(() => Array.from({ length: 46 }, (_, i) => i), []);
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-30">
      {columns.map((col) => (
        <motion.div
          key={col}
          className="absolute top-[-20%] font-mono text-xs text-emerald-300/70"
          style={{ left: `${col * 2.25}%` }}
          animate={{ y: ["-20vh", "120vh"] }}
          transition={{
            duration: 7 + (col % 9),
            repeat: Infinity,
            ease: "linear",
            delay: (col % 12) * 0.22,
          }}
        >
          {"</> {} [] => npm run build".split(" ").map((token, i) => (
            <div key={i} className="mb-3 rotate-6 blur-[0.2px]">
              {token}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
type BurstType = {
  id: string;
  x: number;
  y: number;
};
type ClickBurstProps = {
  bursts: BurstType[];
};
function ClickBurst({ bursts }: ClickBurstProps) {
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

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
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
      <motion.h2
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
        className="text-3xl font-black tracking-tight text-white md:text-5xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}

function App() {
  const [bursts, setBursts] = useState<BurstType[]>([]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const id = `${Date.now()}-${Math.random()}`;

      setBursts((old: BurstType[]) => [
        ...old.slice(-12),
        {
          id,
          x: event.clientX,
          y: event.clientY,
        },
      ]);

      setTimeout(() => {
        setBursts((old: BurstType[]) => old.filter((b) => b.id !== id));
      }, 850);
    };

    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-slate-100 selection:bg-cyan-300 selection:text-black">
      <MatrixRain />
      <ClickBurst bursts={bursts} />

      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[110px]"
          animate={{ scale: [1, 1.25, 1], x: [0, 70, -40, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-[110px]"
          animate={{ scale: [1, 1.35, 1], y: [0, -60, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#home"
            className="flex items-center gap-2 font-black text-white"
          >
            <Terminal className="h-6 w-6 text-cyan-300" /> ISMAIL.DEV
          </motion.a>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            {["About", "Experience", "Projects", "Blog", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition hover:text-cyan-300"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200"
          >
            <Rocket className="h-4 w-4" /> Available for Senior / Lead
            Full-Stack Roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-5xl font-black leading-tight text-white md:text-7xl"
          >
            Building secure fintech apps with
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              code, speed & impact.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          >
            I am {profile.name}, an 8+ years Senior Full-Stack and Mobile
            Engineer experienced in React Native, Ionic, Angular, Node.js,
            fintech platforms, mobile banking apps, admin dashboards, security
            fixes, CI/CD, and team leadership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group rounded-2xl bg-cyan-300 px-6 py-3 font-bold text-slate-950 shadow-[0_0_35px_rgba(103,232,249,0.35)] transition hover:-translate-y-1 hover:bg-white"
            >
              View Projects{" "}
              <ExternalLink className="ml-2 inline h-4 w-4 transition group-hover:rotate-45" />
            </a>
            <a
              href={profile.resume}
              className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/60"
            >
              <Download className="mr-2 inline h-4 w-4" /> Download Resume
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32 + index * 0.08 }}
                whileHover={{ y: -8, rotate: index % 2 ? 1.5 : -1.5 }}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur"
              >
                <div className="text-3xl font-black text-cyan-300">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 90, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 opacity-50 blur-2xl"
          />
          <div className="relative rounded-[2rem] border border-white/15 bg-slate-900/80 p-4 shadow-[0_0_70px_rgba(34,211,238,0.25)] backdrop-blur-xl">
            <div className="overflow-hidden rounded-[1.5rem] border border-cyan-300/30 bg-slate-950">
              <img
                 src="/profile.jpg"
                alt="Ismail Siklodi"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                className="h-[430px] w-full object-cover"
              />
            </div>
            <div className="absolute -right-5 top-12 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
              <MousePointerClick className="h-7 w-7 text-fuchsia-300" />
            </div>
          </div>
        </motion.div>
      </section>

      <section id="skills" className="relative mx-auto max-w-7xl px-5 py-20">
        <SectionTitle
          kicker="Technical Arsenal"
          title="Skills that power production-grade apps"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.025 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition hover:border-cyan-300/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
            >
              <Code2 className="mb-3 h-5 w-5 text-cyan-300" />
              <p className="font-semibold text-white">{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-5 py-20">
        <SectionTitle
          kicker="Featured Work"
          title="Projects with real business impact"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10, rotateX: 3, rotateY: -3 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-2xl backdrop-blur"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-fuchsia-400/10 opacity-0 transition group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-5 inline-flex rounded-2xl bg-cyan-300/10 p-4 text-cyan-300 ring-1 ring-cyan-300/20">
                  {project.icon}
                </div>

                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-300">
                  {project.type}
                </p>

                <h3 className="text-2xl font-black text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-3">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/20"
                  >
                    🌐 Client Website
                  </a>

                  <a
                    href={project.appUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-fuchsia-300/40"
                  >
                    📱 Mobile App URL
                  </a>

                  <a
                    href={project.netBankingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40"
                  >
                    🏦 Net Banking URL
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="relative mx-auto max-w-7xl px-5 py-20"
      >
        <SectionTitle
          kicker="Career Timeline"
          title="8+ years of fintech, healthcare and mobile delivery"
        />
        <div className="space-y-6">
          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: index % 2 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur"
            >
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                <div>
                  <h3 className="text-2xl font-black text-white">{job.role}</h3>
                  <p className="text-cyan-300">{job.company}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-300">
                  {job.period}
                </span>
              </div>
              <ul className="mt-5 space-y-3 text-slate-300">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-20">
        <SectionTitle
          kicker="Highlights"
          title="Achievements recruiters notice fast"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.03] p-6 backdrop-blur"
            >
              <Trophy className="mb-4 h-7 w-7 text-yellow-300" />
              <p className="font-semibold leading-7 text-white">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="blog" className="relative mx-auto max-w-7xl px-5 py-20">
        <SectionTitle
          kicker="Developer Thoughts"
          title="Blog & technical writing"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Building scalable multi-brand fintech apps",
              desc: "How shared codebase architecture reduced banking app delivery time by 40%.",
            },
            {
              title: "React Native vs Ionic for banking apps",
              desc: "Tradeoffs, performance considerations, deployment, and maintenance strategy.",
            },
            {
              title: "Security fixes every fintech frontend should implement",
              desc: "Authentication flows, token expiry handling, and secure API integration.",
            },
          ].map((blog) => (
            <motion.div
              key={blog.title}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur"
            >
              <h3 className="text-2xl font-black text-white">{blog.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{blog.desc}</p>
              <button className="mt-6 rounded-xl bg-cyan-300 px-4 py-2 font-bold text-slate-950 transition hover:bg-white">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative px-5 py-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/20 bg-slate-900/80 p-8 text-center shadow-[0_0_70px_rgba(34,211,238,0.18)] backdrop-blur-xl md:p-12"
        >
          <h2 className="text-4xl font-black text-white md:text-6xl">
            Let’s build something secure and scalable.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Open to senior / lead roles, remote or hybrid. Best fit: Angular,
            React, React Native, Ionic, Node.js, fintech platforms, and mobile
            app delivery.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-2xl bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-white"
            >
              <Mail className="mr-2 inline h-4 w-4" /> Email Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:border-cyan-300"
            >
              <LinkedIn className="mr-2 inline h-4 w-4" /> LinkedIn
            </a>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-300 md:grid-cols-3">
            <p>
              <Phone className="mr-2 inline h-4 w-4 text-cyan-300" />{" "}
              {profile.phone}
            </p>
            <p>
              <Mail className="mr-2 inline h-4 w-4 text-cyan-300" />{" "}
              {profile.email}
            </p>
            <p>
              <MapPin className="mr-2 inline h-4 w-4 text-cyan-300" />{" "}
              {profile.location}
            </p>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        Built with React, Tailwind CSS, Framer Motion and developer energy. ©{" "}
        {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}

export default App;
