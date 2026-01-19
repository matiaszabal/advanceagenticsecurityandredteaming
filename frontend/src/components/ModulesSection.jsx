import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { Brain, Bot, CheckCircle2 } from 'lucide-react';
import { courseData } from '../data/mock';

const ModulesSection = () => {
  const { modules } = courseData;

  const moduleIcons = {
    '01': Brain,
    '02': Bot,
  };

  return (
    <section id="modules" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-slate-950" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-slate-800 text-slate-300 border-slate-700 mb-4">
            Estructura Académica
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Dos Módulos,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Una Especialización Completa
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Un programa estructurado para dominar desde los fundamentos hasta la frontera tecnológica
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="module-1" className="w-full">
          <TabsList className="w-full max-w-xl mx-auto grid grid-cols-2 h-auto bg-slate-900/50 border border-slate-800 p-1.5 rounded-xl mb-12">
            {modules.map((module) => {
              const Icon = moduleIcons[module.number];
              return (
                <TabsTrigger
                  key={module.id}
                  value={module.id}
                  className="data-[state=active]:bg-slate-800 data-[state=active]:text-white text-slate-400 py-4 px-6 rounded-lg transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-semibold">Módulo {module.number}</div>
                      <div className="text-xs opacity-70">{module.subtitle}</div>
                    </div>
                  </div>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {modules.map((module) => (
            <TabsContent key={module.id} value={module.id} className="mt-0">
              <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-8 lg:p-10">
                {/* Module Header */}
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-slate-800">{module.number}</span>
                    <div>
                      <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 mb-2">
                        {module.subtitle}
                      </Badge>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-400 text-lg max-w-3xl">
                    {module.description}
                  </p>
                </div>

                {/* Topics Accordion */}
                <Accordion type="single" collapsible className="space-y-4">
                  {module.topics.map((topic, topicIndex) => (
                    <AccordionItem
                      key={topicIndex}
                      value={`topic-${topicIndex}`}
                      className="border border-slate-800/50 rounded-xl px-6 bg-slate-900/50 hover:bg-slate-900/80 transition-colors"
                    >
                      <AccordionTrigger className="hover:no-underline py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-sm font-bold">
                            {topicIndex + 1}
                          </div>
                          <span className="text-white font-semibold text-left">
                            {topic.title}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-5">
                        <ul className="space-y-3 pl-12">
                          {topic.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                              <span className="text-slate-400">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ModulesSection;
