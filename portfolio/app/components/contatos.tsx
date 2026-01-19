import { Creato, GoodOld } from "../fonts";
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

        <div data-aos="fade-zoom-in" className={`bg-deep-calm/50 flex flex-row justify-center my-3 mx-6 px-2 min-h-screen ${Creato.className}`}>

        <div className=" ">
      <FormularioContato />
    </div>

    <div className="pt-30">
      
      <h3 className={`${GoodOld.className} text-3xl text-light`}>Ou me encontre nas minhas redes</h3>
      
      <div>

        <div className="grid grid-cols-2 gap-5 pt-5">
          <Link href={''}>
            <div className="flex flex-col bg-deep-calm rounded-2xl p-7 pt-15 pb-15 items-center">
            
            <span className="text-8xl"><FaSquareInstagram/></span>
            <span className="hover:text-shadow-light text-center text-shadow-md">Instagram</span>
            
            </div>
          </Link>
          
          <Link href={''}>
            <div className="flex flex-col bg-deep-calm rounded-2xl p-7 pt-15 pb-15 items-center">
            <span className="text-8xl">
            <FaWhatsappSquare />
            </span>
            <span className="hover:text-shadow-light text-center text-shadow-md">Whatsapp</span>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-5 pt-5">

          <Link href={''}>
            <div className="flex flex-col bg-deep-calm rounded-2xl p-7 pt-15 pb-15 items-center">
            <span className="text-8xl ">
            <FaLinkedin />
            </span>
            <span className="hover:text-shadow-light text-center text-shadow-md">Linkedin</span>
            </div>
          </Link>
          
          <Link target="blank" href={'https://github.com/Jovicprogrammer'}>
            <div className="flex flex-col bg-deep-calm rounded-2xl p-7 pt-15 items-center">
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
