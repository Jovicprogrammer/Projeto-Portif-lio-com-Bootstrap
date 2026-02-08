'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Augusta } from '../fonts';
import { useEffect } from "react";
import AOS from 'aos';


export default function FormularioContato() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    if (!formRef.current) return;

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log('Email enviado:', result.text);
      setStatus('success');
      formRef.current.reset();

      // Volta ao normal após 5 segundos
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      console.error('Erro:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  useEffect(() => {
                  AOS.init({
                    duration: 1000,
                    easing: 'ease-in-out',
                    once: false,
                  })
                }, [])
  

  return (
    <div className="w-full max-w-2xl p-8 pt-28">
      
      <div data-aos="fade-up" className="bg-mist/80 rounded-2xl p-6 px-3 shadow-xl md:p-7 md:px-15 border border-light">
        
        <div className="mb-8">
          <h2 className={`${Augusta.className} text-3xl text-center text-light mb-1`}>
            Envie-me um e-mail
          </h2>
          <p className="text-deep-calm text-center">
          Preencha o formulário abaixo para enviar-me uma mensagem
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          
          {/* Nome */}
          <div>
            <label 
              htmlFor="from_name" 
              className="block text-sm font-semibold text-horror mb-2"
            >
              Nome Completo *
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              disabled={status === 'loading'}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light focus:border-light transition disabled:bg-gray-100 disabled:cursor-not-allowed text-deep-calm"
              placeholder="Fulano de Tal"
            />
          </div>

          {/* Email */}
          <div>
            <label 
              htmlFor="from_email" 
              className="block text-sm font-semibold text-horror mb-2"
            >
              Seu Email *
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              required
              disabled={status === 'loading'}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light focus:border-light transition disabled:bg-gray-100 disabled:cursor-not-allowed text-deep-calm"
              placeholder="joao@email.com"
            />
          </div>

          {/* Mensagem */}
          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-semibold text-horror mb-2"
            >
              Mensagem *
            </label>
            <textarea
              id="message"
              name="message"
              required
              disabled={status === 'loading'}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light focus:border-light transition resize-none disabled:bg-gray-100 disabled:cursor-not-allowed text-deep-calm"
              placeholder="Escreva sua mensagem aqui..."
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-deep-calm hover:bg-calm text-white py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl cursor-pointer"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </>
            )}
          </button>
        </form>

        {/* Feedback de Sucesso */}
        {status === 'success' && (
          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg animate-slideIn">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
              <div>
                <p className="font-semibold text-green-800">Mensagem enviada!</p>
                <p className="text-sm text-green-700">Responderei em breve.</p>
              </div>
            </div>
          </div>
        )}

        {/* Feedback de Erro */}
        {status === 'error' && (
          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg animate-slideIn">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />
              <div>
                <p className="font-semibold text-red-800">Erro ao enviar</p>
                <p className="text-sm text-red-700">Tente novamente ou me envie um email direto.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}