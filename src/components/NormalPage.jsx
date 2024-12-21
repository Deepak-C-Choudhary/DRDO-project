// import React, { useState, useCallback } from "react";
// import { useDropzone } from "react-dropzone";

// const mlModels = ["Model 1", "Model 2", "Model 3", "Model 4", "Model 5"];

// function NormalPage() {
//   const [processingType, setProcessingType] = useState("image");
//   const [selectedModel, setSelectedModel] = useState("");
//   const [uploadedFile, setUploadedFile] = useState(null);
//   const [processedResult, setProcessedResult] = useState(null);

//   const onDrop = useCallback((acceptedFiles) => {
//     const file = acceptedFiles[0];
//     setUploadedFile(file);
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept:
//       processingType === "image"
//         ? { "image/*": [".jpeg", ".png", ".jpg"] }
//         : { "video/*": [".mp4", ".avi", ".mov"] },
//   });

//   const handleProcess = () => {
//     // Simulated processing - replace with actual ML processing
//     if (uploadedFile && selectedModel) {
//       const resultUrl = URL.createObjectURL(uploadedFile);
//       setProcessedResult(resultUrl);
//     }
//   };

//   return (
//     <div className="p-6 flex">
//       {/* Processing Type Dropdown */}
//       <div className="w-1/2 p-4">
//         <select
//           value={processingType}
//           onChange={(e) => {
//             setProcessingType(e.target.value);
//             setUploadedFile(null);
//             setProcessedResult(null);
//           }}
//           className="w-full p-2 border rounded mb-4"
//         >
//           <option value="image">Image Processing</option>
//           <option value="video">Video Processing</option>
//         </select>

//         {/* ML Model Dropdown */}
//         <select
//           value={selectedModel}
//           onChange={(e) => setSelectedModel(e.target.value)}
//           className="w-full p-2 border rounded mb-4"
//         >
//           <option value="">Select ML Model</option>
//           {mlModels.map((model, index) => (
//             <option key={index} value={model}>
//               {model}
//             </option>
//           ))}
//         </select>

//         {/* File Upload Area */}
//         <div
//           {...getRootProps()}
//           className={`
//             border-2 border-dashed p-6 text-center
//             ${isDragActive ? "border-blue-500" : "border-gray-300"}
//           `}
//         >
//           <input {...getInputProps()} />
//           {uploadedFile ? (
//             <p>Selected File: {uploadedFile.name}</p>
//           ) : (
//             <p>
//               Drag 'n' drop {processingType} here, or click to select{" "}
//               {processingType}
//             </p>
//           )}
//         </div>

//         {/* Process Button */}
//         <button
//           onClick={handleProcess}
//           disabled={!uploadedFile || !selectedModel}
//           className="mt-4 w-full bg-blue-500 text-white p-2 rounded
//             disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           Process
//         </button>
//       </div>

//       {/* Result Display */}
//       <div className="w-1/2 p-4 border-l">
//         {/* <h2 className="text-xl mb-4">
//           Processed{" "}
//           {processingType.charAt(0).toUpperCase() + processingType.slice(1)}
//         </h2> */}
//         <h2 className="text-xl font-bold mb-4 text-center">
//           Processed{" "}
//           {processingType.charAt(0).toUpperCase() + processingType.slice(1)}
//         </h2>

//         {processedResult &&
//           (processingType === "image" ? (
//             <img
//               src={processedResult}
//               alt="Processed"
//               className="max-w-full max-h-[500px] object-contain"
//             />
//           ) : (
//             <video
//               src={processedResult}
//               controls
//               className="max-w-full max-h-[500px]"
//             />
//           ))}
//       </div>
//     </div>
//   );
// }

// export default NormalPage;





import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const mlModels = ["Model 1", "Model 2", "Model 3", "Model 4", "Model 5"];

function NormalPage() {
  const [processingType, setProcessingType] = useState("image");
  const [selectedModel, setSelectedModel] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [processedResults, setProcessedResults] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const maxFiles = processingType === "image" ? 10 : 5;
      const filteredFiles = acceptedFiles.slice(0, maxFiles);
      setUploadedFiles((prevFiles) => [...prevFiles, ...filteredFiles]);
    },
    [processingType]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept:
      processingType === "image"
        ? { "image/*": [".jpeg", ".png", ".jpg"] }
        : { "video/*": [".mp4", ".avi", ".mov"] },
    maxFiles: processingType === "image" ? 10 : 5,
  });

  const handleProcess = () => {
    // Simulate processing and set processed results
    if (uploadedFiles.length && selectedModel) {
      const results = uploadedFiles.map((file) => URL.createObjectURL(file));
      setProcessedResults(results);
    }
  };

  const removeFile = (indexToRemove) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="p-6 flex flex-col lg:flex-row">
      {/* Left Side - File Upload */}
      <div className="lg:w-1/2 p-4">
        {/* Processing Type Dropdown */}
        <select
          value={processingType}
          onChange={(e) => {
            setProcessingType(e.target.value);
            setUploadedFiles([]);
            setProcessedResults([]);
          }}
          className="w-full p-2 border rounded mb-4"
        >
          <option value="image">Image Processing</option>
          <option value="video">Video Processing</option>
        </select>

        {/* ML Model Dropdown */}
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        >
          <option value="">Select ML Model</option>
          {mlModels.map((model, index) => (
            <option key={index} value={model}>
              {model}
            </option>
          ))}
        </select>

        {/* File Upload Area */}
        <div
          {...getRootProps()}
          className={`border-2 border-dashed p-6 text-center ${
            isDragActive ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          <p>
            Drag 'n' drop up to {processingType === "image" ? 10 : 5}{" "}
            {processingType === "image" ? "images" : "videos"} here, or click to
            select files.
          </p>
        </div>

        {/* Process Button */}
        <button
          onClick={handleProcess}
          disabled={!uploadedFiles.length || !selectedModel}
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded 
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Process
        </button>

        {/* Uploaded Files Preview */}
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Uploaded Files</h3>
          <div className="flex flex-wrap gap-4">
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="border p-2 rounded relative flex flex-col items-center"
              >
                {processingType === "image" ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Preview ${index}`}
                    className="h-20 w-20 object-cover"
                  />
                ) : (
                  <video
                    src={URL.createObjectURL(file)}
                    controls
                    className="h-20 w-20"
                  />
                )}
                <button
                  onClick={() => removeFile(index)}
                  className="mt-2 bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Processed Results */}
      <div className="lg:w-1/2 p-4 border-l">
        <h2 className="text-xl font-bold mb-4 text-center">
          Processed{" "}
          {processingType.charAt(0).toUpperCase() + processingType.slice(1)}
        </h2>

        {processedResults.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {processedResults.map((result, index) => (
              <div key={index} className="border p-2 rounded">
                {processingType === "image" ? (
                  <img
                    src={result}
                    alt={`Processed ${index}`}
                    className="max-w-full max-h-60 object-contain"
                  />
                ) : (
                  <video
                    src={result}
                    controls
                    className="max-w-full max-h-60"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NormalPage;
