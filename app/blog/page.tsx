"use client"
export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-12 text-center text-white">
          Blog
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* 🔥 Blog Card 1 */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all border border-zinc-800">
            <img
              src="https://images.unsplash.com/photo-1522199710521-72d69614c702"
              alt="Blog 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">
                How I Built My Portfolio in Next.js
              </h2>
              <p className="text-gray-400 mb-4">
                A complete guide on building a modern and responsive portfolio using Next.js & Tailwind CSS.
              </p>
              <button className="text-blue-500 hover:text-blue-400 transition">
                Read More →
              </button>
            </div>
          </div>

          {/* 🔥 Blog Card 2 */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all border border-zinc-800">
            <img
              src="https://images.unsplash.com/photo-1506765515384-028b60a970df"
              alt="Blog 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">
                Top 5 Tips for UI/UX Design
              </h2>
              <p className="text-gray-400 mb-4">
                Improve your web design skills with powerful UI/UX principles you can apply instantly.
              </p>
              <button className="text-blue-500 hover:text-blue-400 transition">
                Read More →
              </button>
            </div>
          </div>

          {/* 🔥 Blog Card 3 */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all border border-zinc-800">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              alt="Blog 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">
                Why Choose Next.js for Web Apps?
              </h2>
              <p className="text-gray-400 mb-4">
                Learn why Next.js is the best JS framework for speed, SEO, and scalability.
              </p>
              <button className="text-blue-500 hover:text-blue-400 transition">
                Read More →
              </button>
            </div>
          </div>

          {/* 🔥 Blog Card 4 */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all border border-zinc-800">
            <img
              src="blog4.jpg"
              alt="Blog 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">
                Tailwind CSS for Beginners
              </h2>
              <p className="text-gray-400 mb-4">
                A simple introduction to using Tailwind CSS and creating responsive UI easily.
              </p>
              <button className="text-blue-500 hover:text-blue-400 transition">
                Read More →
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
