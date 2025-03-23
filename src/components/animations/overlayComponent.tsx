"use client"

import { useEffect } from "react";
import gsap from "gsap";
import CounterComponent from "./counterComponent";

export const OverlayComponent = () => {
    useEffect(() => {
        gsap.to(".counter", {
            opacity: 0,
            duration: 0.5,
            delay: 1.3,
            visibility: "hidden",
        });

        gsap.to(".overlay", {
            height: 0,                 
            y: -200,                   
            duration: 1,             
            delay: 1.5,                
            ease: "power4.inOut",      
          });

    }, []);

    return (
        <>
            <div className="overlay fixed top-0 left-0 w-screen h-screen bg-black z-20 opacity-1"></div>
            <CounterComponent />
        </>
    );
};