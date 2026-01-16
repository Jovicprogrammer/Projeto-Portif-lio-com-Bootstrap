import React from "react"
import Link from "next/link"
import { GoodOld } from "../fonts"
export default function Navbar() {

    return (

        <nav className={`fixed top-8 z-500 left-0 right-0 flex flex-col sm:flex-row gap-2 items-center px-2 justify-center p-4 bg-deep-calm  ${GoodOld.className}`}>

            <div className="flex gap-7 items-center justify-center h-auto text-2xl">
                <Link href="#prefacio" className="hover:animate-pulse transition text-shadow-md text-shadow-horror">Prefácio</Link>
                <Link href="#aptidoes" className="hover:animate-pulse transition text-shadow-md text-shadow-horror">Aptidões</Link>
                <Link href="#projetos" className="hover:animate-pulse transition text-shadow-md text-shadow-horror">Projetos</Link>
                <Link href="#contatos" className="hover:animate-pulse transition text-shadow-md text-shadow-horror">Contatos</Link>
                
            </div>
        </nav>

    )

}