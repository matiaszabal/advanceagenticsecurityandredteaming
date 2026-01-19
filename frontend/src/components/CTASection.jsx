import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-emerald-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-8">
          <Sparkles className="w-8 h-8 text-cyan-400" />
        </div>

        {/* Content */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          ¿Listo para dominar la
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            seguridad ofensiva en IA?
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Únete al programa que te posicionará en la frontera tecnológica de 2026.
          Plazas limitadas para garantizar calidad educativa.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-10 py-6 text-base group"
          >
            Reservar mi Plaza
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-10 py-6 text-base"
          >
            Contactar para Más Info
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-slate-500 text-sm">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            Certificación incluida
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            Acceso de por vida
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            Soporte personalizado
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
