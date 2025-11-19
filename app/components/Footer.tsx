"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-14 mt-10 text-[15px] font-medium">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div className="space-y-3">
          <h2 className="text-white text-3xl font-bold tracking-wide hover:tracking-wider transition-all">
            MyWebsite
          </h2>
          <p className="text-[15px] leading-relaxed font-normal">
            A simple and flexible footer component built with Tailwind CSS and Next.js.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-xl">Quick Links</h3>
          <ul className="space-y-3 text-[15px] font-medium">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Projects", link: "/projects" },
              { name: "Services", link: "/services" },
              { name: "Blog", link: "/blog" },
              { name: "FAQ", link: "/faq" },
              { name: "Contact", link: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="
                    relative inline-block
                    transition-all duration-300
                    hover:text-white
                    hover:translate-x-1
                  "
                >
                  {item.name}
                  <span
                    className="
                      absolute left-0 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-300
                      hover:w-full
                    "
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
{/* Services */}
<div>
  <h3 className="text-white font-semibold mb-4 text-xl">Services</h3>
  <ul className="space-y-3 text-[15px] font-medium">
    {[
      "Web Design",
      "Development",
      "SEO",
      "Card Design",
      "Logo Design",
    ].map((srv, idx) => (
      <li
        key={idx}
        className="
          relative 
          hover:text-white
          transition-all duration-300
          hover:translate-x-1
          group
        "
      >
        {srv}
        <span
          className="
            absolute left-0 -bottom-0.5 h-[2px] w-0 bg-white 
            transition-all duration-300 
            group-hover:w-full
          "
        />
      </li>
    ))}
  </ul>
</div>


        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-xl">Contact</h3>
          <ul className="space-y-2 text-[15px] font-medium">
            <li>Email: sanjeevan54274@gmail.com</li>
            <li>Phone: +94 75 700 9626</li>
            <li>Location: Batticaloa, Sri Lanka</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-[14px] font-normal">
        © {new Date().getFullYear()} MyWebsite. All Rights Reserved.
      </div>
    </footer>
  );
}
