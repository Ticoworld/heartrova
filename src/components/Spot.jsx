import React, { useState } from "react";
import Button from "./Button";

const Spot = () => {
  const [activeChoice, setActiveChoice] = useState(1); // Default active choice is Sugardaddy

  const Choice = [
    {
      id: 1,
      name: "Sugardaddy",
    },
    {
      id: 2,
      name: "Sugarbaby",
    },
  ];

  const handleChoiceClick = (id) => {
    setActiveChoice(id);
  };

  return (
    <div className="px-10 lg:px-32 lg:py-28 py-12 bg-white min-h-[90vh]">
      <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full sm:w-1/2 sm:self-start">
          <h3 className="font-bold text-4xl leading-normal pb-5">
            Join our elite community  and secure your spot today.
          </h3>
          <p className="pb-2 text-sm">I am a...</p>
          <div className="flex gap-3">
            {Choice.map((choice) => (
              <div
                key={choice.id}
                onClick={() => handleChoiceClick(choice.id)}
                className={`border rounded-lg pl-3 pr-8 py-2 flex gap-2 items-center justify-between cursor-pointer ${
                  activeChoice === choice.id
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              >
                <div
                  className={`rounded-full h-5 w-5 border ${
                    activeChoice === choice.id ? "border-red-500" : "border-gray-400"
                  } relative`}
                >
                  <div
                    className={`rounded-full h-3 w-3 absolute top-[20%] left-[15%] ${
                      activeChoice === choice.id ? "bg-red-500" : "bg-transparent"
                    }`}
                  ></div>
                </div>
                <p className="text-gray-600 text-sm">{choice.name}</p>
              </div>
            ))}
          </div>
          <Button
            text="Get Started"
            paddingY="py-2"
            paddingX="px-7"
            className="mt-5"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <img
            src="/date.jpg"
            alt="Couple Date"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Spot;
