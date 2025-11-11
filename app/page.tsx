const Page = () => {
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800">
      {/* Header Section - Warm Earth Tones */}
      <header className="text-center py-16 bg-green-700 text-white shadow-xl">
        <h1 className="text-5xl font-extrabold tracking-tight">Hello, I'm Mia Benson</h1>
        <p className="text-2xl mt-4 font-light">A dedicated Childcare Provider & Dog Groomer</p>
      </header>

      {/* Bio Section - Focus on Nurturing */}
      <section className="px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-8 text-green-700">The Nurturing Touch</h2>
        <p className="text-xl max-w-4xl mx-auto leading-relaxed">
          I'm passionate about providing compassionate care and support for both children and beloved pets.
          I recently achieved my **AA degree in Social Science** and am currently pending transfer to continue my studies in **Communications**.
          My focus is on creating safe, nurturing, and positive environments where both little ones and furry friends can thrive.
        </p>
      </section>

      {/* Skills Section - Animated Cards for 3D/Lively Feel */}
      <section className="bg-amber-100 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-10 text-green-700">My Care Expertise</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
            
            {/* Skill Card 1 - Animated for a lively '3D' feel */}
            <li className="p-6 bg-white rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-b-4 hover:border-amber-500">
              <h3 className="text-2xl font-semibold text-green-800">Customer Service</h3>
              <p className="mt-2 text-gray-600">Building trust with every family.</p>
            </li>

            {/* Skill Card 2 */}
            <li className="p-6 bg-white rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-b-4 hover:border-amber-500">
              <h3 className="text-2xl font-semibold text-green-800">Early Childhood Education</h3>
              <p className="mt-2 text-gray-600">Fostering growth through creative play.</p>
            </li>

            {/* Skill Card 3 */}
            <li className="p-6 bg-white rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-b-4 hover:border-amber-500">
              <h3 className="text-2xl font-semibold text-green-800">First Aid & CPR Certified</h3>
              <p className="mt-2 text-gray-600">Preparedness is priority one.</p>
            </li>

            {/* Skill Card 4 */}
            <li className="p-6 bg-white rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-b-4 hover:border-amber-500">
              <h3 className="text-2xl font-semibold text-green-800">Time Management</h3>
              <p className="mt-2 text-gray-600">Structured care for peace of mind.</p>
            </li>
          </ul>
        </div>
      </section>
      
      {/* New Services Offered Section */}
      <section className="bg-white py-20">
        <div className="text-center max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-green-700">Services Offered</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            
            {/* Childcare Services Panel */}
            <div className="p-8 border-2 border-green-200 rounded-xl shadow-2xl transition-shadow duration-300 hover:shadow-green-300/50">
              <h3 className="text-3xl font-extrabold mb-4 text-amber-600">Childcare Services</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-green-700 font-bold mr-2 text-xl">&bull;</span>
                  <div>**Flexible In-Home Care:** Part-time, full-time, and date-night services.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 font-bold mr-2 text-xl">&bull;</span>
                  <div>**Educational Play:** Structured activities supporting early development (0-5 years).</div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 font-bold mr-2 text-xl">&bull;</span>
                  <div>**Homework & After-School Support:** For elementary-aged children.</div>
                </li>
              </ul>
            </div>
            
            {/* Dog Grooming Services Panel */}
            <div className="p-8 border-2 border-amber-200 rounded-xl shadow-2xl transition-shadow duration-300 hover:shadow-amber-300/50">
              <h3 className="text-3xl font-extrabold mb-4 text-green-700">Dog Grooming Services</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2 text-xl">&bull;</span>
                  <div>**Full-Service Styling:** Breed-specific cuts, bath, and blowout.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2 text-xl">&bull;</span>
                  <div>**Healthy Paw & Nail Trims:** Comfort-focused nail grinding and pad moisturizing.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2 text-xl">&bull;</span>
                  <div>**Deshedding & Coat Conditioning:** Specialty treatments for a shiny, healthy coat.</div>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>

      {/* Contact Section - The Call to Connect */}
      <section className="px-4 py-20 text-center bg-yellow-50">
        <h2 className="text-4xl font-bold mb-8 text-green-700">Connect for Care</h2>
        <p className="text-xl mb-6">Let's discuss how I can bring my expertise to your family or your furry friend!</p>
        <a
          href="mailto:miarvbenson@gmail.com"
          className="text-2xl font-semibold text-amber-600 hover:text-amber-700 transition-colors duration-200 border-b-2 border-amber-600 pb-1"
        >
          miarvbenson@gmail.com
        </a>
      </section>

      {/* Footer Section */}
      <footer className="py-6 bg-green-800 text-white text-center">
        <p>Built with love using Next.js & Tailwind CSS</p>
        <p className="mt-1">&copy; 2026 Mia Benson</p>
      </footer>
    </div>
  );
};

export default Page;
