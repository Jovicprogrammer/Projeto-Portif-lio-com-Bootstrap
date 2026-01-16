import React from "react"
import Link from "next/link"
import { GoodOld } from "../fonts"
export default function Navbar() {

    return (

        <nav className={`fixed top-8 z-500 left-0 right-0 mx-auto max-w-5xl flex flex-col sm:flex-row gap-2 items-center px-2 justify-center p-2 bg-blue-600 rounded  ${GoodOld.className}`}>

            <div className="flex gap-7 items-center justify-center h-auto text-2xl">
                <Link href="#prefacio" className="hover:underline transition">Prefácio</Link>
                <Link href="#aptidoes" className="hover:underline transition">Aptidões</Link>
                <Link href="#projetos" className="hover:underline transition">Projetos</Link>
                <Link href="#contatos" className="hover:underline transition">Contatos</Link>
                
            </div>
        </nav>

    )

}