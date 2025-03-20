export default function HeroBottom() {
  return (
    <div className="">
      <div className="h-screen flex flex-col items-center justify-center">
        <video
          className="top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source
            src="https://apartcdn.s3.sa-east-1.amazonaws.com/empezar_banner.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta el formato de video.
        </video>
      </div>
    </div>
  );
}
