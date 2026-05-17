import { motion } from "framer-motion";
import { Layers, Cpu, Zap } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const projects = [
  {
    company: "Consectus (India) Pvt Ltd",
    title: "Consectus Bath Building Society Net Banking Portal",
    type: "Internet Banking Platform",
    website: "https://www.bathbuildingsociety.co.uk/",
    androidAppUrl:
      "https://play.google.com/store/apps/details?id=co.uk.bath.live&hl=en",
    iosAppUrl:
      "https://apps.apple.com/gb/app/bath-building-society/id6444861082",
    netBankingUrl: "https://www.bathbuildingsociety.co.uk/",
    icon: <Layers className="h-6 w-6" />,
    description:
      "Built Bath Building Society net banking portal with secure banking workflows, account management modules and Angular frontend.",
    tech: ["Angular", "TypeScript", "Node.js", "Banking APIs", "Security","REST APIs"],
  },
  {
    company: "Consectus (India) Pvt Ltd",
    title: "Conscus Tipton Mobile Banking App",
    type: "Mobile Banking App",
    website: "https://www.thetipton.co.uk/",
    androidAppUrl:
      "https://play.google.com/store/apps/details?id=com.tipton.tcbs&hl=en_IN",
    iosAppUrl: "https://apps.apple.com/gb/app/the-tipton/id1485552790",
    icon: <Cpu className="h-6 w-6" />,
    description:
      "Developed customer-facing mobile banking application for Android and iOS with fund transfer, authentication and account features.",
    tech: ["Ionic", "Capacitor", "Angular", "Node.js","Security", "REST APIs"],
  },
  {
    company: "Consectus (India) Pvt Ltd",
    title: "Consectus Monmouth Mobile Banking App",
    type: "Mobile Banking App",
    website: "https://www.monbs.com/",
    androidAppUrl:
      "https://play.google.com/store/apps/details?id=com.monbs.live",
    iosAppUrl:
      "https://apps.apple.com/gb/app/monmouthshire-building-society/id6736754254",
    netBankingUrl: "#",
    icon: <Layers className="h-6 w-6" />,
    description:
      "Delivered branded mobile banking app using shared multi-brand codebase architecture.",
    tech: ["Angular", "Ionic", "Capacitor", "REST APIs", "Security"],
  },
  {
    company: "Consectus (India) Pvt Ltd",
    title: "Consectus StepOne Finance App",
    type: "Finance Platform",
    website: "https://www.steponefinance.co.uk/",
    androidAppUrl:
      "https://play.google.com/store/apps/details?id=com.stepone.live&hl=en_IN",
    iosAppUrl:
      "https://apps.apple.com/gb/app/step-one-finance-ltd/id6752649228",
    netBankingUrl: "https://www.steponefinance.co.uk/",
    icon: <Zap className="h-6 w-6" />,
    description:
      "Worked on finance app modules, backend API integrations and secure frontend delivery.",
    tech: ["Angular", "Ionic", "Node.js", "Security"],
  },
  {
    company: "Consectus (India) Pvt Ltd",
    title: "Consectus Configurable Banking Admin Dashboard",
    type: "Enterprise Admin Platform",
    website: "#",

    adminPanelUrl: "#",

    icon: <Layers className="h-6 w-6" />,

    description:
      "Built a fully configurable Angular Admin Dashboard allowing bank staff to control app screens, visibility, text content, alerts, side menus, and dynamic banking configurations in real time without developer intervention.",

    tech: [
      "Angular",
      "TypeScript",
      "Admin Dashboard",
      "Dynamic CMS",
      "REST APIs",
      "Enterprise Platform",
    ],
  },
  {
    company: "Consectus (India) Pvt Ltd",
    title: "Consectus SikuliX Banking Workflow Automation",
    type: "RPA Automation",
    icon: <Zap className="h-6 w-6" />,
    description:
      "Designed and deployed SikuliX RPA bots to automate repetitive back-office banking workflows, saving 25+ manual staff hours per week across multiple client accounts.",
    tech: ["SikuliX", "RPA", "Automation", "Banking Workflow"],
  },
  {
    company: "Citiustech Healthcare Technology Pvt. Ltd",
    title: "Member 360 Web Portal",
    type: "Healthcare Dashboard",
    icon: <Cpu className="h-6 w-6" />,
    description:
      "Built Member 360 Web Portal with interactive dashboard, real-time charts, backend API integration, and responsive layouts using Ionic 5 and Angular.",
    tech: ["Ionic 5", "Angular", "TypeScript", "Charts", "REST APIs"],
  },
  {
    company: "Citiustech Healthcare Technology Pvt. Ltd",
    title: "Analytics Dashboard",
    type: "Data Visualization Web App",
    icon: <Layers className="h-6 w-6" />,
    description:
      "Developed a data-rich web application with multi-page navigation, interactive charts, and complex data visualization using TypeScript and Angular.",
    tech: ["Angular", "TypeScript", "Data Visualization", "Charts"],
  },
  {
    company: "Citiustech Healthcare Technology Pvt. Ltd",
    title: "GapFinder Demo App",
    type: "Offline Mobile Demo App",
    icon: <Zap className="h-6 w-6" />,
    description:
      "Delivered an offline-capable cross-platform mobile demo app for iOS and Android using Ionic 5 with JSON fixtures for robust testing.",
    tech: ["Ionic 5", "Angular", "JSON Fixtures", "Android", "iOS"],
  },
  {
    company: "Payohima Services India Pvt Ltd",
    title: "Tipton Digital Banking Hub",
    type: "Internal Banking Dashboard",
    icon: <Layers className="h-6 w-6" />,
    description:
      "Built an internal staff-facing dashboard using Ionic 3 and Node.js to manage customer interactions on the Tipton Mobile Banking App.",
    tech: ["Ionic 3", "Angular", "Node.js", "Dashboard", "Banking"],
  },
  {
    company: "Payohima Services India Pvt Ltd",
    title: "Tipton Digital Banking App",
    type: "Mobile Banking App",
    icon: <Cpu className="h-6 w-6" />,
    description:
      "Developed a cross-platform Android and iOS customer-facing mobile banking application for a UK Building Society.",
    tech: ["Ionic", "Angular", "Node.js", "Android", "iOS"],
  },
  {
    company: "The Animator",
    title: "Hu Boricha, Deshalpur and Pragpur Apps",
    type: "Client Mobile Applications",
    icon: <Layers className="h-6 w-6" />,
    description:
      "Developed frontend UIs using Ionic Framework and integrated REST APIs for multiple client applications including Hu Boricha, Deshalpur, and Pragpur.",
    tech: ["Ionic", "Angular", "REST APIs", "Mobile UI"],
  },
  {
    company: "Sutra InfoTech",
    title: "Beacon-Based Marketing App",
    type: "Location-Based Marketing App",
    icon: <Zap className="h-6 w-6" />,
    description:
      "Built a beacon-based marketing application for Android and iOS focused on location-based user engagement and campaign delivery.",
    tech: ["Android", "iOS", "Beacon", "Marketing App"],
  },
  {
    company: "Intelliconnect Technologies",
    title: "Way2Freedom",
    type: "Android Productivity App",
    icon: <Cpu className="h-6 w-6" />,
    description:
      "Built Android application using Java, Android Studio, and Node.js for managing reminders, meetings, and client communications.",
    tech: ["Java", "Android Studio", "Node.js", "Android"],
  },
  {
    company: "Intelliconnect Technologies",
    title: "Style-At-IS",
    type: "Fashion Marketplace App & Web Portal",
    icon: <Layers className="h-6 w-6" />,
    description:
      "Developed iOS application using Swift and Xcode along with Angular 4 web portal for a fashion brand and styling marketplace.",
    tech: ["Swift", "Xcode", "Angular 4", "iOS", "Web Portal"],
  },
];

export default function Projects() {
  return (
    <section className="mx-auto min-h-screen max-w-7xl px-5 py-20">
      <SectionTitle kicker="Featured Work" title="Projects with real impact" />

      <div className="space-y-16">
        {Object.entries(
          projects.reduce(
            (acc, project) => {
              const company = project.company || "Other Projects";

              if (!acc[company]) {
                acc[company] = [];
              }

              acc[company].push(project);

              return acc;
            },
            {} as Record<string, typeof projects>,
          ),
        ).map(([company, companyProjects]) => (
          <div key={company}>
            {/* Company Section */}
            <div className="mb-8 flex items-center gap-4">
              <div className="h-[2px] flex-1 bg-gradient-to-r from-cyan-400/60 to-transparent" />

              <h2 className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-3xl font-black text-transparent md:text-4xl">
                {company}
              </h2>

              <div className="h-[2px] flex-1 bg-gradient-to-l from-fuchsia-400/60 to-transparent" />
            </div>

            {/* Projects Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {companyProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{
                    y: -10,
                    rotateX: 2,
                    rotateY: -2,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-2xl backdrop-blur"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-fuchsia-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="relative mb-5 inline-flex rounded-2xl bg-cyan-300/10 p-4 text-cyan-300 ring-1 ring-cyan-300/20">
                    {project.icon}
                  </div>

                  {/* Type */}
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-300">
                    {project.type}
                  </p>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-white">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 leading-7 text-slate-300">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech?.map((item: string) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-8 grid gap-3">
                    {project.website && project.website !== "#" && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/20"
                      >
                        🌐 Client Website
                      </a>
                    )}

                    {project.androidAppUrl && project.androidAppUrl !== "#" && (
                      <a
                        href={project.androidAppUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-green-300/40"
                      >
                        🤖 Android App
                      </a>
                    )}

                    {project.iosAppUrl && project.iosAppUrl !== "#" && (
                      <a
                        href={project.iosAppUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-fuchsia-300/40"
                      >
                        🍎 iOS App
                      </a>
                    )}

                    {project.netBankingUrl && project.netBankingUrl !== "#" && (
                      <a
                        href={project.netBankingUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40"
                      >
                        🏦 Net Banking Portal
                      </a>
                    )}

                    {project.adminPanelUrl && project.adminPanelUrl !== "#" && (
                      <a
                        href={project.adminPanelUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-yellow-300/40"
                      >
                        ⚙️ Admin Dashboard
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
