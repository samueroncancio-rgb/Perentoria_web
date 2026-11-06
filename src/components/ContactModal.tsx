import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '540px', padding: 'clamp(20px, 4vw, 36px)' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
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
              CANAL DIRECTO
            </span>
            <h3 style={{ fontSize: '1.4rem', marginTop: '4px' }}>Hablar con Perentoria</h3>
          </div>
          <button
            onClick={handleClose}
            aria-label="Cerrar modal"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--color-steel)' }}
          >
            <X size={22} />
          </button>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <CheckCircle2 size={42} color="var(--color-petroleum)" style={{ margin: '0 auto 16px auto' }} />
            <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Mensaje Recibido</h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-graphite)', marginBottom: '24px' }}>
              Un especialista técnico de Perentoria Automations & Consultoría se pondrá en contacto a la brevedad.
            </p>
            <button onClick={handleClose} className="btn btn-primary" style={{ width: '100%' }}>
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-steel)', marginBottom: '4px' }}>
                NOMBRE Y APELLIDO *
              </label>
              <input
                type="text"
                required
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--color-ivory-border)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '12px', marginBottom: '14px' }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-steel)', marginBottom: '4px' }}>
                  EMAIL CORPORATIVO *
                </label>
                <input
                  type="email"
                  required
                  placeholder="nombre@empresa.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                  placeholder="Empresa"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--color-ivory-border)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-steel)', marginBottom: '4px' }}>
                ¿CÓMO PODEMOS AYUDARTE? *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Describe los procesos que deseas conectar o automatizar..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--color-ivory-border)', borderRadius: 'var(--radius-xs)', fontSize: '0.88rem', resize: 'none' }}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              <span>Enviar consulta a consultores</span>
              <Send size={15} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
