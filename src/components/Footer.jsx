import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-screen-xl mx-auto px-8 xl:px-32 lg:px-16">
        <div className="flex flex-col md:flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="flex flex-col mb-6 sm:mb-0">
            <h2 className="text-2xl font-bold mb-4">Heartrove</h2>
            <p className="text-sm text-gray-500">
              Heartrove is a luxury lifestyle dating platform for successful,<br /> wealthy,  and beautiful individuals, based in and out of Lagos State, Nigeria.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-6 sm:mb-0 text-[0.8rem]">
            <ul>
              <li className="mb-2"><a href="#" className="text-sm hover:text-red-500">Login</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:text-red-500">Register</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:text-red-500">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:text-red-500">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:text-red-500">Terms of Service</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:text-red-500">Privacy Policy</a></li>
            </ul>
            <ul>
              <li className="mb-2"><a href="#" className="text-sm hover:text-red-500">Blog</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:text-red-500">Press & Media</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:text-red-500">Help Centre</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:text-red-500">How it Works</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:text-red-500">Cookie Policy</a></li>
            </ul>
          </div>

          <div className="flex gap-4 mb-6 sm:mb-0">
            <a href="#" className="text-white hover:text-red-500">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-red-500">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-red-500">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-red-500">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-sm">
        <p>© 2024 Heartrove. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
