import React, { useState } from 'react';
import { 
  GitMerge, 
  PhoneCall, 
  Bot, 
  Gauge, 
  Cpu, 
  ArrowRight
} from 'lucide-react';
import { SolutionDetailModal, type SolutionData } from './SolutionDetailModal';

interface SolutionsSectionProps {
  onOpenDiagnostic: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenDiagnostic }) => {
  const [selectedSolution, setSelectedSolution] = useState<SolutionData | null>(null);

  const solutionsList: SolutionData[] = [
    {
      number: '01',
      name: 'Automatización de procesos',
      shortDesc: 'Automatizamos tareas repetitivas y conectamos las diferentes plataformas de la empresa.',
      iconName: 'GitMerge',
      fullDesc: 'Construimos flujos automáticos sin fisuras que orquestan el traslado y sincronización de datos entre ERP, CRM, facturación, pasarelas de pago y hojas de cálculo, eliminando la transcripción manual por completo.',
      capabilities: [
        'Sincronización bidireccional continua entre bases de datos y CRMs',
        'Validación y emisión autónoma de comprobantes fiscales y facturación',
        'Conciliación de pagos bancarios y pasarelas con el libro contable',
        'Alertas tempranas de anomalías operativas con resolución automática',
      ],
      architecturePoints: [
        'Conexión mediante Webhooks seguros y APIs REST/GraphQL',
        'Manejo de reintentos exponenciales y consistencia de datos ACID',
        'Logs de auditoría y monitoreo de estado en tiempo real',
      ],
      deliverables: ['Diagrama de arquitectura', 'Motor de flujos desplegado', 'Tablero de supervisión'],
    },
    {
      number: '02',
      name: 'Agentes de voz con IA',
      shortDesc: 'Agentes telefónicos inteligentes capaces de conversar con clientes y ejecutar acciones durante la llamada.',
      iconName: 'PhoneCall',
      fullDesc: 'Implementamos asistentes telefónicos de voz neuronal ultra-naturales capaces de mantener diálogos contextuales en tiempo real, comprender matices, agendar citas en el calendario y registrar las solicitudes en tu base de datos durante la llamada.',
      capabilities: [
        'Atención de llamadas entrantes 24/7 sin colas de espera',
        'Campañas salientes de confirmación, cobranza preventiva y reactivación',
        'Interacción directa con la base de datos para consultar estados de pedidos',
        'Transferencia fluida a ejecutivos humanos ante casos de alta complejidad',
      ],
      architecturePoints: [
        'Modelos de voz de latencia ultra-baja (<600ms de respuesta)',
        'Integración con PBX en la nube, SIP Trunks y telefonía IP existente',
        'Transcripción y resumen estructurado enviado al CRM al finalizar',
      ],
      deliverables: ['Guiones e ingeniería de prompts', 'Integración de telefonía', 'Panel de grabaciones y analítica'],
    },
    {
      number: '03',
      name: 'Chatbots inteligentes',
      shortDesc: 'Asistentes de IA para WhatsApp, Instagram y web capaces de atender, calificar y orientar prospectos.',
      iconName: 'Bot',
      fullDesc: 'Transformamos tus canales de mensajería con agentes conversacionales impulsados por IA generativa entrenados con el conocimiento exacto de tu negocio. Califican leads al instante, cotizan servicios y envían información precisa en segundos.',
      capabilities: [
        'Integración oficial con WhatsApp Business API, Instagram Direct y Webchat',
        'Calificación automática de prospectos según presupuesto y urgencia',
        'Envío automático de cotizaciones en PDF, enlaces de pago y brochures',
        'Asignación inteligente del prospecto al asesor comercial adecuado',
      ],
      architecturePoints: [
        'Bases de conocimiento vectoriales (RAG) con la información de tu empresa',
        'Guardrails estrictos para prevenir respuestas alucinadas o fuera de tono',
        'Sincronización instantánea de contactos en HubSpot, Salesforce o CRM propio',
      ],
      deliverables: ['Agente configurado', 'Integración multicanal', 'Dashboard de conversaciones'],
    },
    {
      number: '04',
      name: 'Landing pages & funnels',
      shortDesc: 'Páginas ultrarrápidas diseñadas específicamente para convertir tráfico en prospectos y ventas.',
      iconName: 'Gauge',
      fullDesc: 'Desarrollamos infraestructura web de conversión optimizada para velocidad extrema, métricas Core Web Vitals impecables y conexión nativa con tus sistemas de automatización comercial.',
      capabilities: [
        'Velocidad de carga sub-segundo con arquitectura moderna estática y SSR',
        'Formularios dinámicos con enriquecimiento de datos de empresas',
        'Seguimiento avanzado de eventos y atribución de pauta sin pérdida de cookies',
        'A/B testing técnico para maximizar la tasa de conversión porcentual',
      ],
      architecturePoints: [
        'Código limpio sin bloatware de constructores visuales pesados',
        'CDNs globales con 99.99% de disponibilidad',
        'Integración directa con el pipeline de nutrición automática',
      ],
      deliverables: ['Landing page de alto rendimiento', 'Tracking analítico verificado', 'Conexión a CRM'],
    },
    {
      number: '05',
      name: 'Software a medida',
      shortDesc: 'Aplicaciones, dashboards, portales privados, APIs y sistemas personalizados para necesidades específicas.',
      iconName: 'Cpu',
      fullDesc: 'Diseñamos y programamos soluciones de software empresarial desde cero cuando los programas prefabricados del mercado se quedan cortos o fuerzan a tu operación a adaptarse a sus limitaciones.',
      capabilities: [
        'Portales B2B privados para clientes, distribuidores o proveedores',
        'Dashboards ejecutivos con métricas consolidadas en tiempo real',
        'APIs y middleware para conectar plataformas incompatibles',
        'Sistemas internos para gestión de operaciones exclusivas de tu sector',
      ],
      architecturePoints: [
        'Arquitectura modular y escalable en React, Node.js, Python y Cloud nativo',
        'Bases de datos optimizadas para alta concurrencia y seguridad estricta',
        'Código documentado con propiedad intelectual 100% de tu empresa',
      ],
      deliverables: ['Código fuente completo', 'Infraestructura cloud desplegada', 'Documentación técnica'],
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'GitMerge':
        return <GitMerge size={24} color="var(--color-petroleum)" />;
      case 'PhoneCall':
        return <PhoneCall size={24} color="var(--color-petroleum)" />;
      case 'Bot':
        return <Bot size={24} color="var(--color-petroleum)" />;
      case 'Gauge':
        return <Gauge size={24} color="var(--color-petroleum)" />;
      case 'Cpu':
        return <Cpu size={24} color="var(--color-petroleum)" />;
      default:
        return <Cpu size={24} color="var(--color-petroleum)" />;
    }
  };

  return (
    <section id="soluciones" className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container">
        {/* Header Section 9 */}
        <div style={{ maxWidth: '780px', marginBottom: '56px' }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>SOLUCIONES INTEGRALES</span>
          </div>

          <h2 style={{ marginBottom: '18px' }}>
            Un sistema. Múltiples posibilidades.
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-graphite)' }}>
            Estructuramos soluciones tecnológicas modulares que se acoplan directamente a la realidad operativa de tu empresa.
          </p>
        </div>

        {/* 5 Solution Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: '24px',
          }}
        >
          {solutionsList.map((sol) => (
            <div
              key={sol.number}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-ivory-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all var(--transition-fast)',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-petroleum)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-ivory-border)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                {/* Top Number & Icon Row */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '28px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--color-steel)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {sol.number}
                  </span>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--color-petroleum-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getIcon(sol.iconName)}
                  </div>
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontSize: '1.35rem',
                    marginBottom: '14px',
                    color: 'var(--color-carbon)',
                  }}
                >
                  {sol.name}
                </h3>

                {/* Short Description */}
                <p
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--color-graphite)',
                    lineHeight: 1.6,
                    marginBottom: '28px',
                  }}
                >
                  {sol.shortDesc}
                </p>
              </div>

              {/* Action Link: "Explorar solución →" */}
              <button
                onClick={() => setSelectedSolution(sol)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--color-petroleum)',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span>Explorar solución</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal with technical architectural breakdown */}
      <SolutionDetailModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onOpenDiagnostic={onOpenDiagnostic}
      />
    </section>
  );
};
