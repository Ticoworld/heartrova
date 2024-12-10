import React from "react";
import { IoIosHeartHalf } from "react-icons/io";
import { RiLock2Fill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { FaGem } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <IoIosHeartHalf />,
      title: "Personalized Matches",
      paragraph:
        "Connect with individuals who truly align with your values, interests, and ambitions. Join a community of like-minded achievers who value sophistication and success.",
    },
    {
      id: 2,
      icon: <RiLock2Fill />,
      title: "Complete Privacy",
      paragraph:
        "Your privacy is our top priority. Engage in meaningful conversations within a protected space, ensuring your personal details are always kept confidential.",
    },
    {
      id: 3,
      icon: <MdVerified />,
      title: "Verified Profiles",
      paragraph:
        "We prioritize trust. Every profile goes through a thorough verification process to ensure you're engaging with genuine individuals in a secure environment.",
    },
    {
      id: 4,
      icon: <FaGem />,
      title: "Exclusive Experience",
      paragraph:
        "Step into a world of luxury, where extraordinary connections and experiences are the standard, whether you're a gracious benefactor or a captivating partner.",
    },
  ];
  return (
    <div className="lg:px-32 lg:py-28 px-10 py-12 bg-backgroundColor min-h-[90vh]">
      <div>
        <h3
          className="text-center lg:text-4xl text-3xl font-bold lg:pb-16 pb-10"
          style={{ lineHeight: 1.2 }}
        >
          An exclusive hub <br /> for the <br /> distinguished few
        </h3>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out p-4"
              >
                <div className="flex justify-start items-center gap-2 pb-2">
                  <div className="text-[1.6rem] text-lightPrimary">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-center">
                    {service.title}
                  </h3>
                </div>
                <div>
                  <p className="text-[0.93rem] text-gray-800 leading-relaxed">
                    {service.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
