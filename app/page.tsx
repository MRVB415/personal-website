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
            <li className="p-6 bg-white rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-b-4 hover:border-amber-500 animate-pulse-once">
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
      
      {/* Contact Section - The Call to Connect */}
      <section className="px-4 py-20 text-center bg-white">
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
      
      {/* Custom CSS for the subtle 'pulse' animation (if you use a separate CSS file) */}
      {/* <style jsx>{`
        .animate-pulse-once {
          animation: pulse-once 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-once {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.02);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
        }
      `}</style> 
      */}
    </div>
  );
};

export default Page;const Page = () => {
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
            <li className="p-6 bg-white rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-b-4 hover:border-amber-500 animate-pulse-once">
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
      
      {/* Contact Section - The Call to Connect */}
      <section className="px-4 py-20 text-center bg-white">
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
      
      {/* Custom CSS for the subtle 'pulse' animation (if you use a separate CSS file) */}
      {/* <style jsx>{`
        .animate-pulse-once {
          animation: pulse-once 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-once {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.02);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
        }
      `}</style> 
      */}
    </div>
  );
};

export default Page;
