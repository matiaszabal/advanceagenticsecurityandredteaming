import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Target, Layers, Users, Code2, ShieldCheck } from 'lucide-react';
import { courseData } from '../data/mock';

const BenefitsSection = () => {
  const { benefits, targetAudience, frameworks } = courseData;

  const iconMap = {
    GraduationCap,
    Target,
    Layers,
  };

  return (
    <section id="benefits" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-4">
            ¿Por qué este programa?
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Justificación de la{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              División Modular
            </span>
          </h2>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <Card
                key={index}
                className="bg-slate-900/50 border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Target Audience */}
          <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Dirigido a</h3>
            </div>
            <ul className="space-y-4">
              {targetAudience.map((audience, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-300">{audience}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Frameworks & Tools */}
          <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Frameworks y Herramientas</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {frameworks.map((framework, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300 text-sm font-medium">{framework.name}</span>
                  <Badge className="bg-slate-700 text-slate-400 border-0 text-xs">
                    {framework.category}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
