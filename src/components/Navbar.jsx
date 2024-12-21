// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "/logo.png"; // Ensure you have a logo in public folder

// function Navbar({ onHamburgerClick }) {
//   return (
//     <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
//       {/* Hamburger Menu */}
//       <button
//         onClick={onHamburgerClick}
//         className="text-white focus:outline-none"
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>

//       {/* Logo */}
//       <img src={logo} alt="Logo" className="h-10 w-auto" />

//       {/* Navigation Links */}
//       <div className="flex space-x-4">
//         <Link to="/" className="hover:text-gray-300">
//           Home
//         </Link>
//         <Link to="/normal" className="hover:text-gray-300">
//           Normal
//         </Link>
//         <Link to="/live" className="hover:text-gray-300">
//           Live
//         </Link>
//       </div>

//       {/* Login Button */}
//       <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
//         Login
//       </button>
//     </nav>
//   );
// }

// export default Navbar;









import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png"; // Ensure you have a logo in public folder

function Navbar({ onHamburgerClick }) {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Left Section: Hamburger Menu and Logo */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onHamburgerClick}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Right Section: Navigation Links and Login */}
      <div className="flex items-center space-x-6">
        {/* Navigation Links */}
        <Link
          to="/"
          className="text-lg font-bold hover:text-gray-300 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/normal"
          className="text-lg font-bold hover:text-gray-300 transition-colors"
        >
          Normal
        </Link>
        <Link
          to="/live"
          className="text-lg font-bold hover:text-gray-300 transition-colors"
        >
          Live
        </Link>

        {/* Login Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-lg font-bold px-5 py-2 rounded">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
