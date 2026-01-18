import { Creato } from "../fonts";
import { useEffect } from "react";
import AOS from 'aos';

export default function Contatos() {

    useEffect(() => {
                AOS.init({
                  duration: 1000,
                  easing: 'ease-in-out',
                  once: false,
                })
              }, [])

    return (

        <div data-aos="fade-zoom-in" className={`bg-amber-200/20 my-3 mx-6 px-2 min-h-screen ${Creato.className}`}>

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam aperiam quasi perferendis at, neque dolore, earum id veritatis enim esse temporibus odit accusamus saepe repellendus maiores nobis aliquam doloremque mollitia.

        </div>


    )

}
