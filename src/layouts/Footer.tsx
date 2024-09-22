import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <h1 className="footer__logo">react пицца © 2024</h1>
      <div className="footer__block">
        <p className="footer__text">ООО “Франчайзинг”</p>
        <p className="footer__text">ОГРН 1111111111111, ИНН 1111111111</p>
        <p className="footer__text">111111, г. Придумано, д. 111</p>
      </div>
    </footer>
  );
};

export default Footer;
