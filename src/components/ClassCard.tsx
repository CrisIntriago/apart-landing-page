interface ClassCardProps {
    title: string;
    description: string[];
    price: string;
    bgColor: string;
    textColor: string;
    buttonBg: string;
    buttonText: string;
    borderColor: string;
}

export const ClassCard: React.FC<ClassCardProps> = ({
    title, description, price, bgColor, textColor, buttonBg, buttonText, borderColor
}) => {
    return (
        <div className={`max-w-sm h-64 ${bgColor} ${textColor} p-8 mb-10 flex flex-col justify-between rounded-2xl shadow-lg`}>
            <h3 className="text-2xl font-bold">{title}</h3>
            <ul className="text-sm list-disc pl-4">
                {description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>
            <p className="text-2xl font-bold">{price}</p>
            <button className={`${buttonBg} ${buttonText} py-1 px-3 rounded-full border-2 ${borderColor} w-fit text-sm`}>
                Comprar
            </button>
        </div>
    );
};
