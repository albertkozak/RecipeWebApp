import React from "react";
import logo from "../images/logo3s.png";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p>© 2020 | Educational Purposes | BCIT SSD</p>
        <img src={logo} alt="footer-logo" />
      </div>
      <div>{/* <img src={logo} alt="footer-logo" /> */}</div>
    </footer>
  );
}

export default Footer;
