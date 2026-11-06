import React from 'react';
import { 
  LayoutDashboard, 
  KeyRound, 
  Globe, 
  Terminal, 
  Boxes, 
  Workflow, 
  Cpu,
  ArrowRight
} from 'lucide-react';

interface CustomSoftwareSectionProps {
  onOpenDiagnostic: () => void;
}

export const CustomSoftwareSection: React.FC<CustomSoftwareSectionProps> = ({ onOpenDiagnostic }) => {
  const capabilities = [
    { title: 'Dashboards ejecutivos', icon: <LayoutDashboard size={18} /> },
    { title: 'Portales privados', icon: <KeyRound size={18} /> },
    { title: 'Aplicaciones web', icon: <Globe size={18} /> },
    { title: 'APIs', icon: <Terminal size={18} /> },
    { title: 'Middleware', icon: <Boxes size={18} /> },
    { title: 'Integraciones', icon: <Workflow size={18} /> },
    { title: 'Sistemas internos', icon: <Cpu size={18} /> },
  ];

  return (
    <section
      id="software-a-medida"
      className="section"
      style={{
        backgroundColor: 'var(--color-ivory)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '56px' }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>INGENIERÍA DE SOFTWARE A MEDIDA</span>
          </div>

          <h2 style={{ marginBottom: '20px' }}>
            Cuando el software estándar no alcanza.
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-graphite)' }}>
            Las soluciones comerciales genéricas fuerzan a tu empresa a encajar en moldes rígidos. Desarrollamos software propietario construido específicamente sobre tus ventajas competitivas.
          </p>
        </div>

        {/* 2-Column Layout: Left = Capabilities List & CTA, Right = Executive Dashboard Mockup */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: 7 Specific Items required */}
          <div style={{ width: '100%', maxWidth: '100%', minWidth: 0 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))',
                gap: '12px',
                marginBottom: '36px',
              }}
            >
              {capabilities.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-ivory-border)',
                    borderRadius: 'var(--radius-xs)',
                    padding: '16px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-petroleum)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-ivory-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      color: 'var(--color-petroleum)',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.94rem',
                      fontWeight: 600,
                      color: 'var(--color-carbon)',
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-ivory-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '28px',
                marginBottom: '32px',
              }}
            >
              <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--color-carbon)' }}>
                Propiedad Intelectual Total
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-graphite)', lineHeight: 1.55 }}>
                El código fuente, las bases de datos y la infraestructura son 100% de tu empresa. Sin tarifas por usuario ocultas ni ataduras a plataformas propietarias de terceros.
              </p>
            </div>

            <button
              onClick={onOpenDiagnostic}
              className="btn btn-primary"
            >
              <span>Consultar por desarrollo a medida</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Column: Conceptual High-End Modern Executive Dashboard UI */}
          <div
            style={{
              backgroundColor: 'var(--color-carbon)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-carbon-border)',
              boxShadow: 'var(--shadow-card-dark)',
              padding: 'clamp(16px, 3vw, 24px)',
              color: 'var(--color-ivory)',
              overflow: 'hidden',
              width: '100%',
              maxWidth: '100%',
              minWidth: 0,
            }}
          >
            {/* Dashboard Browser Frame Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px',
                paddingBottom: '16px',
                borderBottom: '1px solid var(--color-carbon-border)',
                marginBottom: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#3D444C' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#3D444C' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#3D444C' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--color-steel)',
                    marginLeft: '8px',
                  }}
                >
                  PERENTORIA KERNEL · PANEL EJECUTIVO
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  backgroundColor: 'rgba(36, 75, 90, 0.4)',
                  color: '#8CC4D8',
                  padding: '3px 8px',
                  borderRadius: '2px',
                  border: '1px solid rgba(140, 196, 216, 0.2)',
                }}
              >
                PRODUCCIÓN ACTIVA · 99.98%
              </div>
            </div>

            {/* Top Metric Cards inside Mockup */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(120px, 100%), 1fr))',
                gap: '12px',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  backgroundColor: 'var(--color-carbon-elevated)',
                  border: '1px solid var(--color-carbon-border)',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-xs)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-steel)' }}>
                  EVENTOS / DÍA
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
                  24,812
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#8CC4D8', marginTop: '2px' }}>
                  ↑ 100% automático
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--color-carbon-elevated)',
                  border: '1px solid var(--color-carbon-border)',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-xs)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-steel)' }}>
                  LATENCIA MEDIA
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
                  12ms
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-steel)', marginTop: '2px' }}>
                  Sub-segundo
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--color-carbon-elevated)',
                  border: '1px solid var(--color-carbon-border)',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-xs)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-steel)' }}>
                  HORAS AHORRADAS
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
                  418 hrs
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#8CC4D8', marginTop: '2px' }}>
                  Este mes
                </div>
              </div>
            </div>

            {/* Live Pipeline Activity Monitor */}
            <div
              style={{
                backgroundColor: 'var(--color-carbon-elevated)',
                border: '1px solid var(--color-carbon-border)',
                borderRadius: 'var(--radius-xs)',
                padding: '16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-steel-light)' }}>
                  REGISTRO DE FLUJOS EN TIEMPO REAL
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#8CC4D8' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#8CC4D8' }}>STREAM EN VIVO</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { time: '14:28:02', process: 'Sincronización Pasarela -> ERP', status: 'EXITOSO · 18ms' },
                  { time: '14:27:54', process: 'Agente Voz IA: Cita Confirmada', status: 'EXITOSO · 2.1s' },
                  { time: '14:27:30', process: 'Generación Comprobante Fiscal', status: 'EXITOSO · 42ms' },
                  { time: '14:26:45', process: 'Despacho & Alerta WhatsApp', status: 'EXITOSO · 120ms' },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      padding: '8px 10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      borderRadius: '2px',
                      borderLeft: '2px solid #244B5A',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0, flex: '1 1 auto' }}>
                      <span style={{ color: 'var(--color-steel)', flexShrink: 0 }}>{item.time}</span>
                      <span style={{ color: 'var(--color-ivory)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {item.process}
                      </span>
                    </div>
                    <span style={{ color: '#8CC4D8', flexShrink: 0, fontSize: '0.68rem' }}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
