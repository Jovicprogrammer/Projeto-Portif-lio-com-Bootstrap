"use client"

import Navbar from "./components/navbar"
import Prefacio from "./components/prefacio"
import Footer from "./components/footer"
import Capa from "./components/capa"
import Aptidoes from "./components/aptidoes"
import Projetos from "./components/projetos"
import Contatos from "./components/contatos"
import Topo from "./components/topo"

export default function Home() {

    return (

        <div className=" ">

        <div 
                className="fixed inset-0 -z-10"
                style={{
                    backgroundImage: "url('/castle.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed"
                }}
            />

        <Navbar/>
        
        <div className="absolute"><Topo/></div>

        <div id="capa"><Capa/></div>

        <div id="prefacio"><Prefacio/></div>

        <div id="aptidoes"><Aptidoes/></div>

        <div id="projetos"><Projetos/></div>

        <div id="contatos"><Contatos/></div>

        <Footer/>

        </div>

    )

}