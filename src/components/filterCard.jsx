import React, { useState } from 'react';

import { Label } from './ui/label';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';

const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote'];
const experienceLevels = ['Entry Level', 'Mid Level', 'Senior Level', 'Lead'];
const locations = ['New York', 'San Francisco', 'London', 'Remote'];

export default function FilterSection() {
    const [location, setLocation] = useState('');
    const [salaryRange, setSalaryRange] = useState([0, 200000]);

    const handleSliderChange = (newRange) => {
        setSalaryRange(newRange);
    };

    return (
        <div className="p-6 space-y-6 bg-white rounded-lg shadow-md">

            {/* Job Type Section */}
            <div>
                <h3 className="text-gray-900 font-semibold text-lg mb-3">Job Type</h3>
                <div className="space-y-2">
                    {jobTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-3">
                            <Checkbox id={`type-${type}`} />
                            <label
                                htmlFor={`type-${type}`}
                                className="text-gray-700 text-sm font-medium leading-none peer-disabled:opacity-70"
                            >
                                {type}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Experience Level Section */}
            <div>
                <h3 className="text-gray-900 font-semibold text-lg mb-3">Experience Level</h3>
                <div className="space-y-2">
                    {experienceLevels.map((level) => (
                        <div key={level} className="flex items-center space-x-3">
                            <Checkbox id={`level-${level}`} />
                            <label
                                htmlFor={`level-${level}`}
                                className="text-gray-700 text-sm font-medium leading-none peer-disabled:opacity-70"
                            >
                                {level}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Location Section */}
            <div>
                <h3 className="text-gray-900 font-semibold text-lg mb-3">Location</h3>

                {/* Text Input for Location */}
                <Label className="text-sm font-medium mb-2">Enter Location</Label>
                <Input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full"
                />
            </div>

            {/* Salary Range Filter */}
            <div>
                <h3 className="text-gray-900 font-semibold text-lg mb-3">Salary Range</h3>
                <Label className="text-sm font-medium mb-2">Select Salary Range</Label>

                {/* Slider Component */}
                <Slider
                    value={salaryRange}
                    onValueChange={handleSliderChange}
                    min={0}
                    max={200000}
                    step={1000}
                />
                <div className="text-sm mt-2">
                    ₹{salaryRange[0]} - ₹{salaryRange[1]}
                </div>
            </div>

        </div>
    );
}
