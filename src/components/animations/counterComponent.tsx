import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [currentValue, setCurrentValue] = useState(0);
    const targetValue = 100; // El valor al que queremos llegar

    useEffect(() => {
        const startTime = Date.now(); // Hora de inicio
        const duration = 1300; // Duración en milisegundos (2 segundos)

        const updateCounter = () => {
            const elapsedTime = Date.now() - startTime; // Tiempo transcurrido
            const progress = Math.min(elapsedTime / duration, 1); // Progreso de 0 a 1

            const newValue = Math.floor(progress * targetValue); // Calcular el nuevo valor de manera lineal
            setCurrentValue(newValue);

            if (progress < 1) {
                requestAnimationFrame(updateCounter); // Continuar hasta llegar a 100
            }
        };

        requestAnimationFrame(updateCounter);

        // Cleanup: Cuando el componente se desmonte, limpiamos cualquier efecto residual.
        return () => setCurrentValue(0);
    }, []); // Este useEffect solo se ejecuta una vez al montar el componente

    return (
        <div className="counter fixed top-0 left-0 w-full h-full flex justify-end items-end z-[10000] text-[#bcbbcc] pr-5 pb-5" style={{ fontSize: '20vw' }}>
            {currentValue}%
        </div>
    );
};

export default Counter;
