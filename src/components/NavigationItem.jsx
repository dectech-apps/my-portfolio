import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationItem = ({
  icon: Icon,
  label,
  path,
  onClick,
  iconSize = "w-5 h-5",
}) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      to={path}
      onClick={handleClick}
      className={`w-full flex items-center gap-2 px-3 py-3 rounded-full mb-1 transition-colors ${
        isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <Icon className={`${iconSize} flex-shrink-0`} />
      <span className="font-medium text-[12px]">{label}</span>
    </Link>
  );
};

export default NavigationItem;
