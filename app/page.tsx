const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="text-center py-12 bg-indigo-600 text-white">
        <h1 className="text-4xl font-bold">Hello, I'm Mia Benson</h1>
        <p className="text-xl mt-4">A dedicated Childcare Provider & Dog Groomer</p>
      </header>

      {/* Bio Section */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto">
          I'm passionate about providing compassionate care and support for both children and beloved pets.
          I recently achieved my **AA degree in Social Science** and am currently pending transfer to continue my studies in **Communications**.
          My focus is on creating safe, nurturing, and positive environments for everyone in my care.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-100 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Key Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-lg">
            <li>Customer Service</li>
            <li>Early Childhood Education</li>
            <li>First Aid & CPR Certified</li>
            <li>Time Management</li>
            {/* Additional placeholders for future skills, if needed */}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">Feel free to reach out for service inquiries, availability, or collaborations!</p>
        <a
          href="mailto:miarvbenson@gmail.com"
          className="text-xl text-indigo-600 hover:underline"
        >
          miarvbenson@gmail.com
        </a>
      </section>

      {/* Footer Section */}
      <footer className="py-4 bg-gray-800 text-white text-center">
        <p>Built with love using Next.js & Tailwind CSS</p>
        <p>&copy; 2026 Mia Benson</p>
      </footer>
    </div>
  );
};

export default Page;
