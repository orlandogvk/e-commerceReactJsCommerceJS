import "./style.css";

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className="footer">
      <p>
        Todos &copy; los derechos reservados a DevOffice Shop {fullYear}
      </p>
    </footer>
  );
};

export default Footer;