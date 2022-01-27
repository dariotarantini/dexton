import './PageSection.scss';
import React from 'react';

interface PageSectionProps {
  title?: string;
  children?: React.ReactNode;
}

function PageSection({
  children,
  title,
}: PageSectionProps) {
  return (
    <section className="page-section">
      {title && <h4 className="page-section__title">{title}</h4>}

      <div className="PageSection-content">
        {children}
      </div>
    </section>
  );
}

export default PageSection;
