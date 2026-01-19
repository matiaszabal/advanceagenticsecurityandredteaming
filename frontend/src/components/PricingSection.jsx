import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Check, CreditCard, ArrowRight } from 'lucide-react';
import { courseData } from '../data/mock';

const PricingSection = ({ onOpenForm }) => {
  const { pricing } = courseData;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const features = [
    "Acceso completo a los 2 módulos",
    "40+ horas de contenido práctico",
    "Certificación al completar",
    "Acceso de por vida al material",
    "Comunidad exclusiva de estudiantes",
    "Soporte y mentoría personalizada"
  ];

  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-4">
            <CreditCard className="w-3.5 h-3.5 mr-1.5" />
            Inversión
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Invierte en tu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              futuro profesional
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Posiciónate en la frontera tecnológica de la seguridad en IA
          </p>
        </div>

        {/* Pricing Card */}
        <Card className="bg-slate-900/70 border-slate-700/50 overflow-hidden">
          {/* Highlight bar */}
          <div className="h-1.5 bg-gradient-to-r from-cyan-500 to-emerald-500" />
          
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Pricing Info */}
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  <p className="text-slate-400 text-lg mb-2">
                    Hasta {pricing.installments} cuotas sin interés de
                  </p>
                  <div className="flex items-baseline justify-center lg:justify-start gap-2">
                    <span className="text-5xl sm:text-6xl font-bold text-white">
                      ${formatPrice(pricing.installmentPrice)}
                    </span>
                    <span className="text-2xl text-slate-400 font-medium">{pricing.currency}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 inline-block">
                  <p className="text-slate-500 text-sm mb-1">Precio final</p>
                  <p className="text-2xl font-bold text-white">
                    ${formatPrice(pricing.totalPrice)} <span className="text-lg text-slate-400">{pricing.currency}</span>
                  </p>
                </div>

                <div className="mt-8">
                  <Button 
                    size="lg" 
                    onClick={onOpenForm}
                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-10 py-6 text-base group w-full sm:w-auto"
                  >
                    Reservar mi Plaza
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-slate-500 text-sm mt-4">
                    Plazas limitadas para garantizar calidad educativa
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="bg-slate-800/30 rounded-2xl p-6 lg:p-8">
                <h3 className="text-white font-semibold text-lg mb-6">Incluye:</h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment methods note */}
        <p className="text-center text-slate-500 text-sm mt-8">
          Aceptamos tarjetas de crédito, débito, transferencia bancaria y MercadoPago
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
