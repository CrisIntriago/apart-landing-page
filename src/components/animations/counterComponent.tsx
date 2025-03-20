"use client"
import React, { useEffect, useState } from 'react';

const CounterComponent = () => {
    const [currentValue, setCurrentValue] = useState(0);

    const updateCounter = () => {
        if (currentValue === 100) return;

        let newValue = currentValue + Math.floor(Math.random() * 10) + 1;
        if (newValue > 100) newValue = 100;

        setCurrentValue(newValue);
    };

    useEffect(() => {
        const counterElement = document.querySelector('.counter');
        const interval = setInterval(() => {
            updateCounter();
            if (counterElement) {
                counterElement.textContent = currentValue.toString();
            }
        }, Math.floor(Math.random() * 200) + 50);

        return () => clearInterval(interval);
    }, [currentValue]);

    return (
        <div className="counter fixed top-0 left-0 w-full h-full flex justify-end items-end z-[10000] text-[#bcbbcc] pr-5 pb-5" style={{ fontSize: '20vw' }}>
            {currentValue}
        </div>


    );
};

export default CounterComponent;
