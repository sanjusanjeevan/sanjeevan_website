"use client"
export default function FAQ() {
  const faqs = [
    {
      q: "What technologies do you use?",
      a: "I mainly use Next.js, React, Tailwind CSS, JavaScript, and modern backend tools for building fast and scalable applications.",
    },
    {
      q: "Do you build full websites or only frontend?",
      a: "I build complete websites including frontend, backend (Next.js API routes), responsive UI, and deployment.",
    },
    {
      q: "Can you develop custom web applications?",
      a: "Yes, I create custom web apps such as dashboards, business systems, e-commerce platforms, and more.",
    },
    {
      q: "How can I contact you for a project?",
      a: "You can email me anytime at sanjeevan54274@gmail.com for project discussions or hiring.",
    },
    {
      q: "Do you provide responsive design?",
      a: "Yes, all websites and apps I build are fully responsive for mobile, tablet, and desktop.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-200 font-sans">
      {/* Header */}
      <section className="px-10 py-24 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-80">
          Here are some of the most common questions clients ask about my web development services.
        </p>
      </section>

      {/* FAQ List */}
      <section className="px-10 pb-20 max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow hover:scale-[1.01] transition border border-gray-200 dark:border-zinc-800"
          >
            <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
            <p className="opacity-80 text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </section>

      {/* Contact CTA */}
      <section className="px-10 py-20 text-center bg-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          Feel free to reach out. I'm always happy to provide more details about my services.
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