import React from 'react';

import FilterCard from './filterCard';
import LatestJobsCard from './LatestJobsCard';
import { ScrollArea } from './ui/scroll-area';
const randomJobs = [
  {
    jobTitle: 'Frontend Developer',
    companyName: 'TechCorp',
    companyLogo: 'https://via.placeholder.com/50', // Replace with SVG or real image URL
    location: 'Remote',
    salary: '$70k - $90k',
    jobType: 'Full-Time',
    description: 'Build and maintain responsive UIs using React and Tailwind CSS.',
    deadline: '30th Nov 2024',
  },
  {
    jobTitle: 'Frontend Developer',
    companyName: 'TechCorp',
    companyLogo: 'https://via.placeholder.com/50', // Replace with SVG or real image URL
    location: 'Remote',
    salary: '$70k - $90k',
    jobType: 'Full-Time',
    description: 'Build and maintain responsive UIs using React and Tailwind CSS.',
    deadline: '30th Nov 2024',
  },
  {
    jobTitle: 'Backend Engineer',
    companyName: 'Innovatech',
    companyLogo: 'https://via.placeholder.com/50', // Replace with SVG or real image URL
    location: 'New York, NY',
    salary: '$80k - $100k',
    jobType: 'Part-Time',
    description: 'Develop scalable APIs and handle database operations using Node.js.',
    deadline: '15th Dec 2024',
  },
  {
    jobTitle: 'Frontend Developer',
    companyName: 'TechCorp',
    companyLogo: 'https://via.placeholder.com/50', // Replace with SVG or real image URL
    location: 'Remote',
    salary: '$70k - $90k',
    jobType: 'Full-Time',
    description: 'Build and maintain responsive UIs using React and Tailwind CSS.',
    deadline: '30th Nov 2024',
  },
  {
    jobTitle: 'Backend Engineer',
    companyName: 'Innovatech',
    companyLogo: 'https://via.placeholder.com/50', // Replace with SVG or real image URL
    location: 'New York, NY',
    salary: '$80k - $100k',
    positions: 4,
    jobType: 'Part-Time',
    description: 'Develop scalable APIs and handle database operations using Node.js.',
    deadline: '15th Dec 2024',
  },
  {
    jobTitle: 'Frontend Developer',
    companyName: 'TechCorp',
    companyLogo: 'https://via.placeholder.com/50', // Replace with SVG or real image URL
    location: 'Remote',
    salary: '$70k - $90k',
    positions: 6,
    jobType: 'Full-Time',
    description: 'Build and maintain responsive UIs using React and Tailwind CSS.',
    deadline: '30th Nov 2024',
  },
  {
    jobTitle: 'Backend Engineer',
    companyName: 'Innovatech',
    companyLogo: 'https://via.placeholder.com/50', // Replace with SVG or real image URL
    location: 'New York, NY',
    salary: '$80k - $100k',
    positions: 48,
    jobType: 'Part-Time',
    description: 'Develop scalable APIs and handle database operations using Node.js.',
    deadline: '15th Dec 2024',
  },
];

const Jobs = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto flex gap-8">
       
       
          {/* Filter Section */}
          <div className="w-20% flex-shrink-0 bg-white  rounded-lg shadow-sm">
            <FilterCard />
          </div>

          {/* Jobs List */}
          <div className="flex-1">
            <ScrollArea className="h-[calc(100vh)] pr-4">
              <div className="space-y-4 grid grid-cols-3 gap-2">
                {randomJobs.slice(0, 9).map((job, index) => (
                  <LatestJobsCard key={index} {...job} />
                ))}
              </div>
            </ScrollArea>
          </div>
      
      </div>
    </div>
  );
};

export default Jobs;
