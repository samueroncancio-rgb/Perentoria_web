import React, { useState } from 'react';
import { Search, Compass, Network, Activity } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'ANALIZAMOS',
      desc: 'Identificamos dónde se pierde tiempo, dinero y oportunidades.',
      detail: 'Mapeamos integralmente los procesos cotidianos de tu equipo, detectando tareas repetitivas, cuellos de botella y herramientas desconectadas.',
      deliverable: 'Auditoría de Procesos & Matriz de Automatización',
      icon: <Search size={22} color="var(--color-petroleum)" />,
    },
    {
      num: '02',
      title: 'DISEÑAMOS',
      desc: 'Construimos la arquitectura tecnológica adecuada para el negocio.',
      detail: 'Planificamos los diagramas de flujo, los puntos de integración de APIs y los modelos de datos que gobernarán la operación sin generar deuda técnica.',
      deliverable: 'Blueprint de Arquitectura de Sistemas',
      icon: <Compass size={22} color="var(--color-petroleum)" />,
    },
    {
      num: '03',
      title: 'INTEGRAMOS',
      desc: 'Conectamos CRM, facturación, pagos, inventarios, canales digitales y demás sistemas.',
      detail: 'Enlazamos las plataformas existentes de la empresa mediante APIs seguras, webhooks y middleware sin interrumpir las operaciones del día a día.',
      deliverable: 'Capa de Conexión y Middleware Seguro',
      icon: <Network size={22} color="var(--color-petroleum)" />,
    },
    {
      num: '04',
      title: 'AUTOMATIZAMOS',
      desc: 'Creamos flujos que funcionan automáticamente y permiten que la empresa opere con mayor velocidad y precisión.',
      detail: 'Desplegamos los sistemas y agentes de inteligencia artificial en producción con monitoreo continuo, trazabilidad y manejo inteligente de excepciones.',
      deliverable: 'Operación Autónoma Activa 24/7',
      icon: <Activity size={22} color="var(--color-petroleum)" />,
    },
  ];

  return (
    <section
      id="como-funciona"
      className="section"
      style={{
        backgroundColor: '#FCFCFA',
        borderTop: '1px solid var(--color-ivory-border)',
        borderBottom: '1px solid var(--color-ivory-border)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '60px' }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>METODOLOGÍA DE INGENIERÍA</span>
          </div>

          <h2 style={{ marginBottom: '18px' }}>
            Un método estructurado. Resultados predecibles.
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-graphite)' }}>
            Transformamos la complejidad operativa en un sistema fluido a través de un proceso de ingeniería riguroso de cuatro etapas.
          </p>
        </div>

        {/* 4 Steps Horizontal Data Flow Architecture */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
            gap: '20px',
            position: 'relative',
          }}
        >
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: isSelected
                    ? '1px solid var(--color-petroleum)'
                    : '1px solid var(--color-ivory-border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '32px 24px',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isSelected ? 'var(--shadow-card)' : 'none',
                }}
              >
                <div>
                  {/* Top Step Number Header */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: isSelected ? 'var(--color-petroleum)' : 'var(--color-steel)',
                        letterSpacing: '0.12em',
                      }}
                    >
                      FASE {step.num}
                    </span>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: 'var(--color-petroleum-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      marginBottom: '10px',
                      color: 'var(--color-carbon)',
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Primary Brief Description */}
                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: 'var(--color-graphite)',
                      lineHeight: 1.55,
                      marginBottom: '18px',
                    }}
                  >
                    {step.desc}
                  </p>

                  {/* Deep technical narrative */}
                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: 'var(--color-steel-dark)',
                      lineHeight: 1.5,
                      marginBottom: '22px',
                    }}
                  >
                    {step.detail}
                  </p>
                </div>

                {/* Deliverable Badge */}
                <div
                  style={{
                    paddingTop: '16px',
                    borderTop: '1px solid var(--color-ivory-border)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--color-steel)',
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Entregable Clave:
                  </div>
                  <div
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--color-carbon)',
                    }}
                  >
                    {step.deliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Data Pipeline Visual Strip */}
        <div
          style={{
            marginTop: '36px',
            backgroundColor: 'var(--color-carbon)',
            borderRadius: 'var(--radius-sm)',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#8CC4D8',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: 'var(--color-ivory)',
                letterSpacing: '0.04em',
              }}
            >
              FLUJO CONTINUO DE DATOS: SIN FICHEROS MANUALES NI TAREAS REPETITIVAS
            </span>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--color-steel-light)',
            }}
          >
            FASE SELECCIONADA: {steps[activeStep].num} — {steps[activeStep].title}
          </div>
        </div>
      </div>
    </section>
  );
};
