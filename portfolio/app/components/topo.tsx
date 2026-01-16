"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { GoodOld } from "../fonts"

export default function Topo() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            // Mostra o botão quando rolar mais de 300px
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    if (!isVisible) return null

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-3 right-9 z-50 flex items-center justify-center text-2xl bg-red-500 p-3 rounded-lg shadow-lg hover:bg-red-600 cursor-pointer transition-all duration-300 ${GoodOld.className}`}
        >
            Voltar ao Topo
        </button>
    )
}