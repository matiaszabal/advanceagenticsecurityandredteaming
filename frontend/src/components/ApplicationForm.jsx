import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { X, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { saveApplication } from '../data/mock';

const ApplicationForm = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    profession: '',
    experience: '',
    motivation: ''
  });
  const [errors, setErrors] = useState({});

  const experienceOptions = [
    { value: 'none', label: 'Sin experiencia en seguridad' },
    { value: 'beginner', label: '1-2 años de experiencia' },
    { value: 'intermediate', label: '3-5 años de experiencia' },
    { value: 'advanced', label: '5+ años de experiencia' },
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    }
    
    if (!formData.profession.trim()) {
      newErrors.profession = 'La profesión es requerida';
    }
    
    if (!formData.experience) {
      newErrors.experience = 'Selecciona tu nivel de experiencia';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Save to localStorage
    saveApplication(formData);
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      profession: '',
      experience: '',
      motivation: ''
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-white">Formulario de Inscripción</h2>
            <p className="text-slate-400 text-sm mt-1">Completa tus datos para reservar tu plaza</p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">¡Inscripción Enviada!</h3>
              <p className="text-slate-400 mb-6">
                Hemos recibido tu solicitud. Nos pondremos en contacto contigo pronto para los próximos pasos.
              </p>
              <Button
                onClick={handleClose}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold"
              >
                Cerrar
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-slate-300">Nombre completo *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  placeholder="Tu nombre completo"
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                />
                {errors.fullName && <p className="text-red-400 text-sm">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="tu@email.com"
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                />
                {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-300">Teléfono *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+54 9 11 1234-5678"
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                />
                {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
              </div>

              {/* Profession */}
              <div className="space-y-2">
                <Label htmlFor="profession" className="text-slate-300">Profesión actual *</Label>
                <Input
                  id="profession"
                  value={formData.profession}
                  onChange={(e) => handleChange('profession', e.target.value)}
                  placeholder="Ej: Pentester, Desarrollador, Consultor..."
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                />
                {errors.profession && <p className="text-red-400 text-sm">{errors.profession}</p>}
              </div>

              {/* Experience */}
              <div className="space-y-2">
                <Label className="text-slate-300">Experiencia en seguridad *</Label>
                <Select value={formData.experience} onValueChange={(value) => handleChange('experience', value)}>
                  <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white focus:border-cyan-500">
                    <SelectValue placeholder="Selecciona tu nivel" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    {experienceOptions.map((option) => (
                      <SelectItem 
                        key={option.value} 
                        value={option.value}
                        className="text-slate-300 focus:bg-slate-700 focus:text-white"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.experience && <p className="text-red-400 text-sm">{errors.experience}</p>}
              </div>

              {/* Motivation */}
              <div className="space-y-2">
                <Label htmlFor="motivation" className="text-slate-300">¿Por qué te interesa este curso? (opcional)</Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => handleChange('motivation', e.target.value)}
                  placeholder="Cuéntanos un poco sobre tu interés en la seguridad de LLMs..."
                  rows={3}
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold py-6 text-base"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Inscripción
                  </>
                )}
              </Button>

              <p className="text-slate-500 text-xs text-center">
                Al enviar este formulario, aceptas ser contactado sobre el programa.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
