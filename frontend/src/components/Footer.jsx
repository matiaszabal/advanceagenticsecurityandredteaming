import React from 'react';
import { Shield, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programa: [
      { label: 'Módulo 1: LLM Red Teaming', href: '#modules' },
      { label: 'Módulo 2: Agentic Security', href: '#modules' },
      { label: 'Temario Completo', href: '#' },
      { label: 'Certificación', href: '#' },
    ],
    recursos: [
      { label: 'OWASP Top 10 LLM', href: '#' },
      { label: 'MITRE ATLAS', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Documentación', href: '#' },
    ],
    soporte: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Contacto', href: '#' },
      { label: 'Política de Privacidad', href: '#' },
      { label: 'Términos de Servicio', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <Shield className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="font-semibold text-white text-lg">LLM Security</span>
            </a>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Programa especializado en seguridad ofensiva para modelos de lenguaje y sistemas de IA autónoma. Posiciónate en la frontera tecnológica.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Programa</h4>
            <ul className="space-y-3">
              {footerLinks.programa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} LLM Security Academy. Todos los derechos reservados.
          </p>
          <p className="text-slate-600 text-sm">
            Diseñado para la frontera tecnológica de 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
