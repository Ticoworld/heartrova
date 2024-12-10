import React from "react";
import Button from "./Button";

const Desires = () => {
  return (
    <div className="lg:px-32 lg:py-24 py-12 px-10 bg-white min-h-[90vh]">
      <div className="flex flex-col lg:flex-row justify-between items-center  gap-20">
        <div className="flex justify-center gap-4 lg:gap-2">
          <div className="md:w-[250px] sm:w-[200px] lg:w-[150px] w-[200px] overflow-hidden rounded-lg shadow-md">
            <img
              src="/man.jpg"
              alt="Man"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:w-[250px] sm:w-[200px] lg:w-[150px] w-[200px] overflow-hidden rounded-lg shadow-md">
            <img
              src="/woman.jpg"
              alt="Woman"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="text-gray-800 lg:text-left max-w-xl md:self-start">
          <h3 className="font-semibold text-4xl text-black pb-4">Your Desires, Your <br /> Rules</h3>
          <p className="text-sm leading-relaxed">
            Shape your romantic journey your way – set your own standards,
            define your ideal connection, and create the relationship that
            aligns with your vision.
          </p>
          <Button 
          text="Get Started"
          paddingY="py-2"
          paddingX="px-7"
          />
        </div>
      </div>
    </div>
  );
};

export default Desires;
