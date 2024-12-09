"use client";

import { useState, useRef } from "react";

const HoverVideo: React.FC<{ videoSrc:string }> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && !hasPlayed) {
      videoRef.current.play();
      videoRef.current.volume = 0.2;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset the video to the start
    }
  };

  const handleVideoEnd = () => {
    setHasPlayed(true); // Mark that the video has finished playing
    if (videoRef.current) {
      videoRef.current.pause(); // Ensure it stops completely
    }
  };

  return (
    <div
      className="relative group  w-full h-[480px] mb-8 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <hr />
      <video
        ref={videoRef}
        className=" inset-0 w-full h-full object-cover rounded-xl"
        src={videoSrc}
        // muted
        loop
        preload="auto"
        onEnded={handleVideoEnd} // Listen for video end
      />
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="text-white text-lg font-semibold">Hover to Play</span>
      </div>
    </div>
  );
};

export default HoverVideo;
