import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenDiagnostic: () => void;
  onOpenContact: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onOpenDiagnostic,
  onOpenContact,
}) => {
  return (
    <section
      className="section"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--color-ivory-border)',
        paddingTop: '110px',
        paddingBottom: '110px',
        textAlign: 'center',
      }}
    >
      <div className="container-narrow">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>
          <span className="eyebrow-dot" />
          <span>SESIÓN ESTRATÉGICA CON CONSULTORES SENIOR</span>
        </div>

        <h2
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            textTransform: 'uppercase',
            letterSpacing: '-0.035em',
            marginBottom: '24px',
            color: 'var(--color-carbon)',
          }}
        >
          ¿QUÉ PODRÍAS AUTOMATIZAR?
        </h2>

        <p
          style={{
            fontSize: '1.25rem',
            lineHeight: 1.6,
            color: 'var(--color-graphite)',
            maxWidth: '680px',
            margin: '0 auto 42px auto',
          }}
        >
          Cuéntanos cómo funciona hoy tu operación. Diseñaremos una arquitectura tecnológica para hacerla más rápida, eficiente y automática.
        </p>

        {/* Buttons matching Section 15 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '36px',
          }}
        >
          <button
            onClick={onOpenDiagnostic}
            className="btn btn-primary btn-lg"
          >
            <span>Agendar diagnóstico</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onOpenContact}
            className="btn btn-secondary btn-lg"
          >
            <MessageCircle size={18} color="var(--color-petroleum)" />
            <span>Hablar con Perentoria</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '24px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--color-steel)',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <span>· DIAGNÓSTICO SIN COSTO INICIAL</span>
          <span>· ANÁLISIS DE FACTIBILIDAD TÉCNICA</span>
          <span>· ACUERDO DE CONFIDENCIALIDAD (NDA)</span>
        </div>
      </div>
    </section>
  );
};
