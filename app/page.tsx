export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-200 font-sans">
      
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 py-16 md:py-28 max-w-7xl mx-auto">
        {/* Text */}
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-600">Sanjeevan</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-500">
            Website & Web Application Developer
          </h2>
          <p className="text-base sm:text-lg opacity-80">
            I build modern, fast, secure and fully responsive websites & web
            applications using
            <span className="font-semibold"> Next.js, React, Tailwind CSS</span>{" "}
            and the latest web technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              download="Sanjeevan-Resume.pdf"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all text-center"
            >
              Download Resume
            </a>
<a
  href="tel:+94757009626"
  className="px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all dark:bg-white dark:text-black"
>
  Contact Me
</a>

            <a
              href="https://wa.me/94757009626"
              target="_blank"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12 0a11.94 11.94 0 0 0-10.3 17.94L0 24l6.28-1.64A12 12 0 1 0 20.52 3.48ZM12 22a9.94 9.94 0 0 1-5.06-1.39l-.36-.21-3.73.97 1-3.64-.24-.37A9.94 9.94 0 1 1 12 22Zm5.49-7.62c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.64.07a8.34 8.34 0 0 1-2.46-1.51 9.31 9.31 0 0 1-1.72-2.14c-.18-.3 0-.46.14-.61s.3-.35.46-.52a2 2 0 0 0 .3-.5.55.55 0 0 0-.02-.52c-.07-.15-.67-1.61-.92-2.21s-.49-.5-.67-.51h-.57a1.09 1.09 0 0 0-.77.37A3.2 3.2 0 0 0 6 9.17a5.54 5.54 0 0 0 1.17 3.11 12.52 12.52 0 0 0 4.92 4.32 16.78 16.78 0 0 0 1.68.62 4 4 0 0 0 1.86.12 3.18 3.18 0 0 0 2.1-1.49 2.55 2.55 0 0 0 .17-1.49c-.09-.15-.27-.22-.57-.37Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-10 md:mb-0 flex justify-center md:justify-end">
          <img
            src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80"
            alt="Developer Desk"
            className="rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 md:px-10 py-20 bg-white dark:bg-zinc-900">
        <h2 className="text-3xl font-semibold text-center mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {[
            { title: "Next.js", desc: "Modern full-stack framework for building powerful web apps." },
            { title: "React.js", desc: "Reusable UI components and optimized user experiences." },
            { title: "Tailwind CSS", desc: "Fast and customizable UI design with utility classes." },
            { title: "API Development", desc: "Secure REST APIs & server actions using Next.js backend." },
            { title: "Responsive UI", desc: "Pixel-perfect UI for all screen sizes and devices." },
            { title: "SEO Optimization", desc: "Improve page ranking and performance for your website." },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-2xl bg-gray-100 dark:bg-zinc-800 shadow hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="opacity-80 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-10 py-20 text-center bg-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          If you need a website or web application for your business or portfolio, feel free to contact me. I deliver high-quality, professional web solutions.
        </p>
        <a
          href="mailto:sanjeevan5474@gmail.com"
          className="px-8 py-3 rounded-xl bg-white text-blue-700 font-medium hover:bg-gray-200 transition-all"
        >
          Email Me
        </a>
      </section>
    </div>
  );
}
// test message