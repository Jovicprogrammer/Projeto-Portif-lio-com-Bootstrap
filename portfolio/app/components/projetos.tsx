import { Creato } from "../fonts";
import { useEffect } from "react";
import AOS from 'aos';
import ProjetosCarousel from "./projetos-componentes";

export default function Projetos() {

    useEffect(() => {
            AOS.init({
              duration: 1000,
              easing: 'ease-in-out',
              once: false,
            })
          }, [])

    return (

        <div data-aos="fade-zoom-in" className={`bg-deep-calm/20 mx-6 px-2 min-h-screen ${Creato.className}`}>

        <ProjetosCarousel/>

        </div>


    )

}
