"use client";
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-200 font-sans">
      {/* Header Section */}
      <section className="px-10 py-24 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">About Me</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-80">
          I'm Sanjeevan, a passionate Website & Web Application Developer specializing in
          building fast, modern, and user-friendly digital experiences using Next.js,
          React, and Tailwind CSS.
        </p>
      </section>

      {/* Story Section */}
      <section className="px-10 py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80"
              alt="About Developer"
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-5">
            <h2 className="text-3xl font-semibold">Who I Am</h2>
            <p className="opacity-80 leading-relaxed">
              I started my journey as a self-taught developer and quickly fell in love with
              creating beautiful, efficient, and functional web applications. My focus is on
              writing clean code, providing 100% responsive designs, and delivering high-quality
              results for clients.
            </p>
            <p className="opacity-80 leading-relaxed">
              I enjoy solving problems, learning new technologies, and turning ideas into real
              digital products. Whether it's a simple portfolio or a complex business web
              application, I build it with dedication and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="px-10 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Full Website Development",
              desc: "Complete modern websites for businesses and individuals.",
            },
            {
              title: "Web Applications",
              desc: "Dynamic, fast, feature-rich web applications using Next.js.",
            },
            {
              title: "UI/UX & Responsive Design",
              desc: "Beautiful and mobile-friendly designs for all devices.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-gray-100 dark:bg-zinc-800 shadow hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="opacity-80 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-10 py-20 text-center bg-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Work With Me?</h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          I'm available for freelance projects, collaborations, and part-time roles.
          Let's build something great together.
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