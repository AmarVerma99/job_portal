import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "AI / ML",
  "Data Analytics",
  "SDE Jobs",
  "Data Science",
  "Full Stack Developer",
];

const CategoryCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-6">
       <span className="text-purple-600"> Explore Job Categories</span>
      </h2>

      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {categories.map((category, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              <Card className="h-10 flex items-center justify-center rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="flex items-center justify-center text-center p-2">
                  <span className="text-base font-medium text-gray-700">
                    {category}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
