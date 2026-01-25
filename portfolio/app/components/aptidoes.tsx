'use client';

import { Augusta, Creato } from "../fonts";
import { useEffect } from "react";
import AOS from 'aos';

import { IoLogoJavascript } from "react-icons/io5";
import { SiCss3 } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";


export default function Aptidoes() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: false,
        })
      }, [])

    // Array com os ícones para facilitar a duplicação
    const icons = [
      { Icon: FaHtml5, key: 'html' },
      { Icon: SiCss3, key: 'css' },
      { Icon: IoLogoJavascript, key: 'js' },
      { Icon: SiTypescript, key: 'ts' },
      { Icon: FaReact, key: 'react' },
      { Icon: RiNextjsFill, key: 'next' },
      { Icon: RiTailwindCssFill, key: 'tailwind' },
      { Icon: FaGithub, key: 'github' },
      { Icon: FaGitAlt, key: 'git' },
    ];

    return (

        <div data-aos="fade-zoom-in" className={`relative bg-deep-calm/80 mx-6 my-3 px-2 flex flex-col items-center justify-center md:h-screen min-h-screen ${Creato.className} `}>
        
        <h2 data-aos="fade-down" className={`${Augusta.className} text-4xl mt-10 mb-8 text-center text-light`}>Minhas Aptidões</h2>
        
        {/* Container do carrossel com overflow hidden */}
        <div className="relative w-220 overflow-hidden">
          
          {/* Carrossel infinito */}
          <div className="flex animate-scroll gap-10">
            
            {/* Primeira sequência de ícones */}
            {icons.map(({ Icon, key }) => (
              <div key={key} className="shrink-0 text-weird-white text-6xl cursor-pointer transition-all">
                <Icon />
              </div>
            ))}
            
            {/* Segunda sequência (duplicada para o loop infinito) */}
            {icons.map(({ Icon, key }) => (
              <div key={`${key}-duplicate`} className="shrink-0 text-weird-white text-6xl cursor-pointer transition-all">
                <Icon />
              </div>
            ))}

          </div>
        </div>

        <div data-aos="fade-up" className="flex flex-row pt-20 gap-5 ">

        <div className="bg-deep-calm rounded-2xl py-6 px-3 hover:shadow-md hover:shadow-light/40 transition-all cursor-pointer"> 
          <h3 className={`text-3xl text-center text-light pb-3 ${Augusta.className}`}>Criatividade</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, quos nemo necessitatibus laboriosam incidunt deserunt, error ex nobis quam et, eveniet tenetur? Eligendi, animi fugiat vero sint at molestiae quod.</p>
        </div>
        
        <div className="bg-deep-calm rounded-2xl py-6 px-3 pr-0 hover:shadow-md hover:shadow-light/40 transition-all cursor-pointer">
          <h3 className={`text-3xl text-center text-light pb-3 ${Augusta.className}`}>Criatividade</h3>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, quos nemo necessitatibus laboriosam incidunt deserunt, error ex nobis quam et, eveniet tenetur? Eligendi, animi fugiat vero sint at molestiae quod.</p>
        </div>
        
        <div className="bg-deep-calm rounded-2xl py-6 px-3 pr-0 hover:shadow-md hover:shadow-light/40 transition-all cursor-pointer">
          <h3 className={`text-3xl text-center text-light pb-3 ${Augusta.className}`}>Criatividade</h3>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, quos nemo necessitatibus laboriosam incidunt deserunt, error ex nobis quam et, eveniet tenetur? Eligendi, animi fugiat vero sint at molestiae quod.</p>
        </div>

        </div>

        </div>


    )

}