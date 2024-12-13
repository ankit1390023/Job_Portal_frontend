import React from "react";
import { Button } from './ui/button';


const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r m-1 p-4 from-[rgb(90,151,244)] to-[rgb(90,131,255)] text-white">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-2xl animate-fadeIn">
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
              Find Your <span className="text-[#F59E0B]">Dream Job</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-gray-800">
              Explore thousands of job opportunities that align with your career
              goals and skills. Kickstart your journey with Workify today!
            </p>
            <div className="mt-8 flex space-x-4">
              <Button
                variant="solid"
                color="yellow"
                size="lg"
                className="px-6 py-3 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition duration-300 animate-slideIn"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                color="white"
                size="lg"
                className="px-6 py-3 font-semibold rounded-lg hover:bg-white hover:text-[#1D4ED8] transition duration-300 animate-slideIn"
              >
                Learn More
              </Button>
            </div>

            {/* Explore Jobs Button */}
            <button className="animate-slideIn bg-[#1D4ED8] text-white px-4 py-2 mt-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Explore Jobs
            </button>
          </div>

          {/* Animated Content */}
          <div className="animate-slideIn opacity-0 mt-12" data-scroll-trigger>
            <h3 className="text-lg font-medium">Find Your Dream Job</h3>
            <p className="text-muted-foreground">
              Explore opportunities worldwide.
            </p>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 animate-slideIn">
          <img
            src="https://via.placeholder.com/400x300" // Replace with your image link
            alt="Workify Hero"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </section>


    </>
  );
};

export default HeroSection;