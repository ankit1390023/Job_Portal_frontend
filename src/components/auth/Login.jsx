import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { GrLinkedin } from "react-icons/gr"; // LinkedIn icon
import { FaGithub } from "react-icons/fa6"; // GitHub icon
import axios from "axios";
import Loader from "../ui/Loader";
import { USER_API_END_POINT } from "@/utils/constant";
import { useAuth0 } from "@auth0/auth0-react";


const formSchema = z.object({
    identifier: z
        .string()
        .refine(
            (value) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) || /^[6-9]\d{9}$/.test(value),
            { message: "Invalid email or phone number" }
        ),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(10, "Password max length is 10 characters"),
    role: z.enum(["student", "recruiter"], { message: "Role is required" }),
});

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    const navigate = useNavigate();
    const { loginWithRedirect } = useAuth0();
    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${USER_API_END_POINT}/user/login`, data);
            if (response.data.success) {
                
                toast.success(response.data.message || "Login successful");
                navigate("/");
            } else {
                toast.error(response.data.message || "Invalid credentials");
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message || "An error occurred while logging in");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 py-6">
            <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8 sm:p-10">
                {/* Loader */}
                {isSubmitting && <Loader message="Submitting..." />}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Login</h1>

                    {/* Identifier */}
                    <div>
                        <Label className="block text-sm font-medium text-gray-700 mb-2">Email or Phone Number</Label>
                        <Input
                            {...register("identifier")}
                            type="text"
                            placeholder="Enter your email or phone number"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                        />
                        {errors.identifier && <p className="text-red-500 text-sm mt-1">{errors.identifier.message}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <Label className="block text-sm font-medium text-gray-700 mb-2">Password</Label>
                        <Input
                            {...register("password")}
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    <div className="mb-4">
                        <Label className="block text-gray-700 font-medium mb-2">Select Your Role</Label>
                        <div className="flex gap-4 items-center">
                            <label className="flex items-center space-x-2">
                                <Input
                                    {...register("role")}
                                    type="radio"
                                    value="student"
                                    className="h-3 w-3 rounded-full text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <span className="text-gray-700 text-sm">Student</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <Input
                                    {...register("role")}
                                    type="radio"
                                    value="recruiter"
                                    className="h-3 w-3 rounded-full text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <span className="text-gray-700 text-sm">Recruiter</span>
                            </label>
                        </div>
                        {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}
                    </div>


                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-indigo-800 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-indigo-900 transition duration-300"
                    >
                        {isSubmitting ? "Submitting..." : "Login"}
                    </Button>

                    {/* Social Logins */}
                    <div className="space-y-4">
                        <Button
                            type="button"
                            className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                            onClick={()=>loginWithRedirect()}
                        >
                            <FcGoogle className="mr-2 text-xl" /> Login with Google
                        </Button>
                        <Button
                            type="button"
                            className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                        >
                            <GrLinkedin className="mr-2 text-xl text-blue-600" /> Login with LinkedIn
                        </Button>
                        <Button
                            type="button"
                            className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                        >
                            <FaGithub className="mr-2 text-xl text-gray-700" /> Login with GitHub
                        </Button>
                    </div>

                    {/* Sign Up Link */}
                    <p className="text-center text-sm mt-6">
                        Don't have an account?{" "}
                        <Link to="/signUp" className="text-indigo-600 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
