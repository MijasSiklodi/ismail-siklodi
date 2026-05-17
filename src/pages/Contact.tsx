import { Mail, Phone, MapPin, Link2 } from "lucide-react";

export default function Contact() {
  return (
    <section className="mx-auto grid min-h-screen max-w-5xl place-items-center px-5 py-20">
      <div className="rounded-[2rem] border border-cyan-300/20 bg-slate-900/80 p-8 text-center shadow-[0_0_70px_rgba(34,211,238,0.18)] backdrop-blur-xl md:p-12">
        <h1 className="text-4xl font-black md:text-6xl">
          Let’s build something secure and scalable.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-slate-300">
          Open to senior / lead roles, remote or hybrid. Best fit: Angular,
          React, React Native, Ionic, Node.js and fintech platforms.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:siklodiismail1@gmail.com"
            className="rounded-2xl bg-cyan-300 px-6 py-3 font-bold text-slate-950"
          >
            <Mail className="mr-2 inline h-4 w-4" />
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/ismail-siklodi"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-bold"
          >
            <Link2 className="mr-2 inline h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <div className="mt-8 grid gap-3 text-sm text-slate-300 md:grid-cols-3">
          <a
            href="tel:+918689852249"
            className="transition hover:text-cyan-300"
          >
            <Phone className="mr-2 inline h-4 w-4 text-cyan-300" />
            +91 8689852249
          </a>

          <a
            href="mailto:siklodiismail1@gmail.com"
            className="transition hover:text-cyan-300"
          >
            <Mail className="mr-2 inline h-4 w-4 text-cyan-300" />
            siklodiismail1@gmail.com
          </a>

          <p>
            <MapPin className="mr-2 inline h-4 w-4 text-cyan-300" />
            Thane, Maharashtra
          </p>
        </div>
      </div>
    </section>
  );
}
