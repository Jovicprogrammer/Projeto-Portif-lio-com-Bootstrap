"use client"
import React, { useState, useEffect } from "react"
import { Augusta } from "../fonts"

import { FaChevronCircleUp } from "react-icons/fa";


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
            className={`fixed bottom-3 right-3 z-50 flex items-center justify-center text-4xl bg-deep-calm text-shadow-lg p-4 rounded-lg shadow-horror shadow-lg hover:bg-calm cursor-pointer transition-all duration-300 ${Augusta.className}`}
        >
            <FaChevronCircleUp />

        </button>
    )
}