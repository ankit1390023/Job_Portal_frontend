import React from 'react';
import Job from './Job';

const Browse = () => {
  let arr = [1, 2, 3, 4, 5];
  return (
    <div className="container mx-auto max-w-6xl px-4 py-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Search Results ({arr.length})
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {arr.map((item, index) => (
          <Job key={index} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
