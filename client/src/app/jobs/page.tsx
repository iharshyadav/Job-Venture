"use client"
import React, { useState } from 'react';

const JobListingPage = () => {
  const [filters, setFilters] = useState({
    location: '',
    jobType: '',
    experience: '',
  });

  const handleFilterChange = (e:any) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-[#4640de]">InternshipHub</div>
          <div>
            <button className="px-6 py-2 bg-[#26a4ff] text-white rounded-full hover:bg-[#1b8fd4] transition">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="bg-white shadow-md py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 justify-between">
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2">Location</label>
            <select
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="p-3 rounded-lg border border-gray-300"
            >
              <option value="">All Locations</option>
              <option value="remote">Remote</option>
              <option value="newyork">New York</option>
              <option value="sanfrancisco">San Francisco</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2">Job Type</label>
            <select
              name="jobType"
              value={filters.jobType}
              onChange={handleFilterChange}
              className="p-3 rounded-lg border border-gray-300"
            >
              <option value="">All Job Types</option>
              <option value="fulltime">Full-Time</option>
              <option value="parttime">Part-Time</option>
              <option value="internship">Internship</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2">Experience Level</label>
            <select
              name="experience"
              value={filters.experience}
              onChange={handleFilterChange}
              className="p-3 rounded-lg border border-gray-300"
            >
              <option value="">All Levels</option>
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
            </select>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Available Internships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(9).fill(null).map((_, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition flex flex-col"
              >
                <h3 className="text-2xl font-semibold text-[#4640de]">Frontend Developer Intern</h3>
                <p className="mt-2 text-gray-600">Company Name</p>
                <p className="mt-1 text-gray-500">Remote - Full Time</p>
                <p className="mt-4 text-gray-600">This is a brief description of the job position...</p>
                <button className="mt-auto py-2 px-4 bg-[#26a4ff] text-white rounded-lg font-medium hover:bg-[#1b8fd4]">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#26a4ff] to-[#4640de] text-center text-white">
        <h2 className="text-4xl font-extrabold">Kickstart Your Career with Us</h2>
        <p className="mt-4 text-lg">Join InternshipHub and gain access to exclusive opportunities today.</p>
        <button className="mt-8 px-10 py-4 bg-white text-[#4640de] rounded-full font-semibold hover:bg-gray-200 transition">
          Sign Up Now
        </button>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white text-gray-700 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between">
          <p>&copy; 2024 InternshipHub. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#4640de]">Privacy Policy</a>
            <a href="#" className="hover:text-[#4640de]">Terms of Service</a>
            <a href="#" className="hover:text-[#4640de]">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JobListingPage;
