'use client'
import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';
import { Augusta, Creato } from "../fonts";

export default function Prefacio() {

    useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    })
  }, [])

    return (

        <div data-aos="fade-zoom-in" className={`flex flex-col md:flex-row items-center justify-center min-h-screen md:h-screen py-10 md:py-0 gap-8 px-4 bg-deep-calm/80 mx-1 md:mx-3`}>

        <Image data-aos="fade-up" src='/perfil.png' alt='imagem de portfolio' width={400} height={400} className="w-full max-w-md md:max-w-none md:w-auto"></Image>

        <div className="text-center md:text-right pl-3 ">

          <h2 data-aos="fade-down" className={`text-3xl mb-5 text-light ${Augusta.className}`}>Um pouco sobre mim...</h2>

            <p data-aos="fade-up" className={`mb-5 ${Creato.className}`}>
            
            Como descrever-me, sem faltar aquilo que é essencial? Me chamo João Victor, e sempre fui uma pessoa que admirou a arte, a tecnologia e a capacidade de se criar de tudo. Desde muito novo me envolvia em ideias mirabolantes, como desenhar os menus dos DVDs no meu caderno sem nem saber escrever ou criar uma ficha técnica inteira de um filme, escolhendo até mesmo o elenco que estrelaria nele.
            
            </p>

            <p data-aos="fade-up" className={` ${Creato.className}`}>
            Fui crescendo e evolui essas ideias, e mesmo com o mundo ficando mais sério, mantive aquele capricho infantil, decidindo continuar desenvolvendo ideias criativas, agora com as novas ferramentas que aprendi. Seja desenho digital, escrita ou, é claro, programação, gosto de estar a frente de projetos que me desafiem mas que ainda mantenham aquele brilho essencial. Sempre ao fazer um projeto, penso: <q>esse é o tipo de coisa que eu gostaria de ter, e que ainda não é tão explorado?</q>, o que me ajuda a navegar por caminhos menos ortodoxos e que ainda assim apresentem uma familiaridade confortante. </p> 
            
        
        </div>


        </div>


    )

}
