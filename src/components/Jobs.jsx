import React from 'react';

const Jobs = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Job Opportunities</h1>
        <p className="text-lg text-gray-600">Find your dream job from thousands of listings</p>
        {/* SVG Section */}
        <div className="mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="mx-auto h-32 w-32 text-blue-600"
          >
            <path
              fill="currentColor"
              d="M32 0C14.33 0 0 14.33 0 32s14.33 32 32 32 32-14.33 32-32S49.67 0 32 0zm0 58C16.75 58 6 47.25 6 32S16.75 6 32 6s26 10.75 26 26-10.75 26-26 26z"
            />
            <path
              fill="currentColor"
              d="M32 18c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z"
            />
          </svg>
        </div>
      </div>

      {/* Job Listings Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Software Engineer</h2>
          <p className="text-gray-600 mt-2">Company: TechCorp</p>
          <p className="text-gray-600 mt-2">Location: San Francisco, CA</p>
          <p className="text-gray-600 mt-2">Full-time</p>
          <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Apply Now
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">UX Designer</h2>
          <p className="text-gray-600 mt-2">Company: Designify</p>
          <p className="text-gray-600 mt-2">Location: Remote</p>
          <p className="text-gray-600 mt-2">Part-time</p>
          <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Apply Now
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Data Scientist</h2>
          <p className="text-gray-600 mt-2">Company: DataGen</p>
          <p className="text-gray-600 mt-2">Location: New York, NY</p>
          <p className="text-gray-600 mt-2">Full-time</p>
          <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
