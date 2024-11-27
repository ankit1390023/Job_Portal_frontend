import React from 'react';

const Browse = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Browse Categories</h1>
        <p className="text-lg text-gray-600">Explore different job categories to find your perfect match</p>
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

      {/* Category Listings Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-600 mx-auto"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 12h9M3 12h9M12 3v18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Technology</h2>
          <p className="text-gray-600 mt-2">Find opportunities in tech jobs like development, design, and data science.</p>
          <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Explore Tech Jobs
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-600 mx-auto"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 20h-14a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Healthcare</h2>
          <p className="text-gray-600 mt-2">Browse healthcare job categories such as nursing, medical tech, and support roles.</p>
          <button className="mt-4 w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Explore Healthcare Jobs
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-yellow-600 mx-auto"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 3v18M3 12h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Marketing</h2>
          <p className="text-gray-600 mt-2">Explore various marketing positions including digital marketing, SEO, and brand management.</p>
          <button className="mt-4 w-full py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
            Explore Marketing Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Browse;
