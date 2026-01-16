import React from "react";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        
        <div className="services-header">
          <h3 className="services-title-small">O Que Oferecemos</h3>
        </div>

        <div className="services-content">
          <ul className="services-list">
            <li className="service-item">Contabilidade</li>
            <li className="service-item">Auditoria</li>
            <li className="service-item">Recursos Humanos</li>
            <li className="service-item">Departamento Pessoal</li>
            <li className="service-item">Consultoria Fiscal</li>
            <li className="service-item">Direito Empresarial</li>
            <li className="service-item">Direito Societário</li>
          </ul>

          <div className="services-button-wrapper">
            <a href="#contact" className="btn-services"> Serviços </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;