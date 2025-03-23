import React from "react";

const VideoSection: React.FC = () => {
  return (
    <div className="md:w-2/4 2xl:w-3/4 h-screen hidden sm:hidden md:block">
      <video
        src="https://d362kojubhlm1d.cloudfront.net/tech_advance.webm"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline
      />
    </div>
  );
};

export default VideoSection;
