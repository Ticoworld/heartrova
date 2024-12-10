import PropTypes from "prop-types";
import React from "react";

const Button = ({ 
  text = "Login", 
  icon: Icon = null, 
  bgColor = "bg-primaryColor",  
  textColor = "text-white", 
  link = "#", 
  hoverColor = "text-primaryColor", 
  borderColor = "border-primaryColor",
  hoverBorderColor = "border-primaryColor",
  paddingX = "px-4",
  paddingY = "py-1",
  onClick = () => {} 
}) => {
  return (
    <button
      className={`border ${borderColor} ${bgColor} ${textColor} ${paddingY} ${paddingX} rounded-full flex items-center justify-between gap-3 text-sm cursor-pointer my-3 font-semibold`}
      onClick={onClick}
      aria-label={text}
      style={{ transition: "background-color 0.3s ease, border-color 0.3s ease" }}
      onMouseEnter={(e) => {
        e.currentTarget.classList.replace(bgColor, hoverColor);
        e.currentTarget.classList.replace(borderColor, hoverBorderColor);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.classList.replace(hoverColor, bgColor);
        e.currentTarget.classList.replace(hoverBorderColor, borderColor);
      }}
    >
      {text}
      {Icon && <Icon />}
    </button>
  );
};

// Prop types for validation
Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.elementType,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  link: PropTypes.string,
  hoverColor: PropTypes.string,
  borderColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  onClick: PropTypes.func,
  paddingX: PropTypes.string,
  paddingY: PropTypes.string,
};

export default Button;
