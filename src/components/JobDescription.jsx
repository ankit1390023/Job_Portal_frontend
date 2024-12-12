import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const JobDescription = () => {
  const jobData = {
    title: 'Senior Frontend Engineer',
    company: 'Acme Innovations',
    location: 'Remote',
    salaryRange: '$100,000 - $150,000',
    employmentType: 'Full-time',
    experienceLevel: 'Senior',
    description: (
      <div>
        <p>We are seeking a highly skilled Senior Frontend Engineer to join our team and help build cutting-edge web applications.</p>
        <p>As a Senior Frontend Engineer, you will be responsible for:</p>
        <ul>
          <li>Leading the development of complex frontend features</li>
          <li>Mentoring junior engineers and contributing to code reviews</li>
          <li>Collaborating with backend engineers and designers</li>
          <li>Staying up-to-date with the latest frontend technologies</li>
        </ul>
      </div>
    ),
    requiredSkills: ['React', 'JavaScript', 'HTML', 'CSS'],
    preferredSkills: ['Redux', 'TypeScript', 'GraphQL'],
    benefits: [
      'Competitive salary and benefits package',
      'Flexible work arrangements',
      'Generous vacation time',
      'Professional development opportunities',
      'Health insurance',
      '401(k) matching',
    ],
    applicationProcess: (
      <div>
        <p>To apply for this position, please submit your resume and portfolio to [email protected]</p>
        <p>You can also apply directly through our careers page: <a href="https://acmeinnovations.com/careers">https://acmeinations.com/careers</a></p>
      </div>
    ),
  };

  const {
    title,
    company,
    location,
    salaryRange,
    employmentType,
    experienceLevel,
    description,
    requiredSkills,
    preferredSkills,
    benefits,
    applicationProcess,
  } = jobData;

  const isApplied =true;
  return (
    <div className="job-description bg-white rounded-lg px-10 my-10">
      <div  className='flex justify-between'>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <div className="flex items-center mb-4">
            <p className="text-gray-600 mr-4">{company}</p>
          </div>
          <div className="flex flex-wrap mb-4">
            <Badge className="bg-green-500 text-white px-2 py-1 rounded-full mr-2">{employmentType}</Badge>
            <Badge className="bg-fuchsia-500 text-white px-2 py-1 mx-2 rounded-full">{location}</Badge>
            <Badge className="bg-orange-500 text-white px-2 py-1 mx-2 rounded-full">{experienceLevel}</Badge>
            <Badge className="bg-yellow-500 text-white px-2 py-1 rounded-full">{salaryRange}</Badge>
          </div>
        </div>

        <div>
          <Button
            className={`rounded-[1rem] px-4 py-2 text-white ${isApplied
                ? 'bg-sky-100 text-gray-500 pointer-events-none'
                : 'bg-sky-600 hover:bg-sky-700'
              }`}
          >
            {isApplied ? 'already Applied' : 'Apply now'}
          </Button>
        </div>


      </div>
     
      <div className='border border-gray-400 my-6'></div>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Description</h3>
        {description}
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Required Skills</h3>
        <ul className="list-disc pl-4">
          {requiredSkills.map((skill) => (
            <li key={skill} className="text-gray-600 mb-1">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Preferred Skills</h3>
        <ul className="list-disc pl-4">
          {preferredSkills.map((skill) => (
            <li key={skill} className="text-gray-600 mb-1">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Benefits</h3>
        <ul className="list-disc pl-4">
          {benefits.map((benefit) => (
            <li key={benefit} className="text-gray-600 mb-1">
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">How to Apply</h3>
        {applicationProcess}
      </div>
    </div>
  );
};

export default JobDescription;