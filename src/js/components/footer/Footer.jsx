import React from 'react';

const Footer = (props) => {
  return (
    <div className="footer">
      <a href="https://rs.school/" target="_blank"><img src="assets/rs-school-logo.svg" width="55" height="21"
        className="footer__logo" alt="" /></a>
      <a href="https://github.com/Helias17/" target="_blank" className="footer__link">Helias17</a>
      <img src="assets/icon-react.svg" width="21" height="21" alt="" />
    </div>
  );
}

export default Footer;