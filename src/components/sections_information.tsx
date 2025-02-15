interface SectionInformationProps {
    image: string;
    eslogan: string,
    autor: string,
    descripcion: string,
    bgColor: string,
    inverted?: boolean,
}

const SectionInformation: React.FC<SectionInformationProps> = ({ image, eslogan, autor, descripcion, bgColor, inverted = false }) => {
    return (
        <div
            className={`flex flex-col ${inverted ? 'md:flex-row-reverse' : 'md:flex-row'} 
            items-center justify-center sm:h-[600px]`}
            style={{ backgroundColor: `#${bgColor}` }}
        >
            <div className="w-full md:w-1/2 h-full">
                <video
                    src={image}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                />
            </div>
            <div className="w-full h-auto md:w-1/2 flex flex-col justify-center items-center 
            text-center text-black md:px-8 px-2 md:py-0 py-8" style={{ backgroundColor: `#${bgColor}` }}>
                <h1 className="text-2xl md:text-5xl font-bold font-family-display">{eslogan}</h1>
                <p className="text-lg md:text-xl font-family-display pt-2">{autor}</p>
                <p className="text-base md:text-base pt-8 text-justify md:px-12 px-10">{descripcion}</p>
                {/* <p className="text-xl">{enlace}</p> */}
            </div>
        </div>
    );
};


export default SectionInformation;