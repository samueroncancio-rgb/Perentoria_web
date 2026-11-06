import React from 'react';
import { Logo } from './Logo';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenDiagnostic: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDiagnostic, onOpenContact }) => {
  return (
    <footer
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--color-ivory-border)',
        paddingTop: '64px',
        paddingBottom: '48px',
      }}
    >
      <div className="container">
        {/* Main Footer Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '380px' }}>
            <Logo variant="dark" size="md" />
            <p
              style={{
                marginTop: '18px',
                fontSize: '0.94rem',
                color: 'var(--color-graphite)',
                lineHeight: 1.6,
              }}
            >
              Arquitectura tecnológica y automatización inteligente para empresas.
            </p>
            <div
              style={{
                marginTop: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--color-petroleum)',
                backgroundColor: 'var(--color-petroleum-subtle)',
                padding: '4px 10px',
                borderRadius: 'var(--radius-xs)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-petroleum)',
                }}
              />
              <span>SISTEMAS OPERATIVOS · SLA 99.98%</span>
            </div>
          </div>

          {/* Links matching Section 16 */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--color-carbon)',
                letterSpacing: '0.1em',
                marginBottom: '16px',
                textTransform: 'uppercase',
              }}
            >
              Navegación
            </div>
            <ul
              style={{
                listStyle: 'none',
                paddingLeft: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <li>
                <a
                  href="#soluciones"
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    color: 'var(--color-graphite)',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-petroleum)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-graphite)')}
                >
                  Soluciones
                </a>
              </li>
              <li>
                <a
                  href="#soluciones"
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    color: 'var(--color-graphite)',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-petroleum)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-graphite)')}
                >
                  Automatización
                </a>
              </li>
              <li>
                <a
                  href="#soluciones"
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    color: 'var(--color-graphite)',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-petroleum)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-graphite)')}
                >
                  Agentes de voz
                </a>
              </li>
              <li>
                <a
                  href="#soluciones"
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    color: 'var(--color-graphite)',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-petroleum)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-graphite)')}
                >
                  Chatbots
                </a>
              </li>
              <li>
                <a
                  href="#software-a-medida"
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    color: 'var(--color-graphite)',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-petroleum)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-graphite)')}
                >
                  Software a medida
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenDiagnostic}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    fontSize: '0.9rem',
                    color: 'var(--color-petroleum)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>Agendar diagnóstico</span>
                  <ArrowUpRight size={14} />
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    fontSize: '0.9rem',
                    color: 'var(--color-graphite)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>Contacto</span>
                  <ArrowUpRight size={14} />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Hairline & Legal */}
        <div
          style={{
            borderTop: '1px solid var(--color-ivory-border)',
            paddingTop: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.8rem',
            color: 'var(--color-steel)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div>
            © {new Date().getFullYear()} PERENTORIA AUTOMATIONS & CONSULTORÍA. TODOS LOS DERECHOS RESERVADOS.
          </div>
          <div>
            INGENIERÍA & CONSULTORÍA TECNOLÓGICA PREMIUM
          </div>
        </div>
      </div>
    </footer>
  );
};
