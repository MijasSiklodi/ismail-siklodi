import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const experience = [
  {
    role: "Lead Frontend and Mobile Developer",
    company: "Consectus India Pvt Ltd / Payohima Services",
    period: "Nov 2021 - Present",
    points: [
      "Delivered mobile banking apps for Tipton, Bath, Monmouth, and StepOne Finance.",
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
      "Built Tipton Digital Banking Hub and customer-facing mobile banking app.",
      "Delivered customized demo apps and technical documentation.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="mx-auto min-h-screen max-w-7xl px-5 py-20">
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
            <div className="flex flex-col justify-between gap-3 md:flex-row">
              <div>
                <h3 className="text-2xl font-black">{job.role}</h3>
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
  );
}