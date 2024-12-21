// import React from "react";
// import { Link } from "react-router-dom";

// function HomePage() {
//   const features = [
//     {
//       title: "Image Processing",
//       description: "Upload and process images using advanced ML models",
//       link: "/normal?type=image",
//     },
//     {
//       title: "Video Processing",
//       description:
//         "Process videos with state-of-the-art machine learning algorithms",
//       link: "/normal?type=video",
//     },
//     {
//       title: "Live Processing",
//       description: "Record and process live video streams in real-time",
//       link: "/live",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
//             ML Processing Platform
//           </h1>
//           <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
//             Advanced machine learning processing for under water images and videos.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="pt-6 bg-white shadow-lg rounded-lg overflow-hidden"
//             >
//               <div className="px-6 pb-6">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-500 mb-4">{feature.description}</p>
//                 <Link
//                   to={feature.link}
//                   className="block w-full bg-blue-500 text-white text-center py-2 rounded
//                     hover:bg-blue-600 transition duration-300 ease-in-out"
//                 >
//                   Get Started
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <p className="text-base text-gray-500">
//             Choose your processing mode and start analyzing your media
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;







import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const features = [
    {
      title: "Image Processing",
      description: "Upload and process images using advanced ML models",
      link: "/normal?type=image",
    },
    {
      title: "Video Processing",
      description:
        "Process videos with state-of-the-art machine learning algorithms",
      link: "/normal?type=video",
    },
    {
      title: "Live Processing",
      description: "Record and process live video streams in real-time",
      link: "/live",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800 sm:text-6xl md:text-7xl leading-tight">
            ML Processing Platform
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-600">
            Unlock the power of advanced machine learning for images and videos.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Link
                  to={feature.link}
                  className="inline-block w-full text-center bg-blue-600 text-white font-medium text-lg py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            Choose your processing mode and start analyzing your media today.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
