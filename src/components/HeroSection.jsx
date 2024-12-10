import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import Button from "./Button";

const HeroSection = () => {
  return (
    <div
      className="px-32 py-20 text-white bg-cover bg-center bg-no-repeat h-[90vh]"
      style={{
        backgroundImage: `url('/show.jpg')`, 
      }}
    >
      <div className="flex flex-col justify-center items-center h-full text-center">
        <h1 
          className="text-2xl lg:text-[2.6rem] font-bold py-10 lg:w-[600px] w-[400px] break-words h-[150px] mb-3"
          style={{ lineHeight: 1.2 }} 
        >
          <span className="text-white font-bold">
            <Typewriter
              words={[
                'Welcome to the 1% Dating Experience',
                'Elite Matches for Exceptional People',
                'Where Connections Turn into Forever',
                'Where Chemistry Meets Compatibility',
                'Exclusively for the Bold and the Beautiful',
              ]}
              loop={100}
              cursor
              cursorStyle=''
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={5000}
            />
          </span>
        </h1>
        <p className="mt-4 md:text-lg  text-sm max-w-xl py-2">
          Join thousands of singles and discover meaningful connections today.
        </p>
        <Button 
        text="Get Started"
        paddingY="py-2"
        paddingX="px-5"
        />
      </div>
    </div>
  );
};

export default HeroSection;
