import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel";
import { Button } from './ui/button';


const category = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "DevOps Engineer",
    "Data Scientist",
    "Product Manager",
    "DevOps Engineer",
    "Data Scientist",
    "Product Manager",
    "DevOps Engineer"
];

const CategoryCarousel = () => {
    return (
        <div className="my-20 relative">
            <Carousel className='w-full max-w-xl mx-auto'>
                <CarouselContent className="flex-shrink">
                    {category.map((cat, index) => {
                        return (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/3 lg-basis-1/4"
                            >
                                <Button
                                    variant="outline"
                                    className="rounded-full border-2 border-blue-500  text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all"
                                >
                                    {cat}
                                </Button>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />

            </Carousel>
        </div>
    );
};

export default CategoryCarousel;