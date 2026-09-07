import React, { useState, useEffect } from "react";
import profileImage from "../assets/images/03.png";

const roles = [
  "Software Engineer",
  "Machine Learning Engineer",
  "Data Scientist",
  "Cybersecurity Researcher",
];

const ProfileHeader = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-2 border shadow-sm border-gray-200 bg-white rounded-full">
      <div className="flex items-center gap-3">
        <div
          className="relative rounded-full flex-shrink-0 transition-all duration-300 ease-in-out"
          style={{
            width: isHovered ? "3.5rem" : "2rem",
            height: isHovered ? "3.5rem" : "2rem",
          }}
          onMouseEnter={() => {
            setIsHovered(true);
            setShowTooltip(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setShowTooltip(false);
          }}
        >
          <img
            src={profileImage}
            alt="Derrick Agyapong"
            className="w-full h-full object-cover rounded-full transition-all duration-300 ease-in-out"
          />

          {showTooltip && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2">
              <div className="bg-gray-900 text-white text-xs py-1 px-2 rounded-md whitespace-nowrap">
                Derrick Agyapong
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          )}
        </div>

        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-gray-900 leading-tight">Derrick Agyapong</h2>
          <p
            className="text-[11px] transition-opacity duration-300 leading-tight mt-0.5 truncate"
            style={{ opacity: fade ? 1 : 0, color: "#4f46e5" }}
          >
            {roles[roleIndex]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
