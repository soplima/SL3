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
            <p>A SL3 Consultoria consolidou-se como um pilar de excelência 
              estratégica ao longo de sua trajetória, oferecendo aconselhamento 
              especializado e soluções sob medida para organizações que buscam 
              crescimento sustentável, eficiência operacional e decisões mais 
              seguras. Atuamos de forma integrada em diferentes áreas estratégicas, 
              sempre com foco na geração de valor real para nossos clientes. 
              </p>
            
            <a href="#contact" className="btn-consult">
              Agende uma Consulta
            </a>
          </div>
          
          <div className="column">
            <p>Combinamos décadas de experiência profissional com uma visão 
              analítica e atualizada das dinâmicas econômicas, regulatórias e 
              corporativas. Nossa equipe é formada por especialistas com sólida 
              formação técnica e histórico comprovado de atuação em ambientes 
              corporativos exigentes, nos quais precisão, ética e visão estratégica 
              são essenciais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 