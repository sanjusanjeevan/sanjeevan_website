"use client";
export default function Projects() {
  const projectList = [
    {
      title: "E-Commerce Website",
      description:
        "A modern e-commerce platform built with Next.js, Tailwind CSS, and Stripe payment integration.",
      image:
        "https://images.unsplash.com/photo-1607083206973-7d9f1f8b0a3b?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A fast, clean, and fully responsive personal portfolio website built for clients.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Business Web Application",
      description:
        "A custom business management web application with dashboards and API integration.",
      image:
        "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Blog System",
      description:
        "A SEO-friendly blog system using Next.js App Router and dynamic rendering.",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-200 font-sans">
      {/* Header */}
      <section className="px-10 py-24 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">My Projects</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-80">
          Here are some of the best websites and applications I have built using
          Next.js, React, Tailwind CSS, and modern web technologies.
        </p>
      </section>

      {/* Project Grid */}
      <section className="px-10 pb-20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white dark:bg-zinc-900 shadow hover:scale-[1.02] transition overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm opacity-80">{project.description}</p>
              <a
                href={project.link}
                className="inline-block mt-2 px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="px-10 py-20 text-center bg-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Project Like This?</h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          I can build modern, fast, and reliable websites and applications for your
          business or personal use.
        </p>
        <a
          href="mailto:sanjeevan.dev.contact@gmail.com"
          className="px-8 py-3 rounded-xl bg-white text-blue-700 font-medium hover:bg-gray-200 transition-all"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
}