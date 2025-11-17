export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-10 text-center text-white">
          Contact Me
        </h1>

        {/* Contact Form */}
        <div className="bg-gray-800 rounded-2xl shadow-md p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-700 text-white border border-gray-600 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-700 text-white border border-gray-600 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="bg-gray-700 text-white border border-gray-600 rounded-xl p-3 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all">
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="bg-gray-800 rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">My Location</h2>
          <div className="w-full h-80 rounded-xl overflow-hidden border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.2345!2d80.200000!3d7.300000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNy4zQyBOIDgwLjIwQyBF!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}
