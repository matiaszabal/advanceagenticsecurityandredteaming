import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Terminal, Zap } from 'lucide-react';
import { courseData } from '../data/mock';

const HeroSection = ({ onOpenForm }) => {
  const { hero, stats } = courseData;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-950">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Radial Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-4 py-1.5 text-sm font-medium">
              <Zap className="w-3.5 h-3.5 mr-1.5" />
              {hero.badge}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
              Seguridad Ofensiva en
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Modelos de Lenguaje
            </span>
            <br />
            <span className="text-slate-400">y Agentes Autónomos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={onOpenForm}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-6 text-base group"
            >
              {hero.cta}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-base"
            >
              <Terminal className="mr-2 w-4 h-4" />
              {hero.ctaSecondary}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
