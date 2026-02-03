import logo from '../assets/logo_horizontal.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav className="nav">
        <a href="#services">Serviços</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
};

export default Header;