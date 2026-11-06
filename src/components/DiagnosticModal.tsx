import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    area: 'Ventas & CRM',
    teamSize: '5 a 15 personas',
    currentTools: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const areas = [
    { id: 'ventas', label: 'Ventas, CRM y Captación de Clientes' },
    { id: 'atencion', label: 'Atención al Cliente, WhatsApp & Agentes de Voz' },
    { id: 'finanzas', label: 'Facturación, Cobranza & Conciliación' },
    { id: 'operaciones', label: 'Inventarios, Logística & Despacho' },
    { id: 'software', label: 'Software a Medida & APIs Propietarias' },
  ];

  const teamSizes = ['1 a 5 personas', '5 a 15 personas', '15 a 50 personas', 'Más de 50 personas'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={resetAndClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '640px', padding: 'clamp(20px, 4vw, 36px)' }}
      >
        {/* Top Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
            borderBottom: '1px solid var(--color-ivory-border)',
            paddingBottom: '16px',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--color-petroleum)',
                fontWeight: 700,
                letterSpacing: '0.1em',
              }}
            >
              DIAGNÓSTICO ESTRATÉGICO DE OPERACIONES
            </span>
            <h3 style={{ fontSize: '1.4rem', marginTop: '4px' }}>
              {isSubmitted ? 'Diagnóstico Solicitado con Éxito' : 'Agenda tu Sesión con un Arquitecto de Sistemas'}
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            aria-label="Cerrar modal"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-steel)',
              padding: '4px',
            }}
          >
            <X size={22} />
          </button>
        </div>

        {isSubmitted ? (
          /* Confirmation Screen */
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-petroleum-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
              }}
            >
              <CheckCircle2 size={36} color="var(--color-petroleum)" />
            </div>

            <h3 style={{ fontSize: '1.45rem', marginBottom: '12px', color: 'var(--color-carbon)' }}>
              Hemos recibido los detalles de {formData.company || 'tu empresa'}
            </h3>

            <p style={{ fontSize: '0.98rem', color: 'var(--color-graphite)', marginBottom: '24px', lineHeight: 1.6 }}>
              Un consultor senior de Perentoria Automations & Consultoría analizará tus procesos y se pondrá en contacto en menos de 24 horas hábiles a través de <strong>{formData.email}</strong> o WhatsApp para coordinar la sesión técnica.
            </p>

            <div
              style={{
                backgroundColor: 'var(--color-ivory)',
                padding: '16px 20px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-ivory-border)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--color-graphite)',
                marginBottom: '28px',
                textAlign: 'left',
              }}
            >
              <div>· ÁREA IDENTIFICADA: {formData.area}</div>
              <div>· EQUIPO: {formData.teamSize}</div>
              <div>· CONFIDENCIALIDAD: Protocolo NDA Activo</div>
            </div>

            <button onClick={resetAndClose} className="btn btn-primary" style={{ width: '100%' }}>
              Entendido
            </button>
          </div>
        ) : (
          /* Multi-step Form */
          <div>
            {/* Progress Stepper */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '24px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--color-steel)',
                paddingBottom: '12px',
                borderBottom: '1px solid var(--color-ivory-border)',
              }}
            >
              <span style={{ color: step >= 1 ? 'var(--color-petroleum)' : 'inherit', fontWeight: step === 1 ? 700 : 500 }}>
                1. Área
              </span>
              <span style={{ color: 'var(--color-steel)' }}>➔</span>
              <span style={{ color: step >= 2 ? 'var(--color-petroleum)' : 'inherit', fontWeight: step === 2 ? 700 : 500 }}>
                2. Alcance & Sistemas
              </span>
              <span style={{ color: 'var(--color-steel)' }}>➔</span>
              <span style={{ color: step >= 3 ? 'var(--color-petroleum)' : 'inherit', fontWeight: step === 3 ? 700 : 500 }}>
                3. Contacto
              </span>
            </div>

            {/* Step 1: Area Selection */}
            {step === 1 && (
              <div>
                <p style={{ fontSize: '0.96rem', color: 'var(--color-graphite)', marginBottom: '18px' }}>
                  ¿Qué proceso o área de tu empresa presenta actualmente mayor carga de trabajo manual?
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {areas.map((a) => (
                    <label
                      key={a.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '14px 16px',
                        border: formData.area === a.label ? '1px solid var(--color-petroleum)' : '1px solid var(--color-ivory-border)',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: formData.area === a.label ? 'var(--color-petroleum-subtle)' : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      <input
                        type="radio"
                        name="area"
                        checked={formData.area === a.label}
                        onChange={() => setFormData({ ...formData, area: a.label })}
                        style={{ accentColor: 'var(--color-petroleum)' }}
                      />
                      <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-carbon)' }}>
                        {a.label}
                      </span>
                    </label>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button onClick={() => setStep(2)} className="btn btn-primary btn-sm">
                    <span>Siguiente</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Scale and current tools */}
            {step === 2 && (
              <div>
                <p style={{ fontSize: '0.96rem', color: 'var(--color-graphite)', marginBottom: '16px' }}>
                  ¿Cuántas personas en tu equipo participan de estos procesos actualmente?
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(130px, 100%), 1fr))',
                    gap: '10px',
                    marginBottom: '20px',
                  }}
                >
                  {teamSizes.map((size) => (
                    <label
                      key={size}
                      style={{
                        padding: '12px',
                        border: formData.teamSize === size ? '1px solid var(--color-petroleum)' : '1px solid var(--color-ivory-border)',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: formData.teamSize === size ? 'var(--color-petroleum-subtle)' : '#FFFFFF',
                        cursor: 'pointer',
                        textAlign: 'center',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--color-carbon)',
                        display: 'block',
                      }}
                    >
                      <input
                        type="radio"
                        name="teamSize"
                        checked={formData.teamSize === size}
                        onChange={() => setFormData({ ...formData, teamSize: size })}
                        style={{ display: 'none' }}
                      />
                      {size}
                    </label>
                  ))}
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      color: 'var(--color-graphite)',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Herramientas o plataformas actuales (Opcional):
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Excel, CRM actual, Facturación, WhatsApp..."
                    value={formData.currentTools}
                    onChange={(e) => setFormData({ ...formData, currentTools: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--color-ivory-border)',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button onClick={() => setStep(1)} className="btn btn-secondary btn-sm">
                    <ArrowLeft size={14} />
                    <span>Atrás</span>
                  </button>
                  <button onClick={() => setStep(3)} className="btn btn-primary btn-sm">
                    <span>Siguiente</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Corporate Contact Information */}
            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '14px', marginBottom: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-steel)', marginBottom: '4px' }}>
                      NOMBRE COMPLETO *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--color-ivory-border)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-steel)', marginBottom: '4px' }}>
                      EMPRESA *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nombre de empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--color-ivory-border)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '14px', marginBottom: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-steel)', marginBottom: '4px' }}>
                      EMAIL CORPORATIVO *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nombre@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--color-ivory-border)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-steel)', marginBottom: '4px' }}>
                      TELÉFONO / WHATSAPP *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+52 / +57 / +1 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--color-ivory-border)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '22px' }}>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-steel)', marginBottom: '4px' }}>
                    BREVE DESCRIPCIÓN DEL RETO (OPCIONAL)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Cuéntanos brevemente qué proceso te gustaría automatizar..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--color-ivory-border)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem', resize: 'none' }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <button type="button" onClick={() => setStep(2)} className="btn btn-secondary btn-sm">
                    <ArrowLeft size={14} />
                    <span>Atrás</span>
                  </button>
                  <button type="submit" className="btn btn-primary" style={{ flex: '1 1 auto', justifyContent: 'center' }}>
                    <span>Confirmar y agendar</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
