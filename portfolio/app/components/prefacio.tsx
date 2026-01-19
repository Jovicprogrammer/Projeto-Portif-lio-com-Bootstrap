'use client'
import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';
import { GoodOld } from "../fonts";

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

        <Image data-aos="fade-up" src='/perfil.png' alt='imagem de portfolio' width={400} height={400} className="w-full max-w-md md:max-w-none md:w-auto"></Image>

        <div className="text-center md:text-lef pl-3 ">

          <h2 data-aos="fade-down" className={`text-3xl text-light ${GoodOld.className}`}>Um pouco sobre mim...</h2>

            <p data-aos="fade-up" className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, necessitatibus. Molestias quibusdam ipsam impedit deleniti laboriosam voluptatibus dolorem at, veritatis sint ex animi, ipsa beatae similique nemo recusandae quisquam magnam! 
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum suscipit at, nostrum veritatis praesentium laborum ut, atque ipsam libero reprehenderit aspernatur? Officiis eum dolores fuga tempore molestiae, eos similique?
            </p>
            
        
        </div>


        </div>


    )

}
