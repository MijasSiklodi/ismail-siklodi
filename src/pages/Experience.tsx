import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const experience = [
  {
    role: "Lead Frontend and Mobile Developer",
    company: "Consectus (India) Pvt Ltd",
    period: "Nov 2021 - Apr 2026",

    points: [
      "Leading frontend and mobile banking application development for UK-based financial institutions including Bath Building Society, Tipton Building Society, Monmouth Building Society, and Step One Finance.",

      "Delivered secure Android, iOS, and Internet Banking platforms using Angular, Ionic, Capacitor, React Native, TypeScript, and Node.js.",

      "Built scalable multi-brand banking architecture enabling shared codebase delivery across multiple financial clients.",

      "Developed configurable banking admin dashboards allowing real-time app configuration, content management, side menu control, alerts, and feature visibility without developer intervention.",

      "Led 10+ frontend and mobile developers across multiple agile teams including code reviews, architecture planning, sprint management, mentoring, and technical decision making.",

      "Handled direct communication with UK clients, requirement gathering sessions, production demos, delivery planning, and release coordination.",

      "Managed Google Play Store and Apple App Store release lifecycle including CI/CD pipelines, signing, production deployments, crash monitoring, and hotfix releases.",

      "Designed and deployed SikuliX RPA automation workflows reducing repetitive banking operations and improving operational efficiency.",

      "Implemented secure authentication flows, API integrations, token handling, role-based access, and fintech-grade frontend security practices.",

      "Worked on production-grade mobile banking systems used by real customers across Android, iOS, and Web platforms.",
    ],
  },
  {
    role: "Software Developer",
    company: "Citiustech Healthcare Technology Pvt. Ltd",
    period: "Apr 2021 - Oct 2021",

    points: [
      "Built Member 360 Web Portal using Angular and Ionic with interactive dashboards, healthcare analytics, responsive UI, and backend API integrations.",

      "Developed Analytics Dashboard featuring charts, multi-page navigation, real-time data visualization, and responsive enterprise UI components.",

      "Delivered offline-capable GapFinder mobile demo application for Android and iOS using Ionic 5 and JSON fixture-based testing.",

      "Worked closely with backend teams to integrate APIs, optimize frontend workflows, and improve user experience for healthcare platforms.",

      "Implemented responsive layouts, reusable frontend components, chart integrations, and enterprise-grade UI architecture.",
    ],
  },

  {
    role: "Software Developer",
    company: "Payohima Services India Pvt Ltd",
    period: "Oct 2019 - Mar 2021",

    points: [
      "Built Tipton Digital Banking Hub using Ionic 3, Angular, and Node.js for customer interaction and internal banking workflows.",

      "Developed cross-platform customer-facing mobile banking applications for Android and iOS.",

      "Created customized demo applications and proof-of-concept builds for client presentations and onboarding.",

      "Prepared technical documentation, frontend architecture flows, API integration guides, and deployment instructions.",

      "Worked on frontend banking modules, account workflows, authentication screens, and secure mobile app features.",
    ],
  },

  {
    role: "Frontend Developer",
    company: "The Animator",
    period: "Feb 2019 - Sep 2019",

    points: [
      "Developed frontend mobile applications for Hu Boricha, Deshalpur, and Pragpur projects using Ionic Framework and Angular.",

      "Integrated REST APIs and backend services into cross-platform mobile applications.",

      "Built reusable UI components, responsive layouts, and interactive frontend modules for client applications.",

      "Worked closely with designers and backend developers to deliver scalable mobile app experiences.",
    ],
  },
  {
    role: "Frontend & Mobile App Developer",
    company: "Sutra InfoTech",
    period: "May 2018 - Sep 2018",

    points: [
      "Built beacon-based Android and iOS marketing applications focused on location-aware customer engagement.",

      "Worked on mobile app UI implementation, API integration, and location-based feature development.",

      "Implemented frontend workflows for push notifications, marketing campaigns, and beacon-triggered interactions.",

      "Contributed to mobile app testing, debugging, and production release support.",
    ],
  },

  {
    role: "Android & Web Developer",
    company: "Intelliconnect Technologies",
    period: "Apr 2017 - Apr 2018",

    points: [
      "Developed Way2Freedom Android application using Java, Android Studio, and Node.js for managing meetings, reminders, and customer interactions.",

      "Built Style-At-IS fashion platform including iOS application using Swift and Xcode along with Angular 4 web portal development.",

      "Integrated backend APIs, user authentication systems, and frontend business workflows across web and mobile platforms.",

      "Worked on responsive UI implementation, frontend logic, debugging, and deployment support.",
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