import React, { useState } from 'react';
import { 
  ShoppingCart, 
  CreditCard, 
  Users, 
  Stethoscope, 
  Building2, 
  GraduationCap,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const UseCasesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const cases = [
    {
      id: 'ecommerce',
      sector: 'E-commerce',
      icon: <ShoppingCart size={20} />,
      headline: 'Flujo completo de venta y despacho post-compra',
      description: 'Automatización total desde la pasarela de pagos hasta el mensaje de confirmación al cliente, sin intervención de personal de almacén ni facturación.',
      flowSteps: [
        { label: 'Compra', system: 'Tienda Online', time: 'T+0s' },
        { label: 'Pago', system: 'Pasarela Stripe/MP', time: '+1.2s' },
        { label: 'Factura', system: 'Módulo Fiscal', time: '+2.5s' },
        { label: 'Inventario', system: 'Sincronización ERP', time: '+3.1s' },
        { label: 'Despacho', system: 'Operador Logístico', time: '+4.0s' },
        { label: 'WhatsApp', system: 'Tracking al Cliente', time: '+5.0s' },
      ],
      benefit: 'Cero pedidos retrasados y notificación inmediata al comprador con su guía de despacho.',
    },
    {
      id: 'cobranza',
      sector: 'Cobranza',
      icon: <CreditCard size={20} />,
      headline: 'Cobranza preventiva y conciliación bancaria automática',
      description: 'Gestión inteligente del ciclo de cuentas por cobrar sin fricciones agresivas, actualizando el estatus contable en tiempo real.',
      flowSteps: [
        { label: 'Factura por vencer', system: 'ERP Contable', time: 'Día -5' },
        { label: 'Recordatorio', system: 'Email & WhatsApp', time: 'Automático' },
        { label: 'Pago', system: 'Transferencia / Link', time: 'Cliente' },
        { label: 'Conciliación', system: 'Webhook Bancario', time: 'Instantáneo' },
        { label: 'Actualización contable', system: 'Libro Mayor ERP', time: 'Consolidado' },
      ],
      benefit: 'Reducción de cartera vencida y eliminación de horas de comprobación bancaria manual.',
    },
    {
      id: 'rrhh',
      sector: 'Recursos Humanos',
      icon: <Users size={20} />,
      headline: 'Onboarding y habilitación de nuevo personal',
      description: 'Acreditación, accesos tecnológicos y firma de documentación laboral en minutos en lugar de semanas.',
      flowSteps: [
        { label: 'Nuevo empleado', system: 'Aprobación HR', time: 'Alta' },
        { label: 'Formulario', system: 'Portal Digital', time: 'Datos' },
        { label: 'Correo', system: 'Google Workspace/M365', time: 'Generado' },
        { label: 'Accesos', system: 'SSO & Herramientas', time: 'Provisionado' },
        { label: 'Firma', system: 'Contrato Digital', time: 'Legal' },
        { label: 'Inducción', system: 'LMS / Roadmap', time: 'Completado' },
      ],
      benefit: 'El nuevo colaborador inicia productivo desde el minuto uno sin correos dispersos.',
    },
    {
      id: 'medico',
      sector: 'Sector Médico',
      icon: <Stethoscope size={20} />,
      headline: 'Confirmación y reprogramación autónoma de consultas',
      description: 'Agentes inteligentes que contactan a pacientes, confirman asistencia y optimizan los horarios de los especialistas médicos.',
      flowSteps: [
        { label: 'Paciente', system: 'Cita en Sistema', time: '24h Previas' },
        { label: 'Llamada automática', system: 'Agente de Voz IA', time: 'Voz Neuronal' },
        { label: 'Confirmación', system: 'Respuesta en Línea', time: 'Detectada' },
        { label: 'Reprogramación', system: 'Gestión de Cupos', time: 'Alternativa' },
        { label: 'Actualización agenda', system: 'Software Médico', time: 'Sincronizado' },
      ],
      benefit: 'Disminución drástica de citas desatendidas (no-shows) y ocupación médica optimizada.',
    },
    {
      id: 'inmobiliario',
      sector: 'Sector Inmobiliario',
      icon: <Building2 size={20} />,
      headline: 'Calificación instantánea y asignación comercial de leads',
      description: 'Respuesta en segundos a prospectos interesados en proyectos inmobiliarios, derivando a los más calificados con un asesor.',
      flowSteps: [
        { label: 'Lead', system: 'Portal / Pauta', time: 'Ingreso' },
        { label: 'Llamada inmediata', system: 'Agente IA (<45s)', time: 'Automática' },
        { label: 'Calificación', system: 'Presupuesto & Plazo', time: 'Filtrado' },
        { label: 'Conexión con asesor', system: 'Transferencia Directa', time: 'En vivo' },
        { label: 'Agenda', system: 'Visita Showroom', time: 'Confirmada' },
      ],
      benefit: 'Contacto con el prospecto en el instante de mayor intención de compra.',
    },
    {
      id: 'educacion',
      sector: 'Educación',
      icon: <GraduationCap size={20} />,
      headline: 'Plataformas educativas y gestión integral de alumnos',
      description: 'Automatización del ciclo del estudiante desde la inscripción y cobro hasta el aprovisionamiento instantáneo en el campus virtual, seguimiento académico y certificación.',
      flowSteps: [
        { label: 'Matrícula', system: 'Portal de Admisión', time: 'Inscripción' },
        { label: 'Pago', system: 'Pasarela / Finanzas', time: '+1.2s' },
        { label: 'Campus virtual', system: 'Aprovisionamiento LMS', time: '+2.4s' },
        { label: 'Credenciales', system: 'WhatsApp & Email', time: '+3.1s' },
        { label: 'Tutor IA', system: 'Asistencia 24/7', time: 'En Curso' },
        { label: 'Certificación', system: 'Validación Digital', time: 'Aprobado' },
      ],
      benefit: 'Alta inmediata del estudiante sin demoras manuales y sincronización total entre pagos y aula virtual.',
    },
  ];

  return (
    <section id="casos-de-uso" className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>ARQUITECTURA APLICADA</span>
          </div>

          <h2 style={{ marginBottom: '18px' }}>
            Flujos visuales diseñados para operaciones reales.
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-graphite)' }}>
            Cómo viaja la información de extremo a extremo sin que nadie tenga que copiar, pegar o esperar una respuesta manual.
          </p>
        </div>

        {/* Tab Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '32px',
            width: '100%',
            maxWidth: '100%',
          }}
        >
          {cases.map((c, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={c.id}
                onClick={() => setActiveTab(idx)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  borderRadius: 'var(--radius-sm)',
                  border: isSelected
                    ? '1px solid var(--color-petroleum)'
                    : '1px solid var(--color-ivory-border)',
                  backgroundColor: isSelected ? 'var(--color-petroleum)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--color-carbon)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  whiteSpace: 'nowrap',
                }}
              >
                {c.icon}
                <span>{c.sector}</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Visual Pipeline Canvas */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--color-ivory-border)',
            borderRadius: 'var(--radius-md)',
            padding: 'clamp(20px, 4vw, 40px)',
            boxShadow: 'var(--shadow-card)',
            width: '100%',
            maxWidth: '100%',
            overflow: 'hidden',
          }}
        >
          {/* Top Scenario Overview */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '36px',
              borderBottom: '1px solid var(--color-ivory-border)',
              paddingBottom: '24px',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--color-petroleum)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  marginBottom: '8px',
                }}
              >
                SECTOR: {cases[activeTab].sector.toUpperCase()}
              </div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '10px', color: 'var(--color-carbon)' }}>
                {cases[activeTab].headline}
              </h3>
              <p style={{ fontSize: '0.98rem', color: 'var(--color-graphite)' }}>
                {cases[activeTab].description}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-ivory)',
                padding: '14px 20px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-ivory-border)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--color-graphite)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <CheckCircle2 size={16} color="var(--color-petroleum)" />
              <span>{cases[activeTab].benefit}</span>
            </div>
          </div>

          <style>{`
            .pipeline-flow {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
              gap: 16px;
              width: 100%;
              max-width: 100%;
              padding: 4px 0;
            }
            .pipeline-arrow {
              display: none !important;
            }
            .pipeline-step-node {
              width: 100% !important;
              min-width: 0 !important;
            }
          `}</style>

          {/* Sequential Pipeline Flow Diagram */}
          <div className="pipeline-flow">
            {cases[activeTab].flowSteps.map((step, sIdx) => {
              const isLast = sIdx === cases[activeTab].flowSteps.length - 1;
              return (
                <React.Fragment key={sIdx}>
                  {/* Step Node */}
                  <div
                    className="pipeline-step-node"
                    style={{
                      minWidth: '150px',
                      backgroundColor: 'var(--color-ivory)',
                      border: '1px solid var(--color-ivory-border)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '20px 16px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '10px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: 'var(--color-steel)',
                          fontWeight: 600,
                        }}
                      >
                        0{sIdx + 1}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          color: 'var(--color-petroleum)',
                          backgroundColor: 'var(--color-petroleum-subtle)',
                          padding: '2px 6px',
                          borderRadius: '2px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <span>{step.time}</span>
                        {!isLast && <span style={{ opacity: 0.8 }}>➔</span>}
                      </span>
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: 'var(--color-carbon)',
                        marginBottom: '6px',
                      }}
                    >
                      {step.label}
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--color-steel)',
                      }}
                    >
                      {step.system}
                    </div>
                  </div>

                  {/* Flow Arrow Divider */}
                  {!isLast && (
                    <div
                      className="pipeline-arrow"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-petroleum)',
                        flexShrink: 0,
                      }}
                    >
                      <ArrowRight size={20} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
