import React, { useState, useEffect } from 'react';
import { Cpu, TrendingUp, Layers, CheckCircle2, Shield, Activity } from 'lucide-react';

export const HeroFlowVisualizer: React.FC = () => {
  const [telemetryCount, setTelemetryCount] = useState(24812);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setTelemetryCount((prev) => prev + Math.floor(Math.random() * 2) + 1);
    }, 1500);

    const tabInterval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(countInterval);
      clearInterval(tabInterval);
    };
  }, []);

  const visionPillars = [
    {
      id: 'ai-core',
      shortTitle: 'IA Integrada',
      icon: <Cpu size={16} color="#8CC4D8" />,
      badge: 'INTELIGENCIA APLICADA AL NEGOCIO',
      title: 'IA Integrada, No Decorativa',
      description:
        'Modelos de lenguaje y agentes de voz conectados directamente a tus bases de datos y flujos operativos. Resuelven, venden y despachan con criterio corporativo y disponibilidad 24/7.',
      metric: 'Criterio Autónomo 24/7',
    },
    {
      id: 'scale',
      shortTitle: 'Escala 10x',
      icon: <TrendingUp size={16} color="#8CC4D8" />,
      badge: 'ESCALABILIDAD ESTRUCTURAL',
      title: 'Crecimiento Desacoplado del Esfuerzo',
      description:
        'Multiplica por 10 el volumen de transacciones, prospectos y facturación sin necesidad de multiplicar proporcionalmente la plantilla operativa ni los errores manuales.',
      metric: '10x Capacidad Operativa',
    },
    {
      id: 'sync',
      shortTitle: 'Sincronización',
      icon: <Layers size={16} color="#8CC4D8" />,
      badge: 'ARQUITECTURA UNIFICADA',
      title: 'Sincronización Total de Sistemas',
      description:
        'Tus herramientas actuales (ERP, CRM, pasarelas de pago, inventarios) operando bajo un único protocolo coordinado en tiempo real sin fugas de información.',
      metric: 'Cero Fricción de Datos',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--color-ivory-border)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-card)',
        padding: 'clamp(16px, 2.5vw, 24px)',
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .hero-top-capsule {
          position: absolute;
          top: 14px;
          left: 14px;
          right: 14px;
          display: flex;
          justifyContent: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          pointer-events: none;
        }
        .hero-tab-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 8px;
          margin-top: 14px;
          width: 100%;
        }
        .hero-tab-btn {
          min-width: 0 !important;
          width: 100% !important;
          overflow: hidden;
        }
        .tab-title-full { display: inline; }
        .tab-title-short { display: none; }
        @media (max-width: 960px) {
          .tab-title-full { display: none !important; }
          .tab-title-short { display: inline !important; }
        }
        @media (max-width: 640px) {
          .hero-top-capsule {
            top: 8px !important;
            left: 8px !important;
            right: 8px !important;
            gap: 4px !important;
          }
          .hero-top-badge-title {
            display: none !important;
          }
        }
      `}</style>
      {/* Top Telemetry Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '16px',
          borderBottom: '1px solid var(--color-ivory-border)',
          marginBottom: '16px',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-petroleum)',
              display: 'inline-block',
              boxShadow: '0 0 0 3px rgba(36, 75, 90, 0.2)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              fontWeight: 700,
              color: 'var(--color-carbon)',
              letterSpacing: '0.08em',
            }}
          >
            NÚCLEO OPERATIVO AUTÓNOMO
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--color-steel)',
              backgroundColor: 'var(--color-ivory)',
              padding: '2px 8px',
              borderRadius: '2px',
              border: '1px solid var(--color-ivory-border)',
            }}
          >
            SLA 99.98%
          </span>
        </div>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--color-steel)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Activity size={13} color="var(--color-petroleum)" />
          <span>EVENTOS HOY:</span>
          <span style={{ color: 'var(--color-petroleum)', fontWeight: 700 }}>
            {telemetryCount.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Main Visual: 3D Architectural Tech Core with Glassmorphism Overlays */}
      <div
        style={{
          position: 'relative',
          borderRadius: 'var(--radius-sm)',
          overflow: 'hidden',
          backgroundColor: 'var(--color-carbon)',
          border: '1px solid var(--color-carbon-border)',
          minHeight: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        {/* Architectural 3D Centerpiece Render */}
        <img
          src="/images/hero-architecture.jpg"
          alt="Núcleo de Arquitectura Tecnológica y Automatización Empresarial Perentoria"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.94,
            filter: 'contrast(1.05) brightness(0.96)',
          }}
          loading="eager"
        />

        {/* Subtle Gradient Veil for Readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(17, 19, 21, 0.2) 0%, rgba(17, 19, 21, 0.4) 45%, rgba(17, 19, 21, 0.88) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Top Floating Vision Capsule */}
        <div className="hero-top-capsule">
          <div
            style={{
              backgroundColor: 'rgba(17, 19, 21, 0.75)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: 'var(--radius-xs)',
              padding: '6px 12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: '#8CC4D8',
              letterSpacing: '0.08em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Shield size={12} color="#8CC4D8" />
            <span className="hero-top-badge-title">INFRAESTRUCTURA PROPIETARIA DE TU EMPRESA</span>
            <span className="tab-title-short" style={{ letterSpacing: '0.05em' }}>PROPIETARIA</span>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(36, 75, 90, 0.75)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(140, 196, 216, 0.25)',
              borderRadius: 'var(--radius-xs)',
              padding: '4px 10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.66rem',
              color: '#FFFFFF',
              fontWeight: 600,
            }}
          >
            LATENCIA: &lt; 4.2ms
          </div>
        </div>

        {/* Bottom Floating Active Vision Card */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            padding: 'clamp(14px, 2.5vw, 20px)',
            backgroundColor: 'rgba(17, 19, 21, 0.85)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'rgba(36, 75, 90, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(140, 196, 216, 0.3)',
                }}
              >
                {visionPillars[activeTab].icon}
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.1em',
                  color: '#8CC4D8',
                  fontWeight: 600,
                }}
              >
                {visionPillars[activeTab].badge}
              </span>
            </div>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-steel-light)',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                padding: '2px 8px',
                borderRadius: 'var(--radius-xs)',
              }}
            >
              {visionPillars[activeTab].metric}
            </span>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '6px',
            }}
          >
            {visionPillars[activeTab].title}
          </div>

          <p
            style={{
              fontSize: '0.84rem',
              color: 'var(--color-steel-light)',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            {visionPillars[activeTab].description}
          </p>
        </div>
      </div>

      {/* Strategic Vision Pillar Selector Buttons */}
      <div className="hero-tab-grid">
        {visionPillars.map((p, idx) => {
          const isSelected = activeTab === idx;
          return (
            <button
              key={p.id}
              onClick={() => setActiveTab(idx)}
              className="hero-tab-btn"
              style={{
                backgroundColor: isSelected ? 'var(--color-petroleum-subtle)' : '#FFFFFF',
                border: isSelected
                  ? '1px solid var(--color-petroleum)'
                  : '1px solid var(--color-ivory-border)',
                borderRadius: 'var(--radius-xs)',
                padding: '10px 8px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                minWidth: 0,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.64rem',
                    fontWeight: 700,
                    color: isSelected ? 'var(--color-petroleum)' : 'var(--color-steel)',
                  }}
                >
                  0{idx + 1}
                </span>
                {isSelected && <CheckCircle2 size={12} color="var(--color-petroleum)" />}
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: isSelected ? 'var(--color-carbon)' : 'var(--color-graphite)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: 'block',
                  width: '100%',
                }}
              >
                <span className="tab-title-full">{p.title.split(',')[0]}</span>
                <span className="tab-title-short">{p.shortTitle}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Enterprise Architecture Footer Strip */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '14px',
          paddingTop: '12px',
          borderTop: '1px solid var(--color-ivory-border)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--color-steel)',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <span>SINCRONIZACIÓN MULTI-SISTEMA:</span>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', color: 'var(--color-graphite)' }}>
          <span>CRM</span>
          <span>·</span>
          <span>ERP</span>
          <span>·</span>
          <span>PAGOS</span>
          <span>·</span>
          <span>WHATSAPP API</span>
          <span>·</span>
          <span>LEGADOS</span>
        </div>
      </div>
    </div>
  );
};
