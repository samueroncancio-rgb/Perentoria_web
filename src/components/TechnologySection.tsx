import React, { useState } from 'react';
import { 
  ArrowLeftRight, 
  ShieldCheck, 
  Server,
  FileCode2,
  Lock
} from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const [activeSystem, setActiveSystem] = useState<string | null>(null);

  // The 11 exact systems required without inventing unauthorized third-party brand logos
  const systems = [
    { name: 'CRM', protocol: 'Bidireccional · Webhooks', type: 'Comercial' },
    { name: 'Facturación', protocol: 'Emisión & Validación XML', type: 'Fiscal' },
    { name: 'Pasarelas de pago', protocol: 'Webhooks & Conciliación', type: 'Finanzas' },
    { name: 'Inventarios', protocol: 'Sincronización en Tiempo Real', type: 'Logística' },
    { name: 'Email', protocol: 'SMTP & Transaccional', type: 'Comunicación' },
    { name: 'WhatsApp', protocol: 'API Oficial Segura', type: 'Canal Directo' },
    { name: 'Calendarios', protocol: 'iCal & Sync Bidireccional', type: 'Planificación' },
    { name: 'APIs', protocol: 'REST / GraphQL / gRPC', type: 'Intercambio' },
    { name: 'Bases de datos', protocol: 'SQL / NoSQL / Vectoriales', type: 'Almacenamiento' },
    { name: 'Sistemas legados', protocol: 'Middleware & Conectores Seguros', type: 'Infraestructura' },
    { name: 'Dashboards', protocol: 'Telemetría & KPIs en Vivo', type: 'Visualización' },
  ];

  return (
    <section
      id="tecnologia"
      className="section"
      style={{
        backgroundColor: '#FCFCFA',
        borderTop: '1px solid var(--color-ivory-border)',
        borderBottom: '1px solid var(--color-ivory-border)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '56px' }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>INTEROPERABILIDAD & CAPA DE INTEGRACIÓN</span>
          </div>

          <h2 style={{ marginBottom: '20px' }}>
            CONECTAMOS LO QUE YA TIENES.
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-graphite)' }}>
            No necesitas cambiar los programas donde opera tu negocio. Diseñamos la infraestructura que los enlaza de manera estable, segura y sin fricciones.
          </p>
        </div>

        {/* Central Architecture Integration Topology Diagram */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--color-ivory-border)',
            borderRadius: 'var(--radius-md)',
            padding: '40px 32px',
            boxShadow: 'var(--shadow-card)',
            marginBottom: '36px',
          }}
        >
          {/* Middle Hub Diagram: Systems -> Perentoria Orchestrator -> Unified Operation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '32px',
              paddingBottom: '20px',
              borderBottom: '1px solid var(--color-ivory-border)',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--color-petroleum)',
                  letterSpacing: '0.08em',
                }}
              >
                MATRIZ DE CONECTIVIDAD UNIVERSAL
              </span>
              <h3 style={{ fontSize: '1.35rem', marginTop: '4px', color: 'var(--color-carbon)' }}>
                Ecosistema de Plataformas Empresariales
              </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={18} color="var(--color-petroleum)" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  color: 'var(--color-graphite)',
                }}
              >
                PROTOCOLO DE ENCRIPTACIÓN TLS 1.3 & ZERO TRUST
              </span>
            </div>
          </div>

          {/* Grid of the 11 Required Connected Systems */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))',
              gap: '16px',
            }}
          >
            {systems.map((sys, idx) => {
              const isHovered = activeSystem === sys.name;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveSystem(sys.name)}
                  onMouseLeave={() => setActiveSystem(null)}
                  style={{
                    backgroundColor: isHovered ? 'var(--color-petroleum-subtle)' : 'var(--color-ivory)',
                    border: isHovered
                      ? '1px solid var(--color-petroleum)'
                      : '1px solid var(--color-ivory-border)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '20px 18px',
                    transition: 'all var(--transition-fast)',
                    cursor: 'default',
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
                        fontSize: '0.68rem',
                        color: 'var(--color-steel)',
                        fontWeight: 600,
                      }}
                    >
                      {sys.type.toUpperCase()}
                    </span>
                    <ArrowLeftRight size={14} color={isHovered ? 'var(--color-petroleum)' : 'var(--color-steel)'} />
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--color-carbon)',
                      marginBottom: '6px',
                    }}
                  >
                    {sys.name}
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      color: isHovered ? 'var(--color-petroleum)' : 'var(--color-steel)',
                    }}
                  >
                    {sys.protocol}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Integration Capability Highlights */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
            gap: '20px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-ivory-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '24px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <Server size={18} color="var(--color-petroleum)" />
              <h4 style={{ fontSize: '1.05rem', color: 'var(--color-carbon)' }}>Sin Migraciones Forzadas</h4>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-graphite)' }}>
              Aprovechamos la inversión tecnológica que tu empresa ya realizó. Conectamos tus herramientas actuales mediante capas de middleware seguras.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-ivory-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '24px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <Lock size={18} color="var(--color-petroleum)" />
              <h4 style={{ fontSize: '1.05rem', color: 'var(--color-carbon)' }}>Seguridad y Trazabilidad</h4>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-graphite)' }}>
              Cada transacción, sincronización y evento queda registrado en logs inmutables con control estricto de accesos y credenciales tokenizadas.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-ivory-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '24px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <FileCode2 size={18} color="var(--color-petroleum)" />
              <h4 style={{ fontSize: '1.05rem', color: 'var(--color-carbon)' }}>Resiliencia y Reintentos</h4>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-graphite)' }}>
              Manejo de errores por diseño. Si una API externa experimenta intermitencia, nuestro sistema reintenta con backoff exponencial sin pérdida de datos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
