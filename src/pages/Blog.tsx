import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { blogs } from "../data/blogs";

export default function Blog() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto min-h-screen max-w-7xl px-5 py-20">
      <SectionTitle kicker="Developer Thoughts" title="Blog & technical writing" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            onClick={() => navigate(`/blog/${blog.slug}`)}
            whileHover={{ y: -10 }}
            className="cursor-pointer rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition hover:border-cyan-300/40"
          >
            {blog.icon && (
              <div className="mb-5 inline-flex rounded-2xl bg-cyan-300/10 p-4 text-cyan-300">
                {blog.icon}
              </div>
            )}

            {blog.category && (
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
                {blog.category}
              </p>
            )}

            <h3 className="text-2xl font-black">{blog.title}</h3>

            {blog.desc && (
              <p className="mt-4 leading-7 text-slate-300">{blog.desc}</p>
            )}

            {blog.readTime && (
              <p className="mt-5 text-sm text-cyan-300">{blog.readTime}</p>
            )}

            <button className="mt-6 rounded-xl bg-cyan-300 px-4 py-2 font-bold text-slate-950">
              Read Blog
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}