import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";
import { Bell } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md ">
            {/* Logo */}
            <div className="text-3xl font-bold text-blue-600">
                <span className="text-yellow-500">Workify</span>
            </div>

            {/* Search Bar */}
            <div className="relative w-1/3 hidden sm:block">
                <Input
                    type="text"
                    placeholder="Search jobs, companies..."
                    className="w-full pl-4 border border-gray-300 focus:border-blue-600"
                />
                <Button
                    variant="default"
                    className="absolute right-0 top-0 px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700"
                >
                    Search
                </Button>
            </div>

            {/* Dropdown for Job Categories */}
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                        Jobs
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white shadow-lg rounded-md p-2">
                    {["IT Jobs", "Marketing", "Finance", "Remote Jobs"].map((category) => (
                        <DropdownMenuItem key={category} className="text-gray-700 hover:bg-blue-100">{category}</DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-6 text-lg">
                {["About", "Contact", "Jobs", "Browse"].map((link) => (
                    <NavLink
                        key={link}
                        to={`/${link.toLowerCase()}`}
                        className={({ isActive }) =>
                            `py-2 px-4 transition-colors duration-200 ${isActive
                                ? "text-yellow-500 border-b-2 border-yellow-500"
                                : "text-gray-700"
                            } hover:text-blue-600`
                        }
                    >
                        {link}
                    </NavLink>
                ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4 ml-auto">
                {/* Notification Bell */}
                <div className="relative">
                    <Button variant="ghost">
                        <Bell size={24} className="text-gray-700" />
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            3
                        </span>
                    </Button>
                </div>

                {/* Login Button */}
                <Link to="/login">
                    <Button
                        variant="default"
                        className="rounded bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        Login
                    </Button>
                </Link>

                {/* User Avatar and Popover */}
                <Popover>
                    <PopoverTrigger asChild>
                        <Avatar className="cursor-pointer">
                            <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                            <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                    </PopoverTrigger>
                    <PopoverContent className="w-64 p-4 bg-white rounded-md shadow-lg">
                        <div className="flex flex-col items-center">
                            {/* User Avatar */}
                            <Avatar className="w-16 h-16">
                                <AvatarImage src="https://github.com/shadcn.png" alt="Profile Avatar" />
                                <AvatarFallback>AS</AvatarFallback>
                            </Avatar>
                            <h4 className="mt-2 text-lg font-semibold text-gray-700">Ankit Srivastav</h4>
                            <p className="text-sm text-gray-600">ankit.jobportal@example.com</p>

                            {/* Profile Details */}
                            <div className="w-full mt-4 space-y-2 text-sm text-gray-800">
                                <div className="flex justify-between">
                                    <span className="font-medium">Role:</span>
                                    <span>Job Seeker</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium">Joined:</span>
                                    <span>March 2023</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium">Applications:</span>
                                    <span>12</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium">Saved Jobs:</span>
                                    <span>5</span>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="mt-4 w-full flex flex-col gap-2">
                                <Button variant="outline" className="w-full text-blue-600 border-blue-600 hover:bg-blue-50">
                                    Profile Settings
                                </Button>
                                <Button variant="default" className="w-full bg-red-500 text-white hover:bg-red-600">
                                    Logout
                                </Button>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default Header;
