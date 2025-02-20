import React from 'react';

interface ButtonProps {
    text: string;
    onClick: (...args: any[]) => any;
    bgColor?: string; 
}

const ApartButton: React.FC<ButtonProps> = ({ text, onClick, bgColor }) => {
    return (
        <button
            className="w-full py-1 border border-white rounded-2xl bg-transparent hover:bg-blue-500 hover:text-white transition-colors duration-300"
            style={{ backgroundColor: bgColor }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default ApartButton;