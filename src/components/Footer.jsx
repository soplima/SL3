import Logo from "../assets/logo_vertical.png";

const Footer = () => {
  return (
    <footer className="footer-site" id="contact">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-logo">
          <img src={Logo} alt="SL3 Consultoria" />
        </div>

        {/* Contato */}
        <div className="footer-col">
          <p>contato@sl3consult.com.br</p>
          <p>(11) 5873-5464</p>
        </div>

        {/* Endereço */}
        <div className="footer-col">
          <p>Rua Professora Eunice Bechara De Oliveira, 659</p>
          <p>São Paulo, SP</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>SL3 Consultoria © 2026 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
