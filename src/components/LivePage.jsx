// import React, { useState, useRef } from "react";

// function LivePage() {
//   const [ipAddress, setIpAddress] = useState("");
//   const [isRecording, setIsRecording] = useState(false);
//   const [recordedVideo, setRecordedVideo] = useState(null);
//   const videoRef = useRef(null);
//   const mediaRecorderRef = useRef(null);
//   const chunksRef = useRef([]);

//   const startRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       videoRef.current.srcObject = stream;

//       mediaRecorderRef.current = new MediaRecorder(stream);
//       mediaRecorderRef.current.ondataavailable = (e) => {
//         if (e.data.size > 0) {
//           chunksRef.current.push(e.data);
//         }
//       };

//       mediaRecorderRef.current.onstop = () => {
//         const blob = new Blob(chunksRef.current, { type: "video/webm" });
//         const videoURL = URL.createObjectURL(blob);
//         setRecordedVideo(videoURL);
//         chunksRef.current = [];
//         stream.getTracks().forEach((track) => track.stop());
//       };

//       mediaRecorderRef.current.start();
//       setIsRecording(true);
//     } catch (err) {
//       console.error("Error accessing camera:", err);
//     }
//   };

//   const stopRecording = () => {
//     if (
//       mediaRecorderRef.current &&
//       mediaRecorderRef.current.state !== "inactive"
//     ) {
//       mediaRecorderRef.current.stop();
//       setIsRecording(false);
//     }
//   };

//   const processVideo = () => {
//     // Simulated processing - replace with actual ML processing
//     console.log("Processing video");
//   };

//   return (
//     <div className="p-6 flex flex-col items-center">
//       <div className="w-full max-w-md mb-4">
//         <input
//           type="text"
//           placeholder="Enter IP Address"
//           value={ipAddress}
//           onChange={(e) => setIpAddress(e.target.value)}
//           className="w-full p-2 border rounded mb-4"
//         />

//         <div className="flex space-x-4">
//           <button
//             onClick={startRecording}
//             disabled={isRecording}
//             className="flex-1 bg-green-500 text-white p-2 rounded
//               disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Start Recording
//           </button>

//           <button
//             onClick={stopRecording}
//             disabled={!isRecording}
//             className="flex-1 bg-red-500 text-white p-2 rounded
//               disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Stop Recording
//           </button>
//         </div>

//         <button
//           onClick={processVideo}
//           disabled={!recordedVideo}
//           className="w-full mt-4 bg-blue-500 text-white p-2 rounded
//             disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           Process Video
//         </button>
//       </div>

//       <div className="w-full max-w-md">
//         <video ref={videoRef} autoPlay muted className="w-full mb-4" />
//       </div>
//     </div>
//   );
// }

// export default LivePage;





import React, { useState, useRef } from "react";

function LivePage() {
  const [ipAddress, setIpAddress] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState(null);
  const [processedVideo, setProcessedVideo] = useState(null);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      videoRef.current.srcObject = stream;

      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = []; // Reset chunks

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "video/webm" });
        const videoURL = URL.createObjectURL(blob);
        setRecordedVideo(videoURL);
        chunksRef.current = [];
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Could not access camera. Please check permissions.");
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== "inactive"
    ) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const processVideo = () => {
    // Simulated processing - replace with actual ML processing
    if (recordedVideo) {
      // For demonstration, just use the recorded video as processed
      setProcessedVideo(recordedVideo);
      alert("Video processed successfully!");
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <div className="w-full max-w-md mb-4">
        <input
          type="text"
          placeholder="Enter IP Address"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <div className="flex space-x-4 mb-4">
          <button
            onClick={startRecording}
            disabled={isRecording}
            className="flex-1 bg-green-500 text-white p-2 rounded 
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Start Recording
          </button>

          <button
            onClick={stopRecording}
            disabled={!isRecording}
            className="flex-1 bg-red-500 text-white p-2 rounded 
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Stop Recording
          </button>
        </div>

        <button
          onClick={processVideo}
          disabled={!recordedVideo}
          className="w-full bg-blue-500 text-white p-2 rounded 
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Process Video
        </button>
      </div>

      <div className="w-full max-w-md mb-4">
        <video ref={videoRef} autoPlay muted className="w-full mb-4" />
      </div>

      {processedVideo && (
        <div className="w-full max-w-md">
          <h3 className="text-xl mb-2">Processed Video</h3>
          <video src={processedVideo} controls className="w-full" />
        </div>
      )}
    </div>
  );
}

export default LivePage;