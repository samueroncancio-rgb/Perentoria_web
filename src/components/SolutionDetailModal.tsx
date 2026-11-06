import React from 'react';
import { X, CheckCircle2, ArrowRight, Layers, Mic, MessageSquare, Gauge, Terminal } from 'lucide-react';

export interface SolutionData {
  number: string;
  name: string;
  shortDesc: string;
  iconName: string;
  fullDesc: string;
  capabilities: string[];
  architecturePoints: string[];
  deliverables: string[];
}

interface SolutionDetailModalProps {
  solution: SolutionData | null;
  onClose: () => void;
  onOpenDiagnostic: () => void;
}

export const SolutionDetailModal: React.FC<SolutionDetailModalProps> = ({
  solution,
  onClose,
  onOpenDiagnostic,
}) => {
  if (!solution) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '720px', padding: 'clamp(20px, 4vw, 36px)' }}
      >
        {/* Top Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '24px',
            borderBottom: '1px solid var(--color-ivory-border)',
            paddingBottom: '20px',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--color-petroleum)',
                letterSpacing: '0.1em',
              }}
            >
              SOLUCIÓN TECNOLÓGICA {solution.number}
            </span>
            <h2 style={{ fontSize: '1.75rem', marginTop: '6px' }}>
              {solution.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-steel)',
              padding: '6px',
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Narrative Description */}
        <p style={{ fontSize: '1.05rem', color: 'var(--color-graphite)', marginBottom: '24px', lineHeight: 1.6 }}>
          {solution.fullDesc}
        </p>

        {/* Specialized Architectural Simulation Preview based on solution number */}
        {solution.number === '01' && (
          <div
            style={{
              backgroundColor: 'var(--color-carbon)',
              color: 'var(--color-ivory)',
              borderRadius: 'var(--radius-xs)',
              padding: '16px 20px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              marginBottom: '24px',
              border: '1px solid var(--color-carbon-border)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8CC4D8', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
              <span>PIPELINE DE SINCRONIZACIÓN ATÓMICA</span>
              <span>ESTADO: OK (3.2ms)</span>
            </div>
            <div style={{ color: 'var(--color-steel-light)', lineHeight: 1.5, wordBreak: 'break-word' }}>
              [EVENTO: NUEVO REGISTRO CRM] ➔ [NORMALIZADOR KERNEL] ➔ [ESCRITURA ERP] ➔ [EMISIÓN COMPROBANTE]
            </div>
          </div>
        )}

        {solution.number === '02' && (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-petroleum-border)',
              borderRadius: 'var(--radius-xs)',
              padding: '16px 20px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-petroleum)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                <Mic size={16} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', fontWeight: 600, color: 'var(--color-carbon)' }}>
                  Modelo de Voz Neuronal Concurrente
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-steel)' }}>
                  Latencia de respuesta: &lt; 480ms · Detección de silencios & interrupciones naturales
                </div>
              </div>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                backgroundColor: 'var(--color-petroleum-subtle)',
                color: 'var(--color-petroleum)',
                padding: '4px 8px',
                borderRadius: '2px',
                fontWeight: 600,
              }}
            >
              SIP TRUNK ACTIVO
            </span>
          </div>
        )}

        {solution.number === '03' && (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-ivory-border)',
              borderRadius: 'var(--radius-xs)',
              padding: '16px 20px',
              marginBottom: '24px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <MessageSquare size={16} color="var(--color-petroleum)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-carbon)' }}>
                RAG VECTORIAL EMPRESARIAL (WHATSAPP BUSINESS API)
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', color: 'var(--color-graphite)' }}>
              "El prospecto pregunta por disponibilidad y presupuesto. El agente valida el inventario en la base de datos, envía cotización en PDF y sincroniza el lead en el CRM con calificación 95/100."
            </div>
          </div>
        )}

        {solution.number === '04' && (
          <div
            style={{
              backgroundColor: 'var(--color-carbon)',
              color: 'var(--color-ivory)',
              borderRadius: 'var(--radius-xs)',
              padding: '16px 20px',
              marginBottom: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Gauge size={16} color="#8CC4D8" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem' }}>
                CORE WEB VITALS: PERFORMANCE 99/100 · LCP 0.6s
              </span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#8CC4D8' }}>
              CONVERSIÓN OPTIMIZADA
            </span>
          </div>
        )}

        {solution.number === '05' && (
          <div
            style={{
              backgroundColor: 'var(--color-carbon)',
              color: 'var(--color-ivory)',
              borderRadius: 'var(--radius-xs)',
              padding: '16px 20px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Terminal size={16} color="#8CC4D8" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--color-steel-light)' }}>
              STACK: React / Node.js / Python / PostgreSQL / Redis / Docker / AWS Serverless
            </span>
          </div>
        )}

        {/* Capabilities Grid */}
        <div style={{ marginBottom: '28px' }}>
          <h4
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.08em',
              color: 'var(--color-carbon)',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            Capacidades Técnicas & Funcionales
          </h4>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
              gap: '12px',
            }}
          >
            {solution.capabilities.map((cap, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  backgroundColor: 'var(--color-ivory)',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--color-ivory-border)',
                }}
              >
                <CheckCircle2 size={16} color="var(--color-petroleum)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.88rem', color: 'var(--color-carbon)', fontWeight: 500 }}>
                  {cap}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture & Deliverables */}
        <div
          style={{
            backgroundColor: '#FCFCFA',
            border: '1px solid var(--color-ivory-border)',
            borderRadius: 'var(--radius-sm)',
            padding: '20px',
            marginBottom: '32px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <Layers size={16} color="var(--color-petroleum)" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--color-carbon)',
              }}
            >
              ENTREGABLES Y ARQUITECTURA
            </span>
          </div>
          <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {solution.architecturePoints.map((arch, i) => (
              <li
                key={i}
                style={{
                  fontSize: '0.86rem',
                  color: 'var(--color-graphite)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--color-petroleum)' }} />
                <span>{arch}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', flexWrap: 'wrap' }}>
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Cerrar
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenDiagnostic();
            }}
            className="btn btn-primary btn-sm"
            style={{ flex: '1 1 auto', justifyContent: 'center' }}
          >
            <span>Evaluar solución en mi empresa</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
