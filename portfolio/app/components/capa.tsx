import { Augusta } from "../fonts";
import { useEffect } from "react";
import AOS from 'aos';

export default function Capa() {

      useEffect(() => {
                    AOS.init({
                      duration: 1000,
                      easing: 'ease-in-out',
                      once: false,
                    })
                  }, [])

    return (

        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className={`mx-6 px-8 min-h-screen text-center`}>

        <span className={`absolute top-155 text-3xl left-168 center p-3  ${Augusta.className}`}>Boas Vindas!!</span>

        </div>


    )

}