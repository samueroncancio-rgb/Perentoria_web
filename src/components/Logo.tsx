import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const isDarkSurface = variant === 'light';
  const primaryTextColor = isDarkSurface ? '#F5F5F2' : '#111315';
  const subtextColor = isDarkSurface ? '#A3A8AD' : '#858B91';
  const dividerColor = isDarkSurface ? 'rgba(245,245,242,0.2)' : 'rgba(17,19,21,0.2)';

  const dimensions = {
    sm: { height: 28, textScale: 0.8 },
    md: { height: 38, textScale: 1 },
    lg: { height: 50, textScale: 1.3 },
  }[size];

  return (
    <div
      className={`perentoria-logo ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size === 'sm' ? '12px' : size === 'lg' ? '20px' : '16px',
        userSelect: 'none',
        textDecoration: 'none',
      }}
    >
      {/* High-precision SVG Geometric P Mark */}
      <svg
        height={dimensions.height}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Top fold & loop of the P */}
        <path
          d="M 16 26 L 82 26 C 97 26 108 37 108 52 C 108 67 97 78 82 78 L 58 78 L 44 64 L 78 64 C 85 64 90 59 90 52 C 90 45 85 40 78 40 L 30 40 L 16 26 Z"
          fill={isDarkSurface ? '#F5F5F2' : '#111315'}
        />
        {/* Inner Petroleum Blue Fold Facet (Brand Accent) */}
        <path
          d="M 16 44 L 44 64 L 30 78 L 16 64 Z"
          fill="#244B5A"
        />
        {/* Lower Left Stem */}
        <path
          d="M 16 64 L 16 100 L 30 86 L 30 64 Z"
          fill={isDarkSurface ? '#70777E' : '#292D32'}
        />
      </svg>

      {/* Elegant Vertical Divider */}
      <div
        style={{
          width: '1.5px',
          height: dimensions.height * 0.9,
          backgroundColor: dividerColor,
          flexShrink: 0,
        }}
      />

      {/* Typography with authentic chevron 'A' */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          lineHeight: 1.1,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-sans, "Plus Jakarta Sans", sans-serif)',
            fontSize: `${18 * dimensions.textScale}px`,
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: primaryTextColor,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span>PERENTORI</span>
          {/* Custom Chevron 'A' without crossbar matching the authentic logo */}
          <svg
            width={14 * dimensions.textScale}
            height={16 * dimensions.textScale}
            viewBox="0 0 16 18"
            fill="none"
            style={{ marginLeft: '1px' }}
          >
            <path
              d="M 8 2 L 15 17 H 11.5 L 8 8.5 L 4.5 17 H 1 L 8 2 Z"
              fill={primaryTextColor}
            />
          </svg>
        </div>

        {showSubtitle && (
          <div
            style={{
              fontFamily: 'var(--font-sans, "Plus Jakarta Sans", sans-serif)',
              fontSize: `${(size === 'sm' ? 7.2 : size === 'md' ? 8 : 10.5) * dimensions.textScale}px`,
              fontWeight: 600,
              letterSpacing: size === 'sm' ? '0.18em' : '0.19em',
              color: subtextColor,
              marginTop: '4px',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            AUTOMATIONS & CONSULTORÍA
          </div>
        )}
      </div>
    </div>
  );
};
