// Mock data for the LLM Security Course Landing Page

export const courseData = {
  hero: {
    badge: "Programa 2025-2026",
    title: "Seguridad Ofensiva en Modelos de Lenguaje y Agentes Autónomos",
    subtitle: "Domina las técnicas de Red Teaming para LLMs y sistemas de IA autónoma. Desde jailbreaking avanzado hasta explotación de arquitecturas multi-agente.",
    cta: "Inscríbete Ahora",
    ctaSecondary: "Ver Temario Completo"
  },
  stats: [
    { value: "40+", label: "Horas de contenido" },
    { value: "2", label: "Módulos especializados" },
    { value: "100%", label: "Práctico y aplicable" },
    { value: "2026", label: "Frontera tecnológica" }
  ],
  modules: [
    {
      id: "module-1",
      number: "01",
      title: "Fundamentos de LLM Red Teaming",
      subtitle: "Core OffSec",
      description: "Cubre el 100% del temario de OffSec, enfocado en la vulneración del modelo y su interfaz inmediata.",
      topics: [
        {
          title: "Arquitectura y Superficie de Ataque",
          items: [
            "Enumeración de LLMs: Identificación de modelos (propietarios vs. open-source), parámetros de temperatura y top-p",
            "Análisis de huellas dactilares (fingerprinting) del sistema",
            "Taxonomía de Amenazas: OWASP Top 10 for LLM y mapeo MITRE ATLAS"
          ]
        },
        {
          title: "Manipulación Semántica y Evasión",
          items: [
            "Jailbreaking Avanzado: Competitive Objectives y Adversarial Suffixes",
            "Ataques basados en codificación (Base64, Rot13) para evadir filtros",
            "Prompt Injection Directa e Indirecta: Secuestro del flujo de control"
          ]
        },
        {
          title: "Vulneración de Integridad y Confidencialidad",
          items: [
            "Data Poisoning: Envenenamiento en fine-tuning",
            "Prompt Leaking: Extracción del System Prompt",
            "Ataques de canal lateral para datos sensibles"
          ]
        },
        {
          title: "Infraestructura y Aplicación",
          items: [
            "Insecure Output Handling: XSS, CSRF y SSRF mediante LLM",
            "Supply Chain Attacks en repositorios de modelos",
            "Vulnerabilidades en bibliotecas de integración"
          ]
        }
      ]
    },
    {
      id: "module-2",
      number: "02",
      title: "Agentic Security & Autonomous Red Teaming",
      subtitle: "The Gap",
      description: "Expande el horizonte hacia la seguridad de sistemas que ejecutan acciones y toman decisiones autónomas.",
      topics: [
        {
          title: "Explotación del Uso de Herramientas",
          items: [
            "Inyección de Funciones: Manipulación del razonamiento agéntico",
            "RCE Agéntico: Acceso a intérpretes Python/Bash",
            "Ejecución remota de comandos en el host"
          ]
        },
        {
          title: "Seguridad en Arquitecturas RAG y Memoria",
          items: [
            "Envenenamiento de Bases Vectoriales",
            "Inserción de documentos maliciosos en índices de búsqueda",
            "Contaminación de Memoria: Persistencia en contexto"
          ]
        },
        {
          title: "Ecosistemas Multi-Agente y Orquestación",
          items: [
            "Escalada de Privilegios en Swarms",
            "Compromiso de agentes de baja confianza para atacar administradores",
            "Ataques EDoS: Bucles infinitos y consumo de tokens"
          ]
        },
        {
          title: "Red Teaming Automatizado y Gobernanza",
          items: [
            "Frameworks Ofensivos: Garak, Microsoft PyRIT, Inspect",
            "Hardening Agéntico: Guardrails dinámicos",
            "Auditoría de logs y sandboxing de entornos"
          ]
        }
      ]
    }
  ],
  benefits: [
    {
      title: "Madurez del Estudiante",
      description: "No se puede asegurar la ejecución de un agente si no se comprende cómo manipular el lenguaje que lo dirige. El Módulo 1 es el requisito previo indispensable.",
      icon: "GraduationCap"
    },
    {
      title: "Diferenciación en el Mercado",
      description: "Mientras muchos cursos se quedan en el jailbreaking, el Módulo 2 te posiciona en la frontera tecnológica de 2026: la autonomía segura.",
      icon: "Target"
    },
    {
      title: "Flexibilidad de Niveles",
      description: "Curso inicial masivo + nivel Advanced/Expert para consultores y arquitectos de seguridad de alto nivel.",
      icon: "Layers"
    }
  ],
  targetAudience: [
    "Pentesters y Red Teamers que buscan especializarse en IA",
    "Ingenieros de Seguridad de aplicaciones con LLMs",
    "Arquitectos de sistemas de IA autónoma",
    "Consultores de seguridad que evalúan riesgos de IA",
    "Investigadores de seguridad en machine learning"
  ],
  frameworks: [
    { name: "OWASP Top 10 for LLM", category: "Standard" },
    { name: "MITRE ATLAS", category: "Framework" },
    { name: "Garak", category: "Tool" },
    { name: "Microsoft PyRIT", category: "Tool" },
    { name: "Inspect", category: "Tool" }
  ],
  faq: [
    {
      question: "¿Cuáles son los requisitos previos?",
      answer: "Se recomienda tener conocimientos básicos de seguridad informática, familiaridad con Python y comprensión general de cómo funcionan los modelos de lenguaje."
    },
    {
      question: "¿Puedo tomar solo el Módulo 2?",
      answer: "El Módulo 1 es prerequisito obligatorio. La comprensión de la manipulación semántica es esencial antes de abordar sistemas autónomos complejos."
    },
    {
      question: "¿El curso incluye práctica?",
      answer: "Sí, el 100% del contenido es práctico y aplicable. Trabajarás con frameworks reales como Garak, PyRIT e Inspect en entornos controlados."
    },
    {
      question: "¿Qué certificación obtengo?",
      answer: "Al completar ambos módulos recibirás una certificación que valida tus competencias en LLM Red Teaming y Agentic Security."
    }
  ]
};
