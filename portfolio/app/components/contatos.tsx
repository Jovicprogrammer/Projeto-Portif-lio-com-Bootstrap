import { Augusta, Creato } from "../fonts";
import { useEffect } from "react";
import FormularioContato from "./FormularioContato";
import AOS from 'aos';
import Link from "next/link";

import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Contatos() {

    useEffect(() => {
                AOS.init({
                  duration: 1000,
                  easing: 'ease-in-out',
                  once: false,
                })
              }, [])

    return (

        <div data-aos="fade-zoom-in" className={`block bg-deep-calm/80 md:grid-cols-2 gap-30 md:flex md:flex-row justify-center my-3 mx-1 md:mx-6 md:px-2 min-h-screen ${Creato.className}`}>

        <div className=" ">
      <FormularioContato />
    </div>

    <div className="md:pt-30 pt-7 pb-5 ">
      
      <h3 data-aos="zoom-in" className={`${Augusta.className} text-center text-3xl text-light`}>Ou encontre-me em minhas redes</h3>
      
      <div className="mx-1 ">

        <div className="grid grid-cols-2 gap-5 pt-5">
          <Link target="blank" data-aos="fade-up" href={'https://www.instagram.com/jo.vic_sousa/'}>
            <div className="flex flex-col bg-deep-calm rounded-2xl p-7 pt-15 pb-15 items-center">
            
            <span className="text-8xl"><FaSquareInstagram/></span>
            <span className="hover:text-shadow-light text-center text-shadow-md">Instagram</span>
              
            </div>
          </Link>
          
          <Link data-aos="fade-up" target="blank" href={'https://w.app/regtjd'}>
            <div className="flex flex-col bg-deep-calm rounded-2xl p-7 pt-15 pb-15 items-center">
            <span className="text-8xl">
            <FaWhatsappSquare />
            </span>
            <span className="hover:text-shadow-light text-center text-shadow-md">Whatsapp</span>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-5 pt-5 ">

          <Link data-aos="fade-up" target="blank" href={'https://www.linkedin.com/in/jo%C3%A3o-victor-sousa-alves-penha-293baa256/'}>
            <div className="flex flex-col bg-deep-calm rounded-2xl p-7 pt-15 pb-15 items-center">
            <span className="text-8xl ">
            <FaLinkedin />
            </span>
            <span className="hover:text-shadow-light text-center text-shadow-md">Linkedin</span>
            </div>
          </Link>
          
          <Link data-aos="fade-up" target="blank" href={'https://github.com/Jovicprogrammer'}>
            <div className="flex flex-col bg-deep-calm rounded-2xl p-7 pt-15 pb-15 items-center">
            <span className="text-8xl">
            <FaGithub />
            </span>
            <span className="hover:text-shadow-light text-center text-shadow-md">Github</span>
            </div>
          </Link>
        
        </div>

      </div>
    </div>

        </div>


    )

}
