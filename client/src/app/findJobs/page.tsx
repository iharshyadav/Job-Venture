import React from 'react';
import Navtop from '../components/Navtop';
import Footer from '../components/Footer';

const FindAJob: React.FC = () => {
  return (
    <>
        <Navtop />
        <hr />
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 lg:p-5">
      <header className="bg-white shadow-lg rounded-lg p-4 mb-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-bold text-blue-600">Find Your Dream Job</h1>
          <input
            type="text"
            placeholder="Search for jobs..."
            className="w-full md:w-1/3 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </header>

      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* Filter Section */}
        <aside className="lg:w-1/4 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Filter Jobs</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <select id="location" className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Bengluru</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry</label>
              <select id="industry" className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">Job Type</label>
              <select id="type" className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        </aside>

        {/* Job Listings Section */}
        <main className="lg:w-3/4">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Job Listings</h2>
            <div className="space-y-6">
              {/* Example Job Cards with varied descriptions */}
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-blue-600">Frontend Developer at Creative Labs</h3>
                <p className="text-gray-600 mt-2">Location: Bengaluru, Karnataka</p>
                <p className="text-gray-600 mt-2">Industry: Technology</p>
                <p className="text-gray-600 mt-2">Job Type: Full-time</p>
                <p className="text-gray-600 mt-2">Join a dynamic team working on cutting-edge web technologies. Experience with React and modern JavaScript frameworks required.</p>
                <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors duration-300">
                  Apply Now
                </button>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-blue-600">Marketing Specialist at Global Corp</h3>
                <p className="text-gray-600 mt-2">Location: Mumbai, India</p>
                <p className="text-gray-600 mt-2">Industry: Marketing</p>
                <p className="text-gray-600 mt-2">Job Type: Part-time</p>
                <p className="text-gray-600 mt-2">Help drive brand awareness and engagement through innovative marketing strategies. Strong analytical skills and creativity needed.</p>
                <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors duration-300">
                  Apply Now
                </button>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-blue-600">Data Analyst at FinTech Solutions</h3>
                <p className="text-gray-600 mt-2">Location: Delhi, India</p>
                <p className="text-gray-600 mt-2">Industry: Finance</p>
                <p className="text-gray-600 mt-2">Job Type: Contract</p>
                <p className="text-gray-600 mt-2">Analyze financial data to provide insights and support business decisions. Proficiency in SQL and data visualization tools required.</p>
                <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors duration-300">
                  Apply Now
                </button>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-blue-600">UX Designer at InnovateTech</h3>
                <p className="text-gray-600 mt-2">Location: Hyderabad, Telangana</p>
                <p className="text-gray-600 mt-2">Industry: Design</p>
                <p className="text-gray-600 mt-2">Job Type: Full-time</p>
                <p className="text-gray-600 mt-2">Create user-centered designs for web and mobile applications. Experience with wireframing and prototyping tools is essential.</p>
                <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors duration-300">
                  Apply Now
                </button>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-blue-600">Software Engineer at DevMasters</h3>
                <p className="text-gray-600 mt-2">Location:Delhi, India</p>
                <p className="text-gray-600 mt-2">Industry: Technology</p>
                <p className="text-gray-600 mt-2">Job Type: Full-time</p>
                <p className="text-gray-600 mt-2">Develop and maintain high-performance software solutions. Strong knowledge of C++ and experience with cloud platforms required.</p>
                <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors duration-300">
                  Apply Now
                </button>
              </div>

              {/* Add more job cards as needed */}
            </div>
          </section>
        </main>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default FindAJob;
