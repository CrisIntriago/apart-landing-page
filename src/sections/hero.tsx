import VideoComponent from "@/components/VideoComponent";
import Link from "next/link";

interface VideoProps {
  url: string;
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink: string;
  isAbsolute?: boolean;
}

export default function Hero({
  url,
  title,
  description,
  buttonText,
  buttonLink,
  isAbsolute = false,
}: VideoProps) {
  return (
    <div
      className={`${isAbsolute ? "" : "relative"} min-h-screen h-full flex flex-col items-center justify-center`}
    >
      <VideoComponent
        className={`absolute top-0 left-0 w-full h-full object-cover z-0`}
        url={url}
      />
      <div className="relative inset-0 flex flex-col items-center justify-center text-white font-guru z-10">
        <p className="md:text-7xl text-5xl font-bold text-center">{title}</p>
        {description && (
          <p className="md:text-2xl text-lg mt-4 text-center">{description}</p>
        )}
        {buttonText && (
          <Link href={buttonLink}>
            <button className="border-2 border-white rounded-full mt-6 w-auto max-w-xs hover:bg-[#4d4d4d] transition-all duration-300">
              <p className="md:text-2xl text-lg p-3 px-10 font-bold text-center">
                {buttonText}
              </p>
            </button>

          </Link>
        )}
      </div>
    </div>
  );
}
