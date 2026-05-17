import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { blogs } from "../data/blogs";

export default function BlogDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <section className="mx-auto min-h-screen max-w-5xl px-5 py-20 text-white">
        <h1 className="text-4xl font-black">Blog not found</h1>
        <button
          onClick={() => navigate("/blog")}
          className="mt-6 rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950"
        >
          Back to Blog
        </button>
      </section>
    );
  }

  return (
    <section className="mx-auto min-h-screen max-w-5xl px-5 py-20 text-white">
      <button
        onClick={() => navigate("/blog")}
        className="mb-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blogs
      </button>

      <motion.article
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {blog.icon && (
          <div className="mb-6 inline-flex rounded-2xl bg-cyan-300/10 p-4 text-cyan-300">
            {blog.icon}
          </div>
        )}

        {blog.category && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-300">
            {blog.category}
          </p>
        )}

        <h1 className="text-5xl font-black leading-tight md:text-7xl">
          {blog.title}
        </h1>

        {blog.readTime && (
          <p className="mt-5 text-sm text-cyan-300">{blog.readTime}</p>
        )}

        {blog.desc && (
          <p className="mt-6 text-xl leading-8 text-slate-300">
            {blog.desc}
          </p>
        )}

        {blog.intro && (
          <p className="mt-10 text-lg leading-9 text-slate-300">
            {blog.intro}
          </p>
        )}

        {blog.sections?.length > 0 && (
          <div className="mt-14 space-y-10">
            {blog.sections.map((section, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur"
              >
                {section.heading && (
                  <h2 className="text-3xl font-black text-cyan-300">
                    {section.heading}
                  </h2>
                )}

                {section.content && (
                  <p className="mt-4 leading-8 text-slate-300">
                    {section.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {blog.conclusion && (
          <div className="mt-14 rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 to-fuchsia-400/10 p-8">
            <h2 className="text-4xl font-black">Conclusion</h2>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              {blog.conclusion}
            </p>
          </div>
        )}

        {blog.tags?.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </motion.article>
    </section>
  );
}