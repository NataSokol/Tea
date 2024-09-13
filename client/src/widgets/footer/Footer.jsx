import React from 'react';
import '../footer/Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <h2>TeaStore</h2>
          <p>
            &copy; {new Date().getFullYear()} TeaStore. Все права точно защищены!
          </p>
        </div>
        <div className='footer-right'>
          <a href='https://github.com/NataSokol' className='footer-link'>TeamLead Nataha</a>
          <a href='https://github.com/sadmaloy' className='footer-link'>Rostik</a>
          <a href='https://github.com/excomunicad0' className='footer-link'>Egorius</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
