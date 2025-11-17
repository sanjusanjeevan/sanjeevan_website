export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-10 text-center text-white">
          Blog
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Blog Card 1 */}
          <div className="bg-gray-800 shadow-md rounded-2xl p-6 hover:shadow-lg transition cursor-pointer">
            <h2 className="text-2xl font-semibold mb-3 text-white">How I Built My Portfolio in Next.js</h2>
            <p className="text-gray-300 mb-4">
              A complete guide on building a modern, responsive personal portfolio using Next.js and Tailwind CSS.
            </p>
            <button className="text-blue-500 font-medium hover:text-blue-400 transition">Read More →</button>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-gray-800 shadow-md rounded-2xl p-6 hover:shadow-lg transition cursor-pointer">
            <h2 className="text-2xl font-semibold mb-3 text-white">Top 5 Tips for UI/UX Design</h2>
            <p className="text-gray-300 mb-4">
              Improve your web design skills with these simple and powerful UI/UX principles.
            </p>
            <button className="text-blue-500 font-medium hover:text-blue-400 transition">Read More →</button>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-gray-800 shadow-md rounded-2xl p-6 hover:shadow-lg transition cursor-pointer">
            <h2 className="text-2xl font-semibold mb-3 text-white">Why Choose Next.js for Web Apps?</h2>
            <p className="text-gray-300 mb-4">
              Learn why Next.js is the best framework for fast, SEO-friendly, and scalable applications.
            </p>
            <button className="text-blue-500 font-medium hover:text-blue-400 transition">Read More →</button>
          </div>

          {/* Blog Card 4 */}
          <div className="bg-gray-800 shadow-md rounded-2xl p-6 hover:shadow-lg transition cursor-pointer">
            <h2 className="text-2xl font-semibold mb-3 text-white">Tailwind CSS for Beginners</h2>
            <p className="text-gray-300 mb-4">
              A simple introduction to using Tailwind CSS to create beautiful and responsive layouts.
            </p>
            <button className="text-blue-500 font-medium hover:text-blue-400 transition">Read More →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
