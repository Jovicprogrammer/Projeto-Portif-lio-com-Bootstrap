'use client';

import { Creato, GoodOld } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// Tipo para os projetos
interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  gifUrl: string;
  link?: string;
}

export default function ProjetosCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Seus projetos aqui
  const projetos: Projeto[] = [
    {
      id: 1,
      titulo: "Amotur",
      descricao: "Uma breve descrição do projeto incrível que você criou",
      gifUrl: "/gifs/projeto1.gif",
      link: "https://amotur-front-end.vercel.app/"
    },
    {
      id: 2,
      titulo: "Hive Hub",
      descricao: "Outra descrição interessante sobre suas habilidades",
      gifUrl: "/gifs/projeto2.gif",
      link: "https://plataforma-inovacao-squad02-front-e.vercel.app/landingpage"
    },
    {
      id: 3,
      titulo: "vesquicio.",
      descricao: "Mais um projeto fantástico do seu portfólio",
      gifUrl: "/gifs/projeto3.gif",
      link: "https://vesquicio.vercel.app/"
    },
    {
      id: 4,
      titulo: "Slow Risers",
      descricao: "Mais um projeto fantástico do seu portfólio",
      gifUrl: "/gifs/projeto3.gif",
      link: "https://slow-risers.vercel.app/"
    },
    {
      id: 5,
      titulo: "Carne Íntima",
      descricao: "Mais um projeto fantástico do seu portfólio",
      gifUrl: "/gifs/projeto3.gif",
      link: "/projetos/projeto3"
    },
  ];

  const scroll = (direction: 'left' | 'right'): void => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`relative md:pt-7 h-screen flex flex-col items-center justify-center ${Creato.className}`}>
      
      {/* Título */}
      <h2 className={`${GoodOld.className} text-light text-5xl md:text-4xl mb-8 `}>Projetos de Programação</h2>

      {/* Container do Carousel */}
      <div className="relative w-full max-w-7xl px-4">
        
        {/* Botão Esquerda */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-calm/70 cursor-pointer hover:p-5 p-3 rounded-full shadow-lg transition-all"
          aria-label="Scroll para esquerda"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Container dos Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="shrink-0 w-80 md:w-96 bg-deep-calm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow flex flex-col"
            >
              {/* GIF */}
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={projeto.gifUrl}
                  alt={projeto.titulo}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 flex flex-col grow">
                <h3 className={`${GoodOld.className} text-2xl mb-3 text-light text-center`}>
                  {projeto.titulo}
                </h3>
                <p className="text-lg text-weird-white mb-4 grow text-center">
                  {projeto.descricao}
                </p>
                
                {projeto.link && (
                  <Link
                    href={projeto.link} 
                    target="_blank"
                    className="inline-block hover:opacity-60 hover:text-shadow-light text-center text-shadow-md px-6 py-2 rounded transition-all mt-auto"
                  >
                    Ver projeto
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Botão Direita */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-calm/70 cursor-pointer hover:p-5 p-3 rounded-full shadow-lg transition-all"
          aria-label="Scroll para direita"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  );
}