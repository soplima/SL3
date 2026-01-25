import React from 'react';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>Bem-vindo à SL3 Consultoria</h2>
        </div>
        
        <div className="about-content">
          <div className="column">
            <p>Fundada em 1984, nossa empresa nasceu do compromisso em oferecer serviços contábeis e 
              jurídicos pautados pela ética, confiança e excelência técnica. Ao longo de mais de quatro 
              décadas, construímos uma trajetória sólida, acompanhando de perto a evolução da legislação 
              brasileira e as constantes transformações do ambiente empresarial.
            </p>

            <p>
              Atuamos de forma integrada nas áreas de contabilidade, direito tributário e societário, 
              oferecendo soluções completas, seguras e personalizadas para empresas e pessoas físicas. 
              Nossa experiência nos permite ir além do cumprimento das obrigações legais, auxiliando nossos 
              clientes na tomada de decisões estratégicas, na organização financeira e na eficiência fiscal 
              de seus negócios.

              </p>
            
            <a href="#contact" className="btn-consult">
              Agende uma Consulta
            </a>
          </div>
          
          <div className="column">
            <p>Como empresa familiar, valorizamos relações de longo prazo, atendimento próximo e 
              transparente, e o profundo entendimento das necessidades de cada cliente. Aliamos tradição e 
              inovação, combinando conhecimento técnico consolidado com atualização constante e uso de 
              práticas modernas.
            </p>

            <br />
            <p>
              Nosso propósito é ser um parceiro confiável e estratégico, contribuindo de forma 
              consistente para a sustentabilidade, o crescimento e a segurança jurídica dos nossos 
              clientes. Atuamos com responsabilidade, clareza e comprometimento, oferecendo orientação 
              técnica sólida e soluções que promovem tranquilidade, previsibilidade e confiança nas 
              decisões empresariais e patrimoniais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 