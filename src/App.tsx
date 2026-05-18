import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogDetails />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}