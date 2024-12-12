import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LatestJobsCard = ({
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
    const navigate = useNavigate();
    const jobId = 'uhuijhkgfdxrezhxj';
    return (
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mt-5 transition-all duration-70000 ease-in-out hover:scale-1.1 hover:shadow-sm">
            {/* Header Section */}
            <div className="flex justify-between p-2 items-center">
                <div className="text-gray-500 text-sm mx-2">
                    <span>2 days ago</span>
                </div>
                <button className="rounded-full hover:bg-gray-100 border transition duration-200">
                    <Bookmark className="text-gray-600 m-1" />
                </button>
            </div>

            {/* Company Info */}
            <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center">
                <div className="flex items-center">
                    <img
                        src={companyLogo}
                        alt={`${companyName} logo`}
                        className="h-14 w-14 object-cover rounded-full border border-gray-300"
                    />
                    <div className="ml-4">
                        <h3 className="text-sm font-semibold text-gray-900">{jobTitle}</h3>
                        <p className="text-xs text-gray-600 mt-1">{companyName}</p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-2 space-y-4">
                <div className="flex flex-wrap gap-2 sm:gap-4">
                    <Badge className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-xs">
                        {location}
                    </Badge>
                    <Badge className="bg-green-100 text-green-600 py-1 px-3 rounded-full text-xs">
                        {salary}
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-600 py-1 px-3 rounded-full text-xs">
                        {positions} positions
                    </Badge>
                    <Badge className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-xs">
                        {jobType}
                    </Badge>
                </div>

                {/* Job Description */}
                <p className="text-gray-700 text-xs leading-relaxed line-clamp-4">
                    {description}
                </p>
            </div>

            {/* Footer Section */}
            <div className="p-5 border-t flex flex-col sm:flex-row items-center justify-between">
                <Button className="px-2 py-2 bg-gray-50 rounded-s-md text-black font-medium border border-gray-700  transition duration-200" onClick={()=>navigate(`/jobDescription/${jobId}`)}>
                    Details
                </Button>

                {/* Apply Button */}
                <Button className="px-1 py-2 bg-blue-600 text-white font-medium rounded-sm hover:bg-blue-700 transition duration-200">
                    Apply Now
                </Button>
            </div>
        </div>
    );
};

LatestJobsCard.propTypes = {
    jobTitle: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    companyLogo: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    jobType: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    positions: PropTypes.number.isRequired,
};

export default LatestJobsCard;
