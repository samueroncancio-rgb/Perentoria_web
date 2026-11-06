import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HeroFlowVisualizer } from './HeroFlowVisualizer';

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiagnostic }) => {
  return (
    <section
      className="section"
      style={{
        paddingTop: 'calc(var(--header-height) + 50px)',
        paddingBottom: '80px',
        position: 'relative',
        backgroundColor: 'var(--color-ivory)',
      }}
    >
      <div className="container">
        {/* Subtle Category Eyebrow */}
        <div style={{ marginBottom: '24px' }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>CONSULTORÍA TECNOLÓGICA & ARQUITECTURA DE SISTEMAS</span>
          </div>
        </div>

        {/* Hero Grid: Typography Left, Flow Architecture Visualizer Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(24px, 4vw, 48px)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Headlines & CTAs */}
          <div style={{ maxWidth: '640px' }}>
            <h1
              style={{
                marginBottom: '24px',
                color: 'var(--color-carbon)',
              }}
            >
              AUTOMATIZAMOS LO QUE FRENA TU EMPRESA.
            </h1>

            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: 1.6,
                color: 'var(--color-graphite)',
                marginBottom: '36px',
                maxWidth: '560px',
              }}
            >
              Diseñamos sistemas inteligentes que conectan tus procesos, herramientas y clientes para que tu operación funcione de forma automática.
            </p>

            {/* CTAs matching Section 7 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '48px',
              }}
            >
              <button
                onClick={onOpenDiagnostic}
                className="btn btn-primary btn-lg"
              >
                <span>Agendar diagnóstico</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="#soluciones"
                className="btn btn-secondary btn-lg"
              >
                <span>Explorar soluciones</span>
              </a>
            </div>

            {/* Value Pillars / Trust Indicators */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))',
                gap: '20px',
                paddingTop: '28px',
                borderTop: '1px solid var(--color-ivory-border)',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-petroleum)',
                    fontWeight: 600,
                    marginBottom: '4px',
                  }}
                >
                  ARQUITECTURA
                </div>
                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--color-carbon)',
                  }}
                >
                  A medida
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-petroleum)',
                    fontWeight: 600,
                    marginBottom: '4px',
                  }}
                >
                  DISPONIBILIDAD
                </div>
                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--color-carbon)',
                  }}
                >
                  Operación 24/7
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-petroleum)',
                    fontWeight: 600,
                    marginBottom: '4px',
                  }}
                >
                  INTEGRACIÓN
                </div>
                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--color-carbon)',
                  }}
                >
                  Sistemas legados
                </div>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative', width: '100%', maxWidth: '100%', minWidth: 0 }}>
            <HeroFlowVisualizer />
          </div>
        </div>
      </div>
    </section>
  );
};
