import React from "react";
import { RxGlobe } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import Button from "./Button";

const Header = () => {
  return (
    <div className="lg:px-16 xl:px-32 py-1 px-8 bg-black text-white sticky top-0 z-40 text-sm">
      <div className="flex justify-between items-center">
        <div>logo</div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center justify-between gap-2">
            <RxGlobe />
            <p>English</p>
            <MdKeyboardArrowDown />
          </div>
          <Button 
          borderColor = "border-primaryColor"
          bgColor="bg-transparent"
          />
          <Button 
          text="Register"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
