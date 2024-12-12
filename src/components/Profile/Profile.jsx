import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "../ui/badge";
import { Label } from "@radix-ui/react-dropdown-menu";
import AppliedJobsTable from "../AppliedJobsTable";

const Profile = () => {
    const skills = ["HTML", "CSS", "React", "Next.js"];
    const hasResume = true;

    return (
        <div className="max-w-6xl mx-auto my-8 bg-white shadow-lg border rounded-lg">
            <div className="p-8">
                {/* Profile Header */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-6">
                        <Avatar className="h-24 w-24 shadow-md">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="text-3xl font-bold text-black">John Doe</h1>
                            <p className="text-gray-600">
                                Passionate Frontend Developer with expertise in building user-centric
                                web applications. Always eager to learn and adapt to new technologies.
                            </p>
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border-gray-300 text-gray-700 font-medium shadow-sm transition-all duration-150 hover:border-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <Pen className="w-5 h-5 text-gray-500" />
                        <span>Edit Profile</span>
                    </Button>

                </div>

                {/* Contact Information */}
                <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-3 text-gray-700">
                        <Mail className="w-5 h-5" />
                        <span>john.doe@email.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <Contact className="w-5 h-5" />
                        <span>123-456-7890</span>
                    </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Skills</h2>
                    {skills.length ? (
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <Badge
                                    key={index}
                                    className="px-3 py-1 bg-black text-white rounded-full"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    ) : (
                        <span className="text-gray-500">No skills added yet.</span>
                    )}
                </div>

                {/* Resume */}
                <div className="mb-6">
                    <Label className="text-lg font-medium text-gray-800">Resume</Label>
                    {hasResume ? (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-blue-600 hover:underline mt-1"
                            href="https://portfolio-vite-react-type-script.vercel.app/"
                        >
                            View Resume
                        </a>
                    ) : (
                        <span className="text-gray-500">Not available</span>
                    )}
                </div>
            </div>

            {/* Applied Jobs Table */}
            <div className="p-8 rounded-b-lg">
                <h2 className="text-2xl font-bold text-black  mb-4">Applied Jobs</h2>
                <AppliedJobsTable />
            </div>
        </div>
    );
};

export default Profile;
