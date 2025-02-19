import React from 'react';

interface ButtonProps {
    text: string;
    onClick: (...args: any[]) => any;
}

const ApartButton: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button
            className="w-full px-32 py-1 border border-white rounded-2xl bg-transparent hover:bg-blue-500 hover:text-white transition-colors duration-300"
            onClick={onClick}
        >
            {text}
        </button>
    );

};

export default ApartButton;