import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionsSection } from './components/SolutionsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ImpactSection } from './components/ImpactSection';
import { UseCasesSection } from './components/UseCasesSection';
import { TechnologySection } from './components/TechnologySection';
import { CustomSoftwareSection } from './components/CustomSoftwareSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { DiagnosticModal } from './components/DiagnosticModal';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenDiagnostic = () => setIsDiagnosticOpen(true);
  const handleCloseDiagnostic = () => setIsDiagnosticOpen(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <>
      {/* 17. Navegación Fija - Directamente anclada al viewport */}
      <Navbar onOpenDiagnostic={handleOpenDiagnostic} />

      <div className="perentoria-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '100%' }}>
        {/* Main Content Layout */}
        <main style={{ flex: 1, width: '100%', maxWidth: '100%' }}>
          {/* 7. Hero Section */}
          <Hero onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 8. Sección de Problema */}
        <ProblemSection onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 9. Sección de Soluciones */}
        <SolutionsSection onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 10. Sección Cómo Funciona */}
        <HowItWorksSection />

        {/* 11. Sección de Impacto */}
        <ImpactSection onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 12. Sección de Casos de Uso */}
        <UseCasesSection />

        {/* 13. Sección de Tecnología */}
        <TechnologySection />

        {/* 14. Sección Software a Medida */}
        <CustomSoftwareSection onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 15. CTA Final */}
        <FinalCtaSection
          onOpenDiagnostic={handleOpenDiagnostic}
          onOpenContact={handleOpenContact}
        />
      </main>

      {/* 16. Footer */}
      <Footer
        onOpenDiagnostic={handleOpenDiagnostic}
        onOpenContact={handleOpenContact}
      />

      {/* Modales Interactivos */}
      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={handleCloseDiagnostic}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
      />
    </div>
    </>
  );
};

export default App;
