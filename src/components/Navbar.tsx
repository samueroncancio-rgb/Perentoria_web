import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenDiagnostic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDiagnostic }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Impacto', href: '#impacto' },
    { label: 'Casos de uso', href: '#casos-de-uso' },
    { label: 'Tecnología', href: '#tecnologia' },
    { label: 'Software', href: '#software-a-medida' },
  ];

  return (
    <>
      <style>{`
        .site-fixed-header {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          z-index: 100 !important;
          transform: none !important;
          -webkit-transform: none !important;
        }
        .desktop-nav {
          display: flex !important;
          align-items: center;
          gap: clamp(8px, 1.1vw, 20px);
        }
        .desktop-cta {
          display: inline-flex !important;
        }
        .mobile-toggle {
          display: none !important;
        }
        @media (max-width: 1100px) and (min-width: 961px) {
          .desktop-nav {
            gap: 10px !important;
          }
          .nav-link {
            font-size: 0.8rem !important;
            padding: 4px 1px !important;
          }
          .desktop-cta {
            padding: 8px 14px !important;
            font-size: 0.82rem !important;
          }
        }
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        .nav-link {
          font-family: var(--font-sans);
          font-size: clamp(0.78rem, 0.88vw, 0.86rem);
          font-weight: 500;
          color: var(--color-graphite);
          text-decoration: none;
          white-space: nowrap;
          padding: 4px 2px;
          transition: color var(--transition-fast);
        }
        .nav-link:hover { color: var(--color-petroleum); }
      `}</style>

      <header
        className="site-fixed-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: isScrolled
            ? 'rgba(245, 245, 242, 0.98)'
            : 'rgba(245, 245, 242, 0.94)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled
            ? '1px solid var(--color-ivory-border)'
            : '1px solid rgba(229, 229, 224, 0.6)',
          boxShadow: isScrolled
            ? '0 4px 20px rgba(0, 0, 0, 0.08)'
            : 'none',
          transition: 'background-color 200ms ease, box-shadow 200ms ease, border-color 200ms ease',
          height: 'var(--header-height)',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            width: '100%',
          }}
        >
          <a href="#" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <Logo variant="dark" size="sm" />
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            <button
              onClick={onOpenDiagnostic}
              className="btn btn-primary btn-sm desktop-cta"
            >
              <span>Agendar diagnóstico</span>
              <ArrowUpRight size={14} />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Abrir menú"
              style={{
                background: 'transparent',
                border: '1px solid var(--color-ivory-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '8px',
                cursor: 'pointer',
                color: 'var(--color-carbon)',
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--color-ivory)',
            zIndex: 99,
            padding: '32px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--color-ivory-border)',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--color-steel)',
                letterSpacing: '0.1em',
                marginBottom: '20px',
                textTransform: 'uppercase',
              }}
            >
              Navegación
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: 'var(--color-carbon)',
                  textDecoration: 'none',
                  padding: '14px 0',
                  borderBottom: '1px solid var(--color-ivory-border)',
                  display: 'block',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ paddingTop: '28px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnostic();
              }}
              className="btn btn-primary"
              style={{ width: '100%', padding: '16px', justifyContent: 'center' }}
            >
              <span>Agendar diagnóstico</span>
              <ArrowUpRight size={16} />
            </button>
            <div
              style={{
                textAlign: 'center',
                marginTop: '16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--color-steel)',
                letterSpacing: '0.05em',
              }}
            >
              PERENTORIA AUTOMATIONS & CONSULTORÍA
            </div>
          </div>
        </div>
      )}
    </>
  );
};
