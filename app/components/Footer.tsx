"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">MyWebsite</h2>
          <p className="text-sm">
            A simple and flexible footer component built with Tailwind CSS and Next.js.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-medium mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Web Design</li>
            <li className="hover:text-white cursor-pointer">Development</li>
            <li className="hover:text-white cursor-pointer">SEO</li>
            <li className="hover:text-white cursor-pointer">Branding</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-medium mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@mywebsite.com</li>
            <li>Phone: +94 77 123 4567</li>
            <li>Location: Colombo, Sri Lanka</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} MyWebsite. All Rights Reserved.
      </div>
    </footer>
  );
}
