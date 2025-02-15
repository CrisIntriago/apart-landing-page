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
            className={`flex flex-col ${inverted ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center sm:h-[600px] h-[311px] w-full`}
            style={{ backgroundColor: `#${bgColor}` }}
        >
            <div className="w-auto sm:w-1/2 h-full">
                <video
                    src={image}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                />
            </div>
            <div className="w-auto sm:w-1/2 flex flex-col justify-center items-center text-center text-black px-10" style={{ backgroundColor: `#${bgColor}` }}>
                <h1 className="text-xl md:text-4xl font-bold font-family-display">{eslogan}</h1>
                <p className="text-lg md:text-xl font-family-display">{autor}</p>
                <p className="text-base md:text-base">{descripcion}</p>
                {/* <p className="text-xl">{enlace}</p> */}
            </div>
        </div>
    );
};


export default SectionInformation;