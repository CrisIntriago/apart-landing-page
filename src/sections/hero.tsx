export default function Hero() {

  return (
    <div className="h-full">
      <video
        className="top-0 left-0 w-full z-1"
        autoPlay
        loop
        muted
      >
        <source
          src="https://apartcdn.s3.sa-east-1.amazonaws.com/banner-apart.mp4"
          type="video/mp4"
        />
        Tu navegador no soporta el formato de video.
      </video>


      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center font-guru">
        <p className="md:text-7xl text-5xl font-bold text-center">
          LA REALIDAD ES FLEXIBLE
        </p>
        <button className="border-2 border-white rounded-full mt-6 w-auto max-w-xs">
          <p className="md:text-2xl text-lg p-3 px-10 font-bold text-center">
            EMPIEZA AHORA
          </p>
        </button>


      </div>
    </div>
  );
}