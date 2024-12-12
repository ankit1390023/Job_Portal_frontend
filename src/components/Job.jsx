import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Job = ({
    jobTitle,
    companyName,
    companyLogo,
    location,
    salary,
    jobType,
    description,
    deadline,
    positions,
}) => {
    return (
        <div className="max-w-lg mx-auto bg-white border border-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 border-b border-gray-200">
                <div className="flex items-center mb-3 sm:mb-0">
                    <img
                        src={companyLogo}
                        alt={`${companyName} logo`}
                        className="h-16 w-16 object-cover rounded-full border-gray-300"
                    />
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-800">{jobTitle}</h3>
                        <p className="text-sm text-gray-600">{companyName}</p>
                    </div>
                </div>
                {/* Job Type Badge aligned upwards */}
                <Badge
                    variant="outline"
                    className="text-xs py-1 px-3 bg-gray-100 text-gray-600 rounded-[2px] relative top-[-7px] hover:scale-105 transition-transform duration-200"
                >
                    {jobType}
                </Badge>
            </div>

            {/* Content Section */}
            <div className="p-5 space-y-4">
                {/* Location, Salary, and Positions */}
                <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4">
                    <Badge className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full hover:bg-blue-200 transition-colors duration-200">
                        {location}
                    </Badge>
                    <Badge className="bg-green-100 text-green-600 py-1 px-3 rounded-full hover:bg-green-200 transition-colors duration-200">
                        {salary}
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-600 py-1 px-3 rounded-full hover:bg-purple-200 transition-colors duration-200">
                        {positions} positions
                    </Badge>
                </div>

                {/* Job Description */}
                <p className="text-sm text-gray-700 line-clamp-4">{description}</p>
            </div>


            <div className="p-5 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between">
                {/* Apply Button */}
                <Button className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all duration-200">
                    Apply Now
                </Button>
                <p className="text-xs text-blue-800 mt-3 sm:mt-0">
                    <span className="font-medium">Deadline:</span> {deadline}
                </p>
            </div>
        </div>
    );
};

export default Job;
