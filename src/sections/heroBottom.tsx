export default function HeroBottom() {
    return (
        <div className="">

            <div className="h-screen flex flex-col items-center justify-center">
                <video className="top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
                    <source src="https://apartcdn.s3.sa-east-1.amazonaws.com/banner-apart.mp4" type="video/mp4" />
                    Tu navegador no soporta el formato de video.
                </video>

                {/* <div className="inset-0 flex flex-col items-center justify-center text-white font-guru z-10">
                    <p className="md:text-7xl text-5xl font-bold text-center">LA REALIDAD ES FLEXIBLE</p>
                    <button className="border-2 border-white rounded-full mt-6 w-auto max-w-xs">
                        <p className="md:text-2xl text-lg p-3 px-10 font-bold text-center">EMPIEZA AHORA</p>
                    </button>
                </div> */}
            </div>

        </div>

    );
}