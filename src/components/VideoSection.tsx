import React from "react";

const VideoSection: React.FC = () => {
  return (
    <div className="md:w-2/4 2xl:w-3/4 h-screen hidden sm:hidden md:block">
      <video
        src="https://apartcdn.s3.sa-east-1.amazonaws.com/elon_banner.mp4"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default VideoSection;
