"use client"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';
import { slideUp } from '@/utils/forbesAnimation';
export default function ForbesSection() {


  const phrase = "“Dominar el inglés y el español incrementa hasta casi cuatro veces tus ingresos.”"
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <section
      className="flex flex-col items-center justify-center w-full bg-white text-black
         md:h-[500px] h-250px py-16 relative"
    >
      <img
        src="/images/forbes_logo.png"
        alt="forbes_logo"
        className="h-4 md:h-8 w-auto"
      />
      <motion.p className="md:text-5xl text-2xl text-center relative sm:py-8 pt-4 sm:px-20 px-3">
        {

          phrase.split(" ").map((word, index) => {

            return <span key= {index} className='relative overflow-hidden inline-flex mr-3'><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>

          })

        }
      </motion.p>
    </section>
  );
}
