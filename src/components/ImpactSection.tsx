import React from 'react';
import { ArrowUpRight, Clock, Zap, Layers } from 'lucide-react';

interface ImpactSectionProps {
  onOpenDiagnostic: () => void;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onOpenDiagnostic }) => {
  const metrics = [
    {
      num: '80%',
      prefix: 'Hasta',
      label: 'Menos horas dedicadas a tareas mecánicas',
      desc: 'Liberamos al equipo de la transcripción, validación manual y conciliación para enfocar el talento en estrategia y crecimiento.',
      icon: <Clock size={24} color="#8CC4D8" />,
    },
    {
      num: '24/7',
      prefix: 'Cobertura',
      label: 'De atención automatizada',
      desc: 'Sistemas que capturan prospectos, responden dudas críticas y gestionan citas en cualquier huso horario sin pausas operativas.',
      icon: <Zap size={24} color="#8CC4D8" />,
    },
    {
      num: '< 3s',
      prefix: 'Velocidad',
      label: 'Respuestas en segundos',
      desc: 'Atención instantánea a solicitudes entrantes por voz, chat o formularios con latencias mínimas y datos actualizados.',
      icon: <ArrowUpRight size={24} color="#8CC4D8" />,
    },
    {
      num: '100%',
      prefix: 'Arquitectura',
      label: 'Integraciones diseñadas a medida',
      desc: 'Infraestructura construida a partir de la lógica específica de tu negocio, conectando tus bases de datos y sistemas legados.',
      icon: <Layers size={24} color="#8CC4D8" />,
    },
  ];

  return (
    <section
      id="impacto"
      className="section section-dark"
      style={{
        backgroundColor: 'var(--color-carbon)',
        borderTop: '1px solid var(--color-carbon-border)',
        borderBottom: '1px solid var(--color-carbon-border)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '64px' }}>
          <div className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot" />
            <span>RESULTADOS DE INGENIERÍA</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              letterSpacing: '-0.03em',
              marginBottom: '20px',
              color: 'var(--color-ivory)',
            }}
          >
            MENOS OPERACIÓN MANUAL. MÁS EMPRESA.
          </h2>

          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--color-steel-light)',
              lineHeight: 1.6,
            }}
          >
            La automatización no es solo ahorrar tiempo: es construir una operación predecible, escalable y libre de errores humanos.
          </p>
        </div>

        {/* 4 Impact Metric Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
            gap: '24px',
            marginBottom: '56px',
          }}
        >
          {metrics.map((m, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--color-carbon-elevated)',
                border: '1px solid var(--color-carbon-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(140, 196, 216, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-carbon-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '24px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      letterSpacing: '0.1em',
                      color: 'var(--color-steel)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {m.prefix}
                  </span>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'rgba(36, 75, 90, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(140, 196, 216, 0.2)',
                    }}
                  >
                    {m.icon}
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '2.8rem',
                    fontWeight: 800,
                    color: 'var(--color-ivory)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: '14px',
                  }}
                >
                  {m.num}
                </div>

                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: 'var(--color-ivory)',
                    marginBottom: '12px',
                    lineHeight: 1.35,
                  }}
                >
                  {m.label}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-steel-light)',
                    lineHeight: 1.55,
                  }}
                >
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Impact Footer Banner */}
        <div
          style={{
            borderTop: '1px solid var(--color-carbon-border)',
            paddingTop: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: '#8CC4D8',
                marginBottom: '6px',
              }}
            >
              ENFOQUE ESTRATÉGICO
            </div>
            <div style={{ fontSize: '1rem', color: 'var(--color-steel-light)' }}>
              Infraestructura tecnológica precisa orientada a rentabilidad, velocidad de respuesta y escalabilidad de tu negocio.
            </div>
          </div>

          <button
            onClick={onOpenDiagnostic}
            className="btn btn-secondary-dark"
          >
            <span>Evaluar potencial en tu empresa</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
