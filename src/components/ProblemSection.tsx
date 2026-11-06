import React, { useState } from 'react';
import { 
  Copy, 
  MessageSquare, 
  CalendarCheck, 
  Receipt, 
  UserCheck, 
  RefreshCw, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';

interface ProblemSectionProps {
  onOpenDiagnostic: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenDiagnostic }) => {
  const [teamSize, setTeamSize] = useState(12);
  const hoursPerPersonWeekly = 9; // average manual repetitive hours
  const monthlyHoursWasted = teamSize * hoursPerPersonWeekly * 4;

  const problemItems = [
    {
      icon: <Copy size={22} color="var(--color-petroleum)" />,
      tag: '01 · FRAGMENTACIÓN',
      title: 'Copiar información entre plataformas',
      description: 'El personal pierde horas trasladando datos entre correos, hojas de cálculo, ERP y CRM, generando errores de transcripción y cuellos de botella.',
    },
    {
      icon: <MessageSquare size={22} color="var(--color-petroleum)" />,
      tag: '02 · ATENCIÓN MANUAL',
      title: 'Responder manualmente mensajes',
      description: 'Prospectos esperando horas por una cotización o respuesta estándar, provocando que se enfríen o compren a un competidor más ágil.',
    },
    {
      icon: <CalendarCheck size={22} color="var(--color-petroleum)" />,
      tag: '03 · AGENDA DISPERSA',
      title: 'Confirmar citas',
      description: 'Llamadas repetitivas y chats de ida y vuelta para agendar, reprogramar o recordar sesiones, ocupando tiempo valioso del equipo.',
    },
    {
      icon: <Receipt size={22} color="var(--color-petroleum)" />,
      tag: '04 · ADMINISTRACIÓN',
      title: 'Emitir facturas',
      description: 'Conciliación manual de comprobantes, validación de cobros y facturación individual que retrasa los cierres contables mensuales.',
    },
    {
      icon: <UserCheck size={22} color="var(--color-petroleum)" />,
      tag: '05 · VENTAS',
      title: 'Hacer seguimiento a clientes',
      description: 'Oportunidades de venta que se diluyen porque no existe un flujo automático de reactivación, recordatorios y nutrición comercial.',
    },
    {
      icon: <RefreshCw size={22} color="var(--color-petroleum)" />,
      tag: '06 · DISCREPANCIA',
      title: 'Actualizar información en diferentes sistemas',
      description: 'Operar a ciegas por falta de sincronización en tiempo real entre inventarios, pasarelas de pago, bases de datos y dashboards ejecutivos.',
    },
  ];

  return (
    <section
      id="problema"
      className="section"
      style={{
        backgroundColor: '#FCFCFA',
        borderTop: '1px solid var(--color-ivory-border)',
        borderBottom: '1px solid var(--color-ivory-border)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '56px' }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>EL COSTE INVISIBLE DE LA OPERACIÓN MANUAL</span>
          </div>

          <h2 style={{ marginBottom: '20px' }}>
            Tu equipo no debería perder tiempo haciendo trabajo que un sistema puede hacer.
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-graphite)' }}>
            Cuando el crecimiento de tu empresa depende de sumar más personas para realizar tareas mecánicas, la operación se vuelve lenta, costosa y propensa a fallas humanas.
          </p>
        </div>

        {/* 6 Problem Visual Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {problemItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-ivory-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '30px 26px',
                transition: 'all var(--transition-fast)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-petroleum)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-ivory-border)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '18px',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--color-petroleum-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--color-steel)',
                      fontWeight: 600,
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.18rem',
                    marginBottom: '12px',
                    color: 'var(--color-carbon)',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--color-graphite)',
                    lineHeight: 1.55,
                  }}
                >
                  {item.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: '20px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--color-ivory-border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: 'var(--color-steel)',
                }}
              >
                <AlertCircle size={13} color="var(--color-steel)" />
                <span>Impacto: Fricción operativa directa</span>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Friction Calculator Widget */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--color-ivory-border)',
            borderRadius: 'var(--radius-md)',
            padding: 'clamp(20px, 4vw, 36px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(20px, 4vw, 36px)',
            alignItems: 'center',
            width: '100%',
            maxWidth: '100%',
            overflow: 'hidden',
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: '12px' }}>
              <span className="eyebrow-dot" />
              <span>ESTIMADOR DE FRICCIÓN MANUAL</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>
              ¿Cuántas horas pierde tu equipo al mes?
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-graphite)', marginBottom: '20px' }}>
              Ajusta el número de personas en tu equipo operativo, comercial o administrativo para calcular las horas absorbidas por tareas rutinarias:
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <input
                type="range"
                min="3"
                max="80"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                style={{
                  flex: 1,
                  accentColor: 'var(--color-petroleum)',
                  cursor: 'pointer',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: 'var(--color-carbon)',
                  minWidth: '90px',
                  textAlign: 'right',
                }}
              >
                {teamSize} personas
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'var(--color-ivory)',
              padding: '28px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-ivory-border)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-steel)',
                marginBottom: '8px',
              }}
            >
              TIEMPO DEDICADO A PROCESOS MANUALES
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'var(--color-carbon)',
                lineHeight: 1.1,
                marginBottom: '8px',
              }}
            >
              ~{monthlyHoursWasted.toLocaleString()} hrs <span style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--color-steel)' }}>/ mes</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-graphite)', marginBottom: '18px' }}>
              Tiempo recuperable mediante arquitectura de automatización e integración directa entre tus sistemas.
            </p>
            <button
              onClick={onOpenDiagnostic}
              className="btn btn-primary btn-sm"
              style={{ alignSelf: 'flex-start' }}
            >
              <span>Diagnosticar mi operación</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
