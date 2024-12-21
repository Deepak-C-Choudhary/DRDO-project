import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  const sidebarOptions = [
    {
      title: "Option 1",
      suboptions: ["Suboption 1A", "Suboption 1B", "Suboption 1C"],
    },
    {
      title: "Option 2",
      suboptions: ["Suboption 2A", "Suboption 2B", "Suboption 2C"],
    },
    {
      title: "Option 3",
      suboptions: ["Suboption 3A", "Suboption 3B", "Suboption 3C"],
    },
  ];

  return (
    <div
      className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={onClose} className="text-white focus:outline-none">
          ✕
        </button>
      </div>

      <nav className="mt-4">
        {sidebarOptions.map((option, index) => (
          <div key={index} className="mb-4">
            <h3 className="px-4 py-2 font-semibold border-b border-gray-700">
              {option.title}
            </h3>
            {option.suboptions.map((suboption, subIndex) => (
              <Link
                key={subIndex}
                to="#"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                {suboption}
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
