import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { HelpCircle } from 'lucide-react';
import { courseData } from '../data/mock';

const FAQSection = () => {
  const { faq } = courseData;

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-slate-950" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-slate-800 text-slate-300 border-slate-700 mb-4">
            <HelpCircle className="w-3.5 h-3.5 mr-1.5" />
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Todo lo que necesitas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              saber
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Resolvemos tus dudas sobre el programa
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faq.map((item, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-slate-800/50 rounded-xl px-6 bg-slate-900/30 hover:bg-slate-900/50 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <span className="text-white font-semibold text-left text-lg">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-slate-400 leading-relaxed text-base">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
