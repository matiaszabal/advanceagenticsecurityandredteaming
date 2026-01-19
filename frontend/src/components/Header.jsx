import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const VentenLogo = ({ className = "" }) => (
  <svg 
    viewBox="0 0 140 32" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* V icon stylized */}
    <path 
      d="M4 6L16 26L28 6" 
      stroke="url(#gradient1)" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    {/* Text: enten */}
    <text x="34" y="22" fill="white" fontSize="18" fontWeight="600" fontFamily="system-ui, sans-serif">
      enten
    </text>
    {/* .ai */}
    <text x="93" y="22" fill="#06B6D4" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">
      .ai
    </text>
    <defs>
      <linearGradient id="gradient1" x1="4" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse">
        <stop stopColor="#06B6D4" />
        <stop offset="1" stopColor="#10B981" />
      </linearGradient>
    </defs>
  </svg>
);

const Header = ({ onOpenForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Módulos', href: '#modules' },
    { label: 'Precios', href: '#pricing' },
    { label: 'Beneficios', href: '#benefits' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <VentenLogo className="h-8 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={onOpenForm}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-6"
            >
              Inscríbete
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800/50">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenForm();
                }}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold mt-2"
              >
                Inscríbete
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export { VentenLogo };
export default Header;
