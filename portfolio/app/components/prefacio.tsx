'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from 'aos';

export default function Prefacio() {

    useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    })
  }, [])

    return (

        <div data-aos="fade-zoom-in" className={`flex flex-col md:flex-row items-center justify-center min-h-screen md:h-screen py-10 md:py-0 gap-8 px-4 bg-deep-calm/15 md:mx-3`}>

        <Image src='/castelo.jpg' alt='imagem de portfolio' width={600} height={600} className="w-full max-w-md md:max-w-none md:w-auto"></Image>

        <div className="text-center md:text-left">
            <p className="text-3xl md:text-5xl">venha ver meus projetos de identidade visual!!</p>
            
            <Link href='/Designs' className="bg-cafe inline-block p-4 rounded mt-6 md:mt-10 text-xl md:text-2xl hover:underline">Ver designs</Link>
            
        
        </div>


        </div>


    )

}
